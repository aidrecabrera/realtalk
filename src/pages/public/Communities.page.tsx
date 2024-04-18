import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { profilesQueryOptions } from "@/services/profiles/profileServices";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";

function Communities() {
	const { data: profilesData } = useSuspenseQuery(profilesQueryOptions());
	return (
		<div className="page">
			<div className="flex flex-col items-center justify-center mt-8">
				<h1 className="font-bold text-h3">Realtalk Communities</h1>
				<p>
					Find your community safe space to share your thoughts, feelings, and
					experiences with others who understand.
				</p>
			</div>
			<div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12">
				{profilesData.map((data) => {
					const { entity_name, realtalk_handle } = data;
					return (
						<Link
							to={"/communities/$profile"}
							params={{
								profile: realtalk_handle,
							}}
							className="col-span-4 sm:col-span-3 md:col-span-3 lg:col-span-4"
						>
							<Card>
								<div className="flex flex-col items-start justify-center gap-4 p-6">
									<Avatar className="w-20 h-20">
										<AvatarImage
											src="https://scontent.fdvo5-1.fna.fbcdn.net/v/t39.30808-6/393126713_122093951822088139_7684989565169592550_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SfoqFZ0LBlMAb722lgl&_nc_ht=scontent.fdvo5-1.fna&oh=00_AfAW1QuWmTM_5-9ZuSnWPbQQZBa3TPktjpKtPFPxlkDfRA&oe=6625F826"
											alt="@shadcn"
										/>
									</Avatar>
									<div className="flex flex-col gap-4">
										<div className="flex flex-col">
											<div>
												<p className="text-xl font-bold">{entity_name}</p>
											</div>
											<p className="text-tiny">{"@" + realtalk_handle}</p>
										</div>
									</div>
								</div>
							</Card>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default Communities;
