import { queryClient } from "@/app";
import StyledOutlet from "@/components/common/styled-outlet";
import { profilesQueryOptions } from "@/services/profiles/profileServices";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_view-public")({
	loader: () => queryClient.ensureQueryData(profilesQueryOptions()),
	component: StyledOutlet,
});
