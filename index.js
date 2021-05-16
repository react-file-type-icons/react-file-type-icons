import GenIcon from "./icons/GenIcon";

const RFTIcons = ({ fileName, fileType, colorType, size }) => {
  let fileExt;
  if (fileName) {
    const regex = new RegExp("[^.]+$");
    fileExt = fileName.match(regex)[0];
  } else fileExt = fileType;

  return GenIcon(fileExt, colorType, size);
};

export default RFTIcons;
