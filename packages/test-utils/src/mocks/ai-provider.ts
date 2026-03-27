import { vi } from 'vitest'

export function createMockAIProvider() {
  return {
    generateText: vi.fn().mockResolvedValue('Mock AI response'),
    streamText: vi.fn().mockImplementation(async function* () {
      yield 'Mock'
      yield ' streaming'
      yield ' response'
    }),
  }
}
