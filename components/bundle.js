/* @ds-bundle: {"format":4,"namespace":"KBLLRCoreXDesignSystem_019e2e","components":[{"name":"CX_ENTITIES","sourcePath":"assets/ecosystem/entities.js"},{"name":"CX_INSTITUTIONS","sourcePath":"assets/ecosystem/entities.js"},{"name":"CX_HOUSES","sourcePath":"assets/ecosystem/entities.js"},{"name":"CX_SPECTRUM","sourcePath":"assets/ecosystem/entities.js"},{"name":"CX_ICONS","sourcePath":"assets/icons/icons.js"},{"name":"CX_ICON_NAMES","sourcePath":"assets/icons/icons.js"},{"name":"Badge","sourcePath":"components/Badge/Badge.jsx"},{"name":"Button","sourcePath":"components/Button/Button.jsx"},{"name":"Card","sourcePath":"components/Card/Card.jsx"},{"name":"Dropdown","sourcePath":"components/Dropdown/Dropdown.jsx"},{"name":"EmptyState","sourcePath":"components/EmptyState/EmptyState.jsx"},{"name":"EntityLoader","sourcePath":"components/EntityLoader/EntityLoader.jsx"},{"name":"Field","sourcePath":"components/Field/Field.jsx"},{"name":"FunnelBar","sourcePath":"components/FunnelBar/FunnelBar.jsx"},{"name":"Icon","sourcePath":"components/Icon/Icon.jsx"},{"name":"Loader","sourcePath":"components/Loader/Loader.jsx"},{"name":"Marquee","sourcePath":"components/Marquee/Marquee.jsx"},{"name":"Panel","sourcePath":"components/Panel/Panel.jsx"},{"name":"ProvenanceChip","sourcePath":"components/ProvenanceChip/ProvenanceChip.jsx"},{"name":"Rail","sourcePath":"components/Rail/Rail.jsx"},{"name":"ServiceChip","sourcePath":"components/ServiceChip/ServiceChip.jsx"},{"name":"Skeleton","sourcePath":"components/Skeleton/Skeleton.jsx"},{"name":"Sparkline","sourcePath":"components/Sparkline/Sparkline.jsx"},{"name":"StatTile","sourcePath":"components/StatTile/StatTile.jsx"},{"name":"StatusDot","sourcePath":"components/StatusDot/StatusDot.jsx"},{"name":"GlassSurface","sourcePath":"components/GlassSurface/GlassSurface.jsx"},{"name":"GlassGroup","sourcePath":"components/GlassSurface/GlassSurface.jsx"},{"name":"GlassButton","sourcePath":"components/GlassSurface/GlassSurface.jsx"},{"name":"Avatar","sourcePath":"components/Avatar/Avatar.jsx"},{"name":"IdentityRow","sourcePath":"components/Avatar/Avatar.jsx"},{"name":"ChatBubble","sourcePath":"components/ChatBubble/ChatBubble.jsx"},{"name":"SpatialLabel","sourcePath":"components/SpatialLabel/SpatialLabel.jsx"},{"name":"Graph","sourcePath":"components/Graph/Graph.jsx"},{"name":"RadialGraph","sourcePath":"components/Graph/Graph.jsx"},{"name":"ActionHUD","sourcePath":"components/ActionHUD/ActionHUD.jsx"}],"sourceHashes":{"assets/ecosystem/entities.js":"eecce104395c","assets/icons/icons.js":"b3aa990b8b94","components/Badge/Badge.jsx":"e0d2b07dfafa","components/Button/Button.jsx":"42dfde3b7021","components/Card/Card.jsx":"84ce050dfae5","components/Dropdown/Dropdown.jsx":"e8e737cce2d5","components/EmptyState/EmptyState.jsx":"79968967b212","components/EntityLoader/EntityLoader.jsx":"398cbdada6c8","components/Field/Field.jsx":"9190c5b064bc","components/FunnelBar/FunnelBar.jsx":"3d563e07bfc3","components/Icon/Icon.jsx":"5f736037d6ef","components/Loader/Loader.jsx":"23def181b001","components/Marquee/Marquee.jsx":"acb04cabe9cf","components/Panel/Panel.jsx":"fd01ad406dad","components/ProvenanceChip/ProvenanceChip.jsx":"8c9962aba36c","components/Rail/Rail.jsx":"e73a485d8947","components/ServiceChip/ServiceChip.jsx":"feb92c1da9aa","components/Skeleton/Skeleton.jsx":"577fe774f994","components/Sparkline/Sparkline.jsx":"c6991f9ecf79","components/StatTile/StatTile.jsx":"d8b6743e3e11","components/StatusDot/StatusDot.jsx":"c485f80ef1c7","starter/core-x-app/app.config.js":"cebf317d3ca3","starter/core-x-app/app/modules/home.jsx":"a348ae133f2b","starter/core-x-app/app/modules/ops.jsx":"b8de12aafb53","starter/core-x-app/app/shell.jsx":"c74cb6326400","ui_kits/launcher/AppRegistry.jsx":"3a2e3fff18f8","ui_kits/launcher/LauncherAppGrid.jsx":"34dee5ef220c","ui_kits/launcher/LauncherHome.jsx":"1659f9b09d01","ui_kits/launcher/LauncherTerminal.jsx":"8511069d94fc","ui_kits/launcher/LoginGate.jsx":"0bb84397be42","ui_kits/runtime-v2/BottomBar.jsx":"99caafc80e97","ui_kits/runtime-v2/LeftRail.jsx":"9727410787b6","ui_kits/runtime-v2/RenderPanel.jsx":"7e739c9a2232","ui_kits/runtime-v2/RendererWindow.jsx":"59f2a339d27e","ui_kits/runtime-v2/RightStack.jsx":"9a97c8d7517e","ui_kits/runtime-v2/TopBar.jsx":"c833b27b7fa7","ui_kits/runtime-v2/VoiceStage.jsx":"43b4101c5158","ui_kits/runtime-v2/tweaks-panel.jsx":"22c052960f83","ui_kits/runtime/BoardMode.jsx":"051922a80ca1","ui_kits/runtime/ChatMode.jsx":"8479aee46160","ui_kits/runtime/OrchestratorMode.jsx":"8dbff9931c30","ui_kits/runtime/RuntimeChrome.jsx":"cacf15574157","components/GlassSurface/GlassSurface.jsx":"6343fe199b87","components/Avatar/Avatar.jsx":"339f326b2820","components/ChatBubble/ChatBubble.jsx":"f36373c19f69","components/SpatialLabel/SpatialLabel.jsx":"4e9199b3f22c","components/Graph/Graph.jsx":"0200ead8bb72","components/ActionHUD/ActionHUD.jsx":"05cf1d9ec90f"},"inlinedExternals":[],"unexposedExports":[{"name":"cxEntity","sourcePath":"assets/ecosystem/entities.js"},{"name":"cxIconSvg","sourcePath":"assets/icons/icons.js"}]} */

