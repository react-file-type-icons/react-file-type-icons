const fs = require("fs");
const path = require("path");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { document } = new JSDOM(``).window;
let el = document.createElement("div");

const SVGFolderLocation = path.join(__dirname, "SVG");
const JSONFolderLocation = path.join(__dirname, "JSON");

const convertHtmlToJson = (htmlOb) => {
  let nodeObject = {
    tag: "",
    attr: {},
  };

  nodeObject.tag = htmlOb.nodeName;

  if (htmlOb.hasAttributes()) {
    if (htmlOb.nodeName === "svg") {
      nodeObject.attr = { viewBox: htmlOb.getAttribute("viewBox") };
    } else {
      const len = htmlOb.attributes.length;
      for (let i = 0; i < len; i++) {
        const property = htmlOb.attributes[i].nodeName;
        //uncomment the below line of code for converting monoColor SVGs so that they do not contain any fill property inside there sub attributes
        if (!(property === "fill"))
          nodeObject.attr[property] = htmlOb.attributes[i].nodeValue;
      }
    }
  }

  if (htmlOb.childElementCount) {
    nodeObject.child = [];
    const childLen = htmlOb.childElementCount;
    for (let i = 0; i < childLen; i++) {
      if (htmlOb.children[i].nodeName === "title") continue;
      const childOb = convertHtmlToJson(htmlOb.children[i]);
      nodeObject.child.push(childOb);
    }
  }

  return nodeObject;
};

const files = fs.readdirSync(SVGFolderLocation);

files.forEach((file) => {
  if (file === ".gitignore") return;

  const svgFileLocation = path.join(SVGFolderLocation, file);

  let htmlContent = fs.readFileSync(svgFileLocation, "utf8");
  el.innerHTML = `${htmlContent}`;

  const svgOb = convertHtmlToJson(el.children[0]);
  const svgJson = JSON.stringify(svgOb);

  const fileNameRegex = new RegExp("(.+?)(.[^.]*$|$)");
  let fileName = file.match(fileNameRegex)[1];
  fileName = `${fileName}.json`;
  const jsonFileLocation = path.join(JSONFolderLocation, fileName);

  try {
    fs.writeFileSync(jsonFileLocation, svgJson, { flag: "w" });
    console.log(`${file} has been converted`);
  } catch (err) {
    console.log(err);
  }
});
