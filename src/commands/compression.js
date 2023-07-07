import { dirname, join, parse } from 'path';
import { writeFile, rename, createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress, createBrotliDecompress } from "zlib";
import { pipeline } from 'node:stream/promises';

import { pathExists } from "../utils/check-access.js";
import { createReadableStream } from "../utils/create-readable.js";
import { createPathToFile } from "../utils/process-filepath.js";

export const cmdCompress = async (filePath, dirPath) => {
  if (filePath < 1 || dirPath.length < 1) {
    console.log('Invalid input.')
  } else {
    const currentFilePath = await createPathToFile(filePath);

    if (await pathExists(currentFilePath)){
      const { base } = parse(currentFilePath);

      const readableStream = createReadStream(currentFilePath, { encoding: "utf-8" });
      const writeableStream = createWriteStream(join(await createPathToFile(dirPath), base + '.bz'));

      readableStream.pipe(createBrotliCompress()).pipe(writeableStream);

    } else {
      console.log('Invalid input.')
    }
  }
}

export const cmdDecompress = async (filePath, dirPath) => {
  if (filePath < 1 || dirPath.length < 1) {
    console.log('Invalid input.')
  } else {
    const currentFilePath = await createPathToFile(filePath);

    if (await pathExists(currentFilePath)){
      const { base } = parse(currentFilePath);

      const readableStream = createReadStream(currentFilePath);
      const writeableStream = createWriteStream(join(await createPathToFile(dirPath), base.slice(0, -3)));

      readableStream.pipe(createBrotliDecompress()).pipe(writeableStream);

    } else {
      console.log('Invalid input.')
    }
  }
}