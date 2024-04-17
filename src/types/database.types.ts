export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export type Database = {
	public: {
		Tables: {
			institutions: {
				Row: {
					id: number;
					institution_name: string;
					municipality_city: string;
					province: string;
					region: string;
				};
				Insert: {
					id?: number;
					institution_name: string;
					municipality_city: string;
					province: string;
					region: string;
				};
				Update: {
					id?: number;
					institution_name?: string;
					municipality_city?: string;
					province?: string;
					region?: string;
				};
				Relationships: [];
			};
			profiles: {
				Row: {
					created_at: string | null;
					email: string;
					entity_name: string;
					fb_page: string;
					id: string;
					institution_id: number | null;
					realtalk_handle: string;
				};
				Insert: {
					created_at?: string | null;
					email: string;
					entity_name: string;
					fb_page: string;
					id: string;
					institution_id?: number | null;
					realtalk_handle: string;
				};
				Update: {
					created_at?: string | null;
					email?: string;
					entity_name?: string;
					fb_page?: string;
					id?: string;
					institution_id?: number | null;
					realtalk_handle?: string;
				};
				Relationships: [
					{
						foreignKeyName: "public_profiles_id_fkey";
						columns: ["id"];
						isOneToOne: true;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "public_profiles_school_id_fkey";
						columns: ["institution_id"];
						isOneToOne: false;
						referencedRelation: "institutions";
						referencedColumns: ["id"];
					},
				];
			};
			realtalks: {
				Row: {
					created_at: string;
					deleted: boolean;
					id: number;
					message: string;
					parent_realtalk_id: number | null;
					sent_for: string;
					type: Database["public"]["Enums"]["realtalk_type"];
				};
				Insert: {
					created_at?: string;
					deleted?: boolean;
					id?: never;
					message: string;
					parent_realtalk_id?: number | null;
					sent_for: string;
					type?: Database["public"]["Enums"]["realtalk_type"];
				};
				Update: {
					created_at?: string;
					deleted?: boolean;
					id?: never;
					message?: string;
					parent_realtalk_id?: number | null;
					sent_for?: string;
					type?: Database["public"]["Enums"]["realtalk_type"];
				};
				Relationships: [
					{
						foreignKeyName: "public_realtalks_sent_for_fkey";
						columns: ["sent_for"];
						isOneToOne: false;
						referencedRelation: "profiles";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "realtalks_parent_realtalk_id_fkey";
						columns: ["parent_realtalk_id"];
						isOneToOne: false;
						referencedRelation: "realtalks";
						referencedColumns: ["id"];
					},
				];
			};
			reports: {
				Row: {
					id: number;
					realtalk_id: number;
				};
				Insert: {
					id?: never;
					realtalk_id: number;
				};
				Update: {
					id?: never;
					realtalk_id?: number;
				};
				Relationships: [
					{
						foreignKeyName: "reports_realtalk_id_fkey";
						columns: ["realtalk_id"];
						isOneToOne: false;
						referencedRelation: "realtalks";
						referencedColumns: ["id"];
					},
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			realtalk_type: "ANONYMOUS" | "CONFESSION" | "RANT" | "REPLY";
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
	PublicTableNameOrOptions extends
		| keyof (PublicSchema["Tables"] & PublicSchema["Views"])
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
				Database[PublicTableNameOrOptions["schema"]]["Views"])
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
			Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
			Row: infer R;
		}
		? R
		: never
	: PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
				PublicSchema["Views"])
		? (PublicSchema["Tables"] &
				PublicSchema["Views"])[PublicTableNameOrOptions] extends {
				Row: infer R;
			}
			? R
			: never
		: never;

export type TablesInsert<
	PublicTableNameOrOptions extends
		| keyof PublicSchema["Tables"]
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Insert: infer I;
		}
		? I
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
		? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
				Insert: infer I;
			}
			? I
			: never
		: never;

export type TablesUpdate<
	PublicTableNameOrOptions extends
		| keyof PublicSchema["Tables"]
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Update: infer U;
		}
		? U
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
		? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
				Update: infer U;
			}
			? U
			: never
		: never;

export type Enums<
	PublicEnumNameOrOptions extends
		| keyof PublicSchema["Enums"]
		| { schema: keyof Database },
	EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
		: never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
	? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
	: PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
		? PublicSchema["Enums"][PublicEnumNameOrOptions]
		: never;
