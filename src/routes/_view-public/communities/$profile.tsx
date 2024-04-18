import { queryClient } from "@/app";
import { type_of_message } from "@/constants/global";
import Profile from "@/pages/public/Profile.page";
import { profileQueryOptions } from "@/services/profiles/profileServices";
import { createFileRoute, redirect } from "@tanstack/react-router";
import z from "zod";

export const TSendOptionsSchema = z.object({
	send: z.enum(type_of_message as [string, ...string[]]).optional(),
});

export const Route = createFileRoute("/_view-public/communities/$profile")({
	validateSearch: (search) => TSendOptionsSchema.parse(search),
	beforeLoad: ({ search: { send }, params: { profile } }) => {
		if (!undefined && !Object.values(type_of_message).includes(send)) {
			throw redirect({
				to: "/communities/$profile",
				params: {
					profile: profile,
				},
				search: {
					send: undefined,
				},
			});
		}
		return queryClient.ensureQueryData(profileQueryOptions(profile));
	},
	loader: ({ params: { profile } }) =>
		queryClient.ensureQueryData(profileQueryOptions(profile)),
	component: Profile,
});
