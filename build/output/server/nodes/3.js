import * as server from '../entries/pages/council/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/council/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/council/+page.server.js";
export const imports = ["_app/immutable/nodes/3.BvqN-d-y.js","_app/immutable/chunks/CYrqHjtZ.js","_app/immutable/chunks/DOp_OFmA.js","_app/immutable/chunks/D1lMOXtA.js","_app/immutable/chunks/B86MYzki.js","_app/immutable/chunks/CzZFDuBu.js","_app/immutable/chunks/D5PCkZNI.js","_app/immutable/chunks/C_bxespU.js","_app/immutable/chunks/-4Yf0GqT.js","_app/immutable/chunks/BNvpT0_S.js","_app/immutable/chunks/DT7n-gx2.js"];
export const stylesheets = ["_app/immutable/assets/Tooltip.HMufsr8f.css"];
export const fonts = [];
