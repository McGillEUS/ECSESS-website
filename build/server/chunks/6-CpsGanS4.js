import { r as redirect } from './index-DyoisQP2.js';
import { g as getFromCMS } from './utils-nMFBa4sE.js';
import '@sanity/client';

const redirectQuery = `*[_type == "redirects"]{ shortname, url }`;
const load = async ({ params }) => {
  let CMSresponse = await getFromCMS(redirectQuery);
  const { shortname } = params;
  CMSresponse.forEach((res) => {
    if (res.shortname == shortname) {
      throw redirect(302, res.url);
    }
  });
  return {
    shortname
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BFpoMlmJ.js')).default;
const server_id = "src/routes/r/[shortname]/+page.server.js";
const imports = ["_app/immutable/nodes/6.Dl9iXJs9.js","_app/immutable/chunks/DYKiCq2r.js","_app/immutable/chunks/Ow3wAJci.js","_app/immutable/chunks/DbELnLy9.js","_app/immutable/chunks/BYz6upTZ.js","_app/immutable/chunks/BCXYo4VB.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-CpsGanS4.js.map
