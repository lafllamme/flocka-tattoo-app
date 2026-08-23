<script setup lang="ts">
useHead({ title: 'Design System' })
const tokens = [
  { name: 'Ink', value: '#090909', class: 'bg-ink' },
  { name: 'Black', value: '#000000', class: 'bg-black' },
  { name: 'Bone', value: '#F2EFE8', class: 'bg-bone' },
  { name: 'Signal', value: '#C92C2C', class: 'bg-signal' },
  { name: 'Blood', value: '#3A0D12', class: 'bg-blood' },
]
</script>

<template>
  <main class="text-bone bg-ink min-h-screen">
    <div class="section-shell">
      <NuxtLink class="eyebrow text-signal" to="/">
        ← Back to demo
      </NuxtLink><p class="eyebrow text-signal-bright mt-14">
        Flocka Tattoo · foundation v0.1
      </p><h1 class="display-lg mt-5 max-w-3xl">
        Black, bone<br><span class="text-signal">and signal.</span>
      </h1><p class="text-lg text-muted leading-relaxed mt-8 max-w-xl">
        A dark-first token system for a tattoo studio. Structure stays black. Copy stays bone. Red is earned.
      </p>
    </div>
    <section class="section-shell border-t border-line">
      <p class="eyebrow text-signal-bright">
        Color tokens
      </p><div class="mt-8 gap-3 grid lg:grid-cols-5 sm:grid-cols-2">
        <article v-for="token in tokens" :key="token.name" class="surface-panel overflow-hidden">
          <div :class="token.class" class="h-32" /><div class="p-4">
            <p class="font-display text-xl uppercase">
              {{ token.name }}
            </p><p class="eyebrow mt-2">
              {{ token.value }}
            </p>
          </div>
        </article>
      </div>
    </section>
    <section class="section-shell border-t border-line">
      <p class="eyebrow text-signal-bright">
        Type scale
      </p><div class="mt-10 space-y-8">
        <div>
          <p class="eyebrow">
            display / Impact fallback
          </p><p class="display-lg mt-3">
            Make it permanent.
          </p>
        </div><div>
          <p class="eyebrow">
            body / system sans
          </p><p class="text-xl text-muted leading-relaxed mt-3 max-w-2xl">
            The system keeps the interface quiet so the work and the red signal carry the attention.
          </p>
        </div><div>
          <p class="eyebrow">
            meta / monospace
          </p><p class="text-sm tracking-[0.2em] font-mono mt-3">
            BLACKWORK / COLOGNE / 2025
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
