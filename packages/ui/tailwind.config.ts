import type { Config } from 'tailwindcss'
import baseConfig from '@ear-hub/design-system/tailwind.config'

export default {
  ...baseConfig,
  content: ['./src/**/*.{ts,tsx}'],
} satisfies Config
