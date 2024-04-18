import { Outlet } from "@tanstack/react-router";

function StyledOutlet() {
	return (
		<div className="parent">
			<Outlet />
		</div>
	);
}

export default StyledOutlet;
