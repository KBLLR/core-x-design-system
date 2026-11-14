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
