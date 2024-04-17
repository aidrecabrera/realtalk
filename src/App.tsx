// ? External libraries
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// ? Styles
import "./index.css";

// ? Routes
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// ! use only devtools for development
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const queryClient = new QueryClient();

const router = createRouter({
	routeTree,
	context: {
		queryClient,
		supabaseClient,
		supabaseUser: undefined!, // TODO: define properly
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
				queryClient,
				supabaseClient,
				supabaseUser,
				authentication,
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
			<StrictMode>
				<ApplicationEntry />
			</StrictMode>
			<ReactQueryDevtools initialIsOpen={false} />
			<TanStackRouterDevtools router={router} initialIsOpen={false} />
		</QueryClientProvider>
	);
}
