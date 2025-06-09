import { g as getFromCMS } from './utils-nMFBa4sE.js';
import '@sanity/client';

const homepageQuery = `*[_type == "homepage"]{
	"description": description[],
	"councilPhoto": councilPhoto.asset->url
}[0]`;
const load = async () => {
  let CMSresponse = await getFromCMS(homepageQuery);
  return {
    description: CMSresponse.description,
    councilPhoto: CMSresponse.councilPhoto
    // ohs: await getFromCMS(ohQuery),
    // FAQs: "",
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Bw0LafhO.js')).default;
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/nodes/2.j8V5fhb3.js","_app/immutable/chunks/DYKiCq2r.js","_app/immutable/chunks/Ow3wAJci.js","_app/immutable/chunks/B31kpw-L.js","_app/immutable/chunks/BYz6upTZ.js","_app/immutable/chunks/DbELnLy9.js","_app/immutable/chunks/BCXYo4VB.js","_app/immutable/chunks/NI_Zzf4b.js","_app/immutable/chunks/M5uP6VAH.js","_app/immutable/chunks/p26bu0g8.js","_app/immutable/chunks/BsqKb9nj.js","_app/immutable/chunks/bM6RsxOl.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=2-2kocDKSh.js.map
