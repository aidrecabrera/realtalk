import { queryClient } from "@/app";
import Communities from "@/pages/public/Communities.page";
import { profilesQueryOptions } from "@/services/profiles/profileServices";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_view-public/communities/")({
	loader: () => queryClient.ensureQueryData(profilesQueryOptions()),
	component: Communities,
});
