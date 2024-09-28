const fsExtra = require("fs-extra");
const fs = require("fs");

const GITHUB_PAGE_FOLDER = "../docs";

const ANGULAR_DIST_FOLDER = "./dist/about";
const CONFIG_FOLDER = "../configurations";

// Empty www dir
fsExtra.emptyDirSync("../test");

// Copy angular and configs to Github page folder
copyFolder(ANGULAR_DIST_FOLDER, GITHUB_PAGE_FOLDER, (err) => {
  console.log("Angluar Build copied!", err);
  copyFolder(CONFIG_FOLDER, GITHUB_PAGE_FOLDER, (err) => {
    console.log("Configurations copied!", err);
  });
});

function copyFolder(source, target, callback) {
  fs.cp(source, target, { recursive: true }, (err) => {
    callback();
  });
}
