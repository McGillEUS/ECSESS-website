import * as server from '../entries/pages/events/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/events/+page.server.js";
export const imports = ["_app/immutable/nodes/4.D8QgOeX_.js","_app/immutable/chunks/CYrqHjtZ.js","_app/immutable/chunks/DOp_OFmA.js","_app/immutable/chunks/D1lMOXtA.js","_app/immutable/chunks/D_FQC0Wj.js","_app/immutable/chunks/BNvpT0_S.js","_app/immutable/chunks/C_bxespU.js","_app/immutable/chunks/B86MYzki.js","_app/immutable/chunks/-4Yf0GqT.js","_app/immutable/chunks/tBvxBjpn.js","_app/immutable/chunks/E-qOA9zF.js","_app/immutable/chunks/DT7n-gx2.js"];
export const stylesheets = [];
export const fonts = [];
