import { IRealTalkRouteContext } from "@/types/route.types";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

/**
 * * @__root - the god route of all routes
 * ! do not touch since this is the root route
 * ? layouts are pre-fixed as _view-[route-name]
 * ? route pages are then contained within the
 * ? folder corresponding to the layout name
 */

export const Route = createRootRouteWithContext<IRealTalkRouteContext>()({
	component: Outlet,
});
