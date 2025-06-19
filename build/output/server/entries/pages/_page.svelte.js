import { v as props_id, w as spread_attributes, m as pop, p as push, x as stringify, y as element, z as attr_class, A as ensure_array_like, q as escape_html, n as attr } from "../../chunks/index2.js";
import * as accordion from "@zag-js/accordion";
import { u as useMachine, n as normalizeProps, s as setAccordionContext, g as getAccordionContext } from "../../chunks/Tooltip.svelte_svelte_type_style_lang.js";
import { S as Section } from "../../chunks/Section.js";
import { P as PortableText } from "../../chunks/PortableText.js";
function Accordion$1($$payload, $$props) {
  push();
  const id = props_id($$payload);
  const {
    animationConfig = { duration: 200 },
    // Root
    base = "",
    padding = "",
    spaceY = "space-y-2",
    rounded = "rounded-base",
    width = "w-full",
    classes = "",
    // Snippets
    children,
    iconOpen,
    iconClosed,
    $$slots,
    $$events,
    ...zagProps
  } = $$props;
  const service = useMachine(accordion.machine, () => ({ id, ...zagProps }));
  const api = accordion.connect(service, normalizeProps);
  setAccordionContext({
    get api() {
      return api;
    },
    get animationConfig() {
      return animationConfig;
    },
    get iconClosed() {
      return iconClosed;
    },
    get iconOpen() {
      return iconOpen;
    }
  });
  $$payload.out += `<div${spread_attributes(
    {
      class: `${stringify(base)} ${stringify(padding)} ${stringify(spaceY)} ${stringify(rounded)} ${stringify(width)} ${stringify(classes)}`,
      ...api.getRootProps(),
      "data-testid": "accordion"
    }
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
function AccordionItem($$payload, $$props) {
  push();
  const {
    headingLevel = 3,
    // Root
    base,
    spaceY,
    classes,
    // Control
    controlBase = "flex text-start items-center space-x-4 w-full",
    controlHover = "hover:preset-tonal-primary",
    controlPadding = "py-2 px-4",
    controlRounded = "rounded-base",
    controlClasses,
    // Lead
    leadBase = "",
    leadClasses = "",
    // Content
    contentBase = "flex-1",
    contentClasses = "",
    // Indicator
    indicatorBase = "",
    indicatorClasses = "",
    // Panel
    panelBase,
    panelPadding = "py-2 px-4",
    panelRounded,
    panelClasses,
    // Snippets
    control,
    lead,
    panel,
    $$slots,
    $$events,
    ...zagProps
  } = $$props;
  const ctx = getAccordionContext();
  $$payload.out += `<div${spread_attributes(
    {
      class: `${stringify(base)} ${stringify(spaceY)} ${stringify(classes)}`,
      ...ctx.api.getItemProps(zagProps),
      "data-testid": "accordion-item"
    }
  )}>`;
  element($$payload, `h${headingLevel}`, void 0, () => {
    $$payload.out += `<button${spread_attributes(
      {
        class: `${stringify(controlBase)} ${stringify(controlHover)} ${stringify(controlPadding)} ${stringify(controlRounded)} ${stringify(controlClasses)}`,
        ...ctx.api.getItemTriggerProps(zagProps),
        "data-testid": "accordion-control"
      }
    )}>`;
    if (lead) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr_class(`${stringify(leadBase)} ${stringify(leadClasses)}`)} data-testid="accordion-lead">`;
      lead($$payload);
      $$payload.out += `<!----></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div${attr_class(`${stringify(contentBase)} ${stringify(contentClasses)}`)} data-testid="accordion-control">`;
    control($$payload);
    $$payload.out += `<!----></div> <div${attr_class(`${stringify(indicatorBase)} ${stringify(indicatorClasses)}`)} data-testid="accordion-indicator">`;
    if (ctx.api.value.includes(zagProps.value)) {
      $$payload.out += "<!--[-->";
      if (ctx.iconOpen) {
        $$payload.out += "<!--[-->";
        ctx.iconOpen($$payload);
        $$payload.out += `<!---->`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `−`;
      }
      $$payload.out += `<!--]-->`;
    } else if (ctx.iconClosed) {
      $$payload.out += "<!--[1-->";
      ctx.iconClosed($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `+`;
    }
    $$payload.out += `<!--]--></div></button>`;
  });
  $$payload.out += ` `;
  if (ctx.api.value.includes(zagProps.value)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes(
      {
        class: `${stringify(panelBase)} ${stringify(panelPadding)} ${stringify(panelRounded)} ${stringify(panelClasses)}`,
        ...ctx.api.getItemContentProps(zagProps),
        "data-testid": "accordion-panel"
      }
    )}>`;
    panel?.($$payload);
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
const Accordion = /* @__PURE__ */ Object.assign(Accordion$1, { Item: AccordionItem });
function FAQAccordion($$payload, $$props) {
  let {
    /** @type {String} */
    entries
  } = $$props;
  {
    let iconClosed = function($$payload2) {
      $$payload2.out += `<svg width="20" height="20" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7"></path></svg>`;
    }, iconOpen = function($$payload2) {
      $$payload2.out += `<svg class="rotate-90" width="20" height="20" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7"></path></svg>`;
    };
    Accordion($$payload, {
      classes: "w-[500px] max-w-[500px] transition-all ease-in-out",
      multiple: true,
      iconClosed,
      iconOpen,
      children: ($$payload2) => {
        const each_array = ensure_array_like(entries);
        $$payload2.out += `<!--[-->`;
        for (let index = 0, $$length = each_array.length; index < $$length; index++) {
          let entry = each_array[index];
          $$payload2.out += `<!---->`;
          {
            let lead = function($$payload3) {
              $$payload3.out += `<!---->${escape_html(entry.question)}`;
            }, control = function($$payload3) {
            }, panel = function($$payload3) {
              $$payload3.out += `<!---->${escape_html(entry.answer)}`;
            };
            Accordion.Item($$payload2, {
              value: index.toString(),
              classes: "border-ecsess-200 mb-4 overflow-hidden rounded-xl border-2",
              leadClasses: "text-xl font-bold",
              controlClasses: "hover:bg-ecsess-black-hover\n            flex w-inherit cursor-pointer items-center justify-between\n            py-4 transition-colors ease-in-out",
              panelClasses: " border-t-ecsess-200 max-h-fit border-t-2 bg-transparent p-4 bg-ecsess-400",
              lead,
              control,
              panel,
              $$slots: { lead: true, control: true, panel: true }
            });
          }
          $$payload2.out += `<!---->`;
        }
        $$payload2.out += `<!--]-->`;
      },
      $$slots: {
        iconClosed: true,
        iconOpen: true,
        default: true
      }
    });
  }
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  $$payload.out += `<title>McGill ECSESS</title> `;
  Section($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<div class="flex h-1/2 flex-col items-center justify-center text-center"><p class="page-title">What is ECSESS?</p> <div id="test">`;
      PortableText($$payload2, { value: data.description });
      $$payload2.out += `<!----></div></div>`;
    }
  });
  $$payload.out += `<!----> `;
  Section($$payload, {
    black: true,
    children: ($$payload2) => {
      $$payload2.out += `<div><h1>Our Student Council</h1> <img${attr("src", data.councilPhoto)} alt="ECSESS Council"/></div> <div><h1>FAQ</h1> `;
      FAQAccordion($$payload2, { entries: data.faqs });
      $$payload2.out += `<!----></div>`;
    }
  });
  $$payload.out += `<!----> `;
  Section($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<div><h1 class="text-2xl">Office Hours</h1> <p>Under development</p></div>`;
    }
  });
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
