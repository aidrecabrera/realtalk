import { supabaseClient } from "@/app";
import { TTable } from "@/types/schema.types";
import { queryOptions } from "@tanstack/react-query";

export const profilesQueryOptions = () => {
  return queryOptions({
    queryKey: ["communities"],
    queryFn: async () => {
      const { data: profilesData, error } = await supabaseClient
        .from("profiles")
        .select("*");
      if (error) throw error;
      return profilesData as TTable<"profiles">[];
    },
  });
};

export const profileQueryOptions = (handler: string) => {
  return queryOptions({
    queryKey: ["communities", handler],
    queryFn: async () => {
      const { data: profilesData, error } = await supabaseClient
        .from("profiles")
        .select("*")
        .eq("realtalk_handle", handler)
        .single();
      if (error) throw error;
      return profilesData as TTable<"profiles">;
    },
  });
};
