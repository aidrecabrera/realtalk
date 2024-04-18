import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

function PageHome() {
	return (
		<div className="px-16 page">
			<div className="flex flex-col gap-8">
				<article className="flex flex-col items-center justify-center mt-48 lg:mx-16 rounded-2xl">
					<h1 className="text-5xl sm:text-center sm:text-4xl md:text-5xl lg:text-7xl">
						create a safe space with absolute anonymity and respect
					</h1>
				</article>
				<div className="flex flex-row items-center gap-2 sm:justify-center">
					<Button size="lg">Get Started</Button>
					<Link to="/communities">
						<Button
							size="lg"
							variant="outline"
							className="text-foreground hover:text-foreground border-foreground/90"
						>
							Communities
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default PageHome;
