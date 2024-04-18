import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

declare global {
	interface String {
		toTitleCase(): string;
	}
}

String.prototype.toTitleCase = function (): string {
	return this.replace(/\w\S*/g, function (txt: string) {
		return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
	});
};
