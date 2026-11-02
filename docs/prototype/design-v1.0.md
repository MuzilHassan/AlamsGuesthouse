```yaml
version: alpha
name: "Alam Guest house design"
description: "The look of the Alam Guest house prototype: Precision, Indigo palette, Inter, flat backdrop, light and dark themes, with a switch in the prototype."
```

## Overview

Alam Guest house is prototyped in the **Precision** design system (technical mood) with the **Indigo** palette, the Inter fonts (neutral and product-like), a flat backdrop and light and dark themes, with a switch in the prototype. Crisp modern SaaS: hairline borders, tight type, a gradient glow on the edge of what matters, quiet surfaces and fast precise motion.

Character: Crisp modern software. Hairline borders, tight type, quiet neutrals and a gradient glow on the edge of what matters. Fast, focused and premium.

- Domain: Guest house content management: a single administrator manages room listings, hero images, promotions, gallery, and blog posts for the Alam Guest House public website from a dashboard built inside the existing Next.js application
- Audience: The guest house owner or their staff administrator, signing in daily through Poly-X with MFA to keep room listings, prices, promotions, gallery images, and blog posts current without a developer
- Tone: confident, precise, warm, efficient
- Density: comfortable
- Layout concept: A side-navigation admin dashboard with a top bar carrying the brand, search, notifications, and the admin avatar menu; each section opens a focused workspace with a list or form and a contextual side panel for summaries or next steps
- Memorable moment: The room listings workspace, where the administrator sees every room with its price, occupancy, and active promotion in one scannable table, and edits any room inline or opens its full form in one click
- Voice: Direct and helpful, speaking to a non-technical owner who manages content: plain labels, clear confirmations, no jargon, and every action named for what it does
- Avoid: a generic admin template with identical cards in a grid and no sense of the guest house domain; a dense data table with no visual hierarchy between room names, prices, and statuses; a sign-in page that looks like a developer console instead of a welcoming guest house admin entrance; placeholder text or lorem ipsum where room descriptions and promotion copy should be

## Colors

```yaml
colors:
  primary: "#5b5bd6"
  primary-hover: "#5050bc"
  primary-tint: "#ebebfa"
  on-primary: "#ffffff"
  primary-text: "#5656c9"
  background: "#fbfbfc"
  surface: "#ffffff"
  surface-2: "#f5f5f6"
  on-surface: "#0f1117"
  on-surface-muted: "#6a6b6f"
  border: "#e0e0e1"
  control-border: "#8a8b8e"
  focus: "#5656c9"
  success: "#15803d"
  warning: "#a16207"
  danger: "#b91c1c"
  info: "#0369a1"
  chart-1: "#5b5bd6"
  chart-2: "#16a394"
  chart-3: "#e5734b"
  chart-4: "#8b8fa3"
  ds-glow-1: "#5b5bd6"
  ds-glow-2: "#c084fc"
  ds-hairline: "#ececec"
  dark-primary: "#6969cd"
  dark-primary-hover: "#5b5bb1"
  dark-primary-tint: "#212239"
  dark-on-primary: "#ffffff"
  dark-primary-text: "#8a8ad8"
  dark-background: "#08090c"
  dark-surface: "#0f1014"
  dark-surface-2: "#1c1d21"
  dark-on-surface: "#ededf0"
  dark-on-surface-muted: "#99999c"
  dark-border: "#37383c"
  dark-control-border: "#737377"
  dark-focus: "#8a8ad8"
  dark-success: "#4ade80"
  dark-warning: "#facc15"
  dark-danger: "#f87171"
  dark-info: "#38bdf8"
  dark-chart-1: "#6969cd"
  dark-chart-2: "#2dd4bf"
  dark-chart-3: "#fb923c"
  dark-chart-4: "#8b8fa3"
  dark-ds-glow-1: "#6969cd"
  dark-ds-glow-2: "#c084fc"
  dark-ds-hairline: "#25262a"
```

The light values carry the plain names; the dark theme sets every token again under the `dark-` prefix. In CSS each token is a custom property:

