import { queryClient, supabaseClient } from "@/app";
import { useSessionStore } from "@/store/useSessionStore";
import { TCredential, TEntitySignUpData } from "@/types/auth.types";
import { useMutation } from "@tanstack/react-query";

export const useSignIn = () => {
	return useMutation({
		mutationKey: ["entitySignIn"],
		mutationFn: async ({ email, password }: TCredential) => {
			const { data, error } = await supabaseClient.auth.signInWithPassword({
				email: email,
				password: password,
			});
			if (error) throw new Error(error.message);
			return data;
		},
	});
};

export const useSignUp = () => {
	return useMutation({
		mutationKey: ["entitySignUp"],
		mutationFn: async ({
			credentials,
			entityMetaData,
		}: {
			credentials: TCredential;
			entityMetaData: TEntitySignUpData;
		}) => {
			const { email, password } = credentials;
			const { data: SignUpResponse, error } = await supabaseClient.auth.signUp({
				email: email,
				password: password,
				options: { data: entityMetaData },
			});
			if (error) throw new Error();
			return SignUpResponse;
		},
	});
};

export const useSignOut = () => {
  const sessionStore = useSessionStore();
  return useMutation({
    mutationKey: ["entitysignOut"],
    mutationFn: async () => {
      const { error } = await supabaseClient.auth.signOut();
      if (error) return error;
      sessionStore.reset();
      queryClient.invalidateQueries();
    },
  });
};