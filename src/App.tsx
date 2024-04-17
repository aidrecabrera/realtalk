// ? External libraries
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// ? Styles
import "./index.css";

// ? Routes
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";

// ! use only devtools for development
import { SupabaseClient } from "@/services/SupabaseClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { AuthProvider } from "./auth/AuthProvider";
import { useAuth } from "./hooks/useAuthentication";
import { useSupabaseUser } from "./hooks/useSupabaseUser";

export const queryClient = new QueryClient();
export const supabaseClient = SupabaseClient();

const router = createRouter({
	routeTree,
	context: {
		queryClient,
		supabaseClient,
		supabaseUser: undefined,
		authentication: undefined!,
	},
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

// eslint-disable-next-line react-refresh/only-export-components
function ApplicationEntry() {
	const supabaseUser = useSupabaseUser();
	const authentication = useAuth();
	return (
		<RouterProvider
			router={router}
			context={{
				queryClient: queryClient,
				supabaseClient: supabaseClient,
				supabaseUser: supabaseUser,
				authentication: authentication,
			}}
			defaultPreload="intent"
			// ! test if these solves the FOUC issue
			// ? defaultPendingMs={0}
			// ? defaultPendingMinMs={500}
		/>
	);
}

// TODO: future aidre, remind me to create the auth provider
const rootElement = document.getElementById("app")!;
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
			<StrictMode>
				<ApplicationEntry />
			</StrictMode>
			</AuthProvider>
			<ReactQueryDevtools initialIsOpen={false} />
			<TanStackRouterDevtools router={router} initialIsOpen={false} />
		</QueryClientProvider>
	);
}
