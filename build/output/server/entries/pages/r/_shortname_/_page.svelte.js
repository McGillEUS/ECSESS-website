import { A as ensure_array_like, q as escape_html, n as attr, m as pop, p as push } from "../../../../chunks/index2.js";
import { S as Section } from "../../../../chunks/Section.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  Section($$payload, {
    children: ($$payload2) => {
      const each_array = ensure_array_like(data.availableShortnames);
      $$payload2.out += `<p class="page-title">Can't redirect you to <code>"r/${escape_html(data.shortname)}"</code>!</p> <hr class="border-2 w-1/2"/> <div>Maybe you were trying to get to: <ul><!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let s = each_array[$$index];
        $$payload2.out += `<li class="list-disc list-inside"><a${attr("href", s.url)}>/r/${escape_html(s.shortname)}</a></li>`;
      }
      $$payload2.out += `<!--]--></ul></div>`;
    }
  });
  pop();
}
export {
  _page as default
};
