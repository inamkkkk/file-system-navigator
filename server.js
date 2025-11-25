const fs = require('fs');
const path = require('path');

const directoryPath = process.argv[2] || '.';

function listFiles(dirPath) {
  try {
    const files = fs.readdirSync(dirPath);
    const fileDetails = files.map(file => {
      const filePath = path.join(dirPath, file);
      return { path: filePath };
    });

    console.log(JSON.stringify({ files: fileDetails }, null, 2));
  } catch (error) {
    console.error(JSON.stringify({error: error.message}));
  }
}

listFiles(directoryPath);
