import { useSessionStore } from "@/store/useSessionStore";
import { IAuthentication } from "@/types/auth.types";
import * as React from "react";

export const AuthContext = React.createContext<IAuthentication | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const user = useSessionStore((state) => state.user);
	const setUser = useSessionStore((state) => state.setUser);
	const isAuthenticated = !!user;
	return (
		<AuthContext.Provider value={{ isAuthenticated, user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
}
