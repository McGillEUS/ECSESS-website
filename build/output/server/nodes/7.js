import * as server from '../entries/pages/resources/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resources/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/resources/+page.server.js";
export const imports = ["_app/immutable/nodes/7.R1s7kvBC.js","_app/immutable/chunks/CYrqHjtZ.js","_app/immutable/chunks/DOp_OFmA.js","_app/immutable/chunks/D1lMOXtA.js","_app/immutable/chunks/DT7n-gx2.js","_app/immutable/chunks/C_bxespU.js","_app/immutable/chunks/BNvpT0_S.js"];
export const stylesheets = [];
export const fonts = [];
