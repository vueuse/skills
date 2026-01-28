import type { Linter } from 'eslint'
import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'skills/**/*.md',
  ],
}) as Linter.Config
