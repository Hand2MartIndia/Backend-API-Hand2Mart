import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseUrl } from "../config/config";


export const supabaseClient: SupabaseClient = createClient(supabaseUrl, supabaseKey);
