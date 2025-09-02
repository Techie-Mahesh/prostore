import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert Prisma object to JS object
export const convertObjextToJSON = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};
