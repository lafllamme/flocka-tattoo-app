<script setup lang="ts">
const props = withDefaults(defineProps<{
  error?: boolean
  loading?: boolean
}>(), {
  error: false,
  loading: true,
})
</script>

<template>
  <span
    aria-hidden="true"
    class="media-skeleton pointer-events-none inset-0 absolute z-1 overflow-hidden"
    :class="{
      'media-skeleton--error': props.error,
      'media-skeleton--hidden': !props.loading,
    }"
    :data-error="props.error || undefined"
    :data-loading="props.loading || undefined"
  >
    <span class="media-skeleton__sweep inset-y-0 absolute" />
  </span>
</template>

<style scoped>
.media-skeleton {
  background: #171717;
  opacity: 1;
  transition: opacity 180ms ease, visibility 0s;
  visibility: visible;
}

.media-skeleton--hidden {
  opacity: 0;
  transition: opacity 180ms ease, visibility 0s 180ms;
  visibility: hidden;
}

.media-skeleton__sweep {
  left: -100%;
  width: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgb(242 239 232 / 2%) 34%,
    rgb(242 239 232 / 10%) 50%,
    rgb(242 239 232 / 2%) 66%,
    transparent 100%
  );
  animation: media-skeleton-shimmer 1600ms ease-in-out infinite;
  will-change: transform;
}

.media-skeleton--error .media-skeleton__sweep {
  animation: none;
  opacity: 0;
}

@keyframes media-skeleton-shimmer {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(200%, 0, 0); }
}

@media (prefers-reduced-motion: reduce) {
  .media-skeleton,
  .media-skeleton--hidden {
    transition: none;
  }

  .media-skeleton__sweep {
    animation: none;
    opacity: 0;
  }
}
</style>
