import { g as getFromCMS } from './utils-nMFBa4sE.js';
import '@sanity/client';

const query = `*[_type == "members"]{
  name,
  email,
  position,
  positionDescription,
  "image": image.asset->url,
  yearProgram
}`;
const load = async () => {
  return {
    members: await getFromCMS(query)
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BVA2bNpq.js')).default;
const server_id = "src/routes/council/+page.server.js";
const imports = ["_app/immutable/nodes/3.Cljy4emg.js","_app/immutable/chunks/DYKiCq2r.js","_app/immutable/chunks/Ow3wAJci.js","_app/immutable/chunks/M5uP6VAH.js","_app/immutable/chunks/p26bu0g8.js","_app/immutable/chunks/BYz6upTZ.js","_app/immutable/chunks/B31kpw-L.js","_app/immutable/chunks/BCXYo4VB.js","_app/immutable/chunks/Hlf9az3Y.js","_app/immutable/chunks/DbELnLy9.js"];
const stylesheets = ["_app/immutable/assets/3.HMufsr8f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=3-BkbAmNd0.js.map
