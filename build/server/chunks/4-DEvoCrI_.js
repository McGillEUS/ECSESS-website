import { g as getFromCMS } from './utils-nMFBa4sE.js';
import '@sanity/client';

const eventQuery = `*[_type == "events"]{
  name,
  category,
  date,
  location,
  description,
  "lastUpdated": _updatedAt,
}`;
const load = async () => {
  return {
    events: await getFromCMS(eventQuery)
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C4nqLVQq.js')).default;
const server_id = "src/routes/events/+page.server.js";
const imports = ["_app/immutable/nodes/4.BkLeAOlV.js","_app/immutable/chunks/DYKiCq2r.js","_app/immutable/chunks/Ow3wAJci.js","_app/immutable/chunks/M5uP6VAH.js","_app/immutable/chunks/NI_Zzf4b.js","_app/immutable/chunks/BCXYo4VB.js","_app/immutable/chunks/BYz6upTZ.js","_app/immutable/chunks/p26bu0g8.js","_app/immutable/chunks/B31kpw-L.js","_app/immutable/chunks/BsqKb9nj.js","_app/immutable/chunks/bM6RsxOl.js","_app/immutable/chunks/DbELnLy9.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-DEvoCrI_.js.map
