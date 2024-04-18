import { Icon } from "@phosphor-icons/react";
import { CalendarHeart } from "@phosphor-icons/react/dist/icons/CalendarHeart";
import { SealQuestion } from "@phosphor-icons/react/dist/icons/SealQuestion";
import { UserSound } from "@phosphor-icons/react/dist/icons/UserSound";

export type TProfileRoute = {
	Icon: Icon;
	MessageType: string;
	MessageSample: string;
	MessageRoute: string;
};

export const profileRoutes: TProfileRoute[] = [
	{
		Icon: SealQuestion,
		MessageType: "Anonymous",
		MessageSample: "Share thoughts without revealing your identity!",
		MessageRoute: "anonymous",
	},
	{
		Icon: CalendarHeart,
		MessageType: "Confession",
		MessageSample: "Confess your deepest secrets and feelings!",
		MessageRoute: "confession",
	},
	{
		Icon: UserSound,
		MessageType: "Rant",
		MessageSample: "Vent-out about anything bothering you!",
		MessageRoute: "rant",
	},
];