(() => {

const __ds_ns = (window.KBLLRCoreXDesignSystem_019e2e = window.KBLLRCoreXDesignSystem_019e2e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/ecosystem/entities.js
try { (() => {
// ============================================================
// KBLLR Core-X — ECOSYSTEM REGISTRY
// 23 entities · 8 institutions, 15 houses · one entity, one hex.
// The canonical source. tokens/ecosystem.css mirrors these accents as
// CSS custom properties; keep the two in step.
// ============================================================

/** @typedef {'institution'|'house'} Tier */

const CX_ENTITIES = [
// ── INSTITUTIONS ──
{
  id: 'corex',
  code: 'COREX',
  name: 'Core·X',
  accent: '#5cf08c',
  swatch: 'phosphor-50',
  tier: 'institution',
  family: 'operator',
  tagline: 'runtime · operator',
  metaphor: 'stack'
}, {
  id: 'kbllr',
  code: 'KBLLR',
  name: 'KBLLR',
  accent: '#ebe2cc',
  swatch: 'bone-92',
  tier: 'institution',
  family: 'institutional',
  tagline: 'institutional',
  metaphor: 'stroke'
}, {
  id: 'spacebot',
  code: 'SPCBT',
  name: 'spacebot',
  accent: '#5ce0f0',
  swatch: 'cyan-65',
  tier: 'institution',
  family: 'operator',
  tagline: 'operator · daemon',
  metaphor: 'scan'
}, {
  id: 'warehouse',
  code: 'WHSE',
  name: 'Warehouse',
  accent: '#f5c93d',
  swatch: 'ledger-gold',
  tier: 'institution',
  family: 'operator',
  tagline: 'operator · provenance',
  metaphor: 'bars'
}, {
  id: 'anthology',
  code: 'ANTH',
  name: 'Anthology',
  accent: '#b88a5a',
  swatch: 'sepia-aged',
  tier: 'institution',
  family: 'editorial',
  tagline: 'editorial · archive',
  metaphor: 'reveal'
}, {
  id: 'leagentdiary',
  code: 'LAD',
  name: 'LeAgentDiary',
  accent: '#b8d4c4',
  swatch: 'sage-trace',
  tier: 'institution',
  family: 'hybrid',
  tagline: 'hybrid',
  metaphor: 'trace'
}, {
  id: 'belle',
  code: 'BELLE',
  name: 'Le Belle Époch',
  accent: '#e89e7a',
  swatch: 'belle-peach',
  tier: 'institution',
  family: 'editorial',
  tagline: 'editorial · public masthead',
  metaphor: 'columns'
}, {
  id: 'vega',
  code: 'VEGA',
  name: 'Vega Laboratories',
  accent: '#9eb8ff',
  swatch: 'vega-blue',
  tier: 'institution',
  family: 'observatory',
  tagline: 'observatory',
  metaphor: 'constellation'
},
// ── HOUSES ──
{
  id: 'avatar',
  code: 'AVTR',
  name: 'Avatar Labs',
  accent: '#b6f25e',
  swatch: 'avatar-lime',
  tier: 'house',
  family: 'operator',
  tagline: 'operator',
  metaphor: 'pulse'
}, {
  id: 'rigging',
  code: 'RIG',
  name: 'Rigging Portal',
  accent: '#4ec3d4',
  swatch: 'rig-teal',
  tier: 'house',
  family: 'operator',
  tagline: 'operator · structure',
  metaphor: 'joints'
}, {
  id: 'visual',
  code: 'VISL',
  name: 'Visual Composition',
  accent: '#ffd28a',
  swatch: 'cinema-cream',
  tier: 'house',
  family: 'editorial',
  tagline: 'editorial · cinema',
  metaphor: 'aperture'
}, {
  id: 'campus',
  code: 'CMPS',
  name: 'Smart Campus',
  accent: '#a8e6c9',
  swatch: 'mint-spatial',
  tier: 'house',
  family: 'hybrid',
  tagline: 'hybrid · spatial',
  metaphor: 'walk'
}, {
  id: 'anja',
  code: 'ANJA',
  name: 'Project Anja',
  accent: '#f0c8d4',
  swatch: 'anja-rose',
  tier: 'house',
  family: 'editorial',
  tagline: 'editorial · personhood',
  metaphor: 'helix'
}, {
  id: 'platform',
  code: 'PLTF',
  name: 'Code Platformer',
  accent: '#8eaf90',
  swatch: 'olive-loop',
  tier: 'house',
  family: 'hybrid',
  tagline: 'hybrid · game loop',
  metaphor: 'hop'
}, {
  id: 'world',
  code: 'WRLD',
  name: 'World Generative',
  accent: '#7a8eff',
  swatch: 'world-indigo',
  tier: 'house',
  family: 'observatory',
  tagline: 'observatory',
  metaphor: 'orbit'
}, {
  id: 'moonsyc',
  code: 'MOON',
  name: 'Moonsyc',
  accent: '#c9a8ff',
  swatch: 'violet-sonic',
  tier: 'house',
  family: 'editorial',
  tagline: 'editorial · acoustic',
  metaphor: 'wave'
}, {
  id: 'emerg',
  code: 'EMRG',
  name: 'Emergence Lab',
  accent: '#84ff3d',
  swatch: 'emerg-acid',
  tier: 'house',
  family: 'operator',
  tagline: 'operator · error state',
  metaphor: 'swarm'
}, {
  id: 'memory',
  code: 'MEM',
  name: 'Memory Blocks',
  accent: '#cc8a3d',
  swatch: 'memory-bronze',
  tier: 'house',
  family: 'operator',
  tagline: 'operator · recall',
  metaphor: 'drop'
}, {
  id: 'label',
  code: 'LABL',
  name: 'Label Forge',
  accent: '#f5b89a',
  swatch: 'label-peach',
  tier: 'house',
  family: 'editorial',
  tagline: 'editorial · annotation',
  metaphor: 'swing'
}, {
  id: 'htdi',
  code: 'HTDI',
  name: 'HTDI Project',
  accent: '#ddd0b8',
  swatch: 'htdi-champagne',
  tier: 'house',
  family: 'hybrid',
  tagline: 'hybrid · method',
  metaphor: 'type'
}, {
  id: 'igi',
  code: 'IGI',
  name: 'IGI',
  accent: '#d8dee8',
  swatch: 'chrome-igi',
  tier: 'house',
  family: 'hybrid',
  tagline: 'hybrid · 3D / AR',
  metaphor: 'cube'
}, {
  id: 'vectra',
  code: 'VECT',
  name: 'V.E.C.T.R.A.',
  accent: '#ff5e6c',
  swatch: 'vector-coral',
  tier: 'house',
  family: 'operator',
  tagline: 'operator · vectors',
  metaphor: 'vectors'
}, {
  id: 'ember',
  code: 'EMBR',
  name: 'E.M.B.E.R.',
  accent: '#ff7a3d',
  swatch: 'ember-orange',
  tier: 'house',
  family: 'workshop',
  tagline: 'workshop · robotics',
  metaphor: 'sparks'
}];
const CX_INSTITUTIONS = CX_ENTITIES.filter(e => e.tier === 'institution');
const CX_HOUSES = CX_ENTITIES.filter(e => e.tier === 'house');

/** Look one up by id. */
function cxEntity(id) {
  return CX_ENTITIES.find(e => e.id === id) || null;
}

/**
 * The 23 accents in LCh-wheel order — the spectrum strip. Adjacent entries
 * are perceptually distinct, which is the whole point of the canonical pass.
 */
const CX_SPECTRUM = ['emerg', 'avatar', 'corex', 'campus', 'leagentdiary', 'platform', 'spacebot', 'rigging', 'vega', 'world', 'moonsyc', 'igi', 'kbllr', 'htdi', 'anja', 'label', 'belle', 'visual', 'warehouse', 'memory', 'anthology', 'ember', 'vectra'].map(id => CX_ENTITIES.find(e => e.id === id));
if (typeof window !== 'undefined') {
  Object.assign(window, {
    CX_ENTITIES,
    CX_INSTITUTIONS,
    CX_HOUSES,
    CX_SPECTRUM,
    cxEntity
  });
}
Object.assign(__ds_scope, { CX_ENTITIES, CX_INSTITUTIONS, CX_HOUSES, cxEntity, CX_SPECTRUM });
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/ecosystem/entities.js", error: String((e && e.message) || e) }); }

// assets/icons/icons.js
try { (() => {
// ============================================================
// KBLLR Core-X — ICON REGISTRY
// ------------------------------------------------------------
// Every icon is a path-string fragment for a 24×24 viewBox, drawn with
// stroke="currentColor", stroke-width="1.5", fill="none", round caps/joins.
// Lucide-compatible geometry — a Lucide icon can be dropped in verbatim and
// an icon from here can be handed to a Lucide-based project unchanged.
//
// The registry is the single source of truth. Do not inline an icon at point
// of use; add it here so the rail, the card grid and the docs never drift.
//
// Vanilla:  el.innerHTML = cxIconSvg('mode-voice', { size: 20 })
// React:    <Icon name="mode-voice" size={20} />
// ============================================================

const CX_ICONS = {
  // ── SHELL / NAVIGATION ────────────────────────────────────
  'home': '<path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10"/>',
  'grid': '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
  'menu': '<path d="M3 6h18M3 12h18M3 18h18"/>',
  'menu-dense': '<path d="M3 7h18M3 12h12M3 17h18"/>',
  'close': '<path d="M5 5l14 14M19 5L5 19"/>',
  'settings': '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.6 1.6 0 00-2.7 1.1V21a2 2 0 11-4 0v-.1a1.6 1.6 0 00-2.7-1.1l-.1.1a2 2 0 11-2.8-2.8l.1-.1A1.6 1.6 0 004.6 15H4.5a2 2 0 110-4h.1a1.6 1.6 0 001.1-2.7l-.1-.1a2 2 0 112.8-2.8l.1.1A1.6 1.6 0 0011 4.6V4.5a2 2 0 114 0v.1a1.6 1.6 0 002.7 1.1l.1-.1a2 2 0 112.8 2.8l-.1.1a1.6 1.6 0 001.1 2.7h.1a2 2 0 110 4h-.1Z"/>',
  'chevron-up': '<path d="M6 15l6-6 6 6"/>',
  'chevron-down': '<path d="M6 9l6 6 6-6"/>',
  'chevron-left': '<path d="M15 6l-6 6 6 6"/>',
  'chevron-right': '<path d="M9 6l6 6-6 6"/>',
  'arrow-up': '<path d="M12 20V4M5 11l7-7 7 7"/>',
  'arrow-down': '<path d="M12 4v16M5 13l7 7 7-7"/>',
  'arrow-left': '<path d="M20 12H4M11 5l-7 7 7 7"/>',
  'arrow-right': '<path d="M4 12h16M13 5l7 7-7 7"/>',
  'expand': '<path d="M4 9V4h5M20 15v5h-5M4 15v5h5M20 9V4h-5"/>',
  'collapse': '<path d="M9 4v5H4M15 20v-5h5M9 20v-5H4M15 4v5h5"/>',
  'minimise': '<path d="M5 12h14"/>',
  'maximise': '<rect x="4" y="4" width="16" height="16"/>',
  'external': '<path d="M14 4h6v6M20 4l-9 9M18 13v6a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h6"/>',
  'sidebar': '<rect x="3" y="4" width="18" height="16"/><path d="M9 4v16"/>',
  'panel-right': '<rect x="3" y="4" width="18" height="16"/><path d="M15 4v16"/>',
  'panel-bottom': '<rect x="3" y="4" width="18" height="16"/><path d="M3 15h18"/>',
  'drag': '<path d="M4 9h16M4 15h16"/>',
  'grip': '<circle cx="9" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="17" r="1"/><circle cx="15" cy="17" r="1"/>',
  // ── MODES / APPS ──────────────────────────────────────────
  'mode-board': '<rect x="3" y="3" width="18" height="18"/><path d="M3 9h18M9 9v12"/>',
  'mode-chat': '<path d="M21 12a8 8 0 01-8 8H8l-5 3 1.4-4.2A8 8 0 1121 12Z"/>',
  'mode-orchestrator': '<circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v4M12 11L6.5 17M12 11l5.5 6"/>',
  'mode-canvas': '<rect x="3" y="3" width="18" height="18"/><path d="M3 16l5-5 4 4 3-3 6 6"/>',
  'mode-image': '<rect x="3" y="5" width="18" height="14"/><circle cx="8.5" cy="10" r="1.5"/><path d="M3 17l5-5 4 4 3-3 6 6"/>',
  'mode-voice': '<path d="M12 4a3 3 0 00-3 3v6a3 3 0 006 0V7a3 3 0 00-3-3ZM5 11a7 7 0 0014 0M12 18v3"/>',
  'mode-dashboard': '<rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="5"/><rect x="13" y="10" width="8" height="11"/><rect x="3" y="13" width="8" height="8"/>',
  'mode-research': '<path d="M4 4h13l3 3v13H4z"/><path d="M8 10h8M8 14h8M8 18h5"/>',
  'mode-flow': '<rect x="3" y="4" width="6" height="5"/><rect x="15" y="4" width="6" height="5"/><rect x="9" y="15" width="6" height="5"/><path d="M6 9v3h12V9M12 12v3"/>',
  'mode-code': '<path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 3l-4 18"/>',
  'mode-assets': '<path d="M12 3l9 5-9 5-9-5 9-5Z"/><path d="M3 13l9 5 9-5M3 17l9 5 9-5"/>',
  'mode-world': '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 000 18 14 14 0 000-18Z"/>',
  'mode-graph': '<circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M7 6h10M6 8l5 8M18 8l-5 8"/>',
  'mode-disk': '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  'mode-system': '<rect x="4" y="4" width="16" height="16"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/>',
  'mode-terminal': '<rect x="3" y="4" width="18" height="16"/><path d="M7 10l3 2-3 2M13 14h4"/>',
  'mode-launcher': '<path d="M12 3l2.6 5.6 6.4.9-4.6 4.4 1.1 6.1-5.5-3-5.5 3 1.1-6.1L3 9.5l6.4-.9L12 3Z"/>',
  // ── RENDER TYPES ──────────────────────────────────────────
  'render-md': '<rect x="2" y="6" width="20" height="12"/><path d="M6 15V9l3 4 3-4v6M16 9v6M16 15l2-2M16 15l-2-2"/>',
  'render-code': '<path d="M9 8l-4 4 4 4M15 8l4 4-4 4"/>',
  'render-3d': '<path d="M12 2.5l8.5 4.9v9.2L12 21.5 3.5 16.6V7.4L12 2.5Z"/><path d="M12 12l8.5-4.9M12 12v9.5M12 12L3.5 7.1"/>',
  'render-mermaid': '<rect x="3" y="4" width="6" height="4"/><rect x="15" y="10" width="6" height="4"/><rect x="3" y="16" width="6" height="4"/><path d="M9 6h3v6h3M9 18h3v-6"/>',
  'render-image': '<rect x="3" y="4" width="18" height="16"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M3 17l5-5 4 4 3-3 6 6"/>',
  'render-audio': '<path d="M9 18V6l12-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0Zm12-2a3 3 0 11-6 0 3 3 0 016 0Z"/>',
  'render-video': '<rect x="2" y="6" width="14" height="12"/><path d="M16 10l6-3v10l-6-3"/>',
  'render-table': '<rect x="3" y="4" width="18" height="16"/><path d="M3 10h18M3 15h18M9 4v16M15 4v16"/>',
  'render-json': '<path d="M8 4H7a3 3 0 00-3 3v3a2 2 0 01-2 2 2 2 0 012 2v3a3 3 0 003 3h1M16 4h1a3 3 0 013 3v3a2 2 0 002 2 2 2 0 00-2 2v3a3 3 0 01-3 3h-1"/>',
  'render-html': '<path d="M4 3l1.5 17L12 22l6.5-2L20 3H4Z"/><path d="M8 8h8l-.5 4H9l.3 3 2.7.8 2.7-.8.2-2"/>',
  // ── MEDIA CONTROLS ────────────────────────────────────────
  'play': '<path d="M7 4l13 8-13 8V4Z"/>',
  'pause': '<path d="M9 4v16M15 4v16"/>',
  'stop': '<rect x="6" y="6" width="12" height="12"/>',
  'record': '<circle cx="12" cy="12" r="7"/>',
  'skip-back': '<path d="M19 5v14L8 12l11-7ZM5 4v16"/>',
  'skip-fwd': '<path d="M5 5v14l11-7L5 5ZM19 4v16"/>',
  'mic': '<path d="M12 4a3 3 0 00-3 3v6a3 3 0 006 0V7a3 3 0 00-3-3ZM5 11a7 7 0 0014 0M12 18v3"/>',
  'mic-off': '<path d="M9 7a3 3 0 015.9-.8M15 12v1a3 3 0 01-4.6 2.5M5 11a7 7 0 0011 5.8M12 18v3M3 3l18 18"/>',
  'speaker': '<path d="M11 5L6 9H3v6h3l5 4V5Z"/><path d="M15.5 8.5a5 5 0 010 7M18.5 5.5a9 9 0 010 13"/>',
  'mute': '<path d="M11 5L6 9H3v6h3l5 4V5Z"/><path d="M17 9l4 6M21 9l-4 6"/>',
  'waveform': '<path d="M3 12h2M7 8v8M11 4v16M15 7v10M19 10v4M23 12h-2"/>',
  // ── ACTIONS ───────────────────────────────────────────────
  'send': '<path d="M4 12L20 4l-5 16-3-7-8-1Z"/>',
  'copy': '<rect x="9" y="9" width="12" height="12"/><path d="M5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1"/>',
  'download': '<path d="M12 3v13M7 12l5 5 5-5M4 21h16"/>',
  'upload': '<path d="M12 20V7M7 11l5-5 5 5M4 3h16"/>',
  'share': '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.6l6.8-4M8.6 13.4l6.8 4"/>',
  'save': '<path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2Z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',
  'vault': '<rect x="3" y="4" width="18" height="16"/><circle cx="12" cy="12" r="4"/><path d="M12 8v1M12 15v1M8 12h1M15 12h1"/>',
  'trash': '<path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15"/><path d="M10 11v6M14 11v6"/>',
  'edit': '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5Z"/>',
  'pin': '<path d="M12 17v5M8 3h8M9 3l-1 8-3 3h14l-3-3-1-8"/>',
  'search': '<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/>',
  'filter': '<path d="M3 5h18l-7 8v6l-4-2v-4L3 5Z"/>',
  'sort': '<path d="M7 4v16M7 20l-3-3M7 20l3-3M17 20V4M17 4l-3 3M17 4l3 3"/>',
  'refresh': '<path d="M4 4v6h6M20 20v-6h-6"/><path d="M20 9A8 8 0 006 5.3L4 7M4 15a8 8 0 0014 3.7l2-1.7"/>',
  'sync': '<path d="M21 12a9 9 0 01-9 9M3 12a9 9 0 019-9"/><path d="M21 3v6h-6M3 21v-6h6"/>',
  'link': '<path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1"/><path d="M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/>',
  'attach': '<path d="M8.5 12.5l6.2-6.2a3 3 0 014.2 4.2l-8.1 8.1a5 5 0 01-7.1-7.1l8.3-8.3"/>',
  'plus': '<path d="M12 5v14M5 12h14"/>',
  'minus': '<path d="M5 12h14"/>',
  'check': '<path d="M4 12.5L9 17.5 20 6.5"/>',
  'more-h': '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  'more-v': '<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
  'undo': '<path d="M3 8h11a5 5 0 010 10H8"/><path d="M7 4L3 8l4 4"/>',
  'redo': '<path d="M21 8H10a5 5 0 000 10h6"/><path d="M17 4l4 4-4 4"/>',
  // ── STATUS / SYSTEM ───────────────────────────────────────
  'alert': '<path d="M12 3l9.5 17H2.5L12 3Z"/><path d="M12 9v5M12 17v.5"/>',
  'info': '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
  'error': '<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',
  'ok': '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.8 2.8L16 9.5"/>',
  'clock': '<circle cx="12" cy="12" r="9"/><path d="M12 7v5.5l3.5 2"/>',
  'lock': '<rect x="4" y="10" width="16" height="11"/><path d="M8 10V7a4 4 0 018 0v3"/>',
  'unlock': '<rect x="4" y="10" width="16" height="11"/><path d="M8 10V7a4 4 0 017.5-2"/>',
  'shield': '<path d="M12 3l8 3v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Z"/>',
  'cpu': '<rect x="6" y="6" width="12" height="12"/><rect x="10" y="10" width="4" height="4"/><path d="M10 2v4M14 2v4M10 18v4M14 18v4M2 10h4M2 14h4M18 10h4M18 14h4"/>',
  'gpu': '<rect x="2" y="7" width="20" height="11"/><circle cx="8" cy="12.5" r="2.5"/><circle cx="16" cy="12.5" r="2.5"/><path d="M6 18v3M18 18v3"/>',
  'memory': '<rect x="3" y="7" width="18" height="10"/><path d="M7 17v3M11 17v3M15 17v3M19 17v3M7 11h2M11 11h2M15 11h2"/>',
  'network': '<rect x="9" y="3" width="6" height="5"/><rect x="2" y="16" width="6" height="5"/><rect x="16" y="16" width="6" height="5"/><path d="M12 8v4M5 16v-2h14v2M12 12v2"/>',
  'battery': '<rect x="2" y="8" width="18" height="9"/><path d="M22 11v3M5 11v3M9 11v3"/>',
  'thermometer': '<path d="M14 14V5a2 2 0 10-4 0v9a4 4 0 104 0Z"/>',
  'bolt': '<path d="M13 2L4 14h6l-1 8 9-12h-6l1-8Z"/>',
  'power': '<path d="M12 3v9"/><path d="M18.4 6.6a9 9 0 11-12.8 0"/>',
  'plug': '<path d="M9 3v6M15 3v6M6 9h12v3a6 6 0 01-12 0V9ZM12 18v3"/>',
  'signal': '<path d="M4 20v-4M9 20v-8M14 20V8M19 20V4"/>',
  // ── DATA ──────────────────────────────────────────────────
  'database': '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  'layers': '<path d="M12 3l9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 17.5l9 5 9-5"/>',
  'branch': '<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="9" r="2"/><path d="M6 7v10M8 5h6a4 4 0 014 4"/>',
  'merge': '<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="12" r="2"/><path d="M6 7v10M8 19h6a4 4 0 004-4v-1"/>',
  'tree': '<rect x="9" y="2" width="6" height="4"/><rect x="2" y="18" width="6" height="4"/><rect x="16" y="18" width="6" height="4"/><path d="M12 6v6M5 18v-4h14v4M12 12v2"/>',
  'chart-bar': '<path d="M3 21h18"/><rect x="5" y="12" width="3" height="9"/><rect x="10.5" y="7" width="3" height="14"/><rect x="16" y="15" width="3" height="6"/>',
  'chart-line': '<path d="M3 21V3M3 21h18"/><path d="M6 15l4-5 3.5 3L20 6"/>',
  'chart-area': '<path d="M3 21V3M3 21h18"/><path d="M6 16l4-6 3.5 4L20 7v9H6v-4Z"/>',
  'gauge': '<path d="M4 18a9 9 0 1116 0"/><path d="M12 18l4.5-6"/><circle cx="12" cy="18" r="1"/>',
  'sparkline': '<path d="M2 16l3.5-6 3 4 3.5-8 3.5 6 3-3 2.5 4"/>',
  'histogram': '<path d="M3 20h18"/><path d="M4 20v-3M7 20v-7M10 20v-11M13 20v-8M16 20v-13M19 20v-5"/>',
  'funnel': '<path d="M3 4h18l-6 8v8H9v-8L3 4Z"/>',
  // ── FILES ─────────────────────────────────────────────────
  'file': '<path d="M14 3H6a1 1 0 00-1 1v16a1 1 0 001 1h12a1 1 0 001-1V8l-5-5Z"/><path d="M14 3v5h5"/>',
  'file-code': '<path d="M14 3H6a1 1 0 00-1 1v16a1 1 0 001 1h12a1 1 0 001-1V8l-5-5Z"/><path d="M14 3v5h5M10 13l-2 2 2 2M14 13l2 2-2 2"/>',
  'folder': '<path d="M3 7a1 1 0 011-1h5l2 2h9a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7Z"/>',
  'folder-open': '<path d="M3 7a1 1 0 011-1h5l2 2h9a1 1 0 011 1v2H3V7Z"/><path d="M3 11h19l-2 8a1 1 0 01-1 1H4a1 1 0 01-1-1v-8Z"/>',
  'archive': '<rect x="3" y="4" width="18" height="4"/><path d="M5 8v12h14V8M10 12h4"/>',
  'glb': '<path d="M12 2.5l8.5 4.9v9.2L12 21.5 3.5 16.6V7.4L12 2.5Z"/><path d="M12 12l8.5-4.9M12 12v9.5M12 12L3.5 7.1"/>',
  'hdri': '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a13 13 0 000 18M7 5.5a10 10 0 000 13M17 5.5a10 10 0 000 13"/>',
  'texture': '<rect x="3" y="3" width="18" height="18"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',
  // ── PEOPLE / SESSION ──────────────────────────────────────
  'user': '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>',
  'users': '<circle cx="9" cy="8" r="3.5"/><path d="M2 21a7 7 0 0114 0"/><path d="M16 5.5a3.5 3.5 0 010 6.5M17 21a7 7 0 00-2-4.9"/>',
  'key': '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 3h4v4"/>',
  'logout': '<path d="M14 4H6a1 1 0 00-1 1v14a1 1 0 001 1h8"/><path d="M17 8l4 4-4 4M9 12h12"/>',
  'brain': '<path d="M9 4a3 3 0 00-3 3 3 3 0 00-1 5.8V16a3 3 0 003 3h1V4H9ZM15 4a3 3 0 013 3 3 3 0 011 5.8V16a3 3 0 01-3 3h-1V4h1Z"/>',
  'atom': '<circle cx="12" cy="12" r="2"/><path d="M12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8Z"/><path d="M5 5c2.5-2.5 8.5 .5 12 4s6.5 9.5 4 12M19 5c2.5 2.5-.5 8.5-4 12S5.5 23.5 3 21"/>',
  'flask': '<path d="M9 3h6M10 3v6L4 20h16l-6-11V3M6.5 15h11"/>',
  'target': '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>',
  'eye': '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  'eye-off': '<path d="M4 4l16 16M10.5 6.3A9.7 9.7 0 0112 6c6.5 0 10 6 10 6a17 17 0 01-2.8 3.6M6.6 7.9A16.6 16.6 0 002 12s3.5 6 10 6a9.6 9.6 0 003.5-.6"/><path d="M9.9 10a3 3 0 004.2 4.2"/>',
  'sun': '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
  'moon': '<path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5Z"/>',
  'contrast': '<circle cx="12" cy="12" r="9"/><path d="M12 3v18a9 9 0 000-18Z"/>'
};

/** Icon names, sorted. Useful for building pickers and the docs grid. */
const CX_ICON_NAMES = Object.keys(CX_ICONS).sort();

/**
 * Render an icon as an SVG markup string. For vanilla pages and template
 * literals; React consumers should use the Icon component instead.
 */
function cxIconSvg(name, {
  size = 20,
  stroke = 1.5,
  className = ''
} = {}) {
  const body = CX_ICONS[name];
  if (!body) {
    console.warn(`[cx-icons] unknown icon "${name}"`);
    return '';
  }
  return `<svg class="${className}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" ` + `stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" ` + `aria-hidden="true">${body}</svg>`;
}

// Also expose on window so non-module pages and DCs can read the registry.
if (typeof window !== 'undefined') {
  window.CX_ICONS = CX_ICONS;
  window.CX_ICON_NAMES = CX_ICON_NAMES;
  window.cxIconSvg = cxIconSvg;
}
Object.assign(__ds_scope, { CX_ICONS, CX_ICON_NAMES, cxIconSvg });
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/icons/icons.js", error: String((e && e.message) || e) }); }

// components/Badge/Badge.jsx
try { (() => {
const BADGE_TONE = {
  neutral: {
    c: "var(--fg2)",
    b: "var(--border-light)"
  },
  up: {
    c: "var(--status-green)",
    b: "color-mix(in srgb, var(--status-green) 45%, var(--border-light))"
  },
  warn: {
    c: "var(--status-amber)",
    b: "color-mix(in srgb, var(--status-amber) 45%, var(--border-light))"
  },
  down: {
    c: "var(--status-red)",
    b: "color-mix(in srgb, var(--status-red) 45%, var(--border-light))"
  },
  info: {
    c: "var(--status-blue)",
    b: "color-mix(in srgb, var(--status-blue) 45%, var(--border-light))"
  }
};
function Badge({
  children,
  tone = "neutral",
  mono = true,
  dotted = false,
  solid = false,
  dot = false
}) {
  const t = BADGE_TONE[tone] || BADGE_TONE.neutral;
  const style = {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    padding: "2px 6px",
    fontFamily: mono ? "var(--font-mono)" : "var(--font-heading)",
    fontSize: 10,
    lineHeight: 1.5,
    letterSpacing: mono ? "0.06em" : "0.12em",
    textTransform: mono ? "none" : "uppercase",
    border: `1px ${dotted ? "dotted" : "dashed"} ${solid ? "transparent" : t.b}`,
    color: solid ? "var(--bg)" : t.c,
    background: solid ? t.c : "transparent",
    whiteSpace: "nowrap"
  };
  return React.createElement("span", {
    style
  }, dot && React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "50%",
      background: solid ? "var(--bg)" : t.c,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Badge/Badge.jsx", error: String((e && e.message) || e) }); }

// components/Button/Button.jsx
try { (() => {
function Button({
  children,
  variant = "ghost",
  size = "md",
  disabled = false,
  icon,
  onClick,
  type = "button",
  full = false
}) {
  const pad = size === "sm" ? "6px 12px" : size === "lg" ? "13px 24px" : "10px 18px";
  const fs = size === "sm" ? 10 : size === "lg" ? 12 : 11;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: pad,
    fontFamily: "var(--font-heading)",
    fontSize: fs,
    fontWeight: 500,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    flexShrink: 0,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    width: full ? "100%" : "auto",
    transition: "background .15s, border-color .15s, color .15s"
  };
  const skin = variant === "primary" ? {
    background: "var(--accent)",
    color: "var(--bg)",
    border: "1px solid var(--accent)"
  } : variant === "danger" ? {
    background: "transparent",
    color: "var(--status-red)",
    border: "1px dashed color-mix(in srgb, var(--status-red) 50%, var(--border-light))"
  } : {
    background: "transparent",
    color: "var(--fg2)",
    border: "1px dashed var(--border)"
  };
  return React.createElement("button", {
    type,
    onClick,
    disabled,
    style: {
      ...base,
      ...skin
    },
    "data-variant": variant
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/EntityLoader/EntityLoader.jsx
try { (() => {
// Each entity carries ONE motion metaphor drawn from its own semantics —
// Warehouse fills ledger bars, Rigging lights spine joints, Vega draws a
// constellation. 14 distinct motions cover the 23 entities; several share a
// primitive because their metaphors genuinely coincide (a page turn and a
// newspaper column are both a sequential reveal).

const R = React.createElement;
const rot = (i, n, r, cx, cy) => {
  const a = i / n * Math.PI * 2 - Math.PI / 2;
  return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
};
const MOTIONS = {
  /** Routing layers stacking — Core·X. */
  stack: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, [0, 1, 2].map(i => R("rect", {
    key: i,
    x: 10,
    y: 12 + i * 10,
    width: 28,
    height: 7,
    fill: "none",
    stroke: c,
    strokeWidth: 1.5,
    opacity: 0.25,
    style: {
      animation: `kx-fill 1.5s ${i * 0.18}s var(--ease-in-out) infinite`
    }
  }))),
  /** A single ceremonial stroke drawing itself — KBLLR. */
  stroke: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, R("path", {
    d: "M16 10v28M16 24l14-14M16 24l14 14",
    fill: "none",
    stroke: c,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeDasharray: 70,
    strokeDashoffset: 70,
    style: {
      animation: "kx-draw 1.8s var(--ease-in-out) infinite"
    }
  })),
  /** A scan beam sweeping a log — spacebot. */
  scan: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, R("rect", {
    x: 8,
    y: 10,
    width: 32,
    height: 28,
    fill: "none",
    stroke: c,
    strokeWidth: 1,
    opacity: 0.3,
    strokeDasharray: "3 3"
  }), [0, 1, 2, 3].map(i => R("line", {
    key: i,
    x1: 12,
    y1: 16 + i * 6,
    x2: 36,
    y2: 16 + i * 6,
    stroke: c,
    strokeWidth: 1,
    opacity: 0.2
  })), R("line", {
    x1: 8,
    y1: 12,
    x2: 40,
    y2: 12,
    stroke: c,
    strokeWidth: 2,
    style: {
      animation: "kx-beam 1.6s var(--ease-in-out) infinite"
    }
  })),
  /** Ledger bars filling — Warehouse. */
  bars: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, [0, 1, 2, 3].map(i => R("g", {
    key: i
  }, R("rect", {
    x: 10,
    y: 13 + i * 7,
    width: 28,
    height: 4,
    fill: c,
    opacity: 0.14
  }), R("rect", {
    x: 10,
    y: 13 + i * 7,
    width: 28,
    height: 4,
    fill: c,
    style: {
      transformOrigin: "10px 0",
      animation: `kx-fill-x 1.9s ${i * 0.16}s var(--ease-out) infinite`
    }
  })))),
  /** Sequential reveal — Anthology (page turn), Belle (columns), HTDI (typewriter). */
  reveal: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, R("rect", {
    x: 10,
    y: 9,
    width: 28,
    height: 30,
    fill: "none",
    stroke: c,
    strokeWidth: 1,
    opacity: 0.35
  }), [0, 1, 2, 3, 4].map(i => R("line", {
    key: i,
    x1: 14,
    y1: 15 + i * 6,
    x2: 34,
    y2: 15 + i * 6,
    stroke: c,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeDasharray: 20,
    strokeDashoffset: 20,
    style: {
      animation: `kx-draw 2.2s ${i * 0.22}s linear infinite`
    }
  }))),
  columns: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, [0, 1, 2].map(col => R("g", {
    key: col
  }, [0, 1, 2, 3, 4].map(i => R("line", {
    key: i,
    x1: 9 + col * 11,
    y1: 13 + i * 5.5,
    x2: 17 + col * 11,
    y2: 13 + i * 5.5,
    stroke: c,
    strokeWidth: 1.4,
    strokeLinecap: "round",
    opacity: 0.3,
    style: {
      animation: `kx-fill 2s ${(col * 5 + i) * 0.08}s var(--ease-in-out) infinite`
    }
  }))))),
  type: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, [0, 1, 2].map(i => R("line", {
    key: i,
    x1: 11,
    y1: 17 + i * 7,
    x2: 33,
    y2: 17 + i * 7,
    stroke: c,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeDasharray: 22,
    strokeDashoffset: 22,
    style: {
      animation: `kx-draw 2.4s ${i * 0.6}s linear infinite`
    }
  })), R("rect", {
    x: 34,
    y: 29,
    width: 2,
    height: 8,
    fill: c,
    style: {
      animation: "kx-blink 1.06s steps(1,end) infinite"
    }
  })),
  /** A handwritten trace — LeAgentDiary. */
  trace: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, R("path", {
    d: "M10 30c4-10 6 6 10-2s6 8 10-4 5 6 8 2",
    fill: "none",
    stroke: c,
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeDasharray: 60,
    strokeDashoffset: 60,
    style: {
      animation: "kx-draw 2.4s var(--ease-in-out) infinite"
    }
  })),
  /** Constellation drawing itself — Vega. */
  constellation: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, R("path", {
    d: "M12 32L20 14l9 12 8-16",
    fill: "none",
    stroke: c,
    strokeWidth: 1,
    opacity: 0.55,
    strokeDasharray: 60,
    strokeDashoffset: 60,
    style: {
      animation: "kx-draw 2.6s var(--ease-in-out) infinite"
    }
  }), [[12, 32], [20, 14], [29, 26], [37, 10]].map(([x, y], i) => R("circle", {
    key: i,
    cx: x,
    cy: y,
    r: 2.4,
    fill: c,
    style: {
      animation: `kx-fill 2.6s ${i * 0.3}s var(--ease-out) infinite`
    }
  }))),
  /** A face pulsing / blinking — Avatar. */
  pulse: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, R("ellipse", {
    cx: 24,
    cy: 23,
    rx: 12,
    ry: 14,
    fill: "none",
    stroke: c,
    strokeWidth: 1.5,
    opacity: 0.5,
    style: {
      animation: "kx-pulse 1.6s var(--ease-in-out) infinite"
    }
  }), R("circle", {
    cx: 19,
    cy: 21,
    r: 1.6,
    fill: c,
    style: {
      animation: "kx-wink 2.4s steps(1,end) infinite"
    }
  }), R("circle", {
    cx: 29,
    cy: 21,
    r: 1.6,
    fill: c,
    style: {
      animation: "kx-wink 2.4s steps(1,end) infinite"
    }
  }), R("path", {
    d: "M20 30q4 3 8 0",
    fill: "none",
    stroke: c,
    strokeWidth: 1.4,
    strokeLinecap: "round",
    opacity: 0.7
  })),
  /** Spine joints lighting in sequence — Rigging. */
  joints: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, R("line", {
    x1: 24,
    y1: 9,
    x2: 24,
    y2: 39,
    stroke: c,
    strokeWidth: 1,
    opacity: 0.3
  }), [0, 1, 2, 3, 4].map(i => R("circle", {
    key: i,
    cx: 24,
    cy: 11 + i * 7,
    r: 3,
    fill: "none",
    stroke: c,
    strokeWidth: 1.5,
    style: {
      animation: `kx-fill 1.6s ${i * 0.15}s var(--ease-in-out) infinite`
    }
  }))),
  /** A camera aperture opening — Visual Composition. */
  aperture: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, R("circle", {
    cx: 24,
    cy: 24,
    r: 14,
    fill: "none",
    stroke: c,
    strokeWidth: 1,
    opacity: 0.4
  }), R("g", {
    style: {
      transformOrigin: "24px 24px",
      animation: "kx-iris 2.2s var(--ease-in-out) infinite"
    }
  }, [0, 1, 2, 3, 4, 5].map(i => {
    const [x, y] = rot(i, 6, 8, 24, 24);
    return R("line", {
      key: i,
      x1: 24,
      y1: 24,
      x2: x,
      y2: y,
      stroke: c,
      strokeWidth: 1.5,
      strokeLinecap: "round"
    });
  }))),
  /** Footsteps crossing a space — Smart Campus. */
  walk: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, R("path", {
    d: "M8 34h32",
    stroke: c,
    strokeWidth: 1,
    opacity: 0.3
  }), [0, 1, 2, 3].map(i => R("rect", {
    key: i,
    x: 11 + i * 8,
    y: i % 2 ? 27 : 30,
    width: 5,
    height: 3,
    fill: c,
    style: {
      animation: `kx-fill 1.8s ${i * 0.22}s var(--ease-in-out) infinite`
    }
  }))),
  /** A rotating double helix — Project Anja. */
  helix: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, [0, 1].map(k => R("path", {
    key: k,
    d: k ? "M18 9c12 8-12 22 0 30" : "M30 9c-12 8 12 22 0 30",
    fill: "none",
    stroke: c,
    strokeWidth: 1.5,
    opacity: 0.75,
    style: {
      animation: `kx-pulse 1.8s ${k * 0.9}s var(--ease-in-out) infinite`
    }
  })), [0, 1, 2, 3].map(i => R("line", {
    key: "r" + i,
    x1: 18,
    y1: 14 + i * 7,
    x2: 30,
    y2: 14 + i * 7,
    stroke: c,
    strokeWidth: 1,
    opacity: 0.3
  }))),
  /** A hop over scrolling ground — Code Platformer. */
  hop: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, R("rect", {
    x: 8,
    y: 34,
    width: 32,
    height: 2,
    fill: c,
    opacity: 0.35
  }), R("rect", {
    x: 21,
    y: 24,
    width: 6,
    height: 6,
    fill: c,
    style: {
      animation: "kx-hop 1.1s var(--ease-in-out) infinite"
    }
  })),
  /** A body in orbit — World Generative. */
  orbit: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, R("circle", {
    cx: 24,
    cy: 24,
    r: 5,
    fill: c,
    opacity: 0.85
  }), R("ellipse", {
    cx: 24,
    cy: 24,
    rx: 16,
    ry: 7,
    fill: "none",
    stroke: c,
    strokeWidth: 1,
    opacity: 0.35
  }), R("g", {
    style: {
      transformOrigin: "24px 24px",
      animation: "kx-spin 2.4s linear infinite"
    }
  }, R("circle", {
    cx: 40,
    cy: 24,
    r: 2.6,
    fill: c
  }))),
  /** An audio waveform — Moonsyc. */
  wave: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, [0, 1, 2, 3, 4, 5, 6].map(i => R("rect", {
    key: i,
    x: 9 + i * 5,
    y: 18,
    width: 2.5,
    height: 12,
    fill: c,
    style: {
      transformOrigin: "center",
      animation: `kx-bar 1.1s ${i * 0.1}s var(--ease-in-out) infinite`
    }
  }))),
  /** A behaviour swarm — Emergence Lab. */
  swarm: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, [0, 1, 2, 3, 4, 5, 6, 7].map(i => {
    const [x, y] = rot(i, 8, 13, 24, 24);
    return R("circle", {
      key: i,
      cx: x,
      cy: y,
      r: 2,
      fill: c,
      style: {
        animation: `kx-fill 1.3s ${i * 0.08}s var(--ease-in-out) infinite`
      }
    });
  })),
  /** Blocks dropping into place — Memory Blocks. */
  drop: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, [0, 1, 2].map(i => R("rect", {
    key: i,
    x: 13 + i * 8,
    y: 28,
    width: 6,
    height: 6,
    fill: c,
    style: {
      animation: `kx-drop 1.6s ${i * 0.2}s var(--ease-out) infinite`
    }
  })), R("line", {
    x1: 10,
    y1: 36,
    x2: 38,
    y2: 36,
    stroke: c,
    strokeWidth: 1,
    opacity: 0.4
  })),
  /** A tag swinging from its hole — Label Forge. */
  swing: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, R("g", {
    style: {
      transformOrigin: "24px 11px",
      animation: "kx-swing 2s var(--ease-in-out) infinite"
    }
  }, R("line", {
    x1: 24,
    y1: 11,
    x2: 24,
    y2: 18,
    stroke: c,
    strokeWidth: 1
  }), R("path", {
    d: "M17 18h14v13l-7 5-7-5z",
    fill: "none",
    stroke: c,
    strokeWidth: 1.5
  }), R("circle", {
    cx: 24,
    cy: 23,
    r: 1.6,
    fill: c
  })), R("circle", {
    cx: 24,
    cy: 11,
    r: 1.6,
    fill: c
  })),
  /** A wireframe cube rotating — IGI. */
  cube: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, R("g", {
    style: {
      transformOrigin: "24px 24px",
      animation: "kx-tilt 3s var(--ease-in-out) infinite"
    }
  }, R("path", {
    d: "M24 10l11 6v13l-11 6-11-6V16z",
    fill: "none",
    stroke: c,
    strokeWidth: 1.4
  }), R("path", {
    d: "M24 10v13m0 0l11-7m-11 7l-11-7m11 7v12",
    fill: "none",
    stroke: c,
    strokeWidth: 1,
    opacity: 0.5
  }))),
  /** Vectors emanating from a point — V.E.C.T.R.A. */
  vectors: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, R("circle", {
    cx: 24,
    cy: 24,
    r: 2.4,
    fill: c
  }), [0, 1, 2, 3, 4, 5].map(i => {
    const [x, y] = rot(i, 6, 15, 24, 24);
    return R("line", {
      key: i,
      x1: 24,
      y1: 24,
      x2: x,
      y2: y,
      stroke: c,
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeDasharray: 16,
      strokeDashoffset: 16,
      style: {
        animation: `kx-draw 1.8s ${i * 0.1}s var(--ease-out) infinite`
      }
    });
  })),
  /** Forge sparks rising — E.M.B.E.R. */
  sparks: (c, s) => R("svg", {
    width: s,
    height: s,
    viewBox: "0 0 48 48"
  }, R("path", {
    d: "M15 36h18l-3-6H18z",
    fill: "none",
    stroke: c,
    strokeWidth: 1.4,
    opacity: 0.7
  }), [0, 1, 2, 3, 4].map(i => R("circle", {
    key: i,
    cx: 16 + i * 4,
    cy: 26,
    r: 1.5,
    fill: c,
    style: {
      animation: `kx-spark 1.5s ${i * 0.18}s var(--ease-out) infinite`
    }
  })))
};

/**
 * The loader for an entity. Motion comes from the entity's own metaphor,
 * colour from its canonical accent — never pass a colour that isn't its own.
 */
