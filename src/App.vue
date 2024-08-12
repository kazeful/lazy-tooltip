<script setup>
const text = ref('LazyTooltipLazyTooltipLazyTooltip')
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <LazyTooltip max-w-20 :text="text">
      <el-tooltip
        effect="dark"
        :content="text"
        placement="top-start"
      >
        <span inline-block w-full truncate>{{ text }}</span>
      </el-tooltip>
    </LazyTooltip>
    <TheFooter />
  </main>
</template>
