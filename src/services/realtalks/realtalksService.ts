import { useMutation, useQuery } from "@tanstack/react-query";
import { useSupabaseClient } from "../shared/useSupabaseClient";
import { TableType } from "@/types/types";

export const fetchAllRt = () => {
  return useQuery({
    queryKey: ["fetchAllRt"],
    queryFn: async () => {
      const supabase = useSupabaseClient();
      let { data: realtalks, error } = await supabase
        .from("realtalks")
        .select("*")
        .neq("type", "REPLY");
      if (error) throw error;
      return realtalks as TableType<"realtalks">[];
    },
  });
};

export const postRealtalk = () => {
  return useMutation({
    mutationFn: async (payload: Partial<TableType<"realtalks">>) => {
      const supabase = useSupabaseClient();
      const { error } = await supabase
        .from("realtalks")
        .insert(payload as never);
      if (error) throw error;
      return payload;
    },
  });
};