function EntityLoader({
  entity,
  id,
  size = 64,
  color,
  caption
}) {
  const e = entity || __ds_scope.cxEntity(id) || __ds_scope.CX_ENTITIES[0];
  const motion = MOTIONS[e.metaphor] || MOTIONS.stack;
  const node = motion(color || e.accent, size);
  if (!caption) return node;
  return R("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8
    },
    role: "status",
    "aria-label": `${e.name} loading`
  }, node, R("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--fg2)"
    }
  }, caption === true ? e.name : caption));
}
Object.assign(__ds_scope, { CX_ENTITIES: __ds_scope.CX_ENTITIES, cxEntity: __ds_scope.cxEntity, EntityLoader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/EntityLoader/EntityLoader.jsx", error: String((e && e.message) || e) }); }

// components/Field/Field.jsx
try { (() => {
function Field({
  label,
  value,
  placeholder,
  mono = true,
  onChange,
  disabled = false,
  invalid = false,
  hint,
  id,
  type = "text"
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || `kx-${Math.random().toString(36).slice(2, 8)}`;
  const border = invalid ? "1px solid var(--status-red)" : focus ? "1px solid var(--accent)" : "1px dashed var(--border)";
  return React.createElement("label", {
    htmlFor: fid,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
      opacity: disabled ? 0.5 : 1
    }
  }, label && React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 10,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      color: "var(--fg2)"
    }
  }, label), React.createElement("input", {
    id: fid,
    type,
    value,
    placeholder,
    disabled,
    onChange: onChange ? e => onChange(e.target.value) : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      padding: "10px 13px",
      background: "var(--bg-input)",
      border,
      color: "var(--fg1)",
      fontFamily: mono ? "var(--font-mono)" : "var(--font-body)",
      fontSize: 13,
      outline: "none",
      transition: "border-color .15s"
    }
  }), hint && React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: invalid ? "var(--status-red)" : "var(--fg3)",
      letterSpacing: "0.04em"
    }
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Field/Field.jsx", error: String((e && e.message) || e) }); }

// components/FunnelBar/FunnelBar.jsx
try { (() => {
/**
 * Stage progress as done-vs-waiting. Bars are scaled against the largest stage
 * so the shape of the funnel is legible, not against each row's own total.
 */
function FunnelBar({
  stages = [],
  max,
  labelWidth = 140,
  showTotals = true
}) {
  const peak = max || stages.reduce((m, s) => Math.max(m, (s.done || 0) + (s.waiting || 0)), 0) || 1;
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5
    }
  }, stages.map(s => {
    const total = (s.done || 0) + (s.waiting || 0);
    return React.createElement("div", {
      key: s.id || s.label,
      style: {
        display: "grid",
        gridTemplateColumns: `${labelWidth}px 1fr auto`,
        gap: 10,
        alignItems: "center"
      }
    }, React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        color: "var(--fg2)",
        letterSpacing: "0.04em",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, s.label, s.optional && React.createElement("em", {
      style: {
        color: "var(--fg-dim)",
        fontStyle: "normal",
        fontSize: 9
      }
    }, " optional")), React.createElement("span", {
      "aria-hidden": true,
      style: {
        display: "flex",
        height: 10,
        border: "1px dashed var(--border-light)",
        background: "rgba(16,18,16,0.03)",
        overflow: "hidden"
      }
    }, React.createElement("span", {
      style: {
        width: `${(s.done || 0) / peak * 100}%`,
        background: "var(--status-green)",
        opacity: 0.85,
        transition: "width var(--dur-slow) var(--ease-out)"
      }
    }), React.createElement("span", {
      style: {
        width: `${(s.waiting || 0) / peak * 100}%`,
        background: "repeating-linear-gradient(45deg, var(--border) 0 3px, transparent 3px 6px)",
        transition: "width var(--dur-slow) var(--ease-out)"
      }
    })), showTotals && React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        color: "var(--fg1)",
        fontVariantNumeric: "tabular-nums",
        minWidth: 54,
        textAlign: "right"
      }
    }, s.done, s.waiting ? React.createElement("em", {
      style: {
        color: "var(--fg-dim)",
        fontStyle: "normal"
      }
    }, ` / ${total}`) : null));
  }));
}
Object.assign(__ds_scope, { FunnelBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/FunnelBar/FunnelBar.jsx", error: String((e && e.message) || e) }); }

// components/Icon/Icon.jsx
try { (() => {
/**
 * The system's only icon renderer. Reads the shared registry so the rail,
 * the card grid and the docs can never drift apart.
 */
function Icon({
  name,
  size = 20,
  stroke = 1.5,
  title,
  className,
  style
}) {
  const body = __ds_scope.CX_ICONS[name];
  if (!body) {
    if (typeof console !== "undefined") console.warn(`[Icon] unknown icon "${name}"`);
    return null;
  }
  return React.createElement("svg", {
    className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: title ? "img" : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : true,
    style: {
      display: "block",
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: body
    }
  });
}
Object.assign(__ds_scope, { CX_ICONS: __ds_scope.CX_ICONS, CX_ICON_NAMES: __ds_scope.CX_ICON_NAMES, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/Card/Card.jsx
try { (() => {
const TIER = {
  flush: {
    fill: "var(--mat-1-fill)",
    blur: 0,
    shadow: "var(--shadow-0)",
    border: "1px dashed var(--border-light)"
  },
  raised: {
    fill: "var(--mat-2-fill)",
    blur: 12,
    shadow: "var(--shadow-1)",
    border: "1px dashed var(--border-light)"
  },
  floating: {
    fill: "var(--mat-3-fill)",
    blur: 12,
    shadow: "var(--shadow-2), var(--edge-lip)",
    border: "1px dashed var(--border-light)"
  },
  overlay: {
    fill: "var(--mat-4-fill)",
    blur: 16,
    shadow: "var(--shadow-3), var(--edge-both)",
    border: "1px dashed var(--border)"
  }
};
function Card({
  variant = "action",
  tier = "raised",
  title,
  code,
  desc,
  meta,
  icon,
  tag,
  tagTone = "neutral",
  value,
  unit,
  media,
  href,
  onClick,
  children,
  dense = false,
  disabled = false,
  external = false
}) {
  const t = TIER[tier] || TIER.raised;
  const interactive = !!(href || onClick) && !disabled;
  const pad = dense ? 10 : 14;
  const base = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: dense ? 5 : 8,
    padding: pad,
    background: t.fill,
    border: external ? "1px dotted var(--border)" : t.border,
    boxShadow: t.shadow,
    backdropFilter: t.blur ? `blur(${t.blur}px)` : "none",
    WebkitBackdropFilter: t.blur ? `blur(${t.blur}px)` : "none",
    textDecoration: "none",
    color: "var(--fg1)",
    textAlign: "left",
    opacity: disabled ? 0.45 : 1,
    cursor: disabled ? "not-allowed" : interactive ? "pointer" : "default",
    minWidth: 0
  };
  const TAG_TONE = {
    neutral: "var(--fg2)",
    up: "var(--status-green)",
    warn: "var(--status-amber)",
    down: "var(--status-red)",
    info: "var(--status-blue)",
    new: "var(--status-blue)"
  };
  const tagEl = tag && React.createElement("span", {
    style: {
      position: "absolute",
      top: pad,
      right: pad,
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: TAG_TONE[tagTone] || TAG_TONE.neutral,
      border: `1px dashed color-mix(in srgb, ${TAG_TONE[tagTone] || TAG_TONE.neutral} 45%, var(--border-light))`,
      padding: "1px 5px"
    }
  }, tag);
  const titleEl = title && React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: dense ? 11 : 12,
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--fg1)",
      lineHeight: 1.3,
      paddingRight: tag ? 44 : 0
    }
  }, title);
  const codeEl = code && React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      letterSpacing: "0.12em",
      color: "var(--fg3)",
      textTransform: "uppercase"
    }
  }, code);
  const descEl = desc && React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: dense ? 11 : 12,
      color: "var(--fg2)",
      lineHeight: 1.45,
      margin: 0
    }
  }, desc);
  const metaEl = meta && React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      color: "var(--fg3)",
      letterSpacing: "0.06em",
      marginTop: "auto",
      paddingTop: 4
    }
  }, meta);
  let body;
  if (variant === "stat") {
    body = [codeEl || title && React.createElement("span", {
      key: "k",
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 9,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--fg3)"
      }
    }, title), React.createElement("span", {
      key: "v",
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 5
      }
    }, React.createElement("span", {
      style: {
        fontFamily: "var(--font-heading)",
        fontWeight: 600,
        fontSize: dense ? 20 : 26,
        lineHeight: 1,
        fontVariantNumeric: "tabular-nums",
        color: "var(--fg1)"
      }
    }, value), unit && React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 9.5,
        color: "var(--fg3)",
        textTransform: "uppercase",
        letterSpacing: "0.06em"
      }
    }, unit)), descEl, children];
  } else if (variant === "media") {
    body = [React.createElement("div", {
      key: "m",
      style: {
        height: dense ? 72 : 108,
        border: "1px dashed var(--border-light)",
        background: "repeating-linear-gradient(45deg, rgba(16,18,16,0.03) 0 12px, rgba(16,18,16,0.06) 12px 24px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-mono)",
        fontSize: 9.5,
        color: "var(--fg3)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        overflow: "hidden"
      }
    }, media || "no preview"), titleEl, codeEl, descEl, metaEl];
  } else if (variant === "dense") {
    body = [React.createElement("div", {
      key: "r",
      style: {
        display: "grid",
        gridTemplateColumns: icon ? "auto 1fr auto" : "1fr auto",
        gap: 10,
        alignItems: "center"
      }
    }, icon && React.createElement("span", {
      style: {
        color: "var(--fg2)"
      }
    }, React.createElement(__ds_scope.Icon, {
      name: icon,
      size: 16
    })), React.createElement("span", {
      style: {
        minWidth: 0
      }
    }, titleEl, descEl), codeEl), children];
  } else {
    // action — icon + title + code + desc, the launcher card
    body = [icon && React.createElement("span", {
      key: "i",
      style: {
        color: "var(--fg1)"
      }
    }, React.createElement(__ds_scope.Icon, {
      name: icon,
      size: dense ? 18 : 22
    })), titleEl, codeEl, descEl, metaEl, children];
  }
  const El = href ? "a" : onClick ? "button" : "div";
  return React.createElement(El, {
    href: href || undefined,
    onClick: disabled ? undefined : onClick,
    disabled: El === "button" ? disabled : undefined,
    className: interactive ? "kx-raise" : undefined,
    style: base,
    "data-tier": tier,
    "data-variant": variant
  }, tagEl, ...(Array.isArray(body) ? body : [body]));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Card/Card.jsx", error: String((e && e.message) || e) }); }

// components/Dropdown/Dropdown.jsx
try { (() => {
/**
 * The system's menu surface. Opens on click (never hover — an operator menu
 * must not fire on a passing cursor), closes on outside click, Escape, or
 * selection. Arrow keys move, Enter commits.
 */
function Dropdown({
  label,
  value,
  options = [],
  onChange,
  align = "left",
  width,
  trigger = "pill",
  icon,
  placeholder = "select",
  disabled = false,
  tier = "overlay",
  footer,
  multi = false
}) {
  const [open, setOpen] = React.useState(false);
  const [cursor, setCursor] = React.useState(-1);
  const rootRef = React.useRef(null);
  const opts = options.map(o => typeof o === "object" ? o : {
    value: o,
    label: String(o)
  });
  const selected = multi ? opts.filter(o => Array.isArray(value) && value.includes(o.value)) : opts.filter(o => o.value === value);
  const shown = multi ? selected.length ? `${selected.length} selected` : placeholder : selected[0]?.label ?? placeholder;
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setCursor(c => Math.min(opts.length - 1, c + 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setCursor(c => Math.max(0, c - 1));
      }
      if (e.key === "Enter" && cursor >= 0) {
        e.preventDefault();
        commit(opts[cursor]);
      }
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, cursor, opts]);
  const commit = o => {
    if (o.disabled) return;
    if (multi) {
      const next = Array.isArray(value) ? [...value] : [];
      const i = next.indexOf(o.value);
      if (i >= 0) next.splice(i, 1);else next.push(o.value);
      onChange?.(next);
    } else {
      onChange?.(o.value);
      setOpen(false);
    }
  };
  const TRIGGER = {
    pill: {
      padding: "5px 10px",
      border: "1px dashed var(--border)",
      background: "transparent"
    },
    field: {
      padding: "9px 12px",
      border: open ? "1px solid var(--accent)" : "1px dashed var(--border)",
      background: "var(--bg-input)",
      width: "100%"
    },
    ghost: {
      padding: "5px 8px",
      border: "1px dashed transparent",
      background: "transparent"
    }
  }[trigger] || {};
  const MAT = {
    overlay: {
      background: "var(--mat-4-fill)",
      shadow: "var(--shadow-3), var(--edge-both)"
    },
    modal: {
      background: "var(--mat-5-fill)",
      shadow: "var(--shadow-4), var(--edge-both)"
    }
  }[tier] || {
    background: "var(--mat-4-fill)",
    shadow: "var(--shadow-3)"
  };
  return React.createElement("div", {
    ref: rootRef,
    style: {
      position: "relative",
      display: trigger === "field" ? "block" : "inline-block"
    }
  }, label && React.createElement("span", {
    style: {
      display: "block",
      marginBottom: 5,
      fontFamily: "var(--font-heading)",
      fontSize: 10,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      color: "var(--fg2)"
    }
  }, label), React.createElement("button", {
    type: "button",
    disabled,
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    onClick: () => !disabled && setOpen(o => !o),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.04em",
      color: disabled ? "var(--fg-dim)" : "var(--fg1)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "var(--t-hover)",
      minWidth: width || undefined,
      ...TRIGGER
    }
  }, React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      minWidth: 0
    }
  }, icon && React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }), React.createElement("span", {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, shown)), React.createElement(__ds_scope.Icon, {
    name: open ? "chevron-up" : "chevron-down",
    size: 12
  })), open && React.createElement("div", {
    role: "listbox",
    className: "kx-slide-u",
    style: {
      position: "absolute",
      top: "calc(100% + 5px)",
      left: align === "left" ? 0 : "auto",
      right: align === "right" ? 0 : "auto",
      minWidth: width || "100%",
      zIndex: "var(--z-overlay)",
      background: MAT.background,
      boxShadow: MAT.shadow,
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      border: "1px dashed var(--border)",
      maxHeight: 300,
      overflowY: "auto",
      padding: 3
    }
  }, opts.map((o, i) => {
    const isSel = multi ? selected.includes(o) : o.value === value;
    return React.createElement("button", {
      key: String(o.value),
      type: "button",
      role: "option",
      "aria-selected": isSel,
      disabled: o.disabled,
      onMouseEnter: () => setCursor(i),
      onClick: () => commit(o),
      style: {
        display: "grid",
        gridTemplateColumns: o.dot || o.swatch ? "10px 1fr auto" : "1fr auto",
        gap: 9,
        alignItems: "center",
        width: "100%",
        textAlign: "left",
        padding: "7px 9px",
        border: "none",
        background: cursor === i ? "rgba(127,127,127,0.14)" : isSel ? "rgba(127,127,127,0.09)" : "transparent",
        color: o.disabled ? "var(--fg-dim)" : isSel ? "var(--fg1)" : "var(--fg2)",
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.03em",
        cursor: o.disabled ? "not-allowed" : "pointer",
        borderBottom: i < opts.length - 1 ? "1px dashed var(--border-light)" : "none"
      }
    }, (o.dot || o.swatch) && React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        justifySelf: "center",
        flexShrink: 0,
        borderRadius: o.swatch ? 0 : "50%",
        background: o.swatch || o.dot,
        boxShadow: o.swatch ? "none" : `0 0 4px ${o.dot}`
      }
    }), React.createElement("span", {
      style: {
        minWidth: 0
      }
    }, React.createElement("span", {
      style: {
        display: "block",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, o.label), o.meta && React.createElement("span", {
      style: {
        display: "block",
        fontSize: 9,
        color: "var(--fg3)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginTop: 1
      }
    }, o.meta)), isSel ? React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 12
    }) : o.hint && React.createElement("span", {
      style: {
        fontSize: 9,
        color: "var(--fg-dim)",
        letterSpacing: "0.06em"
      }
    }, o.hint));
  }), footer && React.createElement("div", {
    style: {
      borderTop: "1px dashed var(--border)",
      marginTop: 3,
      padding: "7px 9px",
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      color: "var(--fg3)",
      letterSpacing: "0.06em"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Dropdown/Dropdown.jsx", error: String((e && e.message) || e) }); }

// components/EmptyState/EmptyState.jsx
try { (() => {
const KIND = {
  empty: {
    tone: "var(--fg3)",
    icon: "layers"
  },
  loading: {
    tone: "var(--fg3)",
    icon: "clock"
  },
  error: {
    tone: "var(--status-red)",
    icon: "error"
  },
  denied: {
    tone: "var(--status-amber)",
    icon: "lock"
  },
  offline: {
    tone: "var(--status-red)",
    icon: "plug"
  },
  missing: {
    tone: "var(--fg3)",
    icon: "search"
  }
};

/**
 * The four states every data surface owes the operator. Copy must say what the
 * system tried, not how it feels — and an error must name the fix.
 */
function EmptyState({
  kind = "empty",
  title,
  detail,
  hint,
  action,
  icon,
  compact = false
}) {
  const k = KIND[kind] || KIND.empty;
  return React.createElement("div", {
    role: kind === "error" ? "alert" : "status",
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: compact ? 6 : 10,
      padding: compact ? "20px 16px" : "38px 24px",
      textAlign: "center",
      border: "1px dashed var(--border-light)",
      background: kind === "error" ? "rgba(138,48,48,0.04)" : "rgba(16,18,16,0.02)",
      borderColor: kind === "error" ? "color-mix(in srgb, var(--status-red) 30%, var(--border-light))" : "var(--border-light)",
      minHeight: compact ? 0 : 160
    }
  }, React.createElement("span", {
    style: {
      color: k.tone,
      opacity: 0.7
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon || k.icon,
    size: compact ? 20 : 28,
    stroke: 1.25
  })), React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: compact ? 11 : 12,
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      color: kind === "error" ? "var(--status-red)" : "var(--fg2)"
    }
  }, title), detail && React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--fg2)",
      maxWidth: 46 + "ch",
      lineHeight: 1.5,
      margin: 0
    }
  }, detail), hint && React.createElement("code", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "var(--fg1)",
      background: "rgba(255,255,255,0.32)",
      border: "1px dashed var(--border-light)",
      padding: "3px 8px",
      letterSpacing: "0.02em"
    }
  }, hint), action && React.createElement("span", {
    style: {
      marginTop: 4
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/EmptyState/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/Loader/Loader.jsx
try { (() => {
const TONE = {
  accent: "var(--accent)",
  green: "var(--status-green)",
  amber: "var(--status-amber)",
  red: "var(--status-red)",
  blue: "var(--status-blue)",
  muted: "var(--fg3)"
};

/** Dashed ring, rotating. The signature border set spinning. */
function RingLoader({
  size,
  tone,
  stroke
}) {
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 44 44",
    className: "kx-spin",
    style: {
      display: "block"
    }
  }, React.createElement("circle", {
    cx: 22,
    cy: 22,
    r: 19,
    fill: "none",
    stroke: tone,
    strokeWidth: stroke,
    strokeDasharray: "5 4",
    strokeLinecap: "butt",
    opacity: 0.9
  }));
}

/** Scanline sweeping a track. Operator-console indeterminate. */
function SweepLoader({
  tone,
  height,
  label
}) {
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
      width: "100%"
    }
  }, label && React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--fg3)",
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, label), React.createElement("div", {
    style: {
      height,
      border: "1px dashed var(--border-light)",
      background: "rgba(16,18,16,0.04)",
      overflow: "hidden",
      position: "relative"
    }
  }, React.createElement("div", {
    className: "kx-sweep",
    style: {
      position: "absolute",
      inset: 0,
      width: "25%",
      background: `linear-gradient(90deg, transparent, ${tone}, transparent)`,
      opacity: 0.75
    }
  })));
}

/** Cells lighting in sequence. Reads as discrete work units. */
function CellsLoader({
  tone,
  count,
  size,
  gap
}) {
  return React.createElement("div", {
    style: {
      display: "flex",
      gap
    }
  }, Array.from({
    length: count
  }).map((_, i) => React.createElement("span", {
    key: i,
    style: {
      width: size,
      height: size,
      background: tone,
      animation: `kx-fill 1.2s ${i / count * 0.9}s var(--ease-in-out) infinite`
    }
  })));
}

/** Marquee-derived indeterminate strip — the launcher's motion, as progress. */
function StripLoader({
  tone,
  height
}) {
  return React.createElement("div", {
    style: {
      height,
      border: "1px dashed var(--border-light)",
      overflow: "hidden",
      position: "relative",
      background: "rgba(16,18,16,0.03)"
    }
  }, React.createElement("div", {
    className: "kx-marquee",
    style: {
      position: "absolute",
      inset: 0,
      width: "200%",
      animationDuration: "1.8s",
      background: `repeating-linear-gradient(115deg, ${tone} 0 8px, transparent 8px 20px)`,
      opacity: 0.55
    }
  }));
}

/** Orbiting dots — the signal-dot vocabulary in motion. */
function OrbitLoader({
  size,
  tone
}) {
  const r = size / 2 - 3;
  return React.createElement("div", {
    className: "kx-spin",
    style: {
      width: size,
      height: size,
      position: "relative",
      animationDuration: "1.6s"
    }
  }, [0, 1, 2].map(i => {
    const a = i / 3 * Math.PI * 2;
    return React.createElement("span", {
      key: i,
      style: {
        position: "absolute",
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: tone,
        left: size / 2 + Math.cos(a) * r - 2.5,
        top: size / 2 + Math.sin(a) * r - 2.5,
        opacity: 1 - i * 0.28,
        boxShadow: `0 0 5px ${tone}`
      }
    });
  }));
}

/** Determinate bar. The only loader that may claim a percentage. */
function BarLoader({
  value,
  tone,
  height,
  label
}) {
  const pct = Math.max(0, Math.min(100, value ?? 0));
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
      width: "100%"
    }
  }, (label || value != null) && React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--fg3)",
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, React.createElement("span", null, label), React.createElement("span", {
    style: {
      color: "var(--fg1)",
      fontVariantNumeric: "tabular-nums"
    }
  }, `${pct.toFixed(0)}%`)), React.createElement("div", {
    style: {
      height,
      border: "1px dashed var(--border-light)",
      background: "rgba(16,18,16,0.04)"
    }
  }, React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      background: tone,
      transition: "width var(--dur-slow) var(--ease-out)"
    }
  })));
}

/** Telemetry counter — a number that is honest about being live. */
function CounterLoader({
  value,
  unit,
  tone,
  label
}) {
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, label && React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      color: "var(--fg3)",
      letterSpacing: "0.12em",
      textTransform: "uppercase"
    }
  }, label), React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 5
    }
  }, React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 1,
      color: tone,
      fontVariantNumeric: "tabular-nums"
    }
  }, value), unit && React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--fg3)",
      letterSpacing: "0.06em",
      textTransform: "uppercase"
    }
  }, unit), React.createElement("span", {
    className: "kx-blink",
    style: {
      width: 6,
      height: 12,
      background: tone,
      opacity: 0.7
    }
  })));
}
function Loader({
  variant = "ring",
  size = 28,
  tone = "accent",
  stroke = 2,
  value,
  unit,
  label,
  count = 7,
  height = 6,
  gap = 3,
  inline = false,
  caption
}) {
  const c = TONE[tone] || tone;
  let node;
  switch (variant) {
    case "sweep":
      node = React.createElement(SweepLoader, {
        tone: c,
        height,
        label
      });
      break;
    case "cells":
      node = React.createElement(CellsLoader, {
        tone: c,
        count,
        size: Math.max(4, size / 4),
        gap
      });
      break;
    case "strip":
      node = React.createElement(StripLoader, {
        tone: c,
        height
      });
      break;
    case "orbit":
      node = React.createElement(OrbitLoader, {
        tone: c,
        size
      });
      break;
    case "bar":
      node = React.createElement(BarLoader, {
        tone: c,
        height,
        value,
        label
      });
      break;
    case "counter":
      node = React.createElement(CounterLoader, {
        tone: c,
        value,
        unit,
        label
      });
      break;
    default:
      node = React.createElement(RingLoader, {
        tone: c,
        size,
        stroke
      });
  }
  if (!caption) return node;
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: inline ? "row" : "column",
      alignItems: "center",
      gap: 8
    },
    role: "status",
    "aria-live": "polite",
    "aria-label": caption
  }, node, React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--fg2)",
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, caption));
}
Object.assign(__ds_scope, { Loader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Loader/Loader.jsx", error: String((e && e.message) || e) }); }

// components/Marquee/Marquee.jsx
try { (() => {
function Marquee({
  items = [],
  duration = 38,
  gap = 48,
  height = 28,
  tinted = true
}) {
  const line = React.useMemo(() => Array.isArray(items) ? items : [items], [items]);
  const track = {
    display: "inline-flex",
    alignItems: "center",
    gap,
    whiteSpace: "nowrap",
    paddingLeft: "100%",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    color: "var(--fg1)",
    animation: `kx-marquee ${duration}s linear infinite`
  };
  return React.createElement("div", {
    style: {
      height,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      border: `1px dashed ${tinted ? "color-mix(in srgb, var(--accent) 30%, var(--border-light))" : "var(--border-light)"}`,
      background: tinted ? "color-mix(in srgb, var(--accent) 7%, transparent)" : "transparent"
    },
    role: "status",
    "aria-live": "off"
  }, React.createElement("div", {
    style: track
  }, React.createElement("span", null, line.join(" · ")), React.createElement("span", {
    "aria-hidden": true
  }, line.join(" · "))));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Marquee/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/Panel/Panel.jsx
try { (() => {
function Panel({
  title,
  meta,
  actions,
  children,
  glass = true,
  pad = 12,
  footer,
  kind
}) {
  return React.createElement("section", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: pad,
      border: "1px dashed var(--border-light)",
      background: glass ? "var(--mat-2-fill)" : "transparent",
      backdropFilter: glass ? "blur(12px)" : "none",
      WebkitBackdropFilter: glass ? "blur(12px)" : "none",
      overflow: "hidden",
      minHeight: 0
    }
  }, (title || meta || actions) && React.createElement("header", {
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      gap: 10,
      alignItems: "center",
      paddingBottom: 6,
      borderBottom: "1px dashed var(--border-light)",
      flexShrink: 0
    }
  }, React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, kind && React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.1em",
      color: "var(--fg3)",
      border: "1px dashed var(--border-light)",
      padding: "1px 5px"
    }
  }, kind), React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 11,
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      color: "var(--fg2)",
      whiteSpace: "nowrap"
    }
  }, title)), React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      color: "var(--fg3)",
      letterSpacing: "0.06em",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, meta), React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 4
    }
  }, actions)), React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflow: "auto"
    }
  }, children), footer && React.createElement("footer", {
    style: {
      paddingTop: 8,
      borderTop: "1px dashed var(--border-light)",
      flexShrink: 0
    }
  }, footer));
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Panel/Panel.jsx", error: String((e && e.message) || e) }); }

