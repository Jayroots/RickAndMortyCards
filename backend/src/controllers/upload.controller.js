const fs = require("fs");

function uploadController(req, res) {
  console.log("voici mon fichier", req.file);

  if (!req.file) {
    return res.status(404).send("please choose a file");
  }

  if (req.file.mimetype !== "image/png") {
    fs.unlinkSync(req.file.path);
    return res.status(403).send("the file hasn't the expected format");
  }

  fs.renameSync(
    req.file.path,
    `./public/uploads/${req.file.originalname}`,
    (err) => {
      if (err) {
        return res.status(400).send("Impossible rename the file");
      }
    }
  );
  return res.status(200).send("File Accepted");
}

module.exports = uploadController;
