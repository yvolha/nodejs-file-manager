import currentDir from "./current-dir.js";
import { cmdLs } from "../commands/basic.js";

const handleCommand = async (command) => {
  const commandBase = command.split(' ')[0];
  const commandArgs = command.toString().trim().split(' ').slice(1).filter(e => e);
  
  console.log("args in handleCommand", commandBase, commandArgs);

  switch (commandBase) {
    case 'ls':
      await cmdLs(currentDir);
      break;
    default: 
    console.log('Invalid input.\n');
  }
}

export default handleCommand;