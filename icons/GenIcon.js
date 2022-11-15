import * as React from "react";

import IconData from "./IconsData";

const assembleChildElements = (child) => {
  if (child)
    return child.map((grandChild, idx) =>
      React.createElement(
        grandChild.tag,
        { ...grandChild.attr, idx: `idx${idx}` },
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

const GenIcon = (fileExt, colorType, size, color, className) => {
  const iconData = IconData(colorType, fileExt);

  const computedSize = size || "1em";

  let svgAttrs = {
    stroke: color ? color : "currentColor",
    fill: color ? color : "currentColor",
    strokeWidth: "0",
    height: computedSize,
    width: computedSize,
    className: className ? className : null,
  };

  return assembleIcon(iconData, svgAttrs);
};

export default GenIcon;
