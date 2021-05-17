import * as React from "react";

import IconData from "./IconsData";

const assembleChildElements = (child) => {
  if (child)
    return child.map((grandChild) =>
      React.createElement(
        grandChild.tag,
        { ...grandChild.attr },
        assembleChildElements(grandChild.child)
      )
    );
};
const assembleIcon = (iconData, svgAttrs) => {
  return React.createElement(
    iconData.tag,
    { ...iconData.attr, ...svgAttrs },
    assembleChildElements(iconData.child)
  );
};

const GenIcon = (fileExt, colorType, size, className) => {
  const iconData = IconData(colorType, fileExt);

  const computedSize = size || "1em";

  let svgAttrs = {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    height: computedSize,
    width: computedSize,
    className: className ? className : null,
  };

  return assembleIcon(iconData, svgAttrs);
};

export default GenIcon;
