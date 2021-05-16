const IconData = (colorType, fileExt) => {
  const folderLocation =
    colorType === "multiColor" ? `./multiColor` : `./monoColor`;

  switch (fileExt) {
    case "file-type":
      return require(`${folderLocation}/file-type.json`);

    default:
      console.log("Font not available");
      break;
  }
};

export default IconData;