// components/ProvenanceChip/ProvenanceChip.jsx
try { (() => {
const PROV = {
  fresh: {
    label: "fresh",
    tone: "var(--status-green)"
  },
  stale: {
    label: "stale",
    tone: "var(--status-amber)"
  },
  failed: {
    label: "failed",
    tone: "var(--status-red)"
  },
  missing: {
    label: "missing",
    tone: "var(--fg3)"
  },
  partial: {
    label: "partial",
    tone: "var(--status-blue)"
  }
};

/**
 * Says where a number came from and whether to trust it. Never silent, never
 * a percentage. Every aggregate on screen carries one.
 */
function ProvenanceChip({
  status = "fresh",
  detail,
  age
}) {
  const p = PROV[status] || PROV.missing;
  return React.createElement("span", {
    title: detail,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      padding: "1px 6px",
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: p.tone,
      border: `1px dashed color-mix(in srgb, ${p.tone} 45%, var(--border-light))`,
      whiteSpace: "nowrap"
    }
  }, React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: "50%",
      background: p.tone,
      flexShrink: 0
    }
  }), p.label, age && React.createElement("span", {
    style: {
      color: "var(--fg-dim)"
    }
  }, age));
}
Object.assign(__ds_scope, { ProvenanceChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ProvenanceChip/ProvenanceChip.jsx", error: String((e && e.message) || e) }); }

// components/Rail/Rail.jsx
try { (() => {
const FLAG_TONE = {
  new: "var(--status-blue)",
  tool: null,
  warn: "var(--status-amber)",
  down: "var(--status-red)"
};
function RailItem({
  item,
  active,
  expanded,
  onSelect
}) {
  const [hover, setHover] = React.useState(false);
  const isActive = active === item.id;
  const flag = item.status && item.status !== "active" ? item.status : null;
  const flagColor = FLAG_TONE[flag];
  const El = item.href ? "a" : "button";
  return React.createElement(El, {
    href: item.href,
    type: item.href ? undefined : "button",
    onClick: onSelect ? () => onSelect(item.id) : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    title: `${item.name}${flag ? " · " + flag : ""}`,
    "aria-current": isActive ? "page" : undefined,
    style: {
      position: "relative",
      flexShrink: 0,
      display: expanded ? "grid" : "flex",
      gridTemplateColumns: expanded ? "24px 1fr auto" : undefined,
      flexDirection: expanded ? undefined : "column",
      alignItems: "center",
      justifyContent: expanded ? "start" : "center",
      gap: expanded ? 10 : 3,
      width: "100%",
      height: expanded ? 44 : 60,
      padding: expanded ? "0 12px" : 0,
      background: isActive ? "var(--bg-input)" : hover ? "rgba(255,255,255,0.18)" : "transparent",
      border: isActive ? "1px solid var(--accent)" : hover ? "1px dashed var(--border-light)" : "1px solid transparent",
      color: isActive ? "var(--fg1)" : hover ? "var(--fg1)" : "var(--fg2)",
      cursor: "pointer",
      textDecoration: "none",
      transition: "var(--t-hover)",
      textAlign: "left"
    }
  }, isActive && React.createElement("span", {
    style: {
      position: "absolute",
      left: -1,
      top: "50%",
      transform: "translateY(-50%)",
      width: 2,
      height: "58%",
      background: "var(--accent)"
    }
  }), flag && React.createElement("span", {
    style: {
      position: "absolute",
      top: expanded ? 6 : 9,
      right: expanded ? 8 : 10,
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: flagColor || "transparent",
      border: flagColor ? "none" : "1.5px solid var(--fg3)"
    }
  }), React.createElement(__ds_scope.Icon, {
    name: item.icon,
    size: expanded ? 18 : 22
  }), expanded ? React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, item.name) : React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      letterSpacing: "0.06em"
    }
  }, item.code), expanded && React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      color: "var(--fg3)",
      letterSpacing: "0.08em"
    }
  }, item.code));
}
function Rail({
  items = [],
  active,
  onSelect,
  brand = {
    tag: "CX",
    sub: "core-x"
  },
  footer = [],
  svc = "ONLINE",
  expanded = false,
  width,
  tier = "floating",
  position = "static"
}) {
  const w = width || (expanded ? 188 : 64);
  const fill = tier === "overlay" ? "var(--mat-4-fill)" : tier === "raised" ? "var(--mat-2-fill)" : "var(--mat-3-fill)";
  const shadow = tier === "overlay" ? "var(--shadow-3), var(--edge-lip)" : tier === "raised" ? "var(--shadow-1)" : "var(--shadow-2), var(--edge-lip)";
  return React.createElement("nav", {
    "aria-label": "Module navigation",
    style: {
      width: w,
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      background: fill,
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: "1px dashed var(--border)",
      boxShadow: shadow,
      position: position === "fixed" ? "fixed" : "relative",
      top: position === "fixed" ? 0 : undefined,
      left: position === "fixed" ? 0 : undefined,
      bottom: position === "fixed" ? 0 : undefined,
      zIndex: position === "fixed" ? "var(--z-rail)" : undefined,
      userSelect: "none",
      overflow: "hidden",
      transition: "width var(--dur-slow) var(--ease-spring)"
    }
  },
  // brand
  React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: expanded ? "row" : "column",
      alignItems: "center",
      justifyContent: expanded ? "start" : "center",
      gap: expanded ? 9 : 4,
      padding: expanded ? "12px" : "10px 0",
      borderBottom: "1px dashed var(--border)",
      flexShrink: 0
    }
  }, React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 32,
      height: 32,
      flexShrink: 0,
      background: "var(--accent)",
      color: "var(--bg)",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.1em",
      boxShadow: "var(--shadow-1)"
    }
  }, brand.tag), brand.sub && React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: expanded ? 10 : 8,
      color: "var(--fg3)",
      textTransform: "uppercase",
      letterSpacing: "0.1em"
    }
  }, brand.sub)),
  // items
  React.createElement("div", {
    role: "list",
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      scrollbarWidth: "none"
    }
  }, items.map(it => React.createElement(RailItem, {
    key: it.id,
    item: it,
    active,
    expanded,
    onSelect
  }))),
  // footer
  React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderTop: "1px dashed var(--border)",
      flexShrink: 0
    }
  }, footer.map(f => React.createElement(RailItem, {
    key: f.id || f.code,
    item: f,
    active,
    expanded,
    onSelect
  })), svc && React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: expanded ? "row" : "column",
      alignItems: "center",
      justifyContent: "center",
      gap: expanded ? 6 : 1,
      padding: "8px 0",
      width: "100%",
      fontFamily: "var(--font-mono)",
      fontSize: 8.5,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--fg3)"
    }
  }, React.createElement("span", null, "svc"), React.createElement("span", {
    style: {
      color: "var(--status-green)"
    }
  }, svc))));
}
Object.assign(__ds_scope, { Rail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Rail/Rail.jsx", error: String((e && e.message) || e) }); }

// components/ServiceChip/ServiceChip.jsx
try { (() => {
const SVC_TONE = {
  up: "var(--status-green)",
  warn: "var(--status-amber)",
  down: "var(--status-red)",
  idle: "var(--border)"
};
function ServiceChip({
  name,
  port,
  status = "up",
  note,
  onClick
}) {
  const color = SVC_TONE[status] || SVC_TONE.idle;
  const El = onClick ? "button" : "span";
  return React.createElement(El, {
    onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--fg2)",
      letterSpacing: "0.04em",
      background: "transparent",
      border: onClick ? "1px dashed var(--border-light)" : "none",
      padding: onClick ? "3px 7px" : 0,
      cursor: onClick ? "pointer" : "default"
    },
    title: note || status
  }, React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: color,
      flexShrink: 0,
      boxShadow: status === "idle" ? "none" : `0 0 4px ${color}`
    }
  }), React.createElement("span", {
    style: {
      color: "var(--fg1)"
    }
  }, port ? `${name}:${port}` : name), note && React.createElement("span", {
    style: {
      color: "var(--fg-dim)"
    }
  }, `· ${note}`));
}
Object.assign(__ds_scope, { ServiceChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ServiceChip/ServiceChip.jsx", error: String((e && e.message) || e) }); }

// components/Skeleton/Skeleton.jsx
try { (() => {
const SHIMMER = "linear-gradient(100deg, rgba(255,255,255,0) 20%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0) 80%)";
function Bone({
  w,
  h,
  radius = 0
}) {
  return React.createElement("span", {
    className: "kx-shimmer",
    style: {
      display: "block",
      width: w,
      height: h,
      borderRadius: radius,
      background: `rgba(16,18,16,0.07) ${SHIMMER}`,
      backgroundSize: "220% 100%",
      backgroundBlendMode: "overlay"
    }
  });
}
function Skeleton({
  variant = "text",
  lines = 3,
  width = "100%",
  height,
  gap = 8,
  count = 3
}) {
  if (variant === "text") {
    const widths = ["100%", "94%", "72%", "88%", "60%"];
    return React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap,
        width
      },
      role: "status",
      "aria-busy": "true",
      "aria-label": "Loading text"
    }, Array.from({
      length: lines
    }).map((_, i) => React.createElement(Bone, {
      key: i,
      w: widths[i % widths.length],
      h: 10
    })));
  }
  if (variant === "block") {
    return React.createElement("div", {
      style: {
        width
      },
      role: "status",
      "aria-busy": "true"
    }, React.createElement(Bone, {
      w: "100%",
      h: height || 120
    }));
  }
  if (variant === "card") {
    return React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: 12,
        border: "1px dashed var(--border-light)",
        background: "var(--mat-2-fill)",
        width
      },
      role: "status",
      "aria-busy": "true",
      "aria-label": "Loading card"
    }, React.createElement(Bone, {
      w: "100%",
      h: height || 84
    }), React.createElement(Bone, {
      w: "62%",
      h: 10
    }), React.createElement(Bone, {
      w: "40%",
      h: 8
    }));
  }
  if (variant === "list") {
    return React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 1,
        width,
        border: "1px dashed var(--border-light)"
      },
      role: "status",
      "aria-busy": "true",
      "aria-label": "Loading list"
    }, Array.from({
      length: count
    }).map((_, i) => React.createElement("div", {
      key: i,
      style: {
        display: "grid",
        gridTemplateColumns: "18px 1fr 56px",
        gap: 10,
        alignItems: "center",
        padding: "9px 10px"
      }
    }, React.createElement(Bone, {
      w: 10,
      h: 10,
      radius: "50%"
    }), React.createElement(Bone, {
      w: `${58 + i * 13 % 32}%`,
      h: 9
    }), React.createElement(Bone, {
      w: "100%",
      h: 8
    }))));
  }
  // metric
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      width
    },
    role: "status",
    "aria-busy": "true"
  }, React.createElement(Bone, {
    w: "42%",
    h: 8
  }), React.createElement(Bone, {
    w: "68%",
    h: 24
  }));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Skeleton/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/Sparkline/Sparkline.jsx
