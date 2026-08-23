import { defineConfig, presetIcons, presetWind4, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [presetWind4(), presetIcons()],
  transformers: [transformerVariantGroup()],
  theme: {
    colors: {
      ink: '#090909',
      black: '#000000',
      bone: '#F2EFE8',
      muted: '#A9A39A',
      line: 'rgba(242, 239, 232, 0.16)',
      signal: {
        DEFAULT: '#C92C2C',
        soft: '#7F1D1D',
        bright: '#E84848',
      },
      blood: '#3A0D12',
      surface: '#151313',
    },
    font: {
      display: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
      body: 'Arial, Helvetica, sans-serif',
      mono: '"Courier New", monospace',
    },
  },
  shortcuts: {
    'page-shell': 'mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14',
    'section-shell': 'page-shell py-20 md:py-28',
    'eyebrow': 'text-[10px] text-muted tracking-[0.24em] font-mono uppercase',
    'display-xl': 'text-[clamp(4.5rem,14vw,13rem)] leading-[0.78] tracking-[-0.08em] font-display uppercase',
    'display-lg': 'text-[clamp(3rem,7vw,7rem)] leading-[0.84] tracking-[-0.06em] font-display uppercase',
    'surface-panel': 'border border-line bg-surface',
    'btn-primary': 'inline-flex items-center justify-center gap-3 bg-signal px-5 py-3 text-[11px] text-bone tracking-[0.16em] font-mono uppercase transition hover:bg-signal-bright focus-visible:outline-2 focus-visible:outline-signal-bright focus-visible:outline-offset-3',
    'btn-ghost': 'inline-flex items-center justify-center gap-3 border border-line px-5 py-3 text-[11px] text-bone tracking-[0.16em] font-mono uppercase transition hover:border-signal hover:text-signal-bright focus-visible:outline-2 focus-visible:outline-signal-bright focus-visible:outline-offset-3',
  },
})
