import { z as attr_class, D as clsx } from "./index2.js";
function Section($$payload, $$props) {
  let {
    children = () => "Section placeholder",
    black = false
  } = $$props;
  let tailwindClasses = "mx-auto flex min-h-[75vh] flex-col items-center justify-center gap-4 p-4 text-center text-ecsess-200";
  if (black) {
    tailwindClasses += " bg-ecsess-black";
  } else {
    tailwindClasses += " bg-ecsess-800";
  }
  $$payload.out += `<div${attr_class(clsx(tailwindClasses))}>`;
  children($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  Section as S
};
