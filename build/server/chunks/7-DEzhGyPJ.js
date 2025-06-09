import { g as getFromCMS } from './utils-nMFBa4sE.js';
import '@sanity/client';

const query = `*[_type == "resources"]{
  title,
  url,
  description,
  "lastUpdated":_updatedAt
}`;
const load = async () => {
  return {
    resources: await getFromCMS(query)
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D7h3e_AB.js')).default;
const server_id = "src/routes/resources/+page.server.js";
const imports = ["_app/immutable/nodes/7.BspEW6YM.js","_app/immutable/chunks/DYKiCq2r.js","_app/immutable/chunks/Ow3wAJci.js","_app/immutable/chunks/M5uP6VAH.js","_app/immutable/chunks/DbELnLy9.js","_app/immutable/chunks/BYz6upTZ.js","_app/immutable/chunks/BCXYo4VB.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-DEzhGyPJ.js.map
