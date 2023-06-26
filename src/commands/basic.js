import { pathExists } from "../utils/check-access.js";
import { createReadableStream } from "../utils/create-readable.js";
import { createPathToFile } from "../utils/process-filepath.js";

export const cmdCat = async (path) => {
  if (path.length < 1) {
    console.log('Invalid input.')
  } else {
    const currentPath = await createPathToFile(path);

    if (await pathExists(currentPath)){
      console.log(await createReadableStream(currentPath));
    } else {
      console.log('Invalid input.')
    }
  }
}
