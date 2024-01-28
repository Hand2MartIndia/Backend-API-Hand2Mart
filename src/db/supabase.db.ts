import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseUrl } from "../config/config";


export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
