import { TSessionStore } from "@/types/store.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSessionStore = create<TSessionStore>()(
	persist(
		(set) => ({
			user: null,
			setUser: (user) => set(() => ({ user })),
			reset: () => set({ user: null }),
		}),
		{
			name: "session-storage",
		}
	)
);
