import { stat } from "fs/promises";

export const pathExists = async (str) => await stat(str).then(() => true).catch(() => false);