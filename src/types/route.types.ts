import { TSupabaseUser } from "@/hooks/useSupabaseUser";
import { SupabaseClient as TSupabaseClient } from "@supabase/supabase-js";
import { QueryClient as TQueryClient } from "@tanstack/react-query";
import { IAuthentication } from "./auth.types";

export interface IRealTalkRouteContext {
	queryClient: TQueryClient;
	supabaseClient: TSupabaseClient;
	supabaseUser?: TSupabaseUser;
	authentication: IAuthentication;
}
