// KBLLR Core-X — component contracts (19)
// Read a contract before using a component. All are on window.KBLLRCoreXDesignSystem_019e2e.

// ─────────────── Badge ───────────────
export type BadgeTone = "neutral" | "up" | "warn" | "down" | "info";

export interface BadgeProps {
  children?: React.ReactNode;
  /** Colour-codes meaning. Never decorative. */
  tone?: BadgeTone;
  /** Mono (service IDs, values) vs Chakra Petch uppercase (labels). Default mono. */
  mono?: boolean;
  /** Dotted border — reserved for external / optional surfaces. */
  dotted?: boolean;
  /** Inverted fill. Use sparingly, for the single most important state on screen. */
  solid?: boolean;
  /** Leading 5px status dot inside the badge. */
  dot?: boolean;
}

export declare function Badge(props: BadgeProps): JSX.Element;

// ─────────────── Button ───────────────
export type ButtonVariant = "primary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = inverted dark fill (one per view). ghost = dashed utility. danger = destructive. */
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  /** Inline SVG element rendered before the label. 14px, stroke 1.5. */
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  /** Stretch to the container width. */
  full?: boolean;
}

export declare function Button(props: ButtonProps): JSX.Element;

// ─────────────── Card ───────────────
export type CardVariant =
  /** Icon + title + code + description. The launcher/module card. */
  | "action"
  /** Label + big tabular number + optional unit. */
  | "stat"
  /** Preview well on top, then title and meta. */
  | "media"
  /** Single-row, icon + title + trailing code. For long lists. */
  | "dense";

/** Material tier — chosen by how high the card floats, not how important it is. */
export type CardTier = "flush" | "raised" | "floating" | "overlay";

export type CardTagTone = "neutral" | "up" | "warn" | "down" | "info" | "new";

export interface CardProps {
  variant?: CardVariant;
  tier?: CardTier;
  /** Chakra Petch uppercase title. For "stat" it doubles as the label. */
  title?: string;
  /** 3-letter mono code — the rail and the card share it so they never drift. */
  code?: string;
  desc?: string;
  /** Mono footer line, pinned to the bottom. */
  meta?: string;
  /** Icon registry name. */
  icon?: string;
  /** Corner tag. e.g. "new", "tool", "ext". */
  tag?: string;
  tagTone?: CardTagTone;
  /** "stat" value. Rendered tabular so it never jitters. */
  value?: string | number;
  unit?: string;
  /** "media" well content — an <img>, a label, or a placeholder string. */
  media?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  /** Tighter padding and type. For sidebars and long lists. */
  dense?: boolean;
  disabled?: boolean;
  /** Dotted border — marks a surface outside the system. */
  external?: boolean;
}

/** Interactive cards (href or onClick) get the hover raise automatically. */
export declare function Card(props: CardProps): JSX.Element;

// ─────────────── Dropdown ───────────────
export interface DropdownOption {
  value: string | number;
  label: string;
  /** Small uppercase detail under the label. */
  meta?: string;
  /** Right-aligned hint, shown when the row is not selected. */
  hint?: string;
  /** Status colour → renders a glowing round dot. */
  dot?: string;
  /** Identity colour → renders a hard square swatch (entity accents). */
  swatch?: string;
  disabled?: boolean;
}

export interface DropdownProps {
  /** Chakra Petch uppercase label above the trigger. */
  label?: string;
  /** Selected value, or an array when multi. */
  value?: string | number | Array<string | number>;
  options?: Array<DropdownOption | string | number>;
  onChange?: (value: any) => void;
  /** Which edge the menu aligns to. */
  align?: "left" | "right";
  /** Fixed width for trigger and menu. */
  width?: number | string;
  /** pill = compact toolbar control · field = full-width form input · ghost = borderless. */
  trigger?: "pill" | "field" | "ghost";
  /** Icon registry name, shown in the trigger. */
  icon?: string;
  placeholder?: string;
  disabled?: boolean;
  /** Menu material tier. */
  tier?: "overlay" | "modal";
  /** Mono note pinned under the option list. */
  footer?: React.ReactNode;
  /** Multi-select: value is an array, menu stays open, rows toggle. */
  multi?: boolean;
}

