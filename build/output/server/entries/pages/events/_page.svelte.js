import { A as ensure_array_like, q as escape_html, m as pop, p as push } from "../../../chunks/index2.js";
import { P as PortableText } from "../../../chunks/PortableText.js";
import { S as Section } from "../../../chunks/Section.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  $$payload.out += `<title>ECSESS Events</title> `;
  Section($$payload, {
    children: ($$payload2) => {
      const each_array = ensure_array_like(data.events);
      $$payload2.out += `<p class="page-title">Events</p> <!--[-->`;
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let event = each_array[$$index_1];
        const each_array_1 = ensure_array_like(event.category);
        $$payload2.out += `<div class="rounded-lg border-4 p-4"><p>${escape_html(event.name)}</p> <p>${escape_html(event.date)}</p> <p>${escape_html(event.location)}</p> `;
        PortableText($$payload2, { value: event.description });
        $$payload2.out += `<!----> Category: <div class="list"><ul class="list-inside list-disc space-y-2"><!--[-->`;
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let cat = each_array_1[$$index];
          $$payload2.out += `<li>${escape_html(cat)}</li>`;
        }
        $$payload2.out += `<!--]--></ul></div></div>`;
      }
      $$payload2.out += `<!--]-->`;
    }
  });
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