try { (() => {
/** Shape of a series, not its values. No axes, no gridlines, no tooltip. */
function Sparkline({
  data = [],
  width = 120,
  height = 28,
  tone = "var(--fg1)",
  fill = false,
  showLast = false,
  strokeWidth = 1.25
}) {
  if (!data.length) return null;
  const min = Math.min(...data),
    max = Math.max(...data);
  const span = max - min || 1;
  const step = data.length > 1 ? width / (data.length - 1) : width;
  const pts = data.map((v, i) => [i * step, height - (v - min) / span * (height - 2) - 1]);
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${line} L${width} ${height} L0 ${height} Z`;
  const last = pts[pts.length - 1];
  return React.createElement("svg", {
    width,
    height,
    viewBox: `0 0 ${width} ${height}`,
    style: {
      display: "block",
      overflow: "visible"
    },
    "aria-hidden": true
  }, fill && React.createElement("path", {
    d: area,
    fill: tone,
    opacity: 0.12
  }), React.createElement("path", {
    d: line,
    fill: "none",
    stroke: tone,
    strokeWidth,
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }), showLast && React.createElement("circle", {
    cx: last[0],
    cy: last[1],
    r: 2,
    fill: tone
  }));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Sparkline/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/StatTile/StatTile.jsx
try { (() => {
/**
 * A named figure. If the figure is not known, pass withheld + why instead of
 * a zero — a plausible-looking zero is the most expensive bug in an ops UI.
 */
function StatTile({
  label,
  value,
  unit,
  delta,
  deltaTone,
  note,
  withheld,
  why,
  tone = "default",
  align = "left"
}) {
  const VALUE_TONE = {
    default: "var(--fg1)",
    good: "var(--status-green)",
    warn: "var(--status-amber)",
    bad: "var(--status-red)",
    info: "var(--status-blue)"
  };
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
      padding: "10px 12px",
      border: "1px dashed var(--border-light)",
      background: withheld ? "rgba(138,48,48,0.04)" : "rgba(16,18,16,0.025)",
      borderColor: withheld ? "color-mix(in srgb, var(--status-red) 30%, var(--border-light))" : "var(--border-light)",
      alignItems: align === "right" ? "flex-end" : "flex-start",
      textAlign: align,
      minWidth: 0
    }
  }, React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      color: "var(--fg3)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "100%"
    },
    title: label
  }, label), withheld ? React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 13,
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "var(--status-red)"
    }
  }, "withheld") : React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 5,
      minWidth: 0
    }
  }, React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 22,
      lineHeight: 1.05,
      fontVariantNumeric: "tabular-nums",
      color: VALUE_TONE[tone] || VALUE_TONE.default
    }
  }, value), unit && React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      color: "var(--fg3)",
      textTransform: "uppercase",
      letterSpacing: "0.06em"
    }
  }, unit), delta != null && React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      letterSpacing: "0.04em",
      color: deltaTone === "bad" ? "var(--status-red)" : deltaTone === "good" ? "var(--status-green)" : "var(--fg3)"
    }
  }, delta)), (why || note) && React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      color: withheld ? "var(--status-red)" : "var(--fg-dim)",
      letterSpacing: "0.04em",
      lineHeight: 1.4
    }
  }, withheld ? why : note));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/StatTile/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/StatusDot/StatusDot.jsx
try { (() => {
const TONE = {
  up: "var(--status-green)",
  warn: "var(--status-amber)",
  down: "var(--status-red)",
  info: "var(--status-blue)",
  idle: "var(--border)"
};
function StatusDot({
  tone = "up",
  size = 6,
  pulse = false,
  glow = true,
  label,
  title
}) {
  const color = TONE[tone] || TONE.idle;
  const dot = {
    width: size,
    height: size,
    borderRadius: "50%",
    background: color,
    flexShrink: 0,
    boxShadow: glow && tone !== "idle" ? `0 0 ${Math.max(4, size)}px ${color}` : "none",
    animation: pulse ? "kx-dot-pulse 1s ease-in-out infinite" : "none"
  };
  if (!label) return React.createElement("span", {
    style: dot,
    title: title || tone,
    role: "img",
    "aria-label": title || tone
  });
  return React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--fg2)",
      letterSpacing: "0.05em"
    },
    title: title || tone
  }, React.createElement("span", {
    style: dot
  }), label);
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/StatusDot/StatusDot.jsx", error: String((e && e.message) || e) }); }

// starter/core-x-app/app.config.js
try { (() => {
// ============================================================
// app.config.js — the one file to edit when starting a new app.
// The shell reads it at boot; nothing else hard-codes these values.
// ============================================================

window.CORE_X_APP = {
  // Header title. Uppercase is applied by the type system; write it naturally.
  name: 'New App',
  // Ecosystem entity this app belongs to: an id from ds/assets/ecosystem/entities.json
  // (corex, warehouse, rigging, vega, ...). Scopes var(--entity) for the whole app.
  // New entity? Add it to entities.js in the design-system project first.
  entity: 'corex',
  // Theme is a context, not a preference.
  //   'kbllr'  daylight, institutional, editorial (the system default)
  //   'vectra' the running machine: runtime, ops, night work
  // 'ember' is for fault surfaces only. Scope it to a subtree, never set it here.
  theme: 'vectra',
  // Two letters in the monogram square. Swap the letters, change nothing else.
  monogram: 'CX',
  // Rail modules. `component` names a global set by a file in app/modules/.
  // code: three letters, shared by the rail item and any card for the module.
  // icon: a name from the registry (see ds/assets/icons/icons.json).
  modules: [{
    id: 'home',
    code: 'HOM',
    name: 'Home',
    icon: 'home',
    component: 'HomeModule'
  }, {
    id: 'ops',
    code: 'OPS',
    name: 'Operations',
    icon: 'mode-dashboard',
    component: 'OpsModule',
    status: 'new'
  }],
  // Services this app depends on. Feeds the ops module and the header status.
  // status: up | warn | down
  services: [{
    name: 'gateway',
    port: '8090',
    status: 'up',
    note: 'openresponses'
  }, {
    name: 'llm',
    port: '8091',
    status: 'up',
    note: 'mlx::ministral-8b'
  }, {
    name: 'rag',
    port: '8092',
    status: 'warn',
    note: 'reindexing'
  }],
  // Lines for the header ticker. Format: [LEVEL] source:port: message
  log: ['[INFO] gateway:8090: openresponses ready', '[OK] llm:8091: mlx::ministral-8b loaded', '[WARN] rag:8092: reindex in progress · 0044']
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "starter/core-x-app/app.config.js", error: String((e && e.message) || e) }); }

// starter/core-x-app/app/modules/home.jsx
try { (() => {
// ============================================================
// app/modules/home.jsx — example module. Replace it with your own.
//
// A module is a component on window, named in app.config.js.
// It receives { config, entity } and composes design-system
// components. No new tokens, no hard-coded hexes.
// ============================================================

function HomeModule({
  config,
  entity
}) {
  const {
    Panel,
    StatTile,
    FunnelBar,
    ProvenanceChip,
    Button,
    Icon
  } = window.KBLLRCoreXDesignSystem_019e2e;
  const stages = [{
    label: 'received',
    done: 128,
    waiting: 0
  }, {
    label: 'validated',
    done: 112,
    waiting: 16
  }, {
    label: 'processed',
    done: 74,
    waiting: 38
  }, {
    label: 'published',
    done: 41,
    waiting: 33
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "received",
    value: "128"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "published",
    value: "41",
    note: "32% of received"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "throughput",
    value: "12.4",
    unit: "item/min",
    tone: "good"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "quality score",
    withheld: true,
    why: "scorer job failed 9m ago"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    kind: "ops",
    title: "Pipeline",
    meta: "run 0001",
    actions: /*#__PURE__*/React.createElement(ProvenanceChip, {
      status: "fresh",
      age: "1m ago",
      detail: "example data \xB7 replace with your source"
    })
  }, /*#__PURE__*/React.createElement(FunnelBar, {
    stages: stages,
    labelWidth: 100
  })), /*#__PURE__*/React.createElement(Panel, {
    kind: "md",
    title: "Start here",
    meta: "delete this panel when done",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "external",
        size: 12
      }),
      onClick: () => window.open('AGENTS.md')
    }, "Open AGENTS.md")
  }, /*#__PURE__*/React.createElement("dl", {
    className: "kv-list kv-list--ruled"
  }, /*#__PURE__*/React.createElement("dt", null, "configure"), /*#__PURE__*/React.createElement("dd", null, "app.config.js"), /*#__PURE__*/React.createElement("dt", null, "add module"), /*#__PURE__*/React.createElement("dd", null, "app/modules/*.jsx + one line in index.html"), /*#__PURE__*/React.createElement("dt", null, "contracts"), /*#__PURE__*/React.createElement("dd", null, "ds/contracts/components.d.ts"), /*#__PURE__*/React.createElement("dt", null, "rules"), /*#__PURE__*/React.createElement("dd", null, "AGENTS.md \xB7 skills/"), /*#__PURE__*/React.createElement("dt", null, "entity"), /*#__PURE__*/React.createElement("dd", null, entity ? `${entity.name} · ${entity.accent}` : 'none set'), /*#__PURE__*/React.createElement("dt", null, "theme"), /*#__PURE__*/React.createElement("dd", null, config.theme)))));
}
window.HomeModule = HomeModule;
})(); } catch (e) { __ds_ns.__errors.push({ path: "starter/core-x-app/app/modules/home.jsx", error: String((e && e.message) || e) }); }

// starter/core-x-app/app/modules/ops.jsx
try { (() => {
// ============================================================
// app/modules/ops.jsx — example module: services from app.config.js,
// plus the error state every data surface owes the operator.
// ============================================================

function OpsModule({
  config
}) {
  const {
    Panel,
    ServiceChip,
    EmptyState,
    Button,
    Dropdown
  } = window.KBLLRCoreXDesignSystem_019e2e;
  const [filter, setFilter] = React.useState('all');
  const services = (config.services || []).filter(s => filter === 'all' || s.status === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    kind: "svc",
    title: "Services",
    meta: `${(config.services || []).length} registered`,
    actions: /*#__PURE__*/React.createElement(Dropdown, {
      value: filter,
      onChange: setFilter,
      trigger: "ghost",
      align: "right",
      width: 130,
      options: [{
        value: 'all',
        label: 'all'
      }, {
        value: 'up',
        label: 'up'
      }, {
        value: 'warn',
        label: 'warn'
      }, {
        value: 'down',
        label: 'down'
      }]
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, services.length ? services.map(s => /*#__PURE__*/React.createElement(ServiceChip, {
    key: s.name,
    name: s.name,
    port: s.port,
    status: s.status,
    note: s.note
  })) : /*#__PURE__*/React.createElement(EmptyState, {
    compact: true,
    kind: "empty",
    title: `No ${filter} services`
  }))), /*#__PURE__*/React.createElement(EmptyState, {
    kind: "error",
    title: "Example error state",
    detail: "Errors say what the system tried and name the fix. Replace this with a real failure path.",
    hint: "core-x logs gateway --tail 50",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Retry")
  }));
}
window.OpsModule = OpsModule;
})(); } catch (e) { __ds_ns.__errors.push({ path: "starter/core-x-app/app/modules/ops.jsx", error: String((e && e.message) || e) }); }

// starter/core-x-app/app/shell.jsx
try { (() => {
// ============================================================
// app/shell.jsx — rail, glass header, module router.
// You rarely need to edit this. Configure in app.config.js and
// build features as modules in app/modules/.
// ============================================================

const DS = window.KBLLRCoreXDesignSystem_019e2e;
const CFG = window.CORE_X_APP || {};
function Boot({
  message,
  hint
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "cx-boot",
    role: "alert"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      lineHeight: 1.8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--status-red)'
    }
  }, message), hint && /*#__PURE__*/React.createElement("code", {
    style: {
      color: 'var(--fg2)'
    }
  }, hint)));
}
function useClock() {
  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const p = n => String(n).padStart(2, '0');
  const M = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${M[now.getMonth()]} ${p(now.getDate())} · ${p(now.getHours())}:${p(now.getMinutes())}:${p(now.getSeconds())}`;
}
function useRoute(modules) {
  const read = () => location.hash.replace('#/', '') || modules[0]?.id;
  const [id, setId] = React.useState(read);
  React.useEffect(() => {
    const f = () => setId(read());
    addEventListener('hashchange', f);
    return () => removeEventListener('hashchange', f);
  }, []);
  return [id, next => {
    location.hash = '#/' + next;
  }];
}
function Shell() {
  const {
    Rail,
    Marquee,
    StatusDot,
    CX_ENTITIES,
    EmptyState
  } = DS;
  const modules = CFG.modules || [];
  const [active, go] = useRoute(modules);
  const clock = useClock();
  const entity = (CX_ENTITIES || []).find(e => e.id === CFG.entity);
  const mod = modules.find(m => m.id === active) || modules[0];
  const View = mod && window[mod.component];
  const services = CFG.services || [];
  const worst = services.some(s => s.status === 'down') ? 'down' : services.some(s => s.status === 'warn') ? 'warn' : 'up';
  const svcLabel = `${services.filter(s => s.status === 'up').length}/${services.length} up`;
  return /*#__PURE__*/React.createElement("div", {
    className: 'cx-shell mat-grid' + (CFG.theme === 'vectra' ? ' atmos atmos-scanlines' : ''),
    "data-entity": CFG.entity
  }, /*#__PURE__*/React.createElement(Rail, {
    items: modules.map(m => ({
      id: m.id,
      code: m.code,
      name: m.name,
      icon: m.icon,
      status: m.status
    })),
    footer: [{
      id: 'settings',
      code: 'SET',
      name: 'Settings',
      icon: 'settings'
    }],
    active: mod?.id,
    onSelect: id => id !== 'settings' && go(id),
    brand: {
      tag: CFG.monogram || 'CX',
      sub: entity ? entity.code.toLowerCase() : 'core-x'
    },
    svc: worst === 'up' ? 'ONLINE' : worst === 'warn' ? 'DEGRADED' : 'FAULT'
  }), /*#__PURE__*/React.createElement("main", {
    className: "cx-main"
  }, /*#__PURE__*/React.createElement("header", {
    className: "cx-head mat-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cx-brand"
  }, /*#__PURE__*/React.createElement("b", null, CFG.name || 'Core·X app')), /*#__PURE__*/React.createElement("span", {
    className: "cx-ent"
  }, entity && /*#__PURE__*/React.createElement("span", {
    className: "entity-dot",
    "aria-hidden": "true"
  }), entity ? entity.name : 'no entity', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-dim)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement(StatusDot, {
    tone: worst,
    label: svcLabel,
    size: 6
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Marquee, {
    items: CFG.log || [],
    height: 22,
    duration: 34
  })), /*#__PURE__*/React.createElement("span", {
    className: "cx-clock"
  }, clock)), /*#__PURE__*/React.createElement("div", {
    className: "cx-body kx-rise-in",
    key: mod?.id
  }, View ? /*#__PURE__*/React.createElement(View, {
    config: CFG,
    entity: entity
  }) : /*#__PURE__*/React.createElement(EmptyState, {
    kind: "missing",
    title: `No module "${mod?.component || active}"`,
    detail: "The rail points at a component that no loaded script defines.",
    hint: `define window.${mod?.component || 'MyModule'} in app/modules/ and load it in index.html`
  }))));
}
function boot() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  if (!DS) return root.render(/*#__PURE__*/React.createElement(Boot, {
    message: "design system bundle not loaded",
    hint: "check ds/_ds_bundle.js"
  }));
  const missing = ['Rail', 'Marquee', 'StatusDot', 'EmptyState', 'CX_ENTITIES'].filter(n => !DS[n]);
  if (missing.length) return root.render(/*#__PURE__*/React.createElement(Boot, {
    message: 'stale bundle · missing ' + missing.join(', '),
    hint: "scripts/update-ds.sh <design-system path>"
  }));
  if (CFG.theme === 'ember') console.warn('[core-x] theme "ember" is for fault surfaces only. Scope it to a subtree instead of the whole app.');
  document.documentElement.dataset.theme = CFG.theme === 'kbllr' ? 'kbllr' : 'vectra';
  document.title = (CFG.name || 'Core·X app') + ' · Core·X';
  root.render(/*#__PURE__*/React.createElement(Shell, null));
}
boot();
})(); } catch (e) { __ds_ns.__errors.push({ path: "starter/core-x-app/app/shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/launcher/AppRegistry.jsx
try { (() => {
// AppRegistry.jsx — static mock of buildAppRegistry()
// Matches the shape from ui/src/lib/app-registry.ts

const APP_REGISTRY = [{
  id: "orchestrator",
  label: "Orchestrator",
  title: "Plan & Execute",
  mode: "orchestrator",
  kind: "core_mode",
  desc: "Plan-first execution with file routing and model lane selection.",
  services: ["gateway", "llm", "rag"],
  lanes: ["llm", "audio"],
  tier: "core",
  tags: ["apple-silicon", "local-first", "mlx"],
  defaultModels: {
    llm: "mlx/ministral-8b",
    audio: "kokoro/tts"
  },
  commandHint: "/orch <prompt>"
}, {
  id: "chat",
  label: "Chat",
  title: "Conversational LLM",
  mode: "chat",
  kind: "core_mode",
  desc: "Streaming chat over the local OpenResponses gateway.",
  services: ["gateway", "llm"],
  lanes: ["llm"],
  tier: "core",
  tags: ["mlx", "streaming"],
  defaultModels: {
    llm: "mlx/ministral-8b"
  },
  commandHint: "/prompt <id>"
}, {
  id: "voice",
  label: "Voice",
  title: "Avatar + Real-time",
  mode: "voice",
  kind: "core_mode",
  desc: "Real-time voice with 3D avatar — STT, LLM, TTS, head tracking.",
  services: ["gateway", "llm", "audio", "said"],
  lanes: ["llm", "audio"],
  tier: "full",
  tags: ["webgl", "metal", "haircards"],
  defaultModels: {
    llm: "mlx/qwen2.5-coder",
    audio: "kokoro/tts"
  }
}, {
  id: "image",
  label: "Image",
  title: "FLUX generation",
  mode: "image",
  kind: "core_mode",
  desc: "Local image generation with FLUX schnell and kontext.",
  services: ["gateway", "mflux"],
  lanes: ["image"],
  tier: "standard",
  tags: ["flux", "metal"],
  defaultModels: {
    image: "flux/schnell"
  }
}, {
  id: "research",
  label: "Research",
  title: "RAG search",
  mode: "research",
  kind: "core_mode",
  desc: "Embeddings-backed retrieval over the local LanceDB index.",
  services: ["gateway", "rag", "embed"],
  lanes: ["llm", "embed"],
  tier: "standard",
  tags: ["lancedb", "minilm"],
  defaultModels: {
    llm: "mlx/ministral-8b"
  }
}, {
  id: "flow",
  label: "Flow",
  title: "Run pipelines",
  mode: "flow",
  kind: "core_mode",
  desc: "Compose multi-step flows across lanes; persist runs to anthology.",
  services: ["gateway", "bus"],
  lanes: ["llm"],
  tier: "standard",
  tags: ["pipeline", "a2a"]
}, {
  id: "code",
  label: "Code",
  title: "Coder workbench",
  mode: "code",
  kind: "core_mode",
  desc: "Local code completion with mlx::qwen2.5-coder.",
  services: ["gateway", "llm"],
  lanes: ["llm"],
  tier: "core",
  tags: ["mlx", "qwen"],
  defaultModels: {
    llm: "mlx/qwen2.5-coder"
  }
}, {
  id: "disk",
  label: "Disk Ops",
  title: "Disk study",
  mode: "disk",
  kind: "core_mode",
  desc: "Offline disk-study runs; safe reclaim on guest snapshots.",
  services: [],
  lanes: [],
  tier: "offline",
  tags: ["offline", "local-only"]
}, {
  id: "world",
  label: "World",
  title: "3D scene viewer",
  mode: "world",
  kind: "core_mode",
  desc: "Gaussian-splat + HDRI viewer for the world stage.",
  services: ["gateway"],
  lanes: [],
  tier: "full",
  tags: ["webgl", "gpu-curtains", "gsplat"]
}, {
  id: "anthology",
  label: "Anthology",
  title: "Run history",
  mode: null,
  kind: "surface_app",
  desc: "External run-history surface. Opens in a new tab.",
  services: [],
  lanes: [],
  tier: "external",
  tags: ["external"],
  href: "https://anthology.local:5400"
}];

// Mock service health — used to compute readiness on each card
const HEALTH = new Map([["gateway", "up"], ["llm", "up"], ["rag", "up"], ["audio", "up"], ["mflux", "up"], ["embed", "up"], ["said", "down"], ["bus", "up"], ["vision", "down"], ["api", "up"]]);
window.APP_REGISTRY = APP_REGISTRY;
window.HEALTH = HEALTH;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/launcher/AppRegistry.jsx", error: String((e && e.message) || e) }); }

// ui_kits/launcher/LauncherAppGrid.jsx
try { (() => {
// LauncherAppGrid.jsx — operational cards. Static mock of ui/src/launcher/LauncherAppGrid.tsx.

function tierLabel(tier) {
  return {
    core: "CORE",
    standard: "STD",
    full: "FULL",
    offline: "LOCAL",
    external: "EXT"
  }[tier] || tier.toUpperCase();
}
function summarizeModels(app) {
  const d = app.defaultModels || {};
  const items = [];
  if (d.llm) items.push({
    lane: "llm",
    model: d.llm
  });
  if (d.image) items.push({
    lane: "image",
    model: d.image
  });
  if (d.audio) items.push({
    lane: "audio",
    model: d.audio
  });
  if (d.vision) items.push({
    lane: "vision",
    model: d.vision
  });
  return items;
}
function LauncherCard({
  app,
  onLaunch
}) {
  const isOffline = app.tier === "offline";
  const isSurface = app.kind === "surface_app";
  const readyCount = app.services.filter(id => window.HEALTH.get(id) === "up").length;
  const ready = isSurface || isOffline || readyCount === app.services.length;
  const missing = app.services.filter(id => window.HEALTH.get(id) !== "up");
  const readinessLabel = isSurface ? "external" : isOffline ? "offline-ready" : ready ? "ready" : `${readyCount}/${app.services.length} up`;
  const readinessClass = isSurface ? "external" : isOffline ? "offline" : ready ? "ready" : "pending";
  const handleClick = () => {
    if (isSurface) {
      window.open(app.href, "_blank", "noopener,noreferrer");
      return;
    }
    if (app.mode) onLaunch(app.mode);
  };
  const modelItems = summarizeModels(app);
  return /*#__PURE__*/React.createElement("button", {
    className: `launcher-card launcher-card--${readinessClass}`,
    onClick: handleClick,
    title: `Launch ${app.label}${!ready && !isSurface && !isOffline ? ` (missing: ${missing.join(", ")})` : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "launcher-card__header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "launcher-card__label"
  }, app.label), /*#__PURE__*/React.createElement("div", {
    className: "launcher-card__badges"
  }, /*#__PURE__*/React.createElement("span", {
    className: `launcher-card__badge launcher-card__badge--tier launcher-card__badge--tier-${app.tier}`
  }, tierLabel(app.tier)), /*#__PURE__*/React.createElement("span", {
    className: `launcher-card__badge launcher-card__badge--readiness launcher-card__badge--readiness-${readinessClass}`
  }, readinessLabel))), /*#__PURE__*/React.createElement("span", {
    className: "launcher-card__title"
  }, app.title), /*#__PURE__*/React.createElement("span", {
    className: "launcher-card__desc"
  }, app.desc), /*#__PURE__*/React.createElement("div", {
    className: "launcher-card__meta"
  }, app.mode && /*#__PURE__*/React.createElement("span", {
    className: "launcher-card__meta-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "launcher-card__meta-key"
  }, "mode"), /*#__PURE__*/React.createElement("span", {
    className: "launcher-card__meta-val"
  }, app.mode)), app.lanes.length > 0 && /*#__PURE__*/React.createElement("span", {
    className: "launcher-card__meta-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "launcher-card__meta-key"
  }, "lanes"), /*#__PURE__*/React.createElement("span", {
    className: "launcher-card__meta-val"
  }, app.lanes.join(", "))), app.services.length > 0 && /*#__PURE__*/React.createElement("span", {
    className: "launcher-card__meta-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "launcher-card__meta-key"
  }, "svc"), /*#__PURE__*/React.createElement("span", {
    className: "launcher-card__meta-val"
  }, readyCount, "/", app.services.length))), app.tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "launcher-card__tags"
  }, app.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "launcher-card__tag"
  }, t))), modelItems.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "launcher-card__models"
  }, modelItems.map(m => /*#__PURE__*/React.createElement("span", {
    key: m.lane,
    className: "launcher-card__model-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "launcher-card__model-lane"
  }, m.lane), /*#__PURE__*/React.createElement("span", {
    className: "launcher-card__model-name"
  }, m.model.split("/").pop())))), app.commandHint && /*#__PURE__*/React.createElement("div", {
    className: "launcher-card__hint"
  }, app.commandHint), app.services.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "launcher-card__services"
  }, app.services.map(id => {
    const status = window.HEALTH.get(id) || "unknown";
    return /*#__PURE__*/React.createElement("span", {
      key: id,
      className: `service-chip service-chip--${status}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "service-chip__dot"
    }), /*#__PURE__*/React.createElement("span", {
      className: "service-chip__label"
    }, id));
  })), !ready && !isSurface && !isOffline && missing.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "launcher-card__missing"
  }, /*#__PURE__*/React.createElement("span", {
    className: "launcher-card__missing-icon"
  }, "!"), "missing: ", missing.join(", ")), /*#__PURE__*/React.createElement("span", {
    className: "launcher-card__action"
  }, isSurface ? "Open external" : isOffline ? "Launch (no services)" : ready ? "Activate" : `Activate + auto-start (${missing.length} svc)`));
}
function LauncherAppGrid({
  onLaunch
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "launcher-grid"
  }, window.APP_REGISTRY.map(app => /*#__PURE__*/React.createElement(LauncherCard, {
    key: app.id,
    app: app,
    onLaunch: onLaunch
  })));
}
window.LauncherAppGrid = LauncherAppGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/launcher/LauncherAppGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/launcher/LauncherHome.jsx
try { (() => {
// LauncherHome.jsx — full launcher screen with topstrip, marquee, app grid, terminal.
// Mocked from ui/src/launcher/LauncherHome.tsx.

const {
  useState: useLHState,
  useEffect: useLHEffect
} = React;
const TAG_LEGEND = [{
  token: "core",
  text: "Always-on Core-X lanes; launcher can auto-prepare models/services."
}, {
  token: "standard",
  text: "Extra MLX services (audio/image/embed) typically required."
}, {
  token: "full",
  text: "Heavy multimodal stack (vision/SAiD/video) — higher memory load."
}, {
  token: "offline",
  text: "Local-only workflow; no remote lane dependency required."
}, {
  token: "external",
  text: "Opens external surface URL; launcher does not run npm/uv for this app."
}];
const SEED_TICKER = ["[INFO] launcher: bus connected on :8085", "[INFO] gateway:8090: openresponses ready", "[DEBUG] mlx: prepare ministral-8b on metal device", "[INFO] orch: plan ready: 3 actions (text)", "[WARN] embed:8095: pending_queue=12 — back-pressure", "[ERROR] vision:8094: unreachable — retrying", "[INFO] anthology: run_0042 persisted (4 steps)"];
function formatTs(d) {
  return d.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}
function LauncherHome({
  onLaunch
}) {
  const [now, setNow] = useLHState(new Date());
  const [headline] = useLHState(SEED_TICKER[3]);
  useLHEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);
  const coreApps = window.APP_REGISTRY.filter(a => a.kind === "core_mode");
  const surfaces = window.APP_REGISTRY.filter(a => a.kind === "surface_app");
  const tickerText = SEED_TICKER.join("    \u2022    ");
  return /*#__PURE__*/React.createElement("div", {
    className: "launcher-home"
  }, /*#__PURE__*/React.createElement("div", {
    className: "launcher-home__topstrip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "launcher-home__brand"
  }, "CORE-X"), /*#__PURE__*/React.createElement("span", {
    className: "launcher-home__datetime"
  }, formatTs(now)), /*#__PURE__*/React.createElement("span", {
    className: "launcher-home__state launcher-home__state--live"
  }, /*#__PURE__*/React.createElement("span", {
    className: "launcher-home__state-dot"
  }), "live"), /*#__PURE__*/React.createElement("span", {
    className: "launcher-home__headline"
  }, headline)), /*#__PURE__*/React.createElement("div", {
    className: "launcher-home__marquee",
    "aria-label": "latest-actions-marquee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "launcher-home__marquee-track"
  }, /*#__PURE__*/React.createElement("span", null, tickerText), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, tickerText))), /*#__PURE__*/React.createElement("div", {
    className: "launcher-home__workspace"
  }, /*#__PURE__*/React.createElement("div", {
    className: "launcher-home__left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "launcher-home__left-head"
  }, /*#__PURE__*/React.createElement("h2", null, "Apps Launcher"), /*#__PURE__*/React.createElement("p", null, "core modes: ", coreApps.length, " \xB7 surface apps: ", surfaces.length, " \xB7 total: ", coreApps.length + surfaces.length)), /*#__PURE__*/React.createElement("div", {
    className: "launcher-home__left-grid"
  }, /*#__PURE__*/React.createElement(window.LauncherAppGrid, {
    onLaunch: onLaunch
  })), /*#__PURE__*/React.createElement("div", {
    className: "launcher-home__left-legend",
    "aria-label": "app-tag-legend"
  }, /*#__PURE__*/React.createElement("div", {
    className: "launcher-home__left-legend-title"
  }, "Tag legend"), /*#__PURE__*/React.createElement("div", {
    className: "launcher-home__left-legend-list"
  }, TAG_LEGEND.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.token,
    className: "launcher-home__left-legend-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: `launcher-home__left-legend-token launcher-home__left-legend-token--${item.token}`
  }, item.token), /*#__PURE__*/React.createElement("span", {
    className: "launcher-home__left-legend-text"
  }, item.text)))))), /*#__PURE__*/React.createElement("div", {
    className: "launcher-home__right"
  }, /*#__PURE__*/React.createElement(window.LauncherTerminal, null))));
}
window.LauncherHome = LauncherHome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/launcher/LauncherHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/launcher/LauncherTerminal.jsx
try { (() => {
// LauncherTerminal.jsx — service stats, controls, logs.
// Mocked from ui/src/launcher/LauncherTerminal.tsx behavior.

const {
  useState: useTState,
  useEffect: useTEffect
} = React;
const SEED_LOGS = [{
  ts: "14:02:11",
  sev: "INFO",
  src: "launcher",
  cat: "core",
  msg: "bus connected on :8085"
}, {
  ts: "14:02:12",
  sev: "INFO",
  src: "gateway:8090",
  cat: "service",
  msg: "openresponses ready"
}, {
  ts: "14:02:13",
  sev: "DEBUG",
  src: "mlx",
  cat: "model",
  msg: "prepare ministral-8b on metal device"
}, {
  ts: "14:02:14",
  sev: "INFO",
  src: "orchestrator",
  cat: "plan",
  msg: "plan ready: 3 actions (text)"
}, {
  ts: "14:02:18",
  sev: "WARN",
  src: "embed:8095",
  cat: "queue",
  msg: "pending_queue=12 — back-pressure"
}, {
  ts: "14:02:21",
  sev: "ERROR",
  src: "vision:8094",
  cat: "service",
  msg: "unreachable — retrying"
}, {
  ts: "14:02:25",
  sev: "INFO",
  src: "anthology",
  cat: "run",
  msg: "run_0042 persisted (4 steps)"
}, {
  ts: "14:02:28",
  sev: "INFO",
  src: "rag:8092",
  cat: "index",
  msg: "lancedb compaction complete"
}];
function LauncherTerminal() {
  const [logs, setLogs] = useTState(SEED_LOGS);
  useTEffect(() => {
    const seedCats = ["core", "model", "service", "plan", "queue", "index", "run"];
    const seedSeverity = ["INFO", "INFO", "INFO", "DEBUG", "WARN"];
    const seedMsgs = ["bus heartbeat", "mlx::ministral-8b warmup complete", "kokoro::tts loaded", "embed::minilm ready", "schema valid (v3.1.0)", "registry sync ok", "metal device active", "openresponses request 12ms"];
    const id = window.setInterval(() => {
      const now = new Date();
      const ts = now.toTimeString().slice(0, 8);
      const next = {
        ts,
        sev: seedSeverity[Math.floor(Math.random() * seedSeverity.length)],
        src: ["mlx", "gateway:8090", "rag:8092", "audio:8093", "orchestrator"][Math.floor(Math.random() * 5)],
        cat: seedCats[Math.floor(Math.random() * seedCats.length)],
        msg: seedMsgs[Math.floor(Math.random() * seedMsgs.length)]
      };
      setLogs(prev => [...prev.slice(-19), next]);
    }, 2200);
    return () => window.clearInterval(id);
  }, []);
  const counts = {
    up: 7,
    down: 2,
    pend: 1,
    sum: 10
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "launcher-terminal"
  }, /*#__PURE__*/React.createElement("header", {
    className: "launcher-terminal__header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "launcher-terminal__title"
  }, "Terminal"), /*#__PURE__*/React.createElement("span", {
    className: "launcher-terminal__stream launcher-terminal__stream--live"
  }, /*#__PURE__*/React.createElement("span", {
    className: "launcher-terminal__stream-dot"
  }), "live")), /*#__PURE__*/React.createElement("div", {
    className: "launcher-terminal__stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "launcher-terminal__stat launcher-terminal__stat--up"
  }, /*#__PURE__*/React.createElement("span", {
    className: "launcher-terminal__stat-num"
  }, counts.up), /*#__PURE__*/React.createElement("span", {
    className: "launcher-terminal__stat-label"
  }, "up")), /*#__PURE__*/React.createElement("div", {
    className: "launcher-terminal__stat launcher-terminal__stat--down"
  }, /*#__PURE__*/React.createElement("span", {
    className: "launcher-terminal__stat-num"
  }, counts.down), /*#__PURE__*/React.createElement("span", {
    className: "launcher-terminal__stat-label"
  }, "down")), /*#__PURE__*/React.createElement("div", {
    className: "launcher-terminal__stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "launcher-terminal__stat-num"
  }, counts.pend), /*#__PURE__*/React.createElement("span", {
    className: "launcher-terminal__stat-label"
  }, "pend")), /*#__PURE__*/React.createElement("div", {
    className: "launcher-terminal__stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "launcher-terminal__stat-num"
  }, counts.sum), /*#__PURE__*/React.createElement("span", {
    className: "launcher-terminal__stat-label"
  }, "total"))), /*#__PURE__*/React.createElement("div", {
    className: "launcher-terminal__section"
  }, /*#__PURE__*/React.createElement("span", {
    className: "launcher-terminal__label"
  }, "Profile"), /*#__PURE__*/React.createElement("select", {
    className: "launcher-terminal__select",
    defaultValue: "balanced"
  }, /*#__PURE__*/React.createElement("option", null, "balanced"), /*#__PURE__*/React.createElement("option", null, "core only"), /*#__PURE__*/React.createElement("option", null, "full multimodal"), /*#__PURE__*/React.createElement("option", null, "offline only")), /*#__PURE__*/React.createElement("div", {
    className: "launcher-terminal__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "launcher-terminal__btn launcher-terminal__btn--start"
  }, "Start"), /*#__PURE__*/React.createElement("button", {
    className: "launcher-terminal__btn launcher-terminal__btn--stop"
  }, "Stop"), /*#__PURE__*/React.createElement("button", {
    className: "launcher-terminal__btn launcher-terminal__btn--restart"
  }, "Restart"))), /*#__PURE__*/React.createElement("div", {
    className: "launcher-terminal__section launcher-terminal__section--logs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "launcher-terminal__label"
  }, "Logs \xB7 live tail"), /*#__PURE__*/React.createElement("div", {
    className: "launcher-terminal__logs"
  }, logs.map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `launcher-terminal__log launcher-terminal__log--${row.sev.toLowerCase()}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "launcher-terminal__log-ts"
  }, row.ts), /*#__PURE__*/React.createElement("span", {
    className: "launcher-terminal__log-sev"
  }, row.sev), /*#__PURE__*/React.createElement("span", {
    className: "launcher-terminal__log-src"
  }, row.src), /*#__PURE__*/React.createElement("span", {
    className: "launcher-terminal__log-cat"
  }, row.cat), /*#__PURE__*/React.createElement("span", {
    className: "launcher-terminal__log-msg"
  }, row.msg))))), /*#__PURE__*/React.createElement("div", {
    className: "launcher-terminal__footer"
  }, "stream://bus \xB7 last 20 events"));
}
window.LauncherTerminal = LauncherTerminal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/launcher/LauncherTerminal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/launcher/LoginGate.jsx
try { (() => {
// LoginGate.jsx — KBLLR Core-X login screen
// Recreates ui/src/shell/LoginGate.tsx with the popping-terms layer.

const {
  useState,
  useEffect,
  useRef
} = React;
const TERM_POOLS = {
  system: ["sys::boot", "pipeline::ready", "core-x::init", "health::probe", "registry::sync", "bus::connected", "schema::valid", "port::bound", "tier::core", "profile::balanced"],
  model: ["mlx::ministral-8b", "mlx::qwen2.5-coder", "flux::schnell", "kokoro::tts", "whisper::stt", "qwen::vl-7b", "embed::minilm", "flux::kontext", "wan::2.1-i2v"],
  capability: ["voice::synthesis", "image::generate", "text::reasoning", "rag::search", "flow::execute", "vision::analyze", "a2a::publish", "embed::encode", "disk::study"],
  service: ["gateway:8090", "llm:8091", "rag:8092", "audio:8093", "mflux:8083", "embed:8095", "said:8096", "bus:8085", "vision:8094", "api:5201"],
  signal: ["OpenResponses", "MLX", "LanceDB", "Orchestrator", "Disk Study", "Flow Runs", "Model Zoo", "Anthology", "Metal", "Apple Silicon", "Local-First"]
};
const CAT_KEYS = Object.keys(TERM_POOLS);
const MAX_TERMS = 26;
const SPAWN_MS = 700;
function randBetween(a, b) {
  return Math.random() * (b - a) + a;
}
function PopTermsLayer() {
  const [terms, setTerms] = useState([]);
  const idRef = useRef(0);
  useEffect(() => {
    const spawn = () => {
      const cat = CAT_KEYS[Math.floor(Math.random() * CAT_KEYS.length)];
      const pool = TERM_POOLS[cat];
      const label = pool[Math.floor(Math.random() * pool.length)];
      const next = {
        id: ++idRef.current,
        label,
        category: cat,
        x: randBetween(4, 93),
        y: randBetween(8, 90)
      };
      setTerms(prev => [...prev.slice(-(MAX_TERMS - 1)), next]);
    };
    for (let i = 0; i < 10; i++) setTimeout(spawn, i * 150);
    const t = window.setInterval(spawn, SPAWN_MS);
    return () => window.clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "login-terms",
    "aria-hidden": "true"
  }, terms.map(term => /*#__PURE__*/React.createElement("span", {
    key: term.id,
    className: `login-term login-term--pop login-term--cat-${term.category}`,
    style: {
      left: `${term.x}%`,
      top: `${term.y}%`
    }
  }, term.label)));
}
const GitHubIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
}));
function LoginGate({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "login-gate"
  }, /*#__PURE__*/React.createElement(PopTermsLayer, null), /*#__PURE__*/React.createElement("div", {
    className: "login-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "login-logo"
  }, "KBLLR"), /*#__PURE__*/React.createElement("p", {
    className: "login-subtitle"
  }, "Core-X Ecosystem"), /*#__PURE__*/React.createElement("hr", {
    style: {
      width: "100%",
      border: "none",
      borderTop: "1px dashed #9a9a9a"
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "login-github-btn",
    onClick: onLogin
  }, /*#__PURE__*/React.createElement(GitHubIcon, null), /*#__PURE__*/React.createElement("span", null, "Continue with GitHub"))));
}
window.LoginGate = LoginGate;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/launcher/LoginGate.jsx", error: String((e && e.message) || e) }); }

// ui_kits/runtime-v2/BottomBar.jsx
try { (() => {
// BottomBar.jsx — centered, with icon+bold chips and only two actions (Send + Speak).
// Curated to NOT duplicate the left rail; these are output/intent verbs the rail can't express.

const {
  useState: useBBState
} = React;
function Icon({
  d,
  viewBox = "0 0 24 24"
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: viewBox
  }, /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
const I = {
  search: "M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-5-5",
  image: "M3 5h18v14H3zM3 17l5-5 4 4 3-3 6 6",
  research: "M3 4h14v16H3zm4 4h6m-6 4h6m-6 4h6M19 4h2v16h-2",
  recall: "M4 12a8 8 0 1014-5l3-3M21 4v6h-6",
  skills: "M4 4l8 4 8-4-8-4-8 4zm0 8l8 4 8-4m-16 8l8 4 8-4",
  code: "M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16",
  graph: "M3 12h6l3-7 4 14 3-7h2",
  compare: "M4 6h7M4 12h12M4 18h8M20 6v12",
  clear: "M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 10v6M14 10v6",
  reasoning: "M12 3a9 9 0 100 18 9 9 0 000-18zM12 7v5l3 2",
  send: "M4 12L20 4l-5 16-3-7-8-1z",
  mic: "M12 4a3 3 0 00-3 3v6a3 3 0 006 0V7a3 3 0 00-3-3zM5 11a7 7 0 0014 0M12 18v3",
  attach: "M8.5 12.5L14.7 6.3a3 3 0 014.2 4.2l-8.1 8.1a5 5 0 01-7.1-7.1l8.3-8.3"
};

// Tools curated to NOT duplicate the left rail (no /clear /history /tasks /background etc — those
// are operator state changes that live on the rail/topbar). These are *output verbs*.
const TOOLS = [{
  id: "research",
  cmd: "/deep-research",
  label: "Deep research",
  icon: I.research
}, {
  id: "image",
  cmd: "/image",
  label: "Image",
  icon: I.image
}, {
  id: "code",
  cmd: "/code",
  label: "Code",
  icon: I.code
}, {
  id: "graph",
  cmd: "/graph",
  label: "Graph",
  icon: I.graph
}, {
  id: "search",
  cmd: "/search",
  label: "Search",
  icon: I.search
}, {
  id: "recall",
  cmd: "/recall",
  label: "Recall",
  icon: I.recall
}, {
  id: "skills",
  cmd: "/skills",
  label: "Skills",
  icon: I.skills
}, {
  id: "compare",
  cmd: "/compare",
  label: "Compare",
  icon: I.compare
}];
function BottomBar({
  listening,
  onSpeakToggle,
  onSend
}) {
  const [val, setVal] = useBBState("");
  const [active, setActive] = useBBState(null);
  return /*#__PURE__*/React.createElement("div", {
    className: "input"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input__chips"
  }, TOOLS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: `chip${active === t.id ? " is-active" : ""}`,
    onClick: () => {
      setActive(t.id);
      setVal(v => v.startsWith("/") ? t.cmd + " " : t.cmd + " " + v);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: t.icon
  }), /*#__PURE__*/React.createElement("span", null, t.label), /*#__PURE__*/React.createElement("span", {
    className: "chip__cmd"
  }, t.cmd)))), /*#__PURE__*/React.createElement("div", {
    className: "input__bar"
  }, /*#__PURE__*/React.createElement("button", {
    className: "input__attach",
    title: "attach"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.attach
  })), /*#__PURE__*/React.createElement("input", {
    className: "input__field",
    value: val,
    onChange: e => setVal(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter") {
        onSend?.(val);
        setVal("");
      }
    },
    placeholder: "speak, type, or invoke a tool \u2014 /code, /image, /deep-research\u2026"
  }), /*#__PURE__*/React.createElement("button", {
    className: "input__send",
    onClick: () => {
      onSend?.(val);
      setVal("");
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.send
  }), "Send"), /*#__PURE__*/React.createElement("button", {
    className: `input__speak${listening ? " is-listening" : ""}`,
    onClick: onSpeakToggle
  }, listening ? /*#__PURE__*/React.createElement("span", {
    className: "input__pulse"
  }) : /*#__PURE__*/React.createElement(Icon, {
    d: I.mic
  }), listening ? "Listening" : "Speak")));
}
window.BottomBar = BottomBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/runtime-v2/BottomBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/runtime-v2/LeftRail.jsx
try { (() => {
// LeftRail.jsx — tight vertical rail: nav icons on top, status chips below.
// Replaces the cryptic "FPM 60 / RUN / TLS / TSK ..." stack with two-line chips:
// label + value, properly readable.

const RAIL_NAV = [{
  id: "home",
  label: "Home",
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10"
  }))
}, {
  id: "apps",
  label: "Apps",
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7"
  }))
}, {
  id: "settings",
  label: "Settings",
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
  }))
}];
const RAIL_CHIPS = [{
  label: "FPM",
  val: "60",
  tone: "good"
}, {
  label: "RUN",
  val: "ok",
  tone: "good"
}, {
  label: "TLS",
  val: "1.3",
  tone: ""
}, {
  label: "TSK",
  val: "4",
  tone: ""
}, {
  label: "CONV",
  val: "·",
  tone: ""
}, {
  label: "PRS",
  val: "6",
  tone: ""
}, {
  label: "PER",
  val: "OPR",
  tone: ""
}, {
  label: "HIS",
  val: "4",
  tone: ""
}, {
  label: "BG",
  val: "·",
  tone: ""
}, {
  label: "ZED",
  val: "on",
  tone: "good"
}, {
  label: "BRN",
  val: "·",
  tone: ""
}, {
  label: "REV",
  val: "2",
  tone: "warn"
}];
function LeftRail({
  activeApp = "voice"
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "rail",
    "aria-label": "Runtime left rail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rail__grip",
    title: "drag"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "6",
    viewBox: "0 0 14 6",
    fill: "none"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "1.5",
    x2: "12",
    y2: "1.5",
    stroke: "currentColor",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "4.5",
    x2: "12",
    y2: "4.5",
    stroke: "currentColor",
    strokeWidth: "1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rail__nav"
  }, RAIL_NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    className: "rail__btn",
    title: n.label
  }, n.icon))), /*#__PURE__*/React.createElement("div", {
    className: "rail__chips",
    "aria-label": "Session telemetry chips"
  }, RAIL_CHIPS.map((c, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "rail__chip",
    title: `${c.label} · ${c.val}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "rail__chip-label"
  }, c.label), /*#__PURE__*/React.createElement("span", {
    className: `rail__chip-val${c.tone ? " is-" + c.tone : ""}`
  }, c.val)))));
}
window.LeftRail = LeftRail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/runtime-v2/LeftRail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/runtime-v2/RenderPanel.jsx
try { (() => {
// RenderPanel.jsx — the multi-type output panel. Body cycles through code,
// markdown, 3D canvas, mermaid graph, image, audio, video — each with its own
// little toolbar and an unchanging "actions" strip with Share / Export / Save
// to warehouse / Send to.

const {
  useState: useRPState
} = React;
function Icon({
  d,
  viewBox = "0 0 24 24"
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: viewBox
  }, /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
const ICONS = {
  copy: "M9 9h10v10H9zM5 5h10v2M5 5v10h2",
  download: "M12 4v12m0 0l-4-4m4 4l4-4M4 20h16",
  share: "M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6M16 6l-4-4-4 4M12 2v14",
  vault: "M3 7h18v12H3zM3 11h18M7 15h2M11 15h6",
  send: "M4 12L20 4l-5 16-3-7-8-1z",
  expand: "M4 9V4h5M20 15v5h-5M4 15v5h5M20 9V4h-5",
  pin: "M12 3v9M8 9l4-6 4 6M8 12h8M10 12v9",
  more: "M5 12h.01M12 12h.01M19 12h.01",
  code: "M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16",
  md: "M3 6h18v12H3zM7 14V10l2 3 2-3v4M14 10v4h3l-3-4z",
  canvas: "M3 3l18 18M3 3v18h18M9 21V9h12",
  mermaid: "M5 12h6v6h6v-6h-6V6H5z",
  image: "M3 5h18v14H3zM3 17l5-5 4 4 3-3 6 6",
  audio: "M9 18V6l10-2v12M9 18a3 3 0 11-3-3 3 3 0 013 3zM19 16a3 3 0 11-3-3 3 3 0 013 3z",
  video: "M2 6h14v12H2zm14 4l6-3v10l-6-3",
  play: "M8 5v14l11-7z"
};
const TABS = [{
  id: "md",
  label: "Markdown",
  icon: ICONS.md
}, {
  id: "code",
  label: "Code",
  icon: ICONS.code
}, {
  id: "canvas",
  label: "3D",
  icon: ICONS.canvas
}, {
  id: "mermaid",
  label: "Graph",
  icon: ICONS.mermaid
}, {
  id: "image",
  label: "Image",
  icon: ICONS.image
}, {
  id: "audio",
  label: "Audio",
  icon: ICONS.audio
}, {
  id: "video",
  label: "Video",
  icon: ICONS.video
}];

// ── bodies ──

function RenderCode() {
  return /*#__PURE__*/React.createElement("div", {
    className: "r-code"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-code__gutter"
  }, Array.from({
    length: 14
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, String(i + 1).padStart(2, " ")))), /*#__PURE__*/React.createElement("pre", {
    className: "r-code__lines"
  }, `<span class="tok-com">// orchestrator/plan.ts — emit non-destructive disk reclaim plan</span>
<span class="tok-key">import</span> { plan, lanes } <span class="tok-key">from</span> <span class="tok-str">"@corex/orch"</span>;

<span class="tok-key">export async function</span> <span class="tok-fn">reclaim</span>(snap: <span class="tok-str">"guest"</span> | <span class="tok-str">"main"</span>) {
  <span class="tok-key">const</span> p = <span class="tok-key">await</span> <span class="tok-fn">plan</span>({
    actions: [
      { type: <span class="tok-str">"rag.search"</span>,   lane: lanes.embed,   policy: <span class="tok-str">"shared"</span>  },
      { type: <span class="tok-str">"llm.reason"</span>,   lane: lanes.llm,     policy: <span class="tok-str">"balanced"</span> },
      { type: <span class="tok-str">"disk.dry-run"</span>, lane: lanes.offline, policy: <span class="tok-str">"isolated"</span> },
    ],
    confirm: <span class="tok-num">true</span>,
  });

  <span class="tok-key">return</span> p.<span class="tok-fn">id</span>;
}`));
}
function RenderMarkdown() {
  return /*#__PURE__*/React.createElement("div", {
    className: "r-md"
  }, /*#__PURE__*/React.createElement("h1", null, "Disk reclaim \xB7 run_0042"), /*#__PURE__*/React.createElement("p", null, "Dry-run staged on ", /*#__PURE__*/React.createElement("code", null, "guest"), " snapshot. No destructive action committed; re-issue with ", /*#__PURE__*/React.createElement("code", null, "policy=apply"), " to commit."), /*#__PURE__*/React.createElement("h2", null, "Candidates"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "~/Library/Caches/com.kbllr.coreX/blobs"), " \u2014 2.4 GB \xB7 stale"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "./.lancedb/cache/0044"), " \u2014 612 MB \xB7 superseded"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("code", null, "./avatars/heads/kbllr/*.glb.tmp"), " \u2014 84 MB \xB7 orphaned tmp")), /*#__PURE__*/React.createElement("h2", null, "Notes"), /*#__PURE__*/React.createElement("blockquote", null, "Plan confidence 0.87 \xB7 6 sources cited \xB7 0 destructive ops \xB7 ready to commit on operator confirmation."), /*#__PURE__*/React.createElement("p", null, "Next: review with ", /*#__PURE__*/React.createElement("code", null, "/code"), " handoff or send to Zed cockpit."));
}
function RenderCanvas() {
  return /*#__PURE__*/React.createElement("div", {
    className: "r-canvas"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-canvas__hud"
  }, /*#__PURE__*/React.createElement("div", null, "scene \xB7 ", /*#__PURE__*/React.createElement("b", null, "warehouse-r3")), /*#__PURE__*/React.createElement("div", null, "tris \xB7 ", /*#__PURE__*/React.createElement("b", null, "184 320")), /*#__PURE__*/React.createElement("div", null, "fps \xB7 ", /*#__PURE__*/React.createElement("b", null, "60"))), /*#__PURE__*/React.createElement("div", {
    className: "r-canvas__obj"
  }), /*#__PURE__*/React.createElement("div", {
    className: "r-canvas__overlay"
  }, /*#__PURE__*/React.createElement("button", {
    title: "orbit"
  }, "\u27F2"), /*#__PURE__*/React.createElement("button", {
    title: "zoom in"
  }, "+"), /*#__PURE__*/React.createElement("button", {
    title: "zoom out"
  }, "\u2212"), /*#__PURE__*/React.createElement("button", {
    title: "reset view"
  }, "\u2302")));
}
function RenderMermaid() {
  // Static SVG approximation of a small flowchart graph — placeholder for real mermaid render.
  return /*#__PURE__*/React.createElement("div", {
    className: "r-mermaid"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 600 320"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("marker", {
    id: "arr",
    viewBox: "0 0 10 10",
    refX: "9",
    refY: "5",
    markerWidth: "6",
    markerHeight: "6",
    orient: "auto-start-reverse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0L10 5L0 10z",
    fill: "rgba(255,255,255,0.7)"
  }))), [["voice", 50, 140, 100, 60], ["plan", 220, 50, 120, 60], ["rag", 220, 230, 120, 60], ["llm", 380, 50, 120, 60], ["disk", 380, 230, 120, 60], ["result", 540, 140, 80, 60]].map(([label, x, y, w, h]) => /*#__PURE__*/React.createElement("g", {
    key: label
  }, /*#__PURE__*/React.createElement("rect", {
    x: x,
    y: y,
    width: w,
    height: h,
    fill: "rgba(255,255,255,0.04)",
    stroke: "rgba(255,255,255,0.45)",
    strokeDasharray: "4 3",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: x + w / 2,
    y: y + h / 2 + 4,
    textAnchor: "middle",
    fill: "rgba(255,255,255,0.92)",
    fontFamily: "var(--font-mono)",
    fontSize: "12",
    letterSpacing: "0.06em"
  }, label))), [["M150 165 L220 80", true], ["M150 175 L220 255", true], ["M340 80  L380 80", true], ["M340 255 L380 255", true], ["M500 80  L540 160", true], ["M500 255 L540 175", true]].map(([d], i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d,
    stroke: "rgba(255,255,255,0.55)",
    strokeWidth: "1",
    fill: "none",
    markerEnd: "url(#arr)",
    strokeDasharray: "3 2"
  }))));
}
function RenderImage() {
  return /*#__PURE__*/React.createElement("div", {
    className: "r-image"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-image__frame"
  }, "flux \xB7 \"operator console, 35mm, sodium lamps\"", /*#__PURE__*/React.createElement("br", null), "1024 \xD7 1024 \xB7 seed 4427 \xB7 28 steps", /*#__PURE__*/React.createElement("br", null), "(image placeholder)"));
}
function RenderAudio() {
  // Simulated waveform: 70 bars with the first 28 marked as already-played.
  const bars = Array.from({
    length: 70
  }).map((_, i) => {
    const h = 6 + Math.abs(Math.sin(i * 0.6) * 36) + Math.abs(Math.cos(i * 0.31) * 28);
    const cls = i < 28 ? "is-played" : i > 60 ? "is-future" : "";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: `r-audio__bar ${cls}`,
      style: {
        height: h
      }
    });
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "r-audio"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-audio__wave"
  }, bars), /*#__PURE__*/React.createElement("div", {
    className: "r-audio__controls"
  }, /*#__PURE__*/React.createElement("button", {
    className: "r-audio__play"
  }, "\u25B6"), /*#__PURE__*/React.createElement("span", {
    className: "r-audio__meter"
  }, "00:38 / 01:24"), /*#__PURE__*/React.createElement("span", null, "kokoro-en \xB7 voice:kbllr")), /*#__PURE__*/React.createElement("div", {
    className: "r-audio__transcript"
  }, /*#__PURE__*/React.createElement("b", null, "kbllr \u203A"), " \"Stage the reclaim on guest, dry-run only. I want to see the three candidates and the disk math before I commit.\""));
}
function RenderVideo() {
  return /*#__PURE__*/React.createElement("div", {
    className: "r-video"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-video__frame"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-video__hud"
  }, "replay \xB7 session_2b \xB7 14:02 \u2192 14:09"), /*#__PURE__*/React.createElement("button", {
    className: "r-video__play"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5v14l11-7z"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "r-video__scrub"
  })));
}
function bodyFor(kind) {
  switch (kind) {
    case "code":
      return /*#__PURE__*/React.createElement(RenderCode, null);
    case "canvas":
      return /*#__PURE__*/React.createElement(RenderCanvas, null);
    case "mermaid":
      return /*#__PURE__*/React.createElement(RenderMermaid, null);
    case "image":
      return /*#__PURE__*/React.createElement(RenderImage, null);
    case "audio":
      return /*#__PURE__*/React.createElement(RenderAudio, null);
    case "video":
      return /*#__PURE__*/React.createElement(RenderVideo, null);
    default:
      return /*#__PURE__*/React.createElement(RenderMarkdown, null);
  }
}
function RenderPanel({
  initial = "md"
}) {
  const [kind, setKind] = useRPState(initial);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "r-tabs"
  }, TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: `r-tab${t.id === kind ? " is-on" : ""}`,
    onClick: () => setKind(t.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    d: t.icon
  }), t.label))), /*#__PURE__*/React.createElement("div", {
    className: "r-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "r-action is-primary"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ICONS.send
  }), "Send to\u2026"), /*#__PURE__*/React.createElement("span", {
    className: "r-action__sep"
  }), /*#__PURE__*/React.createElement("button", {
    className: "r-action"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ICONS.copy
  }), "Copy"), /*#__PURE__*/React.createElement("button", {
    className: "r-action"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ICONS.download
  }), "Export"), /*#__PURE__*/React.createElement("button", {
    className: "r-action"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ICONS.vault
  }), "Warehouse"), /*#__PURE__*/React.createElement("button", {
    className: "r-action"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ICONS.share
  }), "Share"), /*#__PURE__*/React.createElement("span", {
    className: "r-action__spacer"
  }), /*#__PURE__*/React.createElement("span", {
    className: "r-action__hint"
  }, "artifact \xB7 ", kind, "_2b9f \xB7 1.4 KB"), /*#__PURE__*/React.createElement("button", {
    className: "r-action",
    title: "pin"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ICONS.pin
  })), /*#__PURE__*/React.createElement("button", {
    className: "r-action",
    title: "fullscreen"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ICONS.expand
  }))), /*#__PURE__*/React.createElement("div", {
    className: "r-body"
  }, bodyFor(kind)));
}
window.RenderPanel = RenderPanel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/runtime-v2/RenderPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/runtime-v2/RendererWindow.jsx
try { (() => {
// RendererWindow.jsx — floating window that hosts the multi-type renderer.
// Drag from header, resize from bottom-right corner. Collapse to header-only.
// Opens via setArtifact({ kind, id, label, meta }); closes via onClose.

const {
  useState: useRWState,
  useEffect: useRWEffect,
  useRef: useRWRef
} = React;
function RWIcon({
  d,
  viewBox = "0 0 24 24"
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: viewBox
  }, /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
const RW_I = {
  collapse: "M5 12h14",
  expand: "M12 5v14M5 12h14",
  pin: "M12 3v9M8 9l4-6 4 6M8 12h8M10 12v9",
  close: "M6 6l12 12M6 18L18 6",
  fullscreen: "M4 9V4h5M20 15v5h-5M4 15v5h5M20 9V4h-5"
};
function RendererWindow({
  artifact,
  onClose,
  onChangeKind
}) {
  const [pos, setPos] = useRWState({
    x: 200,
    y: 120
  });
  const [size, setSize] = useRWState({
    w: 720,
    h: 520
  });
  const [collapsed, setCollapsed] = useRWState(false);
  const [dragging, setDragging] = useRWState(false);
  const headRef = useRWRef(null);

  // re-position to a sane place each time a new artifact opens so the window
  // doesn't end up off-screen on small viewports
  useRWEffect(() => {
    if (!artifact) return;
    const vw = window.innerWidth,
      vh = window.innerHeight;
    setPos(p => ({
      x: Math.min(p.x, Math.max(80, vw - size.w - 460)),
      y: Math.min(p.y, Math.max(80, vh - size.h - 160))
    }));
  }, [artifact?.id]); // eslint-disable-line

  const onHeadDown = e => {
    if (e.target.closest("button")) return;
    e.preventDefault();
    setDragging(true);
    const startX = e.clientX,
      startY = e.clientY;
    const startPos = {
      ...pos
    };
    const onMove = ev => {
      const dx = ev.clientX - startX;
      const dy = ev.clientY - startY;
      setPos({
        x: Math.max(8, Math.min(window.innerWidth - 120, startPos.x + dx)),
        y: Math.max(56, Math.min(window.innerHeight - 60, startPos.y + dy))
      });
    };
    const onUp = () => {
      setDragging(false);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };
  const onResizeDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const startX = e.clientX,
      startY = e.clientY;
    const start = {
      ...size
    };
    const onMove = ev => {
      setSize({
        w: Math.max(360, start.w + (ev.clientX - startX)),
        h: Math.max(180, start.h + (ev.clientY - startY))
      });
    };
    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };
  if (!artifact) return null;
  const style = {
    left: pos.x,
    top: pos.y,
    width: size.w,
    height: collapsed ? "auto" : size.h
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `renderer${collapsed ? " is-collapsed" : ""}`,
    style: style,
    role: "dialog",
    "aria-label": `Renderer · ${artifact.label}`
  }, /*#__PURE__*/React.createElement("div", {
    ref: headRef,
    className: `renderer__head${dragging ? " is-dragging" : ""}`,
    onMouseDown: onHeadDown
  }, /*#__PURE__*/React.createElement("span", {
    className: "renderer__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "panel__kind"
  }, artifact.kind), /*#__PURE__*/React.createElement("span", null, artifact.label)), /*#__PURE__*/React.createElement("span", {
    className: "renderer__meta"
  }, "artifact \xB7 ", artifact.id, " \xB7 ", artifact.meta || ""), /*#__PURE__*/React.createElement("span", {
    className: "renderer__tools"
  }, /*#__PURE__*/React.createElement("button", {
    className: "panel__tool",
    title: collapsed ? "expand" : "minimise",
    onClick: () => setCollapsed(v => !v)
  }, /*#__PURE__*/React.createElement(RWIcon, {
    d: collapsed ? RW_I.expand : RW_I.collapse
  })), /*#__PURE__*/React.createElement("button", {
    className: "panel__tool",
    title: "pin"
  }, /*#__PURE__*/React.createElement(RWIcon, {
    d: RW_I.pin
  })), /*#__PURE__*/React.createElement("button", {
    className: "panel__tool",
    title: "fullscreen"
  }, /*#__PURE__*/React.createElement(RWIcon, {
    d: RW_I.fullscreen
  })), /*#__PURE__*/React.createElement("button", {
    className: "panel__tool",
    title: "close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(RWIcon, {
    d: RW_I.close
  })))), !collapsed && /*#__PURE__*/React.createElement(window.RenderPanel, {
    initial: artifact.kind,
    onChangeKind: onChangeKind
  }), !collapsed && /*#__PURE__*/React.createElement("div", {
    className: "renderer__resize",
    onMouseDown: onResizeDown
  }));
}
window.RendererWindow = RendererWindow;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/runtime-v2/RendererWindow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/runtime-v2/RightStack.jsx
try { (() => {
// RightStack.jsx — operator panels column. Multi-instance, add-from-menu,
// collapse-to-header, S-handle row resize, W-edge width resize.
//
// Renderer is NOT here — it's a separate floating window (RendererWindow.jsx).
// Output refs in the Conversation panel call onOpenRender({kind, id, label}).

const {
  useState: useRSState,
  useRef: useRSRef,
  useEffect: useRSEffect,
  useMemo: useRSMemo
} = React;
const HEAD_MIN = 38;
const BODY_MIN = 60;
const STACK_GAP = 6;
function PanelTool({
  d,
  title,
  onClick,
  active
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: `panel__tool${active ? " is-on" : ""}`,
    title: title,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: d
  })));
}
const T = {
  collapse: "M5 12h14",
  expand: "M12 5v14M5 12h14",
  pin: "M12 3v9M8 9l4-6 4 6M8 12h8M10 12v9",
  close: "M6 6l12 12M6 18L18 6",
  fullscreen: "M4 9V4h5M20 15v5h-5M4 15v5h5M20 9V4h-5",
  refresh: "M4 4v6h6M20 20v-6h-6M4 10a8 8 0 0114-5l2 2M20 14a8 8 0 01-14 5l-2-2",
  add: "M12 5v14M5 12h14"
};
function PanelHeader({
  kind,
  title,
  meta,
  collapsed,
  onCollapse,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "panel__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "panel__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "panel__kind"
  }, kind), /*#__PURE__*/React.createElement("span", null, title)), /*#__PURE__*/React.createElement("span", {
    className: "panel__meta"
  }, meta), /*#__PURE__*/React.createElement("span", {
    className: "panel__tools"
  }, /*#__PURE__*/React.createElement(PanelTool, {
    d: T.refresh,
    title: "reload"
  }), /*#__PURE__*/React.createElement(PanelTool, {
    d: collapsed ? T.expand : T.collapse,
    title: collapsed ? "expand" : "minimise",
    active: collapsed,
    onClick: onCollapse
  }), /*#__PURE__*/React.createElement(PanelTool, {
    d: T.fullscreen,
    title: "pop out"
  }), /*#__PURE__*/React.createElement(PanelTool, {
    d: T.close,
    title: "close",
    onClick: onClose
  })));
}

