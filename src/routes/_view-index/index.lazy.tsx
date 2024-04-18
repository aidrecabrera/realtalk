import PageHome from "@/pages/home.page";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_view-index/")({
	component: PageHome,
});
