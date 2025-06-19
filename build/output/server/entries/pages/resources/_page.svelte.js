import { A as ensure_array_like, q as escape_html, m as pop, p as push } from "../../../chunks/index2.js";
import { S as Section } from "../../../chunks/Section.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  $$payload.out += `<title>Resources</title> `;
  Section($$payload, {
    children: ($$payload2) => {
      const each_array = ensure_array_like(data.resources);
      $$payload2.out += `<p class="page-title">Resources</p> <h1>Resources for ECSE students at McGill University, presented by ECSESS!</h1> <!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let re = each_array[$$index];
        $$payload2.out += `<!---->${escape_html(re.title)} <br/> ${escape_html(re.url)} <br/> ${escape_html(re.description)} <br/> <p>==============</p>`;
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
