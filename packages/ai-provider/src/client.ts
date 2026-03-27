import type { AIProvider } from './types'
import { AnthropicProvider } from './providers/anthropic'
import { DeepSeekProvider } from './providers/deepseek'

export type ProviderType = 'anthropic' | 'deepseek'

export function createAIProvider(provider: ProviderType, apiKey: string): AIProvider {
  switch (provider) {
    case 'anthropic':
      return new AnthropicProvider(apiKey)
    case 'deepseek':
      return new DeepSeekProvider(apiKey)
    default:
      throw new Error(`Unknown provider: ${provider}`)
  }
}