// ── BODIES ─────────────────────────────────────────────────────────────────

function ConversationBody({
  onOpenRender
}) {
  const REF_ICON = "M7 17L17 7M17 7H9M17 7v8";
  const messages = [{
    role: "sys",
    text: "session_2b · disk context shared from anthology · disk.study · run_0042"
  }, {
    role: "user",
    text: "Stage the reclaim on guest, dry run only.  I want the three candidates and the disk math before I commit.",
    time: "14:01:08"
  }, {
    role: "asst",
    text: "Plan ready. 3 actions, none destructive. Confidence 0.87. Reviewing now.",
    time: "14:01:09",
    refs: [{
      kind: "md",
      id: "plan_2026-05-17_a04f",
      label: "Reclaim plan",
      meta: "1.4 KB"
    }, {
      kind: "code",
      id: "reclaim_ts",
      label: "reclaim.ts",
      meta: "12 ln"
    }]
  }, {
    role: "user",
    text: "Show me the call graph and dry-run output.",
    time: "14:01:38"
  }, {
    role: "asst",
    text: "Here are the call graph for the orchestrator lane and the audio summary I narrated.",
    time: "14:01:40",
    refs: [{
      kind: "mermaid",
      id: "lanes_graph",
      label: "Lane graph",
      meta: "6 nodes"
    }, {
      kind: "audio",
      id: "narration_38s",
      label: "Narration",
      meta: "1:24"
    }, {
      kind: "canvas",
      id: "warehouse_3d",
      label: "warehouse-r3",
      meta: "184k tris"
    }]
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "panel__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "conv"
  }, messages.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `conv__msg conv__msg--${m.role}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "conv__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "conv__role"
  }, m.role === "asst" ? "core-x" : m.role === "sys" ? "system" : "kbllr"), m.time && /*#__PURE__*/React.createElement("span", null, "\xB7 ", m.time)), /*#__PURE__*/React.createElement("div", {
    className: "conv__body"
  }, m.text), m.refs && /*#__PURE__*/React.createElement("div", {
    className: "conv__refs"
  }, m.refs.map((r, j) => /*#__PURE__*/React.createElement("button", {
    key: j,
    className: "conv__ref",
    onClick: () => onOpenRender?.(r)
  }, /*#__PURE__*/React.createElement("span", {
    className: "conv__ref-kind"
  }, r.kind), r.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5
    }
  }, "\xB7 ", r.meta), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: REF_ICON
  })))))))));
}
function HandoffBody() {
  return /*#__PURE__*/React.createElement("div", {
    className: "panel__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kvs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kv"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kv__k"
  }, "zed"), "           ", /*#__PURE__*/React.createElement("span", {
    className: "kv__v"
  }, "cockpit ", /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "connected"))), /*#__PURE__*/React.createElement("div", {
    className: "kv"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kv__k"
  }, "code_workspace"), /*#__PURE__*/React.createElement("span", {
    className: "kv__v"
  }, "lightweight")), /*#__PURE__*/React.createElement("div", {
    className: "kv"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kv__k"
  }, "gateway"), "       ", /*#__PURE__*/React.createElement("span", {
    className: "kv__v"
  }, "/v1/responses")), /*#__PURE__*/React.createElement("div", {
    className: "kv"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kv__k"
  }, "handoff"), "       ", /*#__PURE__*/React.createElement("span", {
    className: "kv__v"
  }, "/code & /deep-research")), /*#__PURE__*/React.createElement("div", {
    className: "kv"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kv__k"
  }, "last sync"), "     ", /*#__PURE__*/React.createElement("span", {
    className: "kv__v"
  }, "14:02:21 \xB7 ok"))));
}
function QueueBody() {
  const [tab, setTab] = useRSState("skills");
  const ROWS = {
    skills: [{
      type: "skill",
      name: "warehouse.snapshot.diff",
      meta: "+12 +3 ?"
    }, {
      type: "skill",
      name: "voice.role.operator-x",
      meta: "patch · 04"
    }, {
      type: "skill",
      name: "rag.refit.lance-0044",
      meta: "auto"
    }],
    drafts: [{
      type: "draft",
      name: "reply · disk reclaim status",
      meta: "14:02"
    }, {
      type: "draft",
      name: "memo · vault rotation 0044",
      meta: "13:48"
    }],
    policies: [{
      type: "policy",
      name: "balanced → strict (vault)",
      meta: "needs sign"
    }]
  };
  const TABS = [{
    id: "skills",
    label: "Skill proposals",
    count: ROWS.skills.length
  }, {
    id: "drafts",
    label: "Drafts",
    count: ROWS.drafts.length
  }, {
    id: "policies",
    label: "Policies",
    count: ROWS.policies.length
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "q-tabs"
  }, TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: `q-tab${tab === t.id ? " is-on" : ""}`,
    onClick: () => setTab(t.id)
  }, t.label, /*#__PURE__*/React.createElement("span", {
    className: "count"
  }, t.count)))), /*#__PURE__*/React.createElement("div", {
    className: "panel__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "q-rows"
  }, ROWS[tab].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "q-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "q-row__type"
  }, r.type), /*#__PURE__*/React.createElement("span", {
    className: "q-row__name"
  }, r.name), /*#__PURE__*/React.createElement("span", {
    className: "q-row__meta"
  }, r.meta))))));
}
function NotesBody() {
  return /*#__PURE__*/React.createElement("div", {
    className: "panel__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "notes"
  }, /*#__PURE__*/React.createElement("div", {
    className: "notes__item"
  }, /*#__PURE__*/React.createElement("b", null, "operator note \xB7 14:02"), "Dry-run only on guest. Vault rotation policy still pending sign-off. Re-check `said:8096` before any apply."), /*#__PURE__*/React.createElement("div", {
    className: "notes__item"
  }, /*#__PURE__*/React.createElement("b", null, "scratch"), "When reclaim ships, run `disk.study` against main to recompute baselines.")));
}
function TelemetryBody() {
  return /*#__PURE__*/React.createElement("div", {
    className: "panel__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "telem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "telem__cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "telem__k"
  }, "events / s"), /*#__PURE__*/React.createElement("span", {
    className: "telem__v"
  }, "8 932")), /*#__PURE__*/React.createElement("div", {
    className: "telem__cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "telem__k"
  }, "kv cache"), " ", /*#__PURE__*/React.createElement("span", {
    className: "telem__v"
  }, "1.4 G")), /*#__PURE__*/React.createElement("div", {
    className: "telem__cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "telem__k"
  }, "queue \xB7 embed"), /*#__PURE__*/React.createElement("span", {
    className: "telem__v is-warn"
  }, "12")), /*#__PURE__*/React.createElement("div", {
    className: "telem__cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "telem__k"
  }, "svc up"), "   ", /*#__PURE__*/React.createElement("span", {
    className: "telem__v is-good"
  }, "10/11")), /*#__PURE__*/React.createElement("div", {
    className: "telem__cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "telem__k"
  }, "tok / s"), "  ", /*#__PURE__*/React.createElement("span", {
    className: "telem__v"
  }, "128.4")), /*#__PURE__*/React.createElement("div", {
    className: "telem__cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "telem__k"
  }, "vault writes"), /*#__PURE__*/React.createElement("span", {
    className: "telem__v"
  }, "24"))));
}

// ── PANEL DESCRIPTOR REGISTRY ──────────────────────────────────────────────

const PANEL_KINDS = {
  conversation: {
    kind: "conv",
    title: "Conversation",
    meta: "session_2b · 4 turns",
    body: props => /*#__PURE__*/React.createElement(ConversationBody, {
      onOpenRender: props.onOpenRender
    })
  },
  handoff: {
    kind: "handoff",
    title: "Zed handoff",
    meta: "zed · /v1/responses · ready",
    body: () => /*#__PURE__*/React.createElement(HandoffBody, null)
  },
  queue: {
    kind: "queue",
    title: "Review queue",
    meta: "6 pending · approve to commit",
    body: () => /*#__PURE__*/React.createElement(QueueBody, null)
  },
  notes: {
    kind: "notes",
    title: "Notes",
    meta: "2 entries · session_2b",
    body: () => /*#__PURE__*/React.createElement(NotesBody, null)
  },
  telemetry: {
    kind: "telem",
    title: "Telemetry",
    meta: "live · 1s tick",
    body: () => /*#__PURE__*/React.createElement(TelemetryBody, null)
  }
};
const ADD_MENU = [{
  id: "conversation",
  label: "Conversation",
  meta: "transcript · output refs",
  icon: "M21 12a8 8 0 11-16 0 8 8 0 0116 0zM12 8v4l3 2"
}, {
  id: "handoff",
  label: "Zed handoff",
  meta: "/v1/responses",
  icon: "M4 4h16v6H4zm0 10h16v6H4zM8 7h6m-6 10h6"
}, {
  id: "queue",
  label: "Review queue",
  meta: "skills · drafts · policies",
  icon: "M4 6h16M4 12h10M4 18h16"
}, {
  id: "notes",
  label: "Notes",
  meta: "scratchpad · operator",
  icon: "M5 4h11l3 3v13H5zm0 7h14M5 15h14"
}, {
  id: "telemetry",
  label: "Telemetry",
  meta: "live counters",
  icon: "M4 12h4l3-7 4 14 3-7h2"
}];

// ── STACK ──────────────────────────────────────────────────────────────────

let __pid = 0;
function newId() {
  __pid += 1;
  return "p_" + __pid;
}
function RightStack({
  initial = ["conversation", "handoff", "queue"],
  onOpenRender,
  defaultWidth = 420,
  minWidth = 320,
  maxWidth = 880
}) {
  const containerRef = useRSRef(null);
  const [width, setWidth] = useRSState(defaultWidth);
  const [panels, setPanels] = useRSState(() => initial.map(k => ({
    id: newId(),
    kind: k,
    collapsed: false
  })));
  const [weights, setWeights] = useRSState(() => initial.map(() => 1));
  const [addOpen, setAddOpen] = useRSState(false);
  const expandedIndexes = useRSMemo(() => panels.map((p, i) => p.collapsed ? -1 : i).filter(i => i >= 0), [panels]);

  // Width drag
  useRSEffect(() => {
    const handle = containerRef.current?.querySelector(".stack__wresize");
    if (!handle) return;
    const onDown = e => {
      e.preventDefault();
      const startX = e.clientX;
      const startW = width;
      const onMove = ev => {
        const dx = startX - ev.clientX;
        const next = Math.min(maxWidth, Math.max(minWidth, startW + dx));
        setWidth(next);
      };
      const onUp = () => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    };
    handle.addEventListener("mousedown", onDown);
    return () => handle.removeEventListener("mousedown", onDown);
  }, [width, minWidth, maxWidth]);

  // Row drag — operates on EXPANDED panels only, since collapsed are flex:0.
  const onRowDown = (i, e) => {
    e.preventDefault();
    // i refers to the position in expandedIndexes
    const a = expandedIndexes[i];
    const b = expandedIndexes[i + 1];
    if (a == null || b == null) return;
    const rect = containerRef.current.getBoundingClientRect();
    // approximate space available to flexed (expanded) rows
    const collapsedCount = panels.length - expandedIndexes.length;
    const totalH = rect.height - STACK_GAP * (panels.length - 1) - HEAD_MIN * collapsedCount - 32 /* add row */ - STACK_GAP;
    const sum = expandedIndexes.reduce((s, idx) => s + weights[idx], 0);
    const pixA = weights[a] / sum * totalH;
    const pixB = weights[b] / sum * totalH;
    const startY = e.clientY;
    const onMove = ev => {
      const dy = ev.clientY - startY;
      const nA = Math.max(HEAD_MIN + BODY_MIN, pixA + dy);
      const nB = Math.max(HEAD_MIN + BODY_MIN, pixB - dy);
      const next = [...weights];
      next[a] = nA / totalH * sum;
      next[b] = nB / totalH * sum;
      setWeights(next);
    };
    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };
  const toggleCollapse = id => setPanels(ps => ps.map(p => p.id === id ? {
    ...p,
    collapsed: !p.collapsed
  } : p));
  const closePanel = id => {
    setPanels(ps => {
      const idx = ps.findIndex(p => p.id === id);
      if (idx < 0) return ps;
      const next = ps.filter(p => p.id !== id);
      setWeights(ws => ws.filter((_, i) => i !== idx));
      return next;
    });
  };
  const addPanel = kind => {
    setPanels(ps => [...ps, {
      id: newId(),
      kind,
      collapsed: false
    }]);
    setWeights(ws => [...ws, 1]);
    setAddOpen(false);
  };
  return /*#__PURE__*/React.createElement("aside", {
    className: "stack",
    ref: containerRef,
    style: {
      width
    },
    "aria-label": "Operator panel stack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack__wresize",
    title: "drag to resize width"
  }), panels.map((p, i) => {
    const desc = PANEL_KINDS[p.kind];
    if (!desc) return null;
    const isExpanded = !p.collapsed;
    const isLastExpanded = isExpanded && expandedIndexes[expandedIndexes.length - 1] === i;
    const style = p.collapsed ? {
      flex: "0 0 auto"
    } : {
      flex: `${weights[i]} ${weights[i]} 0`,
      minHeight: HEAD_MIN + BODY_MIN
    };

    // we render an hresize *after* this panel only if there's another expanded panel after.
    const expandedPos = expandedIndexes.indexOf(i);
    const hasNextExpanded = expandedPos >= 0 && expandedPos < expandedIndexes.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: p.id
    }, /*#__PURE__*/React.createElement("section", {
      className: `panel${p.collapsed ? " is-collapsed" : ""}`,
      style: style
    }, /*#__PURE__*/React.createElement(PanelHeader, {
      kind: desc.kind,
      title: desc.title,
      meta: desc.meta,
      collapsed: p.collapsed,
      onCollapse: () => toggleCollapse(p.id),
      onClose: () => closePanel(p.id)
    }), !p.collapsed && desc.body({
      onOpenRender
    })), hasNextExpanded && /*#__PURE__*/React.createElement("div", {
      className: "panel__hresize",
      role: "separator",
      "aria-orientation": "horizontal",
      onMouseDown: e => onRowDown(expandedPos, e)
    }));
  }), /*#__PURE__*/React.createElement("button", {
    className: "stack__add",
    onClick: () => setAddOpen(v => !v),
    "aria-expanded": addOpen
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: T.add
  })), "Add panel", addOpen && /*#__PURE__*/React.createElement("div", {
    className: "stack__add-menu",
    onClick: e => e.stopPropagation()
  }, ADD_MENU.map(m => /*#__PURE__*/React.createElement("button", {
    key: m.id,
    className: "stack__add-row",
    onClick: () => addPanel(m.id)
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: m.icon
  })), /*#__PURE__*/React.createElement("span", null, m.label), /*#__PURE__*/React.createElement("span", {
    className: "stack__add-row__meta"
  }, m.meta))))));
}
window.RightStack = RightStack;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/runtime-v2/RightStack.jsx", error: String((e && e.message) || e) }); }

// ui_kits/runtime-v2/TopBar.jsx
try { (() => {
// TopBar.jsx — voice-runtime top bar with marquee + 3 dropdowns
// (reasoning effort, head, services). Brand on the far left, OS clock on the right.

const {
  useState: useTBState,
  useEffect: useTBEffect,
  useRef: useTBRef
} = React;
const REASONING_OPTIONS = [{
  id: "minimal",
  label: "min"
}, {
  id: "low",
  label: "low"
}, {
  id: "medium",
  label: "med"
}, {
  id: "high",
  label: "high"
}];
const HEAD_OPTIONS = [{
  id: "kbllr",
  label: "kbllr",
  tag: "MAIN",
  status: "up"
}, {
  id: "ada",
  label: "ada",
  tag: "research",
  status: "up"
}, {
  id: "mim",
  label: "mim",
  tag: "voice-x",
  status: "up"
}, {
  id: "voigt",
  label: "voigt",
  tag: "ops",
  status: "warn"
}, {
  id: "noma",
  label: "noma",
  tag: "external",
  status: "off"
}];
const SERVICE_LIST = [{
  id: "gateway",
  port: "8090",
  status: "up",
  note: "v0.42.1"
}, {
  id: "llm",
  port: "8091",
  status: "up",
  note: "mlx::ministral-8b"
}, {
  id: "rag",
  port: "8092",
  status: "up",
  note: "lancedb · 0044"
}, {
  id: "stt",
  port: "8093",
  status: "up",
  note: "whisper-l-v3"
}, {
  id: "vision",
  port: "8094",
  status: "warn",
  note: "queue=12"
}, {
  id: "embed",
  port: "8095",
  status: "up",
  note: "bge-m3"
}, {
  id: "said",
  port: "8096",
  status: "down",
  note: "restart pending"
}, {
  id: "tts",
  port: "8097",
  status: "up",
  note: "kokoro-en"
}, {
  id: "flux",
  port: "8098",
  status: "up",
  note: "schnell"
}, {
  id: "bus",
  port: "8099",
  status: "up",
  note: "8932 evt/s"
}, {
  id: "warehouse",
  port: "8100",
  status: "up",
  note: "vault://core-x"
}];
const MARQUEE_LINES = ["[INFO] core: bus connected · 8932 evt/s", "[OK]   stt: whisper-l-v3 ready", "[INFO] orch: handoff /code · /deep-research", "[WARN] vision: queue saturated (12)", "[INFO] flux: schnell preheat complete", "[OK]   rag: lancedb · 6 sources cited", "[DEBUG] mlx: kv_cache 1.4G / 4.0G", "[INFO] warehouse: 24 artifacts indexed today", "[INFO] zed: handoff gateway=/v1/responses"];
function Caret() {
  return /*#__PURE__*/React.createElement("span", {
    className: "caret",
    "aria-hidden": "true"
  });
}
function MarqueeTrack() {
  // Duplicate the line set so the marquee scroll is seamless.
  const items = [...MARQUEE_LINES, ...MARQUEE_LINES].map((line, i) => {
    let cls = "";
    if (line.startsWith("[WARN]")) cls = "warn";else if (line.startsWith("[ERR]")) cls = "err";
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      className: cls
    }, line);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "tb-marquee__track"
  }, items);
}
function ReasoningPopover({
  value,
  onChange,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "popover",
    onMouseLeave: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "popover__title"
  }, "reasoning effort"), /*#__PURE__*/React.createElement("div", {
    className: "seg"
  }, REASONING_OPTIONS.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.id,
    className: `seg__btn${value === o.id ? " is-on" : ""}`,
    onClick: () => {
      onChange(o.id);
      onClose();
    }
  }, o.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 8px 4px",
      fontSize: 10,
      color: "rgba(255,255,255,0.4)",
      letterSpacing: "0.08em"
    }
  }, "plan-first \xB7 n_thinking_tokens scales with effort"));
}
function HeadPopover({
  value,
  onChange,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "popover",
    onMouseLeave: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "popover__title"
  }, "head \xB7 avatar"), /*#__PURE__*/React.createElement("div", {
    className: "poplist"
  }, HEAD_OPTIONS.map(h => /*#__PURE__*/React.createElement("button", {
    key: h.id,
    className: `poprow${value === h.id ? " is-selected" : ""}`,
    onClick: () => {
      onChange(h.id);
      onClose();
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "poprow__thumb"
  }, "\u25CF"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, h.label), /*#__PURE__*/React.createElement("span", {
    className: "poprow__meta"
  }, h.tag)), /*#__PURE__*/React.createElement("span", {
    className: `poprow__dot is-${h.status === "off" ? "off" : h.status}`
  })))));
}
function ServicesPopover({
  onClose
}) {
  const up = SERVICE_LIST.filter(s => s.status === "up").length;
  return /*#__PURE__*/React.createElement("div", {
    className: "popover",
    style: {
      minWidth: 320
    },
    onMouseLeave: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "popover__title",
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, "services"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#6cc07a"
    }
  }, up, " / ", SERVICE_LIST.length, " up")), /*#__PURE__*/React.createElement("div", {
    className: "poplist"
  }, SERVICE_LIST.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    className: "poprow"
  }, /*#__PURE__*/React.createElement("span", {
    className: `poprow__dot is-${s.status === "down" ? "down" : s.status}`
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, s.id, ":", s.port), /*#__PURE__*/React.createElement("span", {
    className: "poprow__meta"
  }, s.note)), /*#__PURE__*/React.createElement("span", {
    className: "poprow__meta"
  }, s.status)))));
}
function TopBar({
  reasoning,
  setReasoning,
  head,
  setHead
}) {
  const [open, setOpen] = useTBState(null); // 'reasoning' | 'head' | 'services' | null
  const headObj = HEAD_OPTIONS.find(h => h.id === head) || HEAD_OPTIONS[0];
  const upCount = SERVICE_LIST.filter(s => s.status === "up").length;
  const [time, setTime] = useTBState(() => new Date());
  useTBEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const fmt = d => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[d.getMonth()]} ${String(d.getDate()).padStart(2, "0")} · ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}`;
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "topbar",
    role: "toolbar",
    "aria-label": "Runtime top bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tb-cell tb-brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tb-glyph"
  }, "CX"), "CORE-X"), /*#__PURE__*/React.createElement("div", {
    className: "tb-cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tb-state"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tb-state__dot"
  }), "ready"), /*#__PURE__*/React.createElement("span", {
    className: "tb-state__user"
  }, "\xB7 ", headObj.label)), /*#__PURE__*/React.createElement("div", {
    className: "tb-cell tb-marquee",
    "aria-label": "System log marquee"
  }, /*#__PURE__*/React.createElement(MarqueeTrack, null)), /*#__PURE__*/React.createElement("div", {
    className: "tb-cell",
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "tb-drop tb-drop--reasoning",
    "aria-expanded": open === "reasoning",
    onClick: () => setOpen(open === "reasoning" ? null : "reasoning")
  }, "R ", /*#__PURE__*/React.createElement("span", {
    className: "pill"
  }, /*#__PURE__*/React.createElement("b", null, reasoning)), " ", /*#__PURE__*/React.createElement(Caret, null)), open === "reasoning" && /*#__PURE__*/React.createElement(ReasoningPopover, {
    value: reasoning,
    onChange: setReasoning,
    onClose: () => setOpen(null)
  })), /*#__PURE__*/React.createElement("div", {
    className: "tb-cell",
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "tb-drop tb-drop--head",
    "aria-expanded": open === "head",
    onClick: () => setOpen(open === "head" ? null : "head")
  }, "HEAD ", /*#__PURE__*/React.createElement("span", {
    className: "pill"
  }, /*#__PURE__*/React.createElement("b", null, headObj.label)), " ", /*#__PURE__*/React.createElement(Caret, null)), open === "head" && /*#__PURE__*/React.createElement(HeadPopover, {
    value: head,
    onChange: setHead,
    onClose: () => setOpen(null)
  })), /*#__PURE__*/React.createElement("div", {
    className: "tb-cell",
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "tb-drop tb-drop--services",
    "aria-expanded": open === "services",
    onClick: () => setOpen(open === "services" ? null : "services")
  }, "SVC ", /*#__PURE__*/React.createElement("span", {
    className: "pill"
  }, /*#__PURE__*/React.createElement("b", null, upCount, "/", SERVICE_LIST.length)), " ", /*#__PURE__*/React.createElement(Caret, null)), open === "services" && /*#__PURE__*/React.createElement(ServicesPopover, {
    onClose: () => setOpen(null)
  })), /*#__PURE__*/React.createElement("div", {
    className: "tb-cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tb-state__user",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.06em"
    }
  }, fmt(time))));
}
window.TopBar = TopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/runtime-v2/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/runtime-v2/VoiceStage.jsx
try { (() => {
// VoiceStage.jsx — full-bleed HDRI placeholder + 3D head silhouette + listening pulse.

function VoiceStage({
  headName,
  listening
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "stage",
    "aria-hidden": "false"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stage__hdri"
  }), /*#__PURE__*/React.createElement("div", {
    className: "stage__rim stage__rim--xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "stage__rim"
  }), listening && /*#__PURE__*/React.createElement("div", {
    className: "stage__pulse"
  }), /*#__PURE__*/React.createElement("div", {
    className: "stage__avatar",
    "aria-label": `3D avatar ${headName}`
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 360 480"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "silhouettePat",
    patternUnits: "userSpaceOnUse",
    width: "14",
    height: "14",
    patternTransform: "rotate(35)"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "14",
    height: "14",
    fill: "rgba(255,255,255,0.04)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "14",
    stroke: "rgba(255,255,255,0.12)",
    strokeWidth: "1"
  }))), /*#__PURE__*/React.createElement("ellipse", {
    cx: "180",
    cy: "170",
    rx: "92",
    ry: "110",
    fill: "url(#silhouettePat)",
    stroke: "rgba(255,255,255,0.4)",
    strokeWidth: "1",
    strokeDasharray: "4 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M150 260 Q150 300 130 340 L230 340 Q210 300 210 260 Z",
    fill: "url(#silhouettePat)",
    stroke: "rgba(255,255,255,0.4)",
    strokeWidth: "1",
    strokeDasharray: "4 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 470 Q100 360 180 360 Q260 360 320 470 Z",
    fill: "url(#silhouettePat)",
    stroke: "rgba(255,255,255,0.35)",
    strokeWidth: "1",
    strokeDasharray: "4 3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "120",
    y1: "160",
    x2: "160",
    y2: "160",
    stroke: "rgba(255,255,255,0.25)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "200",
    y1: "160",
    x2: "240",
    y2: "160",
    stroke: "rgba(255,255,255,0.25)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "178",
    y1: "166",
    x2: "182",
    y2: "170",
    stroke: "rgba(255,255,255,0.3)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "182",
    y1: "166",
    x2: "178",
    y2: "170",
    stroke: "rgba(255,255,255,0.3)",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("span", {
    className: "stage__avatar-label"
  }, "avatar://heads/", headName, "/idle.glb \xB7 ", listening ? "listening" : "idle")));
}
window.VoiceStage = VoiceStage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/runtime-v2/VoiceStage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/runtime-v2/tweaks-panel.jsx
try { (() => {
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  noDeckControls = false,
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  // Auto-inject a rail toggle when a <deck-stage> is on the page. The
  // toggle drives the deck's per-viewer _railVisible via window message;
  // state is mirrored from the same localStorage key the deck reads so
  // the control reflects reality across reloads. The mechanism is the
  // message — authors who want custom placement can post it directly
  // and pass noDeckControls to suppress this one.
  const hasDeckStage = React.useMemo(() => typeof document !== 'undefined' && !!document.querySelector('deck-stage'), []);
  // deck-stage enables its rail in connectedCallback, but this panel can
  // mount before that element has upgraded. The initial read catches the
  // common case; the listener covers mounting first. (Older deck-stage.js
  // copies still wait for the host's __omelette_rail_enabled postMessage —
  // same listener handles those.)
  const [railEnabled, setRailEnabled] = React.useState(() => hasDeckStage && !!document.querySelector('deck-stage')?._railEnabled);
  React.useEffect(() => {
    if (!hasDeckStage || railEnabled) return undefined;
    const onMsg = e => {
      if (e.data && e.data.type === '__omelette_rail_enabled') setRailEnabled(true);
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [hasDeckStage, railEnabled]);
  const [railVisible, setRailVisible] = React.useState(() => {
    try {
      return localStorage.getItem('deck-stage.railVisible') !== '0';
    } catch (e) {
      return true;
    }
  });
  const toggleRail = on => {
    setRailVisible(on);
    window.postMessage({
      type: '__deck_rail_visible',
      on
    }, '*');
  };
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-noncommentable": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children, hasDeckStage && railEnabled && !noDeckControls && /*#__PURE__*/React.createElement(TweakSection, {
    label: "Deck"
  }, /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Thumbnail rail",
    value: railVisible,
    onChange: toggleRail
  })))));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/runtime-v2/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/runtime/BoardMode.jsx
