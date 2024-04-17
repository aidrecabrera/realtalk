import { supabaseClient } from "@/app";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export const useSupabaseUser = () => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const fetchSession = async () => {
			const {
				data: { session },
			} = await supabaseClient.auth.getSession();
			if (session) {
				if (JSON.stringify(user) !== JSON.stringify(session.user)) {
					setUser(session.user);
				}
			} else {
				setUser(null);
			}
		};

		fetchSession();
	}, [user]);

	return user;
};

export type TSupabaseUser = ReturnType<typeof useSupabaseUser>;
