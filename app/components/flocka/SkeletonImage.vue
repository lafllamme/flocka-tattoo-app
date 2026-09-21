<script setup lang="ts">
import { onMounted, shallowRef, watch } from 'vue'
import FlockaMediaSkeleton from './MediaSkeleton.vue'

const props = withDefaults(defineProps<{
  alt: string
  decoding?: 'async' | 'auto' | 'sync'
  fetchpriority?: 'auto' | 'high' | 'low'
  loading?: 'eager' | 'lazy'
  src: string
}>(), {
  decoding: 'async',
  fetchpriority: 'auto',
  loading: 'lazy',
})

const image = shallowRef<HTMLImageElement | null>(null)
const isLoaded = shallowRef(false)
const hasError = shallowRef(false)

function handleLoad() {
  isLoaded.value = true
  hasError.value = false
}

function handleError() {
  isLoaded.value = false
  hasError.value = true
}

function syncCachedImage() {
  if (!image.value?.complete)
    return

  if (image.value.naturalWidth > 0)
    handleLoad()
  else
    handleError()
}

watch(() => props.src, () => {
  isLoaded.value = false
  hasError.value = false
})

onMounted(syncCachedImage)
</script>

<template>
  <span
    class="skeleton-image-frame"
    :data-media-error="hasError || undefined"
    :data-media-loaded="isLoaded || undefined"
  >
    <img
      ref="image"
      :src="props.src"
      :alt="props.alt"
      :loading="props.loading"
      :decoding="props.decoding"
      :fetchpriority="props.fetchpriority"
      class="skeleton-image"
      :class="{ 'skeleton-image--loaded': isLoaded }"
      @load="handleLoad"
      @error="handleError"
    >
    <FlockaMediaSkeleton :loading="!isLoaded" :error="hasError" />
  </span>
</template>

<style scoped>
.skeleton-image-frame {
  display: block;
  isolation: isolate;
  overflow: hidden;
  position: relative;
}

.skeleton-image {
  display: block;
  height: 100%;
  object-fit: inherit;
  object-position: inherit;
  opacity: 0;
  transition: opacity 420ms cubic-bezier(.22, 1, .36, 1);
  width: 100%;
}

.skeleton-image--loaded {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .skeleton-image {
    transition: none;
  }
}
</style>
