import StyledOutlet from "@/components/common/styled-outlet";
import { IRealTalkRouteContext } from "@/types/routes/__root.types";
import { createRootRouteWithContext } from "@tanstack/react-router";

export const Route = createRootRouteWithContext<IRealTalkRouteContext>()({
	component: StyledOutlet,
});
