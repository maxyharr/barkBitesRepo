module.exports = function(ctx) {
  var fs = ctx.requireCordovaModule('fs-extra');
  var childProcess = ctx.requireCordovaModule('child_process');
  var polymerAppPath = '/Users/Max/Documents/phoneGap/polymerstarterkit';
  var destDir = ctx.opts.projectRoot + "/www";

  //first - build the Polymer project
  console.log('Building Polymer project located in: ' + polymerAppPath);
  childProcess.execSync("gulp", {cwd: polymerAppPath});

  //second - clear the www folder content of cordova app
  console.log('Cleaning up www folder');
  fs.removeSync(destDir);

  //third - copy the content from dist to www folder 
  console.log('Copying built artefacts....');
  fs.mkdirSync(destDir);
  fs.copySync(polymerAppPath + "/dist", destDir);
  console.log("Done!"); 
};