import { RTHeading1Node, RTHeading2Node, RTHeading3Node } from "@prismicio/client";
import { Element, JSXFunctionSerializer } from "@prismicio/react";

import { Link } from "src/core/link";
import { List, ListVariant } from "src/core/list";

export const htmlSerializer: JSXFunctionSerializer = (type, element, _content, children, key) => {
  switch (type) {
    case Element.hyperlink:
      return (
        <Link key={key} link={(element as any).data}>
          {children}
        </Link>
      );
    case Element.oList:
    case Element.list:
      return (
        <List key={key} variant={type === Element.oList ? ListVariant.ORDERED : ListVariant.SQUARE}>
          {children}
        </List>
      );
    case Element.heading1:
    case Element.heading2:
    case Element.heading3:
      const el = element as RTHeading1Node | RTHeading2Node | RTHeading3Node;
      const id = el.text.replace(/\W+/g, "-").toLowerCase();
      const className = "scroll-m-24";

      switch (type) {
        case Element.heading1:
          return (
            <h1 id={id} className={className}>
              {children}
            </h1>
          );
        case Element.heading2:
          return (
            <h2 id={id} className={className}>
              {children}
            </h2>
          );
        case Element.heading3:
          return (
            <h3 id={id} className={className}>
              {children}
            </h3>
          );
      }
    default:
      return null;
  }
};
