import { supabaseClient } from "@/app";
import { TTable } from "@/types/schema.types";
import { useMutation, useQuery } from "@tanstack/react-query";

export const usePetchAllRt = () => {
  return useQuery({
    queryKey: ["fetchAllRt"],
    queryFn: async () => {
      const { data: realtalks, error } = await supabaseClient
        .from("realtalks")
        .select("*")
        .neq("type", "REPLY");
      if (error) throw error;
      return realtalks as TTable<"realtalks">[];
    },
  });
};

export const usePostRealtalk = () => {
  return useMutation({
    mutationFn: async (payload: Partial<TTable<"realtalks">>) => {
      const { error } = await supabaseClient
        .from("realtalks")
        .insert(payload as never);
      if (error) throw error;
      return payload;
    },
  });
};