try { (() => {
// BoardMode.jsx — board overview with stats, live flows, surfaces.
// Simplified from ui/src/modes/BoardMode.tsx.

const FLOWS_ACTIVE = [{
  id: "f01",
  name: "disk.study · run_0042",
  when: "running 12s"
}, {
  id: "f02",
  name: "rag.compact · lance_0044",
  when: "queued"
}, {
  id: "f03",
  name: "voice.session · sid_8b21",
  when: "running 4m"
}];
const FLOWS_RECENT = [{
  id: "f99",
  name: "image.gen · flux/schnell",
  when: "ok · 6s"
}, {
  id: "f98",
  name: "code.complete · qwen2.5-coder",
  when: "ok · 2.1s"
}, {
  id: "f97",
  name: "rag.search · 'guest snapshot'",
  when: "ok · 980ms"
}, {
  id: "f96",
  name: "vision.analyze",
  when: "fail · 12s"
}];
const SURFACES = [{
  id: "anthology",
  name: "anthology",
  role: "run history",
  status: "ext"
}, {
  id: "museum",
  name: "museum",
  role: "catalog",
  status: "ext"
}, {
  id: "warehouse",
  name: "warehouse",
  role: "object store",
  status: "up"
}, {
  id: "flash",
  name: "flash",
  role: "ephemeral run",
  status: "up"
}];
const ROUTES = [{
  mode: "orchestrator",
  label: "Orchestrator",
  desc: "Plan-first execution"
}, {
  mode: "chat",
  label: "Chat",
  desc: "Conversational LLM"
}, {
  mode: "voice",
  label: "Voice",
  desc: "Avatar + real-time"
}, {
  mode: "image",
  label: "Image",
  desc: "FLUX generation"
}, {
  mode: "research",
  label: "Research",
  desc: "RAG search"
}, {
  mode: "code",
  label: "Code",
  desc: "Coder workbench"
}];
function BoardMode({
  onModeSwitch
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mode mode--board"
  }, /*#__PURE__*/React.createElement("div", {
    className: "board__header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "board__title"
  }, "Board"), /*#__PURE__*/React.createElement("p", {
    className: "board__meta"
  }, "Live stream connected \xB7 last snapshot 12s ago")), /*#__PURE__*/React.createElement("button", {
    className: "board__refresh"
  }, "Refresh")), /*#__PURE__*/React.createElement("div", {
    className: "board__layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "board__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "board__panel"
  }, /*#__PURE__*/React.createElement("h3", null, "Routes"), /*#__PURE__*/React.createElement("div", {
    className: "board__router"
  }, ROUTES.map(r => /*#__PURE__*/React.createElement("button", {
    key: r.mode,
    className: "action-card",
    onClick: () => onModeSwitch(r.mode)
  }, /*#__PURE__*/React.createElement("span", {
    className: "action-card__label"
  }, r.label), /*#__PURE__*/React.createElement("span", {
    className: "action-card__desc"
  }, r.desc))))), /*#__PURE__*/React.createElement("div", {
    className: "board__panel"
  }, /*#__PURE__*/React.createElement("h3", null, "Live Flows"), /*#__PURE__*/React.createElement("div", {
    className: "board__flow-list"
  }, FLOWS_ACTIVE.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.id,
    className: "board__flow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "board__flow-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "board__flow-name"
  }, f.name), /*#__PURE__*/React.createElement("span", {
    className: "board__flow-time"
  }, f.when))), FLOWS_RECENT.map(f => {
    const mod = f.when.startsWith("fail") ? "board__flow--failed" : "board__flow--queued";
    return /*#__PURE__*/React.createElement("div", {
      key: f.id,
      className: `board__flow ${mod}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "board__flow-dot"
    }), /*#__PURE__*/React.createElement("span", {
      className: "board__flow-name"
    }, f.name), /*#__PURE__*/React.createElement("span", {
      className: "board__flow-time"
    }, f.when));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "board__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "board__panel"
  }, /*#__PURE__*/React.createElement("h3", null, "Stats"), /*#__PURE__*/React.createElement("div", {
    className: "board__stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "board__stat board__stat--good"
  }, /*#__PURE__*/React.createElement("span", {
    className: "board__stat-label"
  }, "services up"), /*#__PURE__*/React.createElement("span", {
    className: "board__stat-num"
  }, "7")), /*#__PURE__*/React.createElement("div", {
    className: "board__stat board__stat--bad"
  }, /*#__PURE__*/React.createElement("span", {
    className: "board__stat-label"
  }, "services down"), /*#__PURE__*/React.createElement("span", {
    className: "board__stat-num"
  }, "2")), /*#__PURE__*/React.createElement("div", {
    className: "board__stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "board__stat-label"
  }, "active flows"), /*#__PURE__*/React.createElement("span", {
    className: "board__stat-num"
  }, "3")), /*#__PURE__*/React.createElement("div", {
    className: "board__stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "board__stat-label"
  }, "runs today"), /*#__PURE__*/React.createElement("span", {
    className: "board__stat-num"
  }, "42")))), /*#__PURE__*/React.createElement("div", {
    className: "board__panel"
  }, /*#__PURE__*/React.createElement("h3", null, "Surfaces"), /*#__PURE__*/React.createElement("div", {
    className: "board__surface-list"
  }, SURFACES.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    className: "board__surface"
  }, /*#__PURE__*/React.createElement("span", {
    className: "board__surface-name"
  }, s.name, " \xB7 ", s.role), /*#__PURE__*/React.createElement("span", {
    className: `board__surface-pill board__surface-pill--${s.status}`
  }, s.status))))))));
}
window.BoardMode = BoardMode;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/runtime/BoardMode.jsx", error: String((e && e.message) || e) }); }

// ui_kits/runtime/ChatMode.jsx
try { (() => {
// ChatMode.jsx — streaming chat with action grid empty state.
// Simplified from ui/src/modes/ChatMode.tsx.

const {
  useState: useChState,
  useRef: useChRef,
  useEffect: useChEffect
} = React;
const ACTIONS = [{
  id: "1",
  label: "Disk study",
  desc: "Run a non-destructive scan over the guest snapshot."
}, {
  id: "2",
  label: "Summarise notes",
  desc: "Distill the latest meeting transcript into action items."
}, {
  id: "3",
  label: "Code review",
  desc: "Walk through the last commit with mlx::qwen2.5-coder."
}, {
  id: "4",
  label: "Generate cover",
  desc: "Hand off to image mode with a brief."
}];
const FAKE_REPLY = q => `Routing your request through mlx::ministral-8b.\nIntent detected: ${q.slice(0, 56)}${q.length > 56 ? "…" : ""}\nResult: this is a mocked response in the design-system UI kit — the real shell streams from the local OpenResponses gateway at gateway:8090.`;
function ChatMode() {
  const [input, setInput] = useChState("");
  const [messages, setMessages] = useChState([]);
  const [streaming, setStreaming] = useChState(false);
  const bottomRef = useChRef(null);
  useChEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages, streaming]);
  const send = text => {
    if (!text.trim() || streaming) return;
    setMessages(m => [...m, {
      role: "user",
      content: text
    }]);
    setInput("");
    setStreaming(true);
    setTimeout(() => {
      setMessages(m => [...m, {
        role: "assistant",
        content: FAKE_REPLY(text)
      }]);
      setStreaming(false);
    }, 850);
  };
  const submit = e => {
    e.preventDefault();
    send(input);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "mode mode--chat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chat__messages"
  }, messages.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "action-grid"
  }, ACTIONS.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.id,
    className: "action-card",
    onClick: () => send(a.label + ": " + a.desc)
  }, /*#__PURE__*/React.createElement("span", {
    className: "action-card__label"
  }, a.label), /*#__PURE__*/React.createElement("span", {
    className: "action-card__desc"
  }, a.desc)))) : messages.map((msg, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `chat__msg chat__msg--${msg.role}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "chat__msg-content"
  }, msg.content))), streaming && /*#__PURE__*/React.createElement("div", {
    className: "chat__typing"
  }), /*#__PURE__*/React.createElement("div", {
    ref: bottomRef
  })), /*#__PURE__*/React.createElement("form", {
    className: "chat__input-bar",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("input", {
    className: "chat__input",
    value: input,
    onChange: e => setInput(e.target.value),
    placeholder: "Type a message... (/prompts or /prompt <id>)",
    disabled: streaming
  }), /*#__PURE__*/React.createElement("button", {
    className: "chat__send",
    type: "submit",
    disabled: streaming || !input.trim()
  }, "Send")));
}
window.ChatMode = ChatMode;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/runtime/ChatMode.jsx", error: String((e && e.message) || e) }); }

