import Profile from "@/pages/public/Profile.page";
import { createFileRoute } from "@tanstack/react-router";
import z from "zod";

export const TSendOptionsSchema = z.object({
	send: z.enum(["anonymous", "confession", "rant"]).optional(),
});

export const Route = createFileRoute("/_view-public/communities/$profile")({
	validateSearch: (search) => TSendOptionsSchema.parse(search),
	component: Profile,
});
