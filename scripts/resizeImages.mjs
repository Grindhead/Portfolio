import fs from "fs";
import im from "imagemagick";

export const resize = (path, size) => {
  const ext = ".png";
  im.resize(
    {
      srcData: fs.readFileSync(path + ext, "binary"),
      width: 320,
    },
    function (err, stdout, stderr) {
      if (err) throw err;
      fs.writeFileSync(path + size + ext, stdout, "binary");
      console.log("resized " + path + " to fit within " + size + "px width");
    }
  );
};

resize("./public/logo", "320");
