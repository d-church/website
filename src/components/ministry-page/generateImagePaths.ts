import fs from "fs";
import path from "path";

const getImageCountInDirectory = (dirName: string): number => {
  const directoryPath = path.join(
    process.cwd(),
    "public",
    "static",
    "ministry-page-images",
    "gallery",
    dirName
  );

  try {
    const files = fs.readdirSync(directoryPath);
    return files.length;
  } catch (error) {
    return 0;
  }
};

export default getImageCountInDirectory;
