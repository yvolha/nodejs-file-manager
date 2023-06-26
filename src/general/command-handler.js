import { updateCurrentDir } from "./current-dir.js";
import { cmdLs, cmdUp } from "../commands/basic.js";

const handleCommand = async (command) => {
  const commandBase = command.split(' ')[0];
  const commandArgs = command.toString().trim().split(' ').slice(1).filter(e => e);
  
  console.log("args in handleCommand", commandBase, commandArgs);

  switch (commandBase) {
    case 'ls':
      await cmdLs(await updateCurrentDir());
      break;
    case 'up':
      await cmdUp();
      break;
    default: 
    console.log('Invalid input.\n');
  }

  console.log(`You are currently in ${await updateCurrentDir()}`);
}

export default handleCommand;