const fs = require('fs');
const path = require('path');
const jschardet = require('jschardet');

const folderPath = 'input';


fs.readdirSync(folderPath).forEach((fileName) => {
  const file = path.join(folderPath, fileName);

  fs.readFile(file, function (error, data) {
    if (error) {
      console.log('讀取檔案失敗');
      return;
    }
    
    const encoding = jschardet.detect(data).encoding;

    console.log('encoding', file,  encoding);
  });

});
