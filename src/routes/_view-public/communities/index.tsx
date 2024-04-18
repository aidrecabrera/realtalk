import Communities from "@/pages/public/Communities.page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_view-public/communities/")({
	component: Communities,
});
