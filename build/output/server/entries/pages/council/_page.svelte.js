import { v as props_id, w as spread_attributes, q as escape_html, m as pop, p as push, x as stringify, A as ensure_array_like } from "../../../chunks/index2.js";
import "clsx";
import { u as useMachine, n as normalizeProps } from "../../../chunks/Tooltip.svelte_svelte_type_style_lang.js";
import * as avatar from "@zag-js/avatar";
import { S as Section } from "../../../chunks/Section.js";
function Avatar($$payload, $$props) {
  push();
  const id = props_id($$payload);
  const {
    src,
    srcset,
    name,
    // Root
    base = "overflow-hidden isolate",
    background = "bg-surface-400-600",
    size = "size-16",
    font = "",
    border = "",
    rounded = "rounded-full",
    shadow = "",
    classes = "",
    // Image
    imageBase = "w-full object-cover",
    imageClasses = "",
    style = "",
    // Fallback
    fallbackBase = "w-full h-full flex justify-center items-center",
    fallbackClasses = "",
    // Snippets
    children,
    $$slots,
    $$events,
    // Zag
    ...zagProps
  } = $$props;
  const service = useMachine(avatar.machine, () => ({ id, ...zagProps }));
  const api = avatar.connect(service, normalizeProps);
  function getInitials(name2) {
    return name2.split(" ").map((word) => word[0]).join("");
  }
  $$payload.out += `<figure${spread_attributes(
    {
      ...api.getRootProps(),
      class: `${stringify(base)} ${stringify(background)} ${stringify(size)} ${stringify(font)} ${stringify(border)} ${stringify(rounded)} ${stringify(shadow)} ${stringify(classes)}`,
      style,
      "data-testid": "avatar"
    }
  )}><span${spread_attributes(
    {
      ...api.getFallbackProps(),
      class: `${stringify(fallbackBase)} ${stringify(fallbackClasses)}`,
      "data-testid": "avatar-fallback"
    }
  )}>`;
  if (children) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html(getInitials(name))}`;
  }
  $$payload.out += `<!--]--></span> `;
  if (src || srcset) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<img${spread_attributes(
      {
        ...api.getImageProps(),
        src,
        srcset,
        alt: name,
        class: `${stringify(imageBase)} ${stringify(imageClasses)}`,
        "data-testid": "avatar-image"
      }
    )} onload="this.__e=event" onerror="this.__e=event"/>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></figure>`;
  pop();
}
const placeholder = "/_app/immutable/assets/placeholderAvatar.BgPF5k_J.png";
function CouncilCard($$payload, $$props) {
  let {
    name,
    position,
    email,
    positionDescription,
    yearProgram,
    image
  } = $$props;
  $$payload.out += `<div class="card h-1/2 max-h-1/2 w-full max-w-1/6 rounded-lg border-4 p-4">`;
  if (image) {
    $$payload.out += "<!--[-->";
    Avatar($$payload, { src: image, name });
  } else {
    $$payload.out += "<!--[!-->";
    Avatar($$payload, { src: placeholder, name });
  }
  $$payload.out += `<!--]--> <p class="pb-2 text-xl font-bold">${escape_html(name)} - <span class="text-sm">${escape_html(yearProgram)}</span></p> <hr/> <p class="py-2 text-base font-bold">~ ${escape_html(position)} ~</p> <p class="underline">${escape_html(email)}</p> <p class="text-sm">${escape_html(positionDescription)}</p></div>`;
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  $$payload.out += `<title>ECSESS council</title> `;
  Section($$payload, {
    children: ($$payload2) => {
      const each_array = ensure_array_like(data.members);
      $$payload2.out += `<p class="page-title">Meet the council!</p> <p>Group picture!</p> <div class="flex flex-row flex-wrap items-center align-middle gap-10 p-4"><!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let councilMember = each_array[$$index];
        CouncilCard($$payload2, {
          name: councilMember.name,
          position: councilMember.position,
          email: councilMember.email,
          positionDescription: councilMember.positionDescription,
          yearProgram: councilMember.yearProgram,
          image: councilMember.image
        });
      }
      $$payload2.out += `<!--]--></div>`;
    }
  });
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
