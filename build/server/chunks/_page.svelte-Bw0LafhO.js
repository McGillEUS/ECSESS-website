import { p as push, m as pop, n as attr } from './index2-CJUw4Zcm.js';
import { S as Section } from './Section-DKj6_epG.js';
import { P as PortableText } from './PortableText-R6OxfX_g.js';

function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  $$payload.out += `<title>McGill ECSESS</title> `;
  Section($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<div class="flex h-1/2 flex-col items-center justify-center text-center"><p class="page-title">What is ECSESS?</p> <div id="test">`;
      PortableText($$payload2, { value: data.description });
      $$payload2.out += `<!----></div></div>`;
    }
  });
  $$payload.out += `<!----> `;
  Section($$payload, {
    black: true,
    children: ($$payload2) => {
      $$payload2.out += `<h1>Our student council</h1> <div class="flex justify-around gap-12"><div><img${attr("src", data.councilPhoto)} alt="ECSESS Council"/></div></div>`;
    }
  });
  $$payload.out += `<!----> `;
  Section($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<div><h1>FAQ</h1> <p>Under development</p></div> <div><h1 class="text-2xl">Office Hours</h1> <p>Under development</p></div>`;
    }
  });
  $$payload.out += `<!---->`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Bw0LafhO.js.map
