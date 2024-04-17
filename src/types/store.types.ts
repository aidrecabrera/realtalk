import { User } from "@supabase/supabase-js";

export type TSessionStore = {
	user: User | null;
	setUser: (user: User | null) => void;
	reset: () => void;
};
