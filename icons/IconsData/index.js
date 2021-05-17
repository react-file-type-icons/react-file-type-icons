const IconData = (colorType, fileExt) => {
  const folderLocation =
    colorType === "multiColor" ? `./multiColor` : `./monoColor`;

  switch (fileExt) {
    case "mp3":
    case "wav":
    case "mpa":
    case "wma":
    case "ogg":
    case "aif":
    case "cda":
    case "mid":
    case "midi":
    case "wpl":
      return require(`${folderLocation}/audio.json`);

    case "apk":
      return require(`${folderLocation}/apk.json`);

    case "c":
      return require(`${folderLocation}/c.json`);

    case "7z":
    case "arj":
    case "deb":
    case "pkg":
    case "rar":
    case "rpm":
    case "z":
    case "zip":
      return require(`${folderLocation}/compressed.json`);

    case "cpp":
      return require(`${folderLocation}/cpp.json`);

    case "cs":
      return require(`${folderLocation}/cs.json`);

    case "css":
      return require(`${folderLocation}/css.json`);

    case "iso":
    case "bin":
    case "toast":
    case "vcd":
      return require(`${folderLocation}/disc.json`);

    case "sql":
    case "csv":
    case "db":
    case "dbf":
    case "log":
    case "mdb":
    case "sav":
    case "tar":
    case "xml":
    case "dat":
      return require(`${folderLocation}/database.json`);

    case "doc":
    case "docx":
    case "odt":
    case "rtf":
    case "wpd":
    case "tex":
    case "txt":
      return require(`${folderLocation}/document.json`);

    case "email":
    case "eml":
    case "emlx":
    case "msg":
    case "oft":
    case "ost":
    case "pst":
    case "vcf":
      return require(`${folderLocation}/email.json`);

    case "exe":
      return require(`${folderLocation}/exe.json`);

    case "fnt":
    case "fon":
    case "otf":
    case "ttf":
      return require(`${folderLocation}/font.json`);

    case "html":
      return require(`${folderLocation}/html.json`);

    case "png":
    case "jpeg":
    case "jpg":
    case "gif":
    case "exif":
    case "tiff":
    case "tif":
    case "bmp":
      return require(`${folderLocation}/image.json`);

    case "java":
      return require(`${folderLocation}/java.json`);

    case "js":
      return require(`${folderLocation}/js.json`);

    case "json":
      return require(`${folderLocation}/json.json`);

    case "pdf":
      return require(`${folderLocation}/pdf.json`);

    case "php":
      return require(`${folderLocation}/php.json`);

    case "py":
      return require(`${folderLocation}/py.json`);

    case "bak":
    case "cab":
    case "cfg":
    case "cpl":
    case "dll":
    case "cur":
    case "dmp":
    case "drv":
    case "icns":
    case "ico":
    case "ini":
    case "lnk":
    case "msi":
    case "sys":
    case "tmp":
      return require(`${folderLocation}/setting.json`);

    case "ppt":
    case "pptx":
    case "key":
    case "odp":
    case "pps":
      return require(`${folderLocation}/slides.json`);

    case "xlsx":
    case "xlsm":
    case "xls":
    case "ods":
      return require(`${folderLocation}/spreadsheet.json`);

    case "svg":
      return require(`${folderLocation}/svg.json`);

    case "mp4":
    case "avi":
    case "flv":
    case "mov":
    case "mkv":
    case "mpeg":
    case "mpg":
    case "h264":
    case "3gp":
    case "3g2":
    case "rm":
    case "swf":
    case "m4v":
    case "vob":
    case "wmv":
      return require(`${folderLocation}/video.json`);

    default:
      console.log("Font not available");
      break;
  }
};

export default IconData;
