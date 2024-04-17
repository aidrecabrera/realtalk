import { User } from "@supabase/supabase-js";
import * as React from "react";

export interface AuthenticationContext {
	isAuthenticated: boolean;
	setUser: (user: User | null) => void;
	user: User | null;
}

const AuthContext = React.createContext<AuthenticationContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    // TODO: create state store for userSession
	// const user = useSessionStore((state) => state.user);
	// const setUser = useSessionStore((state) => state.setUser);
	// const isAuthenticated = !!user;
	return (
		<AuthContext.Provider value={{ isAuthenticated, user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = React.useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}
