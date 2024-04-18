import Profile from "@/pages/public/Profile.page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_view-public/communities/$profile/")({
	component: Profile,
});
