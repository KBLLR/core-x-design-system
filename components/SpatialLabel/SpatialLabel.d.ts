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
