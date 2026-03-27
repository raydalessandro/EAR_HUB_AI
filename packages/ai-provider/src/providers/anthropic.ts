import Anthropic from '@anthropic-ai/sdk'
import type { AIProvider, GenerateTextParams, GenerateTextResult, StreamTextParams } from '../types'

export class AnthropicProvider implements AIProvider {
  private client: Anthropic

  constructor(apiKey: string) {
    this.client = new Anthropic({ apiKey })
  }

  async generateText(params: GenerateTextParams): Promise<GenerateTextResult> {
    const response = await this.client.messages.create({
      model: params.model,
      max_tokens: params.maxTokens ?? 1024,
      temperature: params.temperature ?? 0.7,
      messages: params.messages.map(msg => ({
        role: msg.role === 'system' ? 'user' : msg.role,
        content: msg.content,
      })),
    })

    const textContent = response.content.find(c => c.type === 'text')

    return {
      text: textContent?.type === 'text' ? textContent.text : '',
      usage: {
        promptTokens: response.usage.input_tokens,
        completionTokens: response.usage.output_tokens,
      },
    }
  }

  async *streamText(params: StreamTextParams): AsyncIterable<string> {
    const stream = await this.client.messages.stream({
      model: params.model,
      max_tokens: params.maxTokens ?? 1024,
      temperature: params.temperature ?? 0.7,
      messages: params.messages.map(msg => ({
        role: msg.role === 'system' ? 'user' : msg.role,
        content: msg.content,
      })),
    })

    for await (const chunk of stream) {
      if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
        yield chunk.delta.text
      }
    }
  }
}
