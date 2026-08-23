# Flocka Smoke Overlay – Design Specification

## Ziel

Ein dauerhaft am unteren Viewport-Rand haftender, dezenter Smoke-Effekt soll die Flocka-Seite atmosphärisch ergänzen. Der Effekt basiert auf dem bereitgestellten WebGL2-Noise-/FBM-Shader, wird aber auf die Flocka-Farbwelt angepasst und nur in einem kleinen sichtbaren Bereich berechnet.

## Nutzererlebnis

- Der Smoke bleibt beim Scrollen am unteren Bildschirmrand sichtbar.
- Er belegt ungefähr zehn Prozent der Viewport-Höhe, mit einer Mindest- und Maximalhöhe von etwa 72 bis 144 Pixeln.
- Der Effekt liegt optisch über dem Seiteninhalt, bleibt aber transparent genug, damit Text und Bedienelemente lesbar bleiben.
- Der Smoke bewegt sich langsam und kontinuierlich von unten nach oben.
- Die Farbwirkung ist gedämpftes Flocka-Rot mit transparenten und schwarzen Anteilen, nicht Blau/Grün wie im Codepen.
- Das Overlay verändert weder das Layout noch die Klickbarkeit der Seite.

## Architektur

Eine eigenständige Client-only-Vue-Komponente `FlockaSmokeOverlay.vue` kapselt:

1. den WebGL2-Kontext,
2. Vertex- und Fragment-Shader,
3. Canvas-Größenanpassung,
4. Render-Loop und Sichtbarkeitssteuerung,
5. Reduced-Motion- und WebGL-Fallbacks.

Die Komponente wird global in `app.vue` neben der Seite gerendert. Das Overlay erhält `position: fixed`, `inset-inline: 0`, `bottom: 0`, einen hohen visuellen Layer und `pointer-events: none`.

## Adaptive Canvas-Auflösung

Das Canvas rendert ausschließlich die sichtbare Overlay-Fläche, nicht den vollständigen Viewport. Die CSS-Höhe wird mit `clamp(72px, 10vh, 144px)` begrenzt.

Der interne Canvas-Backing-Store wird aus der tatsächlichen `getBoundingClientRect()`-Größe berechnet und mit einem begrenzten Pixel Ratio skaliert (`min(devicePixelRatio, 1.5)`). Ein `ResizeObserver` aktualisiert die Auflösung nur bei relevanten Größenänderungen. Die Shader-Uniform für die Viewport-Größe verwendet die tatsächlichen Canvas-Maße.

## Performance und Robustheit

- Ein einzelner WebGL2-Draw pro Frame.
- Kein externes Animations- oder Partikelpaket.
- Der Render-Loop pausiert, wenn `document.visibilityState` nicht `visible` ist.
- Bei `prefers-reduced-motion: reduce` wird keine laufende Animation berechnet; ein statischer, sehr dezenter Zustand darf sichtbar bleiben.
- Bei fehlendem WebGL2-Kontext, Shader-Kompilierungsfehlern oder fehlgeschlagenem Program-Link bleibt das Overlay transparent und die Seite funktioniert weiter.
- Keine Pointer-, Tastatur- oder Fokusinteraktion des Overlays.

## Shader-Anpassungen

Die Noise-/FBM-Struktur des bereitgestellten Shaders bleibt erhalten. Angepasst werden:

- Farb-Mixes auf Flocka-Rot, dunkles Rot und neutrale Transparenz,
- Intensität und Alpha für einen leichten Dunst statt einer deckenden Fläche,
- vertikaler Fade zum oberen Rand des Overlay-Bereichs,
- langsame Bewegungsgeschwindigkeit passend zur Seite.

## Prüfung

Die Umsetzung wird auf Desktop und Mobile geprüft, insbesondere bei unterschiedlichen Viewport-Höhen. Zusätzlich werden Lesbarkeit und Klickbarkeit darunterliegender Elemente, Reduced Motion, Tab-Wechsel, fehlendes WebGL2 sowie Build, Lint und Typecheck verifiziert.

## Nicht enthalten

- Keine zusätzliche Shader-, Partikel- oder Animations-Library.
- Kein Eingriff in bestehende Footer- oder Seitenlayouts.
- Keine FPS-Regelung zur Laufzeit; die erste Version verwendet eine feste, konservative Auflösungsbegrenzung.
