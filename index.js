import GenIcon from "./icons/GenIcon";

const RFTIcons = ({
  fileName,
  fileType,
  colorType,
  size,
  color,
  className,
}) => {
  let fileExt;
  if (fileName) {
    const regex = new RegExp("[^.]+$");
    fileExt = fileName.match(regex)[0];
  } else fileExt = fileType;

  fileExt = fileExt.toLowerCase();

  return GenIcon(fileExt, colorType, size, color, className);
};

export default RFTIcons;