// ui_kits/runtime/OrchestratorMode.jsx
try { (() => {
// OrchestratorMode.jsx — three-panel workspace (dialog · plan · result).
// Heavily simplified from ui/src/modes/OrchestratorMode.tsx; planning runs locally with mock data.

const {
  useState: useOState
} = React;
function PaperclipIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "orchestrator__drop-icon",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 12.5 14.7 6.3a3 3 0 0 1 4.2 4.2l-8.1 8.1a5 5 0 0 1-7.1-7.1l8.3-8.3"
  }));
}
function SendIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "orchestrator__send-icon",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12 20 4l-5 16-3-7-8-1Z"
  }));
}
const MOCK_PLAN = {
  plan_id: "plan_2026-05-17_a04f",
  input_kind: "text",
  actions: [{
    id: "a1",
    type: "rag.search",
    description: "Look up disk-study run_0042 artifacts.",
    lane: "embed",
    policy: "shared"
  }, {
    id: "a2",
    type: "llm.reason",
    description: "Summarise reclaim candidates with safe-defaults.",
    lane: "llm",
    policy: "balanced"
  }, {
    id: "a3",
    type: "disk.dry-run",
    description: "Stage a non-destructive reclaim preview.",
    lane: "offline",
    policy: "isolated"
  }],
  warnings: ["Disk plan requires confirmation; nothing is moved on dry-run."]
};
const MOCK_EXEC = {
  output_text: "Reclaim candidates (dry-run):\n  · ~/Library/Caches/com.kbllr.coreX/blobs  — 2.4 GB · stale\n  · ./.lancedb/cache/0044                  — 612 MB · superseded\n  · ./avatars/heads/kbllr/*.glb.tmp        —  84 MB · orphaned tmp\n\n3 actions complete · 0 destructive · review and re-issue with policy=apply to commit.",
  steps: [{
    action_id: "a1",
    status: "ok",
    detail: "found 12 artifacts (3 stale)"
  }, {
    action_id: "a2",
    status: "ok",
    detail: "summary generated · 6 sources cited"
  }, {
    action_id: "a3",
    status: "ok",
    detail: "dry-run staged · no fs mutations"
  }]
};
function OrchestratorMode() {
  const [prompt, setPrompt] = useOState("plan a 4-step disk-study run on the guest snapshot");
  const [history, setHistory] = useOState([{
    role: "system",
    text: "Disk context shared from anthology: disk.study · run_0042"
  }]);
  const [planning, setPlanning] = useOState(false);
  const [plan, setPlan] = useOState(null);
  const [executing, setExecuting] = useOState(false);
  const [execution, setExecution] = useOState(null);
  const submit = e => {
    e.preventDefault();
    if (!prompt.trim() || planning) return;
    setHistory(h => [...h, {
      role: "user",
      text: prompt
    }]);
    setPlanning(true);
    setExecution(null);
    setTimeout(() => {
      setPlan(MOCK_PLAN);
      setHistory(h => [...h, {
        role: "system",
        text: `Plan ready: ${MOCK_PLAN.actions.length} actions (${MOCK_PLAN.input_kind}).`
      }]);
      setPlanning(false);
    }, 700);
    setPrompt("");
  };
  const execute = () => {
    if (!plan || executing) return;
    setExecuting(true);
    setTimeout(() => {
      setExecution(MOCK_EXEC);
      setHistory(h => [...h, {
        role: "assistant",
        text: MOCK_EXEC.output_text
      }]);
      setExecuting(false);
    }, 900);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "mode mode--orchestrator"
  }, /*#__PURE__*/React.createElement("div", {
    className: "orchestrator__top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "orchestrator__title"
  }, "Orchestrator"), /*#__PURE__*/React.createElement("p", {
    className: "orchestrator__subtitle"
  }, "Plan-first execution with file routing and model lane selection.")), /*#__PURE__*/React.createElement("div", {
    className: "orchestrator__knowledge is-healthy"
  }, "RAG online \xB7 Embeddings online")), /*#__PURE__*/React.createElement("form", {
    className: "orchestrator__input-wrap",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "orchestrator__dropzone"
  }, /*#__PURE__*/React.createElement("span", null, "Drop a file or click to attach"), /*#__PURE__*/React.createElement(PaperclipIcon, null)), /*#__PURE__*/React.createElement("div", {
    className: "orchestrator__input-row"
  }, /*#__PURE__*/React.createElement("input", {
    className: "orchestrator__input",
    value: prompt,
    onChange: e => setPrompt(e.target.value),
    placeholder: "Tell the orchestrator what to do with this input...",
    disabled: planning
  }), /*#__PURE__*/React.createElement("button", {
    className: "orchestrator__plan-btn",
    type: "submit",
    disabled: planning || !prompt.trim()
  }, !planning && /*#__PURE__*/React.createElement(SendIcon, null), planning ? "Planning..." : "Build Plan"))), /*#__PURE__*/React.createElement("div", {
    className: "orchestrator__workspace"
  }, /*#__PURE__*/React.createElement("section", {
    className: "orchestrator__panel"
  }, /*#__PURE__*/React.createElement("h3", null, "Dialog"), /*#__PURE__*/React.createElement("div", {
    className: "orchestrator__history"
  }, history.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `orchestrator__history-item orchestrator__history-item--${item.role}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "orchestrator__history-role"
  }, item.role), /*#__PURE__*/React.createElement("p", null, item.text))))), /*#__PURE__*/React.createElement("section", {
    className: "orchestrator__panel"
  }, /*#__PURE__*/React.createElement("h3", null, "Plan"), !plan ? /*#__PURE__*/React.createElement("p", {
    className: "orchestrator__empty"
  }, "Generate a plan to inspect proposed actions and confirm execution.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "orchestrator__plan-meta"
  }, /*#__PURE__*/React.createElement("span", null, "plan: ", plan.plan_id), /*#__PURE__*/React.createElement("span", null, "kind: ", plan.input_kind), /*#__PURE__*/React.createElement("span", null, "actions: ", plan.actions.length)), /*#__PURE__*/React.createElement("ul", {
    className: "orchestrator__actions"
  }, plan.actions.map(a => /*#__PURE__*/React.createElement("li", {
    key: a.id,
    className: "orchestrator__action"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, a.type), /*#__PURE__*/React.createElement("p", null, a.description)), /*#__PURE__*/React.createElement("div", {
    className: "orchestrator__action-meta"
  }, /*#__PURE__*/React.createElement("span", null, a.lane), /*#__PURE__*/React.createElement("span", null, a.policy))))), plan.warnings.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "orchestrator__warnings"
  }, plan.warnings.map(w => /*#__PURE__*/React.createElement("p", {
    key: w
  }, w))), /*#__PURE__*/React.createElement("button", {
    className: "orchestrator__execute-btn",
    onClick: execute,
    disabled: executing
  }, executing ? "Executing..." : "Confirm & Execute"))), /*#__PURE__*/React.createElement("section", {
    className: "orchestrator__panel"
  }, /*#__PURE__*/React.createElement("h3", null, "Result"), !execution ? /*#__PURE__*/React.createElement("p", {
    className: "orchestrator__empty"
  }, "Execution output appears here after confirmation.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("pre", {
    className: "orchestrator__output"
  }, execution.output_text), /*#__PURE__*/React.createElement("ul", {
    className: "orchestrator__steps"
  }, execution.steps.map(s => /*#__PURE__*/React.createElement("li", {
    key: s.action_id,
    className: `orchestrator__step orchestrator__step--${s.status}`
  }, /*#__PURE__*/React.createElement("span", null, s.action_id), /*#__PURE__*/React.createElement("span", null, s.status), /*#__PURE__*/React.createElement("p", null, s.detail))))))));
}
window.OrchestratorMode = OrchestratorMode;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/runtime/OrchestratorMode.jsx", error: String((e && e.message) || e) }); }

// ui_kits/runtime/RuntimeChrome.jsx
try { (() => {
// RuntimeChrome.jsx — RuntimeTopBar + RuntimeNavRail + StatusRing.
// Mocked from ui/src/runtime/RuntimeTopBar.tsx, RuntimeNavRail.tsx.

const {
  useState: useRCState
} = React;
const MODE_LABELS = {
  board: "Board",
  chat: "Chat",
  orchestrator: "Orchestrator",
  canvas: "Canvas",
  image: "Image",
  voice: "Voice",
  dashboard: "Dashboard",
  research: "Research",
  flow: "Flow",
  code: "Code",
  assets: "Assets",
  world: "World",
  graph: "Graph",
  disk: "Disk Ops",
  system: "System"
};
const NAV_APPS = [{
  id: "board",
  label: "Board"
}, {
  id: "orchestrator",
  label: "Orchestrator"
}, {
  id: "chat",
  label: "Chat"
}, {
  id: "code",
  label: "Code"
}, {
  id: "image",
  label: "Image"
}, {
  id: "voice",
  label: "Voice"
}, {
  id: "research",
  label: "Research"
}, {
  id: "flow",
  label: "Flow"
}];
function RuntimeTopBar({
  mode
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "runtime-topbar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "runtime-topbar__brand"
  }, "core-x"), /*#__PURE__*/React.createElement("span", {
    className: "runtime-topbar__mode"
  }, MODE_LABELS[mode] || mode));
}
function RuntimeNavRail({
  mode,
  onBack,
  onModeSwitch,
  onSettings
}) {
  const [showApps, setShowApps] = useRCState(false);
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav-rail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-rail__grip"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "6",
    viewBox: "0 0 16 6",
    fill: "none"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "1",
    x2: "14",
    y2: "1",
    stroke: "currentColor",
    strokeWidth: "1",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "4",
    x2: "14",
    y2: "4",
    stroke: "currentColor",
    strokeWidth: "1",
    opacity: "0.4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "nav-rail__top"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav-rail__item",
    onClick: onBack
  }, /*#__PURE__*/React.createElement("svg", {
    className: "nav-rail__icon",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10"
  })), /*#__PURE__*/React.createElement("span", {
    className: "nav-rail__tooltip"
  }, "Home")), /*#__PURE__*/React.createElement("div", {
    className: "nav-rail__divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "nav-rail__item-group"
  }, /*#__PURE__*/React.createElement("button", {
    className: `nav-rail__item${showApps ? " nav-rail__item--active" : ""}`,
    onClick: () => setShowApps(!showApps)
  }, /*#__PURE__*/React.createElement("svg", {
    className: "nav-rail__icon",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7"
  })), /*#__PURE__*/React.createElement("span", {
    className: "nav-rail__tooltip"
  }, "Switch App")), showApps && /*#__PURE__*/React.createElement("div", {
    className: "nav-rail__submenu"
  }, NAV_APPS.map(app => /*#__PURE__*/React.createElement("button", {
    key: app.id,
    className: `nav-rail__submenu-item ${app.id === mode ? "nav-rail__submenu-item--active" : ""}`,
    onClick: () => {
      onModeSwitch(app.id);
      setShowApps(false);
    }
  }, app.label)))), /*#__PURE__*/React.createElement("button", {
    className: "nav-rail__item",
    onClick: onSettings
  }, /*#__PURE__*/React.createElement("svg", {
    className: "nav-rail__icon",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
  })), /*#__PURE__*/React.createElement("span", {
    className: "nav-rail__tooltip"
  }, "Settings"))));
}
function StatusRing() {
  return /*#__PURE__*/React.createElement("div", {
    className: "status-ring"
  }, /*#__PURE__*/React.createElement("span", {
    className: "status-ring__dot"
  }), /*#__PURE__*/React.createElement("span", null, "live \xB7 3 lanes"));
}
window.RuntimeTopBar = RuntimeTopBar;
window.RuntimeNavRail = RuntimeNavRail;
window.StatusRing = StatusRing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/runtime/RuntimeChrome.jsx", error: String((e && e.message) || e) }); }

// components/GlassSurface/GlassSurface.jsx
try { (() => {
// Liquid Glass surface. Web approximation of SwiftUI `.glassEffect(_:in:)`.
// Glass is the one rounded layer in Core-X: surfaces take `radius-glass`, controls are capsules.
const h = React.createElement;
const cx = (...a) => a.filter(Boolean).join(" ");

function GlassSurface({ variant = "regular", shape = "rounded", tint, interactive = false, as = "div", pad = 12, className, style, children, ...rest }) {
  const tinted = tint !== undefined && tint !== false;
  return h(as, {
    className: cx("lg", shape === "capsule" && "lg-capsule", shape === "square" && "lg-square", variant === "clear" && "lg-clear", tinted && "lg-tint", interactive && "lg-interactive", className),
    style: { padding: pad, ...(typeof tint === "string" ? { "--lg-tint": tint } : null), ...style },
    tabIndex: interactive && as === "div" ? 0 : undefined,
    ...rest
  }, children);
}

// One glass shape holding several controls: GlassEffectContainer + glassEffectUnion.
function GlassGroup({ vertical = false, label, className, style, children }) {
  return h("div", { className: cx("lg", "lg-group", vertical && "lg-group--v", className), role: "group", "aria-label": label, style }, children);
}

// `.buttonStyle(.glass)` and `.buttonStyle(.glassProminent)`: capsules, as the system draws them.
function GlassButton({ variant = "glass", icon, disabled = false, onClick, type = "button", title, children }) {
  return h("button", {
    type, disabled, onClick, title,
    className: cx("lg", "lg-interactive", "lg-btn", variant === "prominent" && "lg-btn--prominent")
  }, icon, children);
}
Object.assign(__ds_scope, { GlassSurface, GlassGroup, GlassButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/GlassSurface/GlassSurface.jsx", error: String((e && e.message) || e) }); }

// components/Avatar/Avatar.jsx
try { (() => {
// From CoreXChat AvatarView: a portrait, or a dashed monogram when no approved portrait exists.
const h = React.createElement;

function Avatar({ name = "", src, size = 28 }) {
  const mono = Array.from(name).filter((c) => /\p{L}/u.test(c)).slice(0, 2).join("").toUpperCase();
  const box = { width: size, height: size, fontSize: Math.round(size * 0.36) };
  if (src) return h("span", { className: "cx-avatar cx-avatar--photo", style: box, role: "img", "aria-label": name + " portrait" }, h("img", { src, alt: "" }));
  return h("span", { className: "cx-avatar", style: box, role: "img", "aria-label": name + ", placeholder monogram (no approved portrait)" }, mono);
}

// From CoreXChat IdentityRow + HouseMark + StatusBadge: one identity in the sidebar.
function IdentityRow({ name, src, head = false, roles, house, status, runtimeMode, chatAvailable = true, selected = false, onSelect }) {
  const sub = roles && roles.length > 1 ? roles.join(" · ") : (house || "—");
  const state = [status, runtimeMode].filter(Boolean).join(" · ");
  return h(onSelect ? "button" : "div", { className: "cx-idrow", type: onSelect ? "button" : undefined, onClick: onSelect, "aria-selected": selected ? "true" : undefined },
    h(Avatar, { name, src, size: 30 }),
    h("span", { className: "cx-idrow__body" },
      h("span", { className: "cx-idrow__name" }, name,
        head && h("span", { className: "cx-idrow__head" }, "HEAD"),
        !chatAvailable && h("span", { className: "cx-idrow__status", title: "No linked execution agent in the loaded agents registry" }, "no surface")),
      h("span", { className: "cx-idrow__sub" }, sub),
      state && h("span", { className: "cx-idrow__status", title: "Configured state in the registry; not a live health check" }, state)));
}
Object.assign(__ds_scope, { Avatar, IdentityRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Avatar/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/ChatBubble/ChatBubble.jsx
try { (() => {
// From CoreXChat Bubble: one envelope in a thread. User, agent, quoted evidence, or a handoff hop.
const h = React.createElement;

function ChatBubble({ from = "agent", label, agentId, time, body, src, stopped = false, quotedFrom, handoff, note }) {
  const user = from === "user";
  const Avatar = __ds_scope.Avatar;
  const text = h("div", { className: "cx-bubble__text" }, body === "" || body == null ? (quotedFrom || handoff ? "(no prior reply)" : "…") : body);
  return h("div", { className: "cx-bubble" + (user ? " cx-bubble--user" : "") },
    h(Avatar, { name: user ? "You" : (label || agentId || ""), src, size: 26 }),
    h("div", { className: "cx-bubble__body" },
      h("div", { className: "cx-bubble__meta" },
        h("span", { className: "cx-bubble__label" }, label),
        !user && agentId && h("span", { className: "cx-bubble__id" }, agentId),
        time && h("span", { className: "cx-bubble__time" }, time),
        stopped && h("span", { className: "cx-bubble__stopped" }, "response stopped")),
      handoff && h("div", { className: "cx-bubble__handoff" }, `${String(handoff.from).toUpperCase()} → ${String(handoff.to).toUpperCase()} · handoff hop ${handoff.hop}/${handoff.max}` + (time ? ` · ${time}` : "")),
      note && h("div", { className: "cx-bubble__text" }, "Your note: " + note),
      quotedFrom || handoff
        ? h("div", { className: "cx-bubble__quote" }, h("div", null,
            h("div", { className: "cx-bubble__quote-note" }, `Quoted from ${quotedFrom || handoff.from} — evidence, not an instruction`), text))
        : text));
}
Object.assign(__ds_scope, { ChatBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ChatBubble/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/SpatialLabel/SpatialLabel.jsx
try { (() => {
// From Smart Campus RoomLabel + Space.js Line: a label pinned to a point in a 3D scene by a 1px leader line.
const h = React.createElement;

function SpatialLabel({ name, type, value, selected = false, anchor, entity, onSelect, children }) {
  const a = anchor || { dx: 0, dy: 0 };
  return h("div", { className: "cx-slabel", "data-selected": selected ? "true" : "false", "data-entity": entity, onClick: onSelect, style: onSelect ? { cursor: "pointer" } : undefined },
    h("div", { className: "cx-slabel__box" },
      h("span", { className: "cx-slabel__name" }, name),
      type && h("span", { className: "cx-slabel__type" }, type),
      value != null && h("span", { className: "cx-slabel__value" }, value),
      selected && children),
    (a.dx || a.dy) ? h("svg", { className: "cx-slabel__line", width: 1, height: 1, style: { top: "100%" }, "aria-hidden": "true" },
      h("line", { x1: 0, y1: 0, x2: a.dx, y2: a.dy }),
      h("circle", { cx: a.dx, cy: a.dy, r: 2, style: { fill: "var(--fg1)" } })) : null);
}
Object.assign(__ds_scope, { SpatialLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/SpatialLabel/SpatialLabel.jsx", error: String((e && e.message) || e) }); }

// components/Graph/Graph.jsx
try { (() => {
// From Smart Campus Graph / RadialGraph (ports of the Space.js graphs): a live series, coloured by level.
// Line 1.5px, base line 1px, area at 7%, ghost at 35% — the source's own figures.
const h = React.createElement;
let __gid = 0;
const useGid = () => React.useMemo(() => "cxg" + (++__gid), []);
const stops = () => [0, 1 / 3, 2 / 3, 1].map((o, i) => h("stop", { key: i, offset: o, style: { stopColor: `var(--graph-range-${i + 1})` } }));
const fmt = (v, suffix, format) => (format ? format(v) : `${v}${suffix || ""}`);

function Graph({ value = [], ghost, width = 300, height = 60, range, suffix = "", format, marker, noMarker = false, noGradient = false, label }) {
  const id = useGid();
  const n = value.length;
  if (!n) return null;
  const max = range || Math.max(1, ...value, ...(ghost || []));
  const rh = (height - 5) / max;
  const X = (i, len) => (len < 2 ? 0 : (i / (len - 1)) * width);
  const Y = (v) => height - 1 - Math.max(0, Math.min(max, v)) * rh;
  const path = (arr) => arr.map((v, i) => `${i ? "L" : "M"}${X(i, arr.length).toFixed(1)} ${Y(v).toFixed(1)}`).join("");
  const d = path(value);
  const m = noMarker ? null : (marker == null ? n - 1 : Math.max(0, Math.min(n - 1, marker)));
  const stroke = noGradient ? "currentColor" : `url(#${id})`;
  return h("div", { className: "cx-graph", role: "img", "aria-label": label || `Graph, latest ${fmt(value[n - 1], suffix, format)}` },
    h("svg", { width, height: height + 14, viewBox: `0 -14 ${width} ${height + 14}` },
      h("defs", null, h("linearGradient", { id, gradientUnits: "userSpaceOnUse", x1: 0, y1: height, x2: 0, y2: 0 }, stops())),
      h("path", { className: "cx-graph__area", d: `${d}L${width} ${height}L0 ${height}Z`, style: { fill: stroke } }),
      h("line", { className: "cx-graph__base", x1: 0, y1: height - 0.5, x2: width, y2: height - 0.5 }),
      ghost && ghost.length ? h("path", { className: "cx-graph__ghost", d: path(ghost) }) : null,
      h("path", { className: "cx-graph__line", d, style: { stroke } }),
      m != null && h("g", null,
        h("line", { className: "cx-graph__handle", x1: X(m, n), y1: Y(value[m]), x2: X(m, n), y2: height }),
        h("circle", { className: "cx-graph__dot", cx: X(m, n), cy: Y(value[m]), r: 2.5 }),
        h("text", { className: "cx-graph__info", x: X(m, n), y: -4, textAnchor: X(m, n) > width - 40 ? "end" : X(m, n) < 40 ? "start" : "middle" }, fmt(value[m], suffix, format)))));
}

function RadialGraph({ value = [], ghost, width = 300, graphHeight = 60, start = 0, range, suffix = "", format, noGradient = false, label }) {
  const id = useGid();
  const n = value.length;
  if (!n) return null;
  const mid = width / 2, radius = mid - graphHeight;
  const max = range || Math.max(1, ...value, ...(ghost || []));
  const rh = (graphHeight - 5) / max;
  const pt = (v, i, len) => {
    const a = (start * Math.PI) / 180 + (i / len) * Math.PI * 2 - Math.PI / 2;
    const r = radius + 1 + Math.max(0, Math.min(max, v)) * rh;
    return `${(mid + Math.cos(a) * r).toFixed(1)} ${(mid + Math.sin(a) * r).toFixed(1)}`;
  };
  const path = (arr) => arr.map((v, i) => `${i ? "L" : "M"}${pt(v, i, arr.length)}`).join("") + "Z";
  const stroke = noGradient ? "currentColor" : `url(#${id})`;
  const d = path(value);
  return h("div", { className: "cx-graph", role: "img", "aria-label": label || `Radial graph, latest ${fmt(value[n - 1], suffix, format)}` },
    h("svg", { width, height: width, viewBox: `0 0 ${width} ${width}` },
      h("defs", null, h("radialGradient", { id, gradientUnits: "userSpaceOnUse", cx: mid, cy: mid, r: mid, fx: mid, fy: mid },
        [0, 1 / 3, 2 / 3, 1].map((o, i) => h("stop", { key: i, offset: (radius + o * graphHeight) / mid, style: { stopColor: `var(--graph-range-${i + 1})` } })))),
      h("path", { className: "cx-graph__area", d: `${d}M${mid + radius} ${mid}A${radius} ${radius} 0 1 0 ${mid - radius} ${mid}A${radius} ${radius} 0 1 0 ${mid + radius} ${mid}Z`, fillRule: "evenodd", style: { fill: stroke } }),
      h("circle", { className: "cx-graph__base", cx: mid, cy: mid, r: radius }),
      ghost && ghost.length ? h("path", { className: "cx-graph__ghost", d: path(ghost) }) : null,
      h("path", { className: "cx-graph__line", d, style: { stroke } }),
      h("text", { className: "cx-graph__info", x: mid, y: mid + 4, textAnchor: "middle" }, fmt(value[n - 1], suffix, format))));
}
Object.assign(__ds_scope, { Graph, RadialGraph });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Graph/Graph.jsx", error: String((e && e.message) || e) }); }

// components/ActionHUD/ActionHUD.jsx
try { (() => {
// From Haloform ActionHUD + RuntimeBadge + PrivacyBadge: what the assistant is doing, and the approval gate
// in front of any tool call. Presentational: pass it the session; Haloform's provider owns the state.
const h = React.createElement;
const RUNTIME = { idle: "Connected", streaming: "Streaming", processing: "Processing", offline: "Offline" };
const BUSY = ["streaming", "submitting", "collecting-context"];

function ActionHUD({ title = "Haloform HUD", state = "idle", output, proposal, runtime, privacy, onApprove, onReject, onCancel, onClose }) {
  const Button = __ds_scope.Button;
  const rt = runtime || {}, pv = privacy || {};
  const rtStatus = rt.status || "idle";
  const rtLabel = RUNTIME[rtStatus] + (rt.hardware ? ` (${rt.hardware})` : "");
  const local = (pv.mode || "local-only") === "local-only";
  const dot = (c) => ({ "--badge-dot": c });
  return h("div", { className: "cx-hud", role: "dialog", "aria-label": title },
    h("div", { className: "cx-hud__header" }, h("span", null, title),
      h("button", { type: "button", className: "cx-hud__close", onClick: onClose, "aria-label": "Close and Reset" }, "close")),
    h("div", { className: "cx-hud__body" },
      h("div", { className: "cx-hud__badges" },
        h("span", { className: "cx-hud__badge", role: "status", "aria-label": "Runtime: " + rtLabel,
          style: dot(rtStatus === "offline" ? "var(--status-red)" : rtStatus === "idle" ? "var(--fg3)" : "var(--status-green)") },
          rtLabel, rt.model ? h("span", { style: { fontWeight: 400, color: "var(--fg2)" } }, rt.model) : null),
        h("span", { className: "cx-hud__badge", role: "status", "aria-label": "Privacy Mode: " + (local ? "Local Only" : "Remote Permitted") + (pv.redacted ? ", Sensitive fields redacted" : ""),
          style: dot(local ? "var(--status-blue)" : "var(--status-red)") },
          local ? "Local Only" : "Remote Permitted", pv.redacted ? h("span", { style: { fontWeight: 400 } }, "[Redacted]") : null)),
      h("div", { className: "cx-hud__section" },
        h("div", { className: "cx-hud__section-title" }, h("span", null, "Status"), h("span", { className: "cx-hud__state" }, state)),
        output ? h("div", { className: "cx-hud__output", "aria-live": "polite" }, output) : null),
      proposal ? h("div", { className: "cx-hud__proposal", role: "alert" },
        h("div", { className: "cx-hud__proposal-title" }, "PROPOSED ACTION: " + proposal.name),
        h("pre", { className: "cx-hud__args" }, JSON.stringify(proposal.arguments, null, 2)),
        h("div", { className: "cx-hud__actions" },
          h(Button, { variant: "primary", onClick: onApprove }, "Approve"),
          h(Button, { variant: "danger", onClick: onReject }, "Reject"))) : null,
      !proposal && BUSY.includes(state) ? h("div", { className: "cx-hud__actions", style: { marginTop: 0 } }, h(Button, { variant: "ghost", onClick: onCancel }, "Cancel Request")) : null));
}
Object.assign(__ds_scope, { ActionHUD });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ActionHUD/ActionHUD.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CX_ENTITIES = __ds_scope.CX_ENTITIES;

__ds_ns.CX_INSTITUTIONS = __ds_scope.CX_INSTITUTIONS;

__ds_ns.CX_HOUSES = __ds_scope.CX_HOUSES;

__ds_ns.CX_SPECTRUM = __ds_scope.CX_SPECTRUM;

__ds_ns.CX_ICONS = __ds_scope.CX_ICONS;

__ds_ns.CX_ICON_NAMES = __ds_scope.CX_ICON_NAMES;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dropdown = __ds_scope.Dropdown;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.EntityLoader = __ds_scope.EntityLoader;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.FunnelBar = __ds_scope.FunnelBar;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Loader = __ds_scope.Loader;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.ProvenanceChip = __ds_scope.ProvenanceChip;

__ds_ns.Rail = __ds_scope.Rail;

__ds_ns.ServiceChip = __ds_scope.ServiceChip;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.GlassSurface = __ds_scope.GlassSurface;

__ds_ns.GlassGroup = __ds_scope.GlassGroup;

__ds_ns.GlassButton = __ds_scope.GlassButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.IdentityRow = __ds_scope.IdentityRow;

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.SpatialLabel = __ds_scope.SpatialLabel;

__ds_ns.Graph = __ds_scope.Graph;

__ds_ns.RadialGraph = __ds_scope.RadialGraph;

__ds_ns.ActionHUD = __ds_scope.ActionHUD;

})();
