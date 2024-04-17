import { User } from "@supabase/supabase-js";
import { TTable } from "./schema.types";

export interface IAuthentication {
	isAuthenticated: boolean;
	setUser: (user: User | null) => void;
	user: User | null;
}

export type TCredential = {
	email: string;
	password: string;
};

export type TEntitySignUpData = Pick<
	TTable<"profiles">,
	"entity_name" | "fb_page" | "institution_id" | "realtalk_handle"
>;
