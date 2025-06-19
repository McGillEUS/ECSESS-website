import "clsx";
import { R as ResourceCard } from "../../../chunks/ResourceCard.js";
import { S as Section } from "../../../chunks/Section.js";
function _page($$payload) {
  $$payload.out += `<title>Join ECSESS !!!</title> `;
  Section($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<p class="page-title">Want to join ECSESS Council?</p> `;
      {
        $$payload2.out += "<!--[-->";
        ResourceCard($$payload2, {
          title: "Involvement Booklet",
          children: ($$payload3) => {
            $$payload3.out += `<!---->A guide to involvement with ECSESS and its subcommittees (The Factory, IEEE McGill, CodeJam).`;
          }
        });
      }
      $$payload2.out += `<!--]-->`;
    }
  });
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
