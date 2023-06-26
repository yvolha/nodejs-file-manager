import { readdir } from 'fs/promises';
import { updateCurrentDir } from '../general/current-dir.js';

export const cmdLs = async (folder) => {
  const items = await readdir(folder, {
    withFileTypes: true,
  })
  .catch(() => console.log('Operation failed'));

  const typedItems = await Promise.all(items
  .map(item => ({
    Name: item.name,
    Type: item.isDirectory() ? 'directory' : 'file',
  }))
  .sort((a, b) => {
    if (a.Type > b.Type) {
      return 1;
    }
    if (a.Type < b.Type) {
      return -1;
    }
    return 0;
  }))

  console.table(typedItems);
}


export const cmdUp = async () => {
  await updateCurrentDir('up');
}