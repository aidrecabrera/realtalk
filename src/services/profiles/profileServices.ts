import { supabaseClient } from "@/main";
import { TableType } from "@/types/types";
import { queryOptions } from "@tanstack/react-query";

export const profilesQueryOptions = () => {
  return queryOptions({
    queryKey: ["communities"],
    queryFn: async () => {
      const { data: profilesData, error } = await supabaseClient
        .from("profiles")
        .select("*");
      if (error) throw error;
      return profilesData as TableType<"profiles">[];
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
      return profilesData as TableType<"profiles">;
    },
  });
};
