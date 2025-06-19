import "clsx";
import { n as attr, m as pop, p as push, q as escape_html } from "../../chunks/index2.js";
function NavButton($$payload, $$props) {
  let { href, children } = $$props;
  $$payload.out += `<a${attr("href", href)}><button class="border-ecsess-black hover:border-ecsess-200 active:border-ecsess-400 border-b-4 px-6 py-2 font-semibold transition-all">`;
  children($$payload);
  $$payload.out += `<!----></button></a>`;
}
const ECSESS = "/_app/immutable/assets/ECSESS.CibXjoLR.png";
function NavBar($$payload, $$props) {
  push();
  $$payload.out += `<nav class="bg-ecsess-black text-ecsess-200 mx-auto flex min-w-fit flex-wrap items-center justify-center px-4 pt-2"><img${attr("src", ECSESS)} alt="ECSESS Logo" class="w-20 p-2"/> `;
  NavButton($$payload, {
    href: "/",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Home`;
    }
  });
  $$payload.out += `<!----> `;
  NavButton($$payload, {
    href: "/council",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Meet the council`;
    }
  });
  $$payload.out += `<!----> `;
  NavButton($$payload, {
    href: "/events",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Events`;
    }
  });
  $$payload.out += `<!----> `;
  NavButton($$payload, {
    href: "/resources",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Resources`;
    }
  });
  $$payload.out += `<!----> `;
  NavButton($$payload, {
    href: "/join",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Join ECSESS`;
    }
  });
  $$payload.out += `<!----> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></nav>`;
  pop();
}
function Footer($$payload, $$props) {
  push();
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  $$payload.out += `<footer class="bg-ecsess-black text-ecsess-200 mx-auto flex min-w-fit flex-wrap items-center justify-center px-4 py-4"><div><p class="text-ecsess-200 py-3 text-center">Created by ECSESS with love &lt;3. <br/> © ECSESS ${escape_html(year)}, under GNU General Public License v3.0.</p></div></footer>`;
  pop();
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  NavBar($$payload);
  $$payload.out += `<!----> `;
  children($$payload);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
