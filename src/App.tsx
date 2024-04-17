import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// ! use only devtools for development
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const queryClient = new QueryClient();

const router = createRouter({
	routeTree,
	context: {
		// TODO: add all the necessary contexts
		queryClient,
	},
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

function ApplicationEntry() {
	// TODO: add all the necessary contexts initialization
	return (
		<RouterProvider
			router={router}
			context={{
				// TODO: add all the necessary contexts here as well
				queryClient,
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
