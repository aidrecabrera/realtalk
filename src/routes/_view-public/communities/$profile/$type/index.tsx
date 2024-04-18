import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/_view-public/communities/$profile/$type/"
)({
	component: () => <div>Hello /_view-public/communities/$profile/$type/!</div>,
});
