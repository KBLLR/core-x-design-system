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
