import StyledOutlet from "@/components/common/styled-outlet";
import { IRealTalkRouteContext } from "@/types/route.types";
import { createRootRouteWithContext } from "@tanstack/react-router";

export const Route = createRootRouteWithContext<IRealTalkRouteContext>()({
	component: StyledOutlet,
});
