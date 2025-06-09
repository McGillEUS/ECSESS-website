import { p as push, v as ensure_array_like, m as pop, q as escape_html, A as element, n as attr } from './index2-CJUw4Zcm.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function isPortableTextSpan(node) {
  return node._type === "span" && "text" in node && typeof node.text == "string" && (typeof node.marks > "u" || Array.isArray(node.marks) && node.marks.every(mark => typeof mark == "string"));
}
function isPortableTextBlock(node) {
  return (
    // A block doesn't _have_ to be named 'block' - to differentiate between
    // allowed child types and marks, one might name them differently
    typeof node._type == "string" &&
    // Toolkit-types like nested spans are @-prefixed
    node._type[0] !== "@" && (
    // `markDefs` isn't _required_ per say, but if it's there, it needs to be an array
    !("markDefs" in node) || !node.markDefs || Array.isArray(node.markDefs) &&
    // Every mark definition needs to have an `_key` to be mappable in child spans
    node.markDefs.every(def => typeof def._key == "string")) &&
    // `children` is required and needs to be an array
    "children" in node && Array.isArray(node.children) &&
    // All children are objects with `_type` (usually spans, but can contain other stuff)
    node.children.every(child => typeof child == "object" && "_type" in child)
  );
}
function isPortableTextListItemBlock(block) {
  return isPortableTextBlock(block) && "listItem" in block && typeof block.listItem == "string" && (typeof block.level > "u" || typeof block.level == "number");
}
function isPortableTextToolkitList(block) {
  return block._type === "@list";
}
function isPortableTextToolkitSpan(span) {
  return span._type === "@span";
}
function isPortableTextToolkitTextNode(node) {
  return node._type === "@text";
}
const knownDecorators = ["strong", "em", "code", "underline", "strike-through"];
function sortMarksByOccurences(span, index, blockChildren) {
  if (!isPortableTextSpan(span) || !span.marks) return [];
  if (!span.marks.length) return [];
  const marks = span.marks.slice(),
    occurences = {};
  return marks.forEach(mark => {
    occurences[mark] = 1;
    for (let siblingIndex = index + 1; siblingIndex < blockChildren.length; siblingIndex++) {
      const sibling = blockChildren[siblingIndex];
      if (sibling && isPortableTextSpan(sibling) && Array.isArray(sibling.marks) && sibling.marks.indexOf(mark) !== -1) occurences[mark]++;else break;
    }
  }), marks.sort((markA, markB) => sortMarks(occurences, markA, markB));
}
function sortMarks(occurences, markA, markB) {
  const aOccurences = occurences[markA],
    bOccurences = occurences[markB];
  if (aOccurences !== bOccurences) return bOccurences - aOccurences;
  const aKnownPos = knownDecorators.indexOf(markA),
    bKnownPos = knownDecorators.indexOf(markB);
  return aKnownPos !== bKnownPos ? aKnownPos - bKnownPos : markA.localeCompare(markB);
}
function buildMarksTree(block) {
  var _a, _b;
  const {
      children
    } = block,
    markDefs = (_a = block.markDefs) != null ? _a : [];
  if (!children || !children.length) return [];
  const sortedMarks = children.map(sortMarksByOccurences),
    rootNode = {
      _type: "@span",
      children: [],
      markType: "<unknown>"
    };
  let nodeStack = [rootNode];
  for (let i = 0; i < children.length; i++) {
    const span = children[i];
    if (!span) continue;
    const marksNeeded = sortedMarks[i] || [];
    let pos = 1;
    if (nodeStack.length > 1) for (pos; pos < nodeStack.length; pos++) {
      const mark = ((_b = nodeStack[pos]) == null ? void 0 : _b.markKey) || "",
        index = marksNeeded.indexOf(mark);
      if (index === -1) break;
      marksNeeded.splice(index, 1);
    }
    nodeStack = nodeStack.slice(0, pos);
    let currentNode = nodeStack[nodeStack.length - 1];
    if (currentNode) {
      for (const markKey of marksNeeded) {
        const markDef = markDefs == null ? void 0 : markDefs.find(def => def._key === markKey),
          markType = markDef ? markDef._type : markKey,
          node = {
            _type: "@span",
            _key: span._key,
            children: [],
            markDef,
            markType,
            markKey
          };
        currentNode.children.push(node), nodeStack.push(node), currentNode = node;
      }
      if (isPortableTextSpan(span)) {
        const lines = span.text.split(`
`);
        for (let line = lines.length; line-- > 1;) lines.splice(line, 0, `
`);
        currentNode.children = currentNode.children.concat(lines.map(text => ({
          _type: "@text",
          text
        })));
      } else currentNode.children = currentNode.children.concat(span);
    }
  }
  return rootNode.children;
}
function nestLists(blocks, mode) {
  const tree = [];
  let currentList;
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block) {
      if (!isPortableTextListItemBlock(block)) {
        tree.push(block), currentList = void 0;
        continue;
      }
      if (!currentList) {
        currentList = listFromBlock(block, i, mode), tree.push(currentList);
        continue;
      }
      if (blockMatchesList(block, currentList)) {
        currentList.children.push(block);
        continue;
      }
      if ((block.level || 1) > currentList.level) {
        const newList = listFromBlock(block, i, mode);
        {
          const lastListItem = currentList.children[currentList.children.length - 1],
            newLastChild = _objectSpread(_objectSpread({}, lastListItem), {}, {
              children: [...lastListItem.children, newList]
            });
          currentList.children[currentList.children.length - 1] = newLastChild;
        }
        currentList = newList;
        continue;
      }
      if ((block.level || 1) < currentList.level) {
        const matchingBranch = tree[tree.length - 1],
          match = matchingBranch && findListMatching(matchingBranch, block);
        if (match) {
          currentList = match, currentList.children.push(block);
          continue;
        }
        currentList = listFromBlock(block, i, mode), tree.push(currentList);
        continue;
      }
      if (block.listItem !== currentList.listItem) {
        const matchingBranch = tree[tree.length - 1],
          match = matchingBranch && findListMatching(matchingBranch, {
            level: block.level || 1
          });
        if (match && match.listItem === block.listItem) {
          currentList = match, currentList.children.push(block);
          continue;
        } else {
          currentList = listFromBlock(block, i, mode), tree.push(currentList);
          continue;
        }
      }
      console.warn("Unknown state encountered for block", block), tree.push(block);
    }
  }
  return tree;
}
function blockMatchesList(block, list) {
  return (block.level || 1) === list.level && block.listItem === list.listItem;
}
function listFromBlock(block, index, mode) {
  return {
    _type: "@list",
    _key: `${block._key || `${index}`}-parent`,
    mode,
    level: block.level || 1,
    listItem: block.listItem,
    children: [block]
  };
}
function findListMatching(rootNode, matching) {
  const level = matching.level || 1,
    style = matching.listItem || "normal",
    filterOnType = typeof matching.listItem == "string";
  if (isPortableTextToolkitList(rootNode) && (rootNode.level || 1) === level && filterOnType && (rootNode.listItem || "normal") === style) return rootNode;
  if (!("children" in rootNode)) return;
  const node = rootNode.children[rootNode.children.length - 1];
  return node && !isPortableTextSpan(node) ? findListMatching(node, matching) : void 0;
}
function spanToPlainText(span) {
  let text = "";
  return span.children.forEach(current => {
    isPortableTextToolkitTextNode(current) ? text += current.text : isPortableTextToolkitSpan(current) && (text += spanToPlainText(current));
  }), text;
}
const LIST_NEST_MODE_HTML = "html";

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

export { PortableText as P };
//# sourceMappingURL=PortableText-R6OxfX_g.js.map
