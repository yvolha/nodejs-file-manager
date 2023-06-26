import { createHash } from "crypto";

import { createReadableStream } from "../utils/create-readable.js";
import { createPathToFile } from "../utils/process-filepath.js";
import { pathExists } from "../utils/check-access.js";

export const cmdHash = async (filePath) => {
  if (filePath < 1) {
    console.log('Invalid input.')
  } else {
    const currentFilePath = await createPathToFile(filePath);

    if (await pathExists(currentFilePath)){
      
      await createReadableStream(currentFilePath)
      .then((data) => {
        console.log(createHash("sha256")
        .update(data)
        .digest("hex"))
      })
      
    } else {
      console.log('Invalid input.')
    }
  }
}