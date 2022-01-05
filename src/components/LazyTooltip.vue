<script lang="ts">
import type { ExtractPropTypes } from 'vue-demi'
import { defineComponent, nextTick, onMounted, ref, watch } from 'vue-demi'

const lazyTooltipProps = {
  text: {
    type: String,
    required: true,
  },
} as const

export type LazyTooltipProps = ExtractPropTypes<typeof lazyTooltipProps>

export default defineComponent({
  name: 'LazyTooltip',
  props: lazyTooltipProps,
  setup(props) {
    const lazyTooltip = ref<HTMLDivElement | null>(null)
    const showTooltip = ref(false)

    watch(() => props.text, async () => {
      showTooltip.value = false
      await nextTick()
      showTooltip.value = isTooltip(lazyTooltip.value!)
    })

    onMounted(() => {
      showTooltip.value = isTooltip(lazyTooltip.value!)
    })

    function isTooltip(element: HTMLElement) {
      const tempNode = element.cloneNode(true) as HTMLElement
      tempNode.style.overflow = 'auto'
      const parentNode = element.parentNode
      if (!parentNode)
        return false
      // It must be loaded to the parent element, not document.body
      parentNode.appendChild(tempNode)
      const showTootip = hasHorizontalScrollbar(tempNode)
      parentNode.removeChild(tempNode)
      return showTootip
    }

    function hasHorizontalScrollbar(element: HTMLElement) {
      return element.scrollWidth > element.clientWidth
    }

    return {
      lazyTooltip,
      showTooltip,
    }
  },
})
</script>

<template>
  <div ref="lazyTooltip">
    <slot v-if="showTooltip" />
    <span v-else>{{ text }}</span>
  </div>
</template>
