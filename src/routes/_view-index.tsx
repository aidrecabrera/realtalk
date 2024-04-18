import StyledOutlet from "@/components/common/styled-outlet";
import NavigationBar from "@/components/layout/__root/navigation-bar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_view-index")({
	component: () => {
		return (
			<div className="parent">
				<NavigationBar />
				<StyledOutlet />
			</div>
		);
	},
});
