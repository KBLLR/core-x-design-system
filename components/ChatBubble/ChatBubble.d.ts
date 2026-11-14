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
