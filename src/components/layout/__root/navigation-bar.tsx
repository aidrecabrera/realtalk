import { Navigation } from "@/components/common/navigation";
import { Button } from "@/components/ui/button";

function NavigationBar() {
	return (
		<Navigation variant="default">
			<div className="container flex flex-row items-center justify-between flex-grow">
				<span className="font-bold text-subtitle">realtalk.</span>
				<div className="flex gap-2">
					<Button size="sm" className="bg-ocean hover:bg-ocean/80">
						Login
					</Button>
					<Button
						size="sm"
						variant="outline"
						className="hover:text-ocean hover:border-ocean"
					>
						Sign Up
					</Button>
				</div>
			</div>
		</Navigation>
	);
}

export default NavigationBar;
