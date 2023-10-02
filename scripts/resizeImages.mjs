import fs from "fs";
import im from "imagemagick";

const sourceDir = "./src/Assets/Images/";
const paths = ["header-background", "houses"];
const dest = "./public/";
const resolutions = [1200, 900, 600];
const ext = ".png";

const resize = (path, size) => {
  im.resize(
    {
      srcData: fs.readFileSync(sourceDir + path + ext, "binary"),
      width: size,
      format: "png",
      strip: true,
    },
    function (err, stdout, stderr) {
      if (err) throw err;
      fs.writeFileSync(dest + path + "-" + size + "w" + ext, stdout, "binary");
      console.log("resized " + path + " to fit within " + size + "px width");
    }
  );
};

for (let i = 0; i < paths.length; i++) {
  for (let j = 0; j < resolutions.length; j++) {
    resize(paths[i], resolutions[j]);
  }
}
