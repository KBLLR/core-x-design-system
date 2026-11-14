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
