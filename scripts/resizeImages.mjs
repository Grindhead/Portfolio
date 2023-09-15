import fs from "fs";
import im from "imagemagick";

const paths = ["./public/logo"];
const resolutions = [320, 480, 640];

const resize = (path, size) => {
  const ext = ".png";
  im.resize(
    {
      srcData: fs.readFileSync(path + ext, "binary"),
      width: size,
    },
    function (err, stdout, stderr) {
      if (err) throw err;
      fs.writeFileSync(path + "-" + size + "w" + ext, stdout, "binary");
      console.log("resized " + path + " to fit within " + size + "px width");
    }
  );
};

for (let i = 0; i < paths.length; i++) {
  for (let j = 0; j < resolutions.length; j++) {
    resize(paths[i], resolutions[j]);
  }
}
