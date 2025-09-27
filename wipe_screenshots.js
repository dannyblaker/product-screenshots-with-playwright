const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'screenshots');

// Function to recursively delete the folder and its contents
function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const currentPath = path.join(folderPath, file);
      if (fs.lstatSync(currentPath).isDirectory()) {
        deleteFolderRecursive(currentPath); // Recursively delete folder
      } else {
        fs.unlinkSync(currentPath); // Delete file
      }
    });
    fs.rmdirSync(folderPath); // Remove the empty folder
    console.log(`Folder ${folderPath} has been deleted successfully.`);
  } else {
    console.log(`Folder ${folderPath} does not exist.`);
  }
}

// Calling the function to delete the folder
deleteFolderRecursive(directoryPath);
