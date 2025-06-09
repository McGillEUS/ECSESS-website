import { B as Button, R as ResourceCard } from './ResourceCard-CdWbdjvl.js';
import { S as Section } from './Section-DKj6_epG.js';
import './index2-CJUw4Zcm.js';

function _page($$payload) {
  $$payload.out += `<title>Component showroom for developers</title> `;
  Section($$payload, {
    children: ($$payload2) => {
      Button($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->Button`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      ResourceCard($$payload2, {});
      $$payload2.out += `<!---->`;
    }
  });
  $$payload.out += `<!----> `;
  Section($$payload, {
    black: true,
    children: ($$payload2) => {
      Button($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->Button`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      ResourceCard($$payload2, {
        title: "Workshop feedback",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Description of the workshop`;
        }
      });
      $$payload2.out += `<!---->`;
    }
  });
  $$payload.out += `<!----> `;
  Section($$payload, {
    children: ($$payload2) => {
      Button($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->Button`;
        },
        $$slots: { default: true }
      });
    }
  });
  $$payload.out += `<!---->`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Dj94QlYH.js.map