/**
 * Opens on CLICK, never hover — an operator menu must not fire on a passing
 * cursor. Escape and outside-click close it; arrow keys move, Enter commits.
 */
export declare function Dropdown(props: DropdownProps): JSX.Element;

// ─────────────── EmptyState ───────────────
export type EmptyStateKind =
  /** Nothing here yet, and that is fine. */
  | "empty"
  /** Work in flight. Prefer a Skeleton when the shape is known. */
  | "loading"
  /** Something failed. MUST name the fix in `hint`. */
  | "error"
  /** Blocked on permission or policy. */
  | "denied"
  /** A service is unreachable. */
  | "offline"
  /** A query returned nothing. */
  | "missing";

export interface EmptyStateProps {
  kind?: EmptyStateKind;
  /** Chakra Petch uppercase headline. State what happened, terse. */
  title: string;
  /** One sentence of Inter prose. What the system tried. Never an apology. */
  detail?: string;
  /** The command or path that resolves it. Rendered as mono in a dashed box. */
  hint?: string;
  /** A Button, usually. Optional — an empty state need not be actionable. */
  action?: React.ReactNode;
  /** Override the default icon for the kind. */
  icon?: string;
  /** For inline use inside a small panel. */
  compact?: boolean;
}

export declare function EmptyState(props: EmptyStateProps): JSX.Element;

// ─────────────── EntityLoader ───────────────
import type { CX_ENTITIES as _E } from '../../assets/ecosystem/entities.js';

export interface CXEntity {
  id: string;
  /** Short mono code — COREX, WHSE, RIG. */
  code: string;
  name: string;
  /** Canonical hex. One entity, one hex — never reuse another's. */
  accent: string;
  /** Human name for the swatch, e.g. "phosphor-50". */
  swatch: string;
  tier: 'institution' | 'house';
  family: 'operator' | 'editorial' | 'observatory' | 'hybrid' | 'institutional' | 'workshop';
  tagline: string;
  /** Motion metaphor key, drives EntityLoader. */
  metaphor: string;
}

export declare const CX_ENTITIES: CXEntity[];
export declare function cxEntity(id: string): CXEntity | null;

export interface EntityLoaderProps {
  /** The entity object. Takes precedence over id. */
  entity?: CXEntity;
  /** Entity id — looked up in the registry. */
  id?: string;
  /** Box size in px. Legible from 32; 64 is the gallery default. */
  size?: number;
  /** Override colour. Avoid — an entity's loader should carry its own accent. */
  color?: string;
  /** true prints the entity name; a string prints that instead. */
  caption?: boolean | string;
}

/**
 * Per-entity loading animation. 14 distinct motions cover the 23 entities;
 * metaphors that genuinely coincide (page turn / newspaper column) share one.
 */
export declare function EntityLoader(props: EntityLoaderProps): JSX.Element;

// ─────────────── Field ───────────────
export interface FieldProps {
  /** Chakra Petch uppercase label above the input. */
  label?: string;
  value?: string;
  placeholder?: string;
  /** Mono input text (IDs, paths, commands) vs Inter. Default mono. */
  mono?: boolean;
  onChange?: (value: string) => void;
  disabled?: boolean;
  /** Solid red border + red hint. */
  invalid?: boolean;
  /** Mono helper line under the field. Doubles as the error message. */
  hint?: string;
  id?: string;
  type?: string;
}

export declare function Field(props: FieldProps): JSX.Element;

// ─────────────── FunnelBar ───────────────
export interface FunnelStage {
  id?: string;
  label: string;
  /** Completed count — rendered solid green. */
  done: number;
  /** Outstanding count — rendered as diagonal hatch, so "waiting" never
   *  reads as "done" at a glance. */
  waiting: number;
  /** Marks a stage that not every item must pass through. */
  optional?: boolean;
}

export interface FunnelBarProps {
  stages?: FunnelStage[];
  /** Scale denominator. Defaults to the largest stage total, which keeps the
   *  funnel's shape readable. Pass an explicit max to compare across charts. */
  max?: number;
  labelWidth?: number;
  showTotals?: boolean;
}

export declare function FunnelBar(props: FunnelBarProps): JSX.Element;

// ─────────────── Icon ───────────────
/** Every icon name in the registry. Grouped by prefix: mode-*, render-*, chart-*, file-*. */
export declare const CX_ICON_NAMES: string[];

