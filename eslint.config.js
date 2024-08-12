// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  // TypeScript and Vue are auto-detected, you can also explicitly enable them:
  typescript: true,
  vue: true,

  // Disable jsonc and yaml support
  // jsonc: false,
  yaml: false,
  // toml: false,

  unocss: true,
})