- `primary` (`--pk-brand`): the brand colour: the primary action, links, the active navigation item and key figures.
- `primary-hover` (`--pk-brand-hover`): the primary action on hover and press.
- `primary-tint` (`--pk-brand-tint`): a quiet brand wash: selected rows, brand badges, avatars.
- `on-primary` (`--pk-on-brand`): text and icons on a primary surface.
- `primary-text` (`--pk-brand-text`): brand-coloured text on the page and on surfaces.
- `background` (`--pk-bg`): the page.
- `surface` (`--pk-surface`): cards, panels, inputs.
- `surface-2` (`--pk-surface-2`): table headers, quiet fills, neutral badges.
- `on-surface` (`--pk-text`): body text.
- `on-surface-muted` (`--pk-text-muted`): secondary text and labels.
- `border` (`--pk-border`): hairlines and card edges.
- `control-border` (`--pk-control-border`): the edge of inputs and buttons.
- `focus` (`--pk-focus`): the focus ring.
- `success` (`--pk-success`): status only: done, positive.
- `warning` (`--pk-warning`): status only: needs attention.
- `danger` (`--pk-danger`): status only: failed, destructive.
- `info` (`--pk-info`): status only: neutral information.
- `chart-1` (`--pk-chart-1`): first chart series.
- `chart-2` (`--pk-chart-2`): second chart series.
- `chart-3` (`--pk-chart-3`): third chart series.
- `chart-4` (`--pk-chart-4`): fourth chart series.
- The system's own colours (`--ds-` variables, used by its helper classes): `ds-glow-1`, `ds-glow-2`, `ds-hairline`.

Neutrals carry the page; the brand colour marks primary actions, focus and the glow. Status colours only for status. Never hard-code a colour.

## Typography

Inter: Neutral and product-like. Headings use Inter, running text Inter, figures and code the monospace face (`--pk-mono`). In CSS: `--pk-font-heading`, `--pk-font`.

```yaml
typography:
  headline-lg: {fontFamily: "Inter", fontSize: 24px, fontWeight: 600, lineHeight: 1.25}
  headline-md: {fontFamily: "Inter", fontSize: 20px, fontWeight: 600, lineHeight: 1.25}
  headline-sm: {fontFamily: "Inter", fontSize: 16px, fontWeight: 600, lineHeight: 1.25}
  body-md: {fontFamily: "Inter", fontSize: 14px, fontWeight: 400, lineHeight: 1.5}
  label-md: {fontFamily: "Inter", fontSize: 14px, fontWeight: 500, lineHeight: 1.5}
  body-sm: {fontFamily: "Inter", fontSize: 12px, fontWeight: 400, lineHeight: 1.5}
  label-sm: {fontFamily: "Inter", fontSize: 12px, fontWeight: 600, lineHeight: 1.5}
```

Page titles are `h1` (headline-lg), sections `h2`, cards and groups `h3`; body copy is body-md, captions and table headers the small sizes.

One sans, weights 500-600, tight tracking on headlines; muted secondary text; tabular figures in stats and tables. Keyboard hints in `ds-kbd`.

## Layout

```yaml
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
```

Spacing is the kit's 4px scale, xs = `--pk-s-1` (4px), sm = `--pk-s-2` (8px), md = `--pk-s-4` (16px), lg = `--pk-s-6` (24px), xl = `--pk-s-10` (40px), 2xl = `--pk-s-16` (64px), with steps between. Every margin, padding and gap is one of these steps.

The kit's app shell: a top bar (`--pk-topbar-h`, 56px), side navigation, content in `pk-content`, sections spaced by `pk-section-gap`. `pk-grid--2`, `--3` and `--4` stack to one column under 768px. Running text stays near 65 characters wide (`--pk-measure`).

Density is comfortable. Layout concept: A side-navigation admin dashboard with a top bar carrying the brand, search, notifications, and the admin avatar menu; each section opens a focused workspace with a list or form and a contextual side panel for summaries or next steps.

- Sites: a `ds-spotlight` hero on a `ds-dot-grid` with a short headline, one line and two actions; a product screenshot card under it; feature rows of 3.
- Apps: the kit's app shell; compact nav; one `ds-glow-card` per screen at most for the key item; tables and lists in hairline panels.
- Consistent 8px rhythm; card padding `pk-s-6`.

## Elevation & Depth

| Token | Light | Dark |
| --- | --- | --- |
| `--pk-shadow-sm` | 0 1px 2px rgba(16, 18, 27, 0.06) | 0 1px 2px rgba(0, 0, 0, 0.5) |
| `--pk-shadow-md` | 0 1px 2px rgba(16, 18, 27, 0.06), 0 4px 12px rgba(16, 18, 27, 0.06) | 0 1px 2px rgba(0, 0, 0, 0.5), 0 4px 12px rgba(0, 0, 0, 0.4) |
| `--pk-shadow-lg` | 0 16px 40px -12px rgba(16, 18, 27, 0.25) | 0 16px 40px -12px rgba(0, 0, 0, 0.8) |
| `--pk-shadow-inset` | inset 0 1px 0 rgba(255, 255, 255, 0.8) | inset 0 1px 0 rgba(255, 255, 255, 0.05) |

