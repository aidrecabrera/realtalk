import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { profileRoutes } from "@/constants/profileRoutes";
import { Route } from "@/routes/_view-public/communities/$profile";
import { profileQueryOptions } from "@/services/profiles/profileServices";
import { TTable } from "@/types/schema.types";
import { FacebookLogo, Share } from "@phosphor-icons/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";

export const image =
	"https://firebasestorage.googleapis.com/v0/b/ask-fun-d10f0.appspot.com/o/images%2F3743297F-4CB4-415C-BA5E-05B131836B0B.jpg?alt=media&token=b3853009-6245-4de1-85e2-8e5eae2d6404";

function Profile() {
	const { profile: handler } = Route.useParams();
	const { data: profile } = useSuspenseQuery(profileQueryOptions(handler));
	const { entity_name, fb_page } = profile as TTable<"profiles">;
	if (!profile) {
		return <h1 className="animate-pulse">Loading...</h1>;
	}
	return (
		<div className="flex flex-col items-center justify-start w-full h-full gap-4 px-8 mt-16">
			<Card className="container w-full max-w-lg">
				<CardContent className="mt-6">
					<div className="flex flex-col items-center gap-4">
						<img
							src={image}
							className="border-2 rounded-full w-36 h-36 border-border"
						/>
						<div className="flex flex-col gap-2">
							<h1 className="text-3xl font-bold">{entity_name}</h1>
							<div className="flex flex-row gap-1">
								<Badge className="text-xs">{"@" + handler}</Badge>
								<Badge
									variant="outline"
									className="text-xs border-primary text-primary"
								>
									{"Mapua Malayan Colleges Mindanao"}
								</Badge>
							</div>
						</div>
					</div>
				</CardContent>
				<CardFooter>
					<div className="flex flex-row w-full gap-2">
						<a href={fb_page} target="_blank" className="w-full">
							<Button
								variant="default"
								className="w-full bg-ocean hover:bg-ocean/80"
							>
								<FacebookLogo className="mr-1" size={27} />
								<span>Facebook</span>
							</Button>
						</a>
						<Button variant="outline" className="w-full bg-card">
							<Share className="mr-1" size={23} />
							<span>Share</span>
						</Button>
					</div>
				</CardFooter>
			</Card>
			{profileRoutes.map(
				({ Icon, MessageRoute, MessageSample, MessageType }, index) => {
					return (
						<Link
							to="/communities/$profile/$type"
							params={{
								profile: handler,
								type: MessageRoute,
							}}
							className="w-full max-w-lg"
						>
							<Card key={index} className="container w-full">
								<div className="flex flex-row items-center py-8">
									<Icon size={50} className="mr-6" />
									<div>
										<h1 className="font-medium text-body">{MessageType}</h1>
										<p>{MessageSample}</p>
									</div>
								</div>
							</Card>
						</Link>
					);
				}
			)}
		</div>
	);
}

export default Profile;
