import { queryClient } from "@/app";
import Profile from "@/pages/public/Profile.page";
import { profileQueryOptions } from "@/services/profiles/profileServices";
import { createFileRoute } from "@tanstack/react-router";
import z from "zod";

export const TSendOptionsSchema = z.object({
	send: z.enum(["anonymous", "confession", "rant"]).optional(),
});

export const Route = createFileRoute("/_view-public/communities/$profile")({
	validateSearch: (search) => TSendOptionsSchema.parse(search),
	loader: ({ params: { profile } }) =>
		queryClient.ensureQueryData(profileQueryOptions(profile)),
	component: Profile,
});