Hairlines and subtle shadows; the glow card is the only lifted element.

## Shapes

```yaml
rounded:
  sm: 6px
  md: 8px
  lg: 12px
  full: 999px
```

Controls and buttons take `sm`, cards and panels `lg`, badges and avatars `full`. Borders are 1px (`--pk-border-w`). Controls are 36px tall (`--pk-control-h`).

## Motion

- Fast: 0.12s (`--pk-dur-fast`)
- Base: 0.2s (`--pk-dur-base`)
- Slow: 0.5s (`--pk-dur-slow`)
- Easing: cubic-bezier(0.2, 0, 0, 1) (`--pk-ease`)
- Easing out: cubic-bezier(0.16, 1, 0.3, 1) (`--pk-ease-out`)
- Reveal distance: 10px (`--pk-motion-distance`)
- Stagger: 50ms (`--pk-stagger`)

Keep the `@media (prefers-reduced-motion: reduce)` block: under it animation and transitions are off and revealed content is shown at once. Never remove it and never animate large areas.

Precise and short. `data-reveal="fade-up"` with `data-stagger` on feature rows, `data-reveal="blur"` on the hero screenshot, `data-count` on metrics. 150-300ms, ease-out.

## Components

```yaml
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.label-md}", rounded: "{rounded.sm}", height: 36px}
  button: {backgroundColor: "{colors.surface}", textColor: "{colors.on-surface}", typography: "{typography.label-md}", rounded: "{rounded.sm}", height: 36px}
  card: {backgroundColor: "{colors.surface}", textColor: "{colors.on-surface}", rounded: "{rounded.lg}"}
  input: {backgroundColor: "{colors.surface}", textColor: "{colors.on-surface}", rounded: "{rounded.sm}", height: 36px}
  badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.on-surface-muted}", typography: "{typography.label-sm}", rounded: "{rounded.full}"}
```

The kit's `pk-` components (buttons, cards, tables, forms, badges, tabs, alerts, stats) are restyled into this system by its CSS; the tokens above are the source of truth. One primary button per area.

Helper classes of Precision (`ds-`):

- `ds-glow-card`: The one card that matters on a screen: a gradient hairline edge and a soft glow under it.
- `ds-kbd`: A keyboard shortcut chip (K), for menus, search and empty states.
- `ds-spotlight`: A hero or section with a soft radial light behind the headline.
- `ds-dot-grid`: A faint dot grid behind a hero or an empty state.

- Small-radius buttons with a hairline border; the primary has an inner highlight.
- Cards and tables are hairline panels; hover darkens the border.
- Tabs are text with an underline; nav items are muted until active.
- Command menus and search show a `ds-kbd` hint.

## Do's and Don'ts

- Do read every colour, size, radius, shadow and duration from the tokens above.
- Do not hard-code a colour, a pixel size or a font: add a token instead.
- Do keep the reduced-motion block and make every animation optional.
- Do give every list an empty state, a loading state and an error state that says what to do next.
- Do keep text and controls readable in every theme and keep the focus ring visible on everything interactive; label every input; never use colour alone for status.
- Do not: a generic admin template with identical cards in a grid and no sense of the guest house domain.
- Do not: a dense data table with no visual hierarchy between room names, prices, and statuses.
- Do not: a sign-in page that looks like a developer console instead of a welcoming guest house admin entrance.
- Do not: placeholder text or lorem ipsum where room descriptions and promotion copy should be.

Conventions of Precision:

- **Iconography:** The kit's outline icons at 16-18px, muted until hovered.
- **Imagery:** Product screenshots and UI fragments, never stock photos.
- **Data visualisation:** Thin lines, the brand colour first, chart tokens after; muted axes; labels on hover.
- **States:** Empty states explain in one line and show a `ds-kbd` shortcut plus the action; loading uses `pk-skeleton`; errors use `pk-alert`.
- **Voice:** Concise and confident ("Create issue", "Invite team").
- **Accessibility:** Muted text still passes AA; the glow never carries meaning alone. Reveals stop under reduced motion.
