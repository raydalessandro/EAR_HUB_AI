export interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export interface GenerateTextParams {
  model: string
  messages: Message[]
  temperature?: number
  maxTokens?: number
}

export interface GenerateTextResult {
  text: string
  usage: {
    promptTokens: number
    completionTokens: number
  }
}

export interface StreamTextParams extends GenerateTextParams {}

export interface AIProvider {
  generateText(params: GenerateTextParams): Promise<GenerateTextResult>
  streamText(params: StreamTextParams): AsyncIterable<string>
}
