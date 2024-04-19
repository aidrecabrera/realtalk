import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const navigationBarClass = cva(
	"flex flex-row justify-between items-center py-7 w-full fixed h-24",
	{
		variants: {
			variant: {
				default: "bg-background",
				primary: "bg-primary text-primary-foreground",
				secondary: "bg-secondary text-secondary-foreground",
				tertiary: "bg-sunglow text-sunglow-foreground",
				outline: "bg-transparent",
				ghost: "bg-transparent border-0",
			},
			border: {
				true: "border-b-2",
				false: "border-0",
			},
		},
		defaultVariants: {
			variant: "default",
			border: true,
		},
	}
);

export interface NavigationBarProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof navigationBarClass> {
	asChild?: boolean;
	bordered?: boolean;
}

const Navigation = React.forwardRef<HTMLDivElement, NavigationBarProps>(
	({ className, variant, asChild = false, border = true, ...props }, ref) => {
		const Comp = asChild ? Slot : "div";
		return (
			<Comp
				className={cn(navigationBarClass({ variant, className, border }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Navigation.displayName = "Button";

// eslint-disable-next-line react-refresh/only-export-components
export { Navigation, navigationBarClass };
