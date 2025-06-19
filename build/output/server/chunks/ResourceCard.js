import { C as slot, n as attr, q as escape_html } from "./index2.js";
import "clsx";
function Button($$payload, $$props) {
  $$payload.out += `<button class="btn bg-ecsess-600 text-ecsess-200 px-4 py-2 m-1 rounded-lg border-none hover:shadow-lg hover:shadow-ecsess-800 active:bg-ecsess-800 transition-all"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></button>`;
}
function Link($$payload, $$props) {
  let { href = "https://www.example.com", children } = $$props;
  $$payload.out += `<a${attr("href", href)} target="_blank" rel="noopener noreferrer" class="underline">`;
  children($$payload);
  $$payload.out += `<!----></a>`;
}
function ResourceCard($$payload, $$props) {
  let {
    title = "_Resource Title_",
    children = () => {
    },
    link = "https://example.com"
  } = $$props;
  $$payload.out += `<div class="bg-ecsess-200 w-96 rounded-lg px-8 py-4"><p class="text-ecsess-black text-xl font-semibold pb-2">${escape_html(title)}</p> <p class="text-ecsess-black text-base font-normal py-2">`;
  children($$payload);
  $$payload.out += `<!----></p> `;
  Link($$payload, {
    href: link,
    children: ($$payload2) => {
      Button($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->Access`;
        },
        $$slots: { default: true }
      });
    }
  });
  $$payload.out += `<!----></div>`;
}
export {
  Button as B,
  ResourceCard as R
};
