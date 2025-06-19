import { p as push, n as attr, m as pop, y as element, q as escape_html, A as ensure_array_like } from "./index2.js";
import { spanToPlainText, isPortableTextToolkitList, isPortableTextListItemBlock, buildMarksTree, isPortableTextToolkitSpan, isPortableTextBlock, isPortableTextToolkitTextNode, nestLists, LIST_NEST_MODE_HTML } from "@portabletext/toolkit";
import "clsx";
function getRandomKey() {
  return Math.random().toFixed(5).split(".")[1];
}
function assertSpanKey(span) {
  return {
    _key: span._key || getRandomKey(),
    ...span
  };
}
function assertBlockKey(block) {
  return {
    _key: block._key || getRandomKey(),
    ...block,
    ...block._type === "block" && Array.isArray(block.children) ? {
      children: block.children.map(assertSpanKey)
    } : {}
  };
}
function DefaultMark($$payload, $$props) {
  let { portableText, children } = $$props;
  let { markType } = portableText;
  if (markType === "strong") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<strong>`;
    children?.($$payload);
    $$payload.out += `<!----></strong>`;
  } else if (markType === "em") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<em>`;
    children?.($$payload);
    $$payload.out += `<!----></em>`;
  } else if (markType === "code") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<code>`;
    children?.($$payload);
    $$payload.out += `<!----></code>`;
  } else if (markType === "underline") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `<span style="text-decoration:underline;">`;
    children?.($$payload);
    $$payload.out += `<!----></span>`;
  } else if (markType === "strike-through") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `<del>`;
    children?.($$payload);
    $$payload.out += `<!----></del>`;
  } else {
    $$payload.out += "<!--[!-->";
    children?.($$payload);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]-->`;
}
function DefaultLink($$payload, $$props) {
  push();
  let { portableText, children } = $$props;
  let href = (() => {
    const { href: href2, url, link, value } = portableText.value;
    return href2 || url || link || value;
  })();
  if (typeof href === "string") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", href)}>`;
    children?.($$payload);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    children?.($$payload);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function DefaultBlock($$payload, $$props) {
  push();
  let { portableText, children } = $$props;
  let style = portableText.value.style || "normal";
  if ([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "blockquote"
  ].includes(style)) {
    $$payload.out += "<!--[-->";
    element($$payload, style, void 0, () => {
      children?.($$payload);
      $$payload.out += `<!---->`;
    });
  } else if (style === "normal") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<p>`;
    children?.($$payload);
    $$payload.out += `<!----></p>`;
  } else {
    $$payload.out += "<!--[!-->";
    children?.($$payload);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function DefaultList($$payload, $$props) {
  let { portableText, children } = $$props;
  let { value } = portableText;
  let { listItem } = value;
  if (listItem === "number") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<ol>`;
    children?.($$payload);
    $$payload.out += `<!----></ol>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<ul>`;
    children?.($$payload);
    $$payload.out += `<!----></ul>`;
  }
  $$payload.out += `<!--]-->`;
}
function DefaultListItem($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<li>`;
  children?.($$payload);
  $$payload.out += `<!----></li>`;
}
function DefaultHardBreak($$payload) {
  $$payload.out += `<br/>`;
}
function UnknownType($$payload, $$props) {
  let { children } = $$props;
  children?.($$payload);
  $$payload.out += `<!---->`;
}
const defaultComponents = {
  marks: {
    "strike-through": DefaultMark,
    code: DefaultMark,
    em: DefaultMark,
    strong: DefaultMark,
    underline: DefaultMark,
    link: DefaultLink
  },
  block: {
    blockquote: DefaultBlock,
    h1: DefaultBlock,
    h2: DefaultBlock,
    h3: DefaultBlock,
    h4: DefaultBlock,
    h5: DefaultBlock,
    h6: DefaultBlock,
    normal: DefaultBlock
  },
  list: {
    bullet: DefaultList,
    number: DefaultList
  },
  listItem: {
    bullet: DefaultListItem,
    number: DefaultListItem
  },
  types: {},
  hardBreak: DefaultHardBreak,
  unknownBlockStyle: DefaultBlock,
  unknownList: DefaultList,
  unknownListItem: DefaultListItem,
  unknownMark: DefaultMark,
  unknownType: UnknownType
};
function mergeComponents(parent, overrides = {}) {
  return {
    ...parent,
    ...overrides,
    block: mergeDeeply(parent, overrides, "block"),
    list: mergeDeeply(parent, overrides, "list"),
    listItem: mergeDeeply(parent, overrides, "listItem"),
    marks: mergeDeeply(parent, overrides, "marks"),
    types: mergeDeeply(parent, overrides, "types")
  };
}
function mergeDeeply(parent, overrides, key) {
  const override = overrides[key];
  const parentVal = parent[key];
  if (typeof override === "function") {
    return override;
  }
  if (override && typeof parentVal === "function") {
    return override;
  }
  if (override) {
    return { ...parentVal, ...override };
  }
  return parentVal;
}
function RenderBlock($$payload, $$props) {
  push();
  let { global, node, indexInParent, children } = $$props;
  let { components } = global;
  let { style = "normal" } = node;
  let blockComponent = typeof components.block === "function" ? components.block : components.block[style];
  let blockProps = /* @__PURE__ */ (() => {
    return { global, indexInParent, value: node };
  })();
  let BlockComponent = blockComponent || components.unknownBlockStyle;
  $$payload.out += `<!---->`;
  BlockComponent($$payload, {
    portableText: blockProps,
    children: ($$payload2) => {
      children?.($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}
function RenderCustomBlock($$payload, $$props) {
  push();
  let {
    global,
    node,
    parentBlock,
    indexInParent,
    isInline = false
  } = $$props;
  let { components } = global;
  let { _type } = node;
  let customComponent = components.types[_type];
  let componentProps = /* @__PURE__ */ (() => {
    return {
      global,
      value: node,
      indexInParent,
      parentBlock,
      isInline
    };
  })();
  let CustomComponent = customComponent || components.unknownType;
  $$payload.out += `<!---->`;
  CustomComponent($$payload, { portableText: componentProps });
  $$payload.out += `<!---->`;
  pop();
}
function RenderList($$payload, $$props) {
  push();
  let { global, indexInParent, node, children } = $$props;
  let listComponent = (() => {
    const { list } = global.components;
    return typeof list === "function" ? list : list[node.listItem];
  })();
  let listProps = { global, value: node, indexInParent };
  let ListComponent = listComponent || global.components.unknownList;
  $$payload.out += `<!---->`;
  ListComponent($$payload, {
    portableText: listProps,
    children: ($$payload2) => {
      children?.($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}
function RenderListItem($$payload, $$props) {
  push();
  let { global, indexInParent, node, children } = $$props;
  let { components } = global;
  let style = node.style ?? "normal";
  let listItemComponent = typeof components.listItem === "function" ? components.listItem : components.listItem[style];
  let StyleComponent = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    style !== "normal" ? components.block[style] : void 0
  );
  let listItemProps = { global, value: node, indexInParent };
  let ListItemComponent = listItemComponent || components.unknownListItem;
  $$payload.out += `<!---->`;
  ListItemComponent($$payload, {
    portableText: listItemProps,
    children: ($$payload2) => {
      if (StyleComponent) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<!---->`;
        StyleComponent($$payload2, {
          portableText: {
            // Different props for the block that will hold this list
            ...listItemProps,
            value: {
              ...node,
              // BlockComponentProps shouldn't receive a listItem
              listItem: void 0
            }
          },
          children: ($$payload3) => {
            children?.($$payload3);
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      } else {
        $$payload2.out += "<!--[!-->";
        children?.($$payload2);
        $$payload2.out += `<!---->`;
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}
function RenderSpan($$payload, $$props) {
  push();
  let { global, node, parentBlock, children } = $$props;
  let markComponent = global.components.marks[node.markType];
  let markProps = {
    global,
    parentBlock,
    markType: node.markType,
    // @ts-expect-error @TODO
    value: node.markDef,
    markKey: node.markKey,
    plainTextContent: spanToPlainText(node)
  };
  let MarkComponent = markComponent || global.components.unknownMark;
  $$payload.out += `<!---->`;
  MarkComponent($$payload, {
    portableText: markProps,
    children: ($$payload2) => {
      children?.($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}
function RenderText($$payload, $$props) {
  let { global, node } = $$props;
  let { components } = global;
  let { text } = node;
  if (text === "\n") {
    $$payload.out += "<!--[-->";
    if (typeof components.hardBreak === "function") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<!---->`;
      components.hardBreak($$payload, {});
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `${escape_html(text)}`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html(text)}`;
  }
  $$payload.out += `<!--]-->`;
}
function RenderNode_1($$payload, $$props) {
  push();
  let { global, options } = $$props;
  let { node, indexInParent, parentBlock, isInline } = options;
  if (isPortableTextToolkitList(node)) {
    $$payload.out += "<!--[-->";
    RenderList($$payload, {
      node,
      indexInParent,
      global,
      children: ($$payload2) => {
        const each_array = ensure_array_like(node.children);
        $$payload2.out += `<!--[-->`;
        for (let childIndex = 0, $$length = each_array.length; childIndex < $$length; childIndex++) {
          let child = each_array[childIndex];
          RenderNode_1($$payload2, {
            options: {
              node: child,
              indexInParent: childIndex,
              // The list's children will be parsed as PortableTextListItem, which will pass the proper parentBlock & isInline
              parentBlock: void 0,
              isInline: void 0
            },
            global
          });
        }
        $$payload2.out += `<!--]-->`;
      }
    });
  } else if (isPortableTextListItemBlock(node)) {
    $$payload.out += "<!--[1-->";
    RenderListItem($$payload, {
      node,
      indexInParent,
      global,
      children: ($$payload2) => {
        const each_array_1 = ensure_array_like(buildMarksTree(node));
        $$payload2.out += `<!--[-->`;
        for (let childIndex = 0, $$length = each_array_1.length; childIndex < $$length; childIndex++) {
          let child = each_array_1[childIndex];
          RenderNode_1($$payload2, {
            options: {
              // Pass the current listItem as a parentBlock
              parentBlock: node,
              node: child,
              isInline: true,
              indexInParent: childIndex
            },
            global
          });
        }
        $$payload2.out += `<!--]-->`;
      }
    });
  } else if (isPortableTextToolkitSpan(node)) {
    $$payload.out += "<!--[2-->";
    RenderSpan($$payload, {
      node,
      parentBlock,
      global,
      children: ($$payload2) => {
        const each_array_2 = ensure_array_like(node.children);
        $$payload2.out += `<!--[-->`;
        for (let childIndex = 0, $$length = each_array_2.length; childIndex < $$length; childIndex++) {
          let child = each_array_2[childIndex];
          RenderNode_1($$payload2, {
            options: {
              parentBlock,
              node: child,
              isInline: true,
              indexInParent: childIndex
            },
            global
          });
        }
        $$payload2.out += `<!--]-->`;
      }
    });
  } else if (isPortableTextBlock(node)) {
    $$payload.out += "<!--[3-->";
    RenderBlock($$payload, {
      node,
      indexInParent,
      global,
      children: ($$payload2) => {
        const each_array_3 = ensure_array_like(buildMarksTree(node));
        $$payload2.out += `<!--[-->`;
        for (let childIndex = 0, $$length = each_array_3.length; childIndex < $$length; childIndex++) {
          let child = each_array_3[childIndex];
          RenderNode_1($$payload2, {
            options: {
              parentBlock: node,
              node: child,
              isInline: true,
              indexInParent: childIndex
            },
            global
          });
        }
        $$payload2.out += `<!--]-->`;
      }
    });
  } else if (isPortableTextToolkitTextNode(node)) {
    $$payload.out += "<!--[4-->";
    RenderText($$payload, { node, global });
  } else if (node) {
    $$payload.out += "<!--[5-->";
    RenderCustomBlock($$payload, {
      node,
      parentBlock,
      indexInParent,
      isInline,
      global
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
const getTemplate = (type, prop) => `Unknown ${type}, specify a component for it in the \`components${prop ? "." : ""}${prop}\` prop`;
const getWarningMessage = (type, nodeType) => {
  switch (nodeType) {
    case "block":
      return getTemplate(`block type "${type}"`, "types");
    case "blockStyle":
      return getTemplate(`block style "${type}"`, "block");
    case "listItemStyle":
      return getTemplate(`list item style "${type}"`, "listItem");
    case "listStyle":
      return getTemplate(`list style "${type}"`, "list");
    case "mark":
      return getTemplate(`mark type "${type}"`, "marks");
    default:
      return getTemplate("type");
  }
};
function printWarning(message) {
  console.warn(message);
}
function PortableText($$payload, $$props) {
  push();
  let {
    value = [],
    components,
    context = {},
    onMissingComponent = true
  } = $$props;
  let mergedComponents = mergeComponents(defaultComponents, components);
  let keyedBlocks = (Array.isArray(value) ? value : [value]).map(assertBlockKey);
  let blocks = nestLists(keyedBlocks, LIST_NEST_MODE_HTML);
  let missingComponentHandler = (type, nodeType) => {
    if (onMissingComponent === false) {
      return;
    }
    const message = getWarningMessage(type, nodeType);
    if (typeof onMissingComponent === "function") {
      onMissingComponent(message, { type, nodeType });
      return;
    }
    printWarning(message);
  };
  const each_array = ensure_array_like(blocks);
  $$payload.out += `<!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let node = each_array[index];
    RenderNode_1($$payload, {
      global: {
        components: mergedComponents,
        missingComponentHandler,
        context,
        ptBlocks: blocks,
        ptRawValue: value
      },
      options: { node, isInline: false, indexInParent: index }
    });
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  PortableText as P
};
