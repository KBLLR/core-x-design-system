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
