## Lazy Tooltip

> Starter template to build component library for vue.js 2-3 base on [vitesse-lite](https://github.com/antfu/vitesse-lite).

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/kazeful/lazy-tooltip/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit kazeful/lazy-tooltip my-component-library
cd my-component-library
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Usage

### Setup

Vue 3

```js
import { createApp } from 'vue'
import LazyTooltip from '@kazeful/lazy-tooltip'
import App from './app.vue'

const app = createApp(App)
app.use(LazyTooltip)
```

Vue 2

```js
import Vue from 'vue'
import CompositionAPI from '@vue/composition-api'
import LazyTooltip from '@kazeful/lazy-tooltip'

Vue.use(CompositionAPI)
Vue.use(LazyTooltip)
```

### Basic Usage

```html
<template>
  <LazyTooltip max-w-20 :text="text">
    <el-tooltip
      effect="dark"
      :content="text"
      placement="top-start"
    >
      <span inline-block w-full truncate>{{ text }}</span>
    </el-tooltip>
  </LazyTooltip>
</template>
```
