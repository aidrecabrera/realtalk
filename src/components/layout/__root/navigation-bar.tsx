import { Navigation } from "@/components/common/navigation";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

function NavigationBar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	const width = useMediaQuery("(min-width: 768px)");

	return (
		<Navigation
			className={`${isOpen && !width ? "h-[215px]" : ""} transition-all ease-in-out duration-300`}
			variant="default"
		>
			<div
				className={`container flex flex-col h-full justify-start items-center gap-6`}
			>
				<div className="flex flex-row justify-between w-full">
					<h1 className="flex flex-row items-center h-10">
						<span className="font-bold text-subtitle">realtalk.</span>
					</h1>
					<div className="flex gap-2">
						<div className={`gap-2 md:flex hidden`}>
							<Button size="sm" className="bg-primary hover:bg-primary/80">
								Login
							</Button>
							<Button size="sm" variant="outline">
								Sign Up
							</Button>
						</div>
						<Button
							variant="outline"
							size="icon"
							className="shrink-0 md:hidden"
							onClick={toggleNavbar}
						>
							<Menu className="w-5 h-5" />
							<span className="sr-only">Toggle navigation menu</span>
						</Button>
					</div>
				</div>
				<div
					className={`transition-all w-full ease-in duration-100 md:hidden flex flex-col gap-3 overflow-hidden ${isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"}`}
				>
					<Link>
						<Button variant="outline" className="w-full">
							Login
						</Button>
					</Link>
					<Link>
						<Button className="w-full">Sign Up</Button>
					</Link>
				</div>
			</div>
		</Navigation>
	);
}

export default NavigationBar;
