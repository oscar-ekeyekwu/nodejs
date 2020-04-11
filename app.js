//reading and writng files
var fs = require('fs');

/**
 * reading and writing file synchronously
 *  will block succeeding code thus codes
 *  after these fucntions will not run
 * until the reading or writing is done
 */
var readme = fs.readFileSync('README.md', 'utf8');

fs.writeFileSync('writeme.txt', readme);

//readig and writing asynchronously
fs.readFile('README.md', 'utf8', function (err, data) {
  //syntax-> fs.readfile(filepath,char encoding,callback);
  //here, the data argument carries the contents of the file read.

  /**in writing file asynchronously, one must add a callback
   * to log errors if any exit. Discovered this in practice.
   * syntax -> fs.writefile(filepath,data,callback);
   */
  fs.writeFile('newWrite.txt', data, function (err) {
    if (!err) {
      console.log('File written and saved');
    }
  });
});