/** name → SVG path-fragment string for a 24×24 viewBox. */
export declare const CX_ICONS: Record<string, string>;

export interface IconProps {
  /** Registry key. e.g. "mode-voice", "render-3d", "vault". Unknown names warn and render nothing. */
  name: string;
  /** Pixel box. 14 inline, 16–18 in buttons, 20 in rails, 24 for feature icons. */
  size?: number;
  /** Stroke width. 1.5 is the system weight — change only for optical fixes at large sizes. */
  stroke?: number;
  /** Accessible label. Omit for decorative icons; they get aria-hidden automatically. */
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export declare function Icon(props: IconProps): JSX.Element | null;

// ─────────────── Loader ───────────────
export type LoaderVariant =
  /** Dashed ring, rotating. The default indeterminate spinner. */
  | "ring"
  /** Scanline crossing a track. Indeterminate, but feels like transit. */
  | "sweep"
  /** Discrete cells lighting in sequence. For batched/queued work. */
  | "cells"
  /** Marching dashed strip. Indeterminate, borrows the marquee. */
  | "strip"
  /** Orbiting signal dots. For "connecting" and handshake states. */
  | "orbit"
  /** Determinate progress bar. The ONLY variant allowed a percentage. */
  | "bar"
  /** Live telemetry number with a blinking cursor. */
  | "counter";

export type LoaderTone = "accent" | "green" | "amber" | "red" | "blue" | "muted";

export interface LoaderProps {
  variant?: LoaderVariant;
  /** Box size for ring / orbit / cells. */
  size?: number;
  /** Semantic colour, or any CSS colour string. */
  tone?: LoaderTone | string;
  /** Ring stroke width. */
  stroke?: number;
  /** 0–100 for "bar"; the displayed number for "counter". Never fake it — if
   *  the real figure is unknown, use an indeterminate variant instead. */
  value?: number | string;
  /** Unit suffix for "counter". e.g. "tok/s", "MB". */
  unit?: string;
  /** Mono label above sweep / bar / counter. */
  label?: string;
  /** Cell count for "cells". */
  count?: number;
  /** Track height for sweep / strip / bar. */
  height?: number;
  /** Cell gap for "cells". */
  gap?: number;
  /** Lay caption beside the loader instead of under it. */
  inline?: boolean;
  /** Status caption. Also becomes the aria-label on a live region. */
  caption?: string;
}

export declare function Loader(props: LoaderProps): JSX.Element;

// ─────────────── Marquee ───────────────
export interface MarqueeProps {
  /** Log lines. Joined with the canonical middle-dot separator. */
  items?: string[];
  /** Seconds for one full pass. 38s is the shipped default; slower reads calmer. */
  duration?: number;
  /** Gap in px between the two duplicated tracks. */
  gap?: number;
  /** Strip height in px. 28 matches the topstrip. */
  height?: number;
  /** Faint accent tint + accent-mixed border. Off gives a plain dashed strip. */
  tinted?: boolean;
}

export declare function Marquee(props: MarqueeProps): JSX.Element;

// ─────────────── Panel ───────────────
export interface PanelProps {
  /** Chakra Petch uppercase panel title. */
  title?: string;
  /** Mono detail line, centre column of the header. Truncates. */
  meta?: string;
  /** Right-aligned header controls — icon buttons, badges. */
  actions?: React.ReactNode;
  children?: React.ReactNode;
  /** Translucent beige + 12px backdrop blur. The canonical glass panel. */
  glass?: boolean;
  /** Padding in px. 10–14 is the system range. */
  pad?: number;
  /** Optional footer above a dashed rule. */
  footer?: React.ReactNode;
  /** Small mono kind tag before the title. e.g. "render", "queue". */
  kind?: string;
}

export declare function Panel(props: PanelProps): JSX.Element;

// ─────────────── ProvenanceChip ───────────────
export type ProvenanceStatus =
  /** Written by a run that succeeded, recently. Trust it. */
  | "fresh"
  /** Real data, but older than the last relevant job. Show with the age. */
  | "stale"
  /** The producing job failed. Withhold the figures it would have set. */
  | "failed"
  /** No artifact at all. Omit the block rather than render zeros. */
  | "missing"
  /** Some inputs succeeded, some did not. */
  | "partial";

export interface ProvenanceChipProps {
  status?: ProvenanceStatus;
  /** Tooltip: which job, which file, what went wrong. Always supply it. */
  detail?: string;
  /** Pre-formatted relative age. e.g. "14m ago". */
  age?: string;
}

export declare function ProvenanceChip(props: ProvenanceChipProps): JSX.Element;

// ─────────────── Rail ───────────────
export interface RailItem {
  id: string;
  /** 3-letter mono code shown under the icon in collapsed mode. */
  code: string;
  /** Full name — the tooltip, and the label in expanded mode. */
  name: string;
  /** Icon registry name. */
  icon: string;
  /** "active" shows no flag. "new" = filled accent dot, "tool" = hollow ring,
   *  "warn"/"down" = amber/red dot. */
  status?: "active" | "new" | "tool" | "warn" | "down";
  /** Renders the item as a link instead of a button. */
  href?: string;
}

export interface RailProps {
  items?: RailItem[];
  /** Currently active item id. */
  active?: string;
  onSelect?: (id: string) => void;
  /** Accent square + sub-label at the top. */
  brand?: { tag: string; sub?: string };
  /** Utility items pinned to the bottom, above the svc readout. */
  footer?: RailItem[];
  /** Service status string. Pass null to hide the readout. */
  svc?: string | null;
  /** Expanded shows full names at 188px; collapsed shows icon + code at 64px. */
  expanded?: boolean;
  width?: number;
  /** Material tier. Floating is the default for a rail over content. */
  tier?: "raised" | "floating" | "overlay";
  /** "fixed" pins it to the viewport's left edge at --z-rail. */
  position?: "static" | "fixed";
}

export declare function Rail(props: RailProps): JSX.Element;

// ─────────────── ServiceChip ───────────────
export type ServiceStatus = "up" | "warn" | "down" | "idle";

export interface ServiceChipProps {
  /** Service identifier, lowercase. e.g. "gateway", "rag". */
  name: string;
  /** Port number, rendered as name:port. */
  port?: string | number;
  status?: ServiceStatus;
  /** Trailing dim detail — version, model name, queue depth. */
  note?: string;
  /** Makes the chip a button and adds a dashed border. */
  onClick?: () => void;
}

export declare function ServiceChip(props: ServiceChipProps): JSX.Element;

// ─────────────── Skeleton ───────────────
export type SkeletonVariant =
  /** Staggered text lines. The default. */
  | "text"
  /** One solid block — media, canvas, chart wells. */
  | "block"
  /** Media card: image well + title + meta. */
  | "card"
  /** Rows with a leading dot and a trailing value column. */
  | "list"
  /** Label + big number, for stat tiles. */
  | "metric";

export interface SkeletonProps {
  variant?: SkeletonVariant;
  /** Line count for "text". */
  lines?: number;
  /** Row count for "list". */
  count?: number;
  width?: number | string;
  /** Block/media height. */
  height?: number | string;
  gap?: number;
}

/**
 * Placeholder for content that IS coming. If the data may never arrive, use an
 * empty state instead — a skeleton is a promise, and a broken promise reads as
 * a hang.
 */
export declare function Skeleton(props: SkeletonProps): JSX.Element;

// ─────────────── Sparkline ───────────────
export interface SparklineProps {
  /** The series. Scaled to its own min/max — a sparkline shows shape, not level,
   *  so never put two on screen implying a shared scale. */
  data?: number[];
  width?: number;
  height?: number;
  /** Any CSS colour. Defaults to the primary foreground. */
  tone?: string;
  /** Faint area fill under the line. */
  fill?: boolean;
  /** Dot on the most recent point. */
  showLast?: boolean;
  strokeWidth?: number;
}

export declare function Sparkline(props: SparklineProps): JSX.Element | null;

// ─────────────── StatTile ───────────────
export interface StatTileProps {
  /** Mono uppercase name of the figure. */
  label: string;
  /** The figure. Rendered tabular so a live value never shifts the layout. */
  value?: string | number;
  unit?: string;
  /** Change indicator, pre-formatted. e.g. "+12", "-3.4%". */
  delta?: string;
  deltaTone?: "good" | "bad" | "neutral";
  /** Dim mono footnote under the value. */
  note?: string;
  /** TRUE when the source could not be trusted. Renders "withheld" in red
   *  instead of the value. Never substitute a zero for an unknown. */
  withheld?: boolean;
  /** Required when withheld — the reason, shown to the operator. */
  why?: string;
  tone?: "default" | "good" | "warn" | "bad" | "info";
  align?: "left" | "right";
}

export declare function StatTile(props: StatTileProps): JSX.Element;

// ─────────────── StatusDot ───────────────
export type StatusTone = "up" | "warn" | "down" | "info" | "idle";

export interface StatusDotProps {
  /** Semantic status. Maps to the sober status palette. */
  tone?: StatusTone;
  /** Diameter in px. 5–6 for inline meta, 8–9 for HUD indicators. */
  size?: number;
  /** Pulse animation — reserve for "attention needed" only. */
  pulse?: boolean;
  /** Coloured glow behind the dot. On by default; off for dense lists. */
  glow?: boolean;
  /** Optional mono label rendered to the right of the dot. */
  label?: string;
  /** Tooltip text. Defaults to the tone name. */
  title?: string;
}

export declare function StatusDot(props: StatusDotProps): JSX.Element;

// ═══════════════ Native layer (10) — Liquid Glass, native shell, spatial HUD, assistant HUD ═══════════════

// ─────────────── GlassSurface · GlassGroup · GlassButton ───────────────
export interface GlassSurfaceProps {
  /** regular = controls and navigation. clear = only over media or a 3D scene, large type or icons only. */
  variant?: "regular" | "clear";
  /** rounded = `radius-glass`, for surfaces (default). capsule = a single control. square = flush in a square console layout. */
  shape?: "rounded" | "capsule" | "square";
  /** true tints with the theme accent; a CSS colour tints with that. SwiftUI: `.tint(_:)`. Suggests prominence — one per view. */
  tint?: boolean | string;
  /** Reacts to hover, press and focus. SwiftUI: `.interactive()`. Only on things that can be activated. */
  interactive?: boolean;
  /** Element to render. Default "div". */
  as?: string;
  /** Padding in px. */
  pad?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
/** Liquid Glass. SwiftUI: `.glassEffect(.regular, in: .rect(cornerRadius: 16))`; with no shape, a capsule. */
export declare function GlassSurface(props: GlassSurfaceProps): JSX.Element;

export interface GlassGroupProps {
  /** Stack the segments vertically. */
  vertical?: boolean;
  /** Accessible name of the group. */
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  /** The segments: buttons or links. They carry no glass of their own. */
  children?: React.ReactNode;
}
/** One glass shape holding several controls: a capsule, or `radius-glass` when vertical. SwiftUI: `GlassEffectContainer` with `glassEffectUnion(id:namespace:)`. */
export declare function GlassGroup(props: GlassGroupProps): JSX.Element;

export interface GlassButtonProps {
  /** glass = `.buttonStyle(.glass)`. prominent = `.buttonStyle(.glassProminent)`: accent fill, one per view. */
  variant?: "glass" | "prominent";
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  title?: string;
  children?: React.ReactNode;
}
export declare function GlassButton(props: GlassButtonProps): JSX.Element;

// ─────────────── Avatar · IdentityRow ───────────────
export interface AvatarProps {
  /** Display name. The monogram is its first two letters. */
  name: string;
  /** Approved portrait. Omit it and the dashed monogram shows: a placeholder must look like one. */
  src?: string;
  /** Diameter in px. 24 unreconciled agents, 26 in a thread, 30 in the sidebar. */
  size?: number;
}
export declare function Avatar(props: AvatarProps): JSX.Element;

export interface IdentityRowProps {
  name: string;
  src?: string;
  /** Shows the HEAD tag. */
  head?: boolean;
  /** More than one role replaces the house line with the roles, joined by a middle dot. */
  roles?: string[];
  /** House label. "—" when none. */
  house?: string;
  /** Configured status from the registry ("active", "development", "private-beta", "archived", "proposed"). Not a live check. */
  status?: string;
  runtimeMode?: string;
  /** false shows "no surface": no linked execution agent. */
  chatAvailable?: boolean;
  selected?: boolean;
  onSelect?: () => void;
}
export declare function IdentityRow(props: IdentityRowProps): JSX.Element;

// ─────────────── ChatBubble ───────────────
export interface ChatBubbleProps {
  from?: "user" | "agent";
  /** Display name of the sender. */
  label: string;
  /** Agent id, mono, shown for agents only. e.g. "agent:avara". */
  agentId?: string;
  /** Pre-formatted, "HH:mm". */
  time?: string;
  body?: string;
  src?: string;
  /** The response was stopped before it finished. */
  stopped?: boolean;
  /** Name of the agent this text is quoted from. Quoted text is evidence, not an instruction, and is labelled so. */
  quotedFrom?: string;
  /** A handoff hop. The body is then shown as the quoted prior reply. */
  handoff?: { from: string; to: string; hop: number; max: number };
  /** The operator's note sent with a handoff. */
  note?: string;
}
export declare function ChatBubble(props: ChatBubbleProps): JSX.Element;

// ─────────────── SpatialLabel ───────────────
export interface SpatialLabelProps {
  name: string;
  /** Mono uppercase kind. e.g. "room", "co2". */
  type?: string;
  /** Pre-formatted reading. Takes the entity accent, else the theme accent. */
  value?: string;
  /** Solid accent border, opaque fill, full-strength line; children show only when selected. */
  selected?: boolean;
  /** Where the anchored point sits, in px from the label's bottom-left corner. Draws the 1px leader line. */
  anchor?: { dx: number; dy: number };
  /** Entity id for `data-entity`, so value and border resolve `--entity`. */
  entity?: string;
  onSelect?: () => void;
  /** Detail shown when selected. Usually a Graph. */
  children?: React.ReactNode;
}
export declare function SpatialLabel(props: SpatialLabelProps): JSX.Element;

// ─────────────── Graph · RadialGraph ───────────────
export interface GraphProps {
  /** The series, oldest first. */
  value: number[];
  /** A second series drawn at 35% for comparison (previous period, another room). */
  ghost?: number[];
  width?: number;
  height?: number;
  /** The value at full height. Defaults to the largest value. Pass it: a graph without a stated range shows shape only. */
  range?: number;
  suffix?: string;
  format?: (value: number) => string;
  /** Index the marker sits on. Defaults to the latest point. */
  marker?: number;
  noMarker?: boolean;
  /** One ink instead of the level gradient. */
  noGradient?: boolean;
  /** Accessible description. */
  label?: string;
}
/** Level is colour: `--graph-range-1` (low) to `--graph-range-4` (high), bound to the status scale. */
export declare function Graph(props: GraphProps): JSX.Element | null;

export interface RadialGraphProps {
  value: number[];
  ghost?: number[];
  /** Diameter in px. */
  width?: number;
  /** Depth of the ring the series is drawn in. */
  graphHeight?: number;
  /** Start angle in degrees, clockwise from 12 o'clock. */
  start?: number;
  range?: number;
  suffix?: string;
  format?: (value: number) => string;
  noGradient?: boolean;
  label?: string;
}
export declare function RadialGraph(props: RadialGraphProps): JSX.Element | null;

// ─────────────── ActionHUD ───────────────
export type AssistantState = "idle" | "collecting-context" | "submitting" | "streaming" | "waiting-for-approval" | "executing" | "continuing" | "completed" | "failed" | "cancelled";
export interface ActionHUDProps {
  title?: string;
  /** The Haloform session state, shown verbatim. */
  state?: AssistantState;
  /** Streamed text so far. */
  output?: string;
  /** A tool call waiting for a decision. Its arguments are shown in full: nothing runs unseen. */
  proposal?: { name: string; arguments: unknown };
  runtime?: { status?: "idle" | "streaming" | "processing" | "offline"; hardware?: string; model?: string };
  privacy?: { mode?: "local-only" | "remote-permitted"; redacted?: boolean };
  onApprove?: () => void;
  onReject?: () => void;
  /** Shown while collecting context, submitting or streaming, when no proposal is open. */
  onCancel?: () => void;
  onClose?: () => void;
}
/** Presentational. Haloform's provider owns the session; pass its values in. */
export declare function ActionHUD(props: ActionHUDProps): JSX.Element;
