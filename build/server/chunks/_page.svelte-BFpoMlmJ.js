import { p as push, m as pop, q as escape_html } from './index2-CJUw4Zcm.js';
import { S as Section } from './Section-DKj6_epG.js';

function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  Section($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<p class="page-title">Where am I?</p> <p>Oops! We don't have a page for <code>"r/${escape_html(data.shortname)}"</code>.</p> <p>Please try again!</p>`;
    }
  });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BFpoMlmJ.js.map
