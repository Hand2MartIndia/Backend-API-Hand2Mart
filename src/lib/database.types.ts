export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  backend_schema: {
    Tables: {
      dealer_05655: {
        Row: {
          address: string | null
          best_selling_bike_name: string | null
          best_selling_car_name: string | null
          cover_photo: string | null
          created_at: string
          dealer_id: string
          dealer_liscence: string
          "dealer-sales_till_now": number | null
          "description ": string
          email: string
          id: number
          intro_video_link: string | null
          name: string
          password: string
          phone_number: number
          profile_picture: string
          "rating ": number | null
        }
        Insert: {
          address?: string | null
          best_selling_bike_name?: string | null
          best_selling_car_name?: string | null
          cover_photo?: string | null
          created_at?: string
          dealer_id?: string
          dealer_liscence: string
          "dealer-sales_till_now"?: number | null
          "description "?: string
          email: string
          id?: number
          intro_video_link?: string | null
          name?: string
          password: string
          phone_number: number
          profile_picture: string
          "rating "?: number | null
        }
        Update: {
          address?: string | null
          best_selling_bike_name?: string | null
          best_selling_car_name?: string | null
          cover_photo?: string | null
          created_at?: string
          dealer_id?: string
          dealer_liscence?: string
          "dealer-sales_till_now"?: number | null
          "description "?: string
          email?: string
          id?: number
          intro_video_link?: string | null
          name?: string
          password?: string
          phone_number?: number
          profile_picture?: string
          "rating "?: number | null
        }
        Relationships: []
      }
      used_bikes_05655: {
        Row: {
          bike_condition_score: number | null
          bike_description: bike_description
          bike_id: string
          bike_name: string
          bike_photo_link: string
          bike_price: number
          bike_type: string | null
          condition: Json
          created_at: string
          id: number
          model_number: string
          number_plate: string
          owner_type: number | null
          registration_number: string
        }
        Insert: {
          bike_condition_score?: number | null
          bike_description: Json
          bike_id?: string
          bike_name?: string
          bike_photo_link: string
          bike_price: number
          bike_type?: string | null
          condition: Json
          created_at?: string
          id?: number
          model_number: string
          number_plate: string
          owner_type?: number | null
          registration_number: string
        }
        Update: {
          bike_condition_score?: number | null
          bike_description?: Json
          bike_id?: string
          bike_name?: string
          bike_photo_link?: string
          bike_price?: number
          bike_type?: string | null
          condition?: Json
          created_at?: string
          id?: number
          model_number?: string
          number_plate?: string
          owner_type?: number | null
          registration_number?: string
        }
        Relationships: []
      }
      used_cars_05655: {
        Row: {
          car_condition_score: number | null
          car_description: Json
          car_id: string
          car_name: string
          car_photo_link: string
          car_price: number
          car_type: string | null
          condition: Json
          created_at: string
          id: number
          model_number: string
          number_plate: string
          owner_type: number | null
          registration_number: string
        }
        Insert: {
          car_condition_score?: number | null
          car_description: Json
          car_id?: string
          car_name?: string
          car_photo_link: string
          car_price: number
          car_type?: string | null
          condition: Json
          created_at?: string
          id?: number
          model_number: string
          number_plate: string
          owner_type?: number | null
          registration_number: string
        }
        Update: {
          car_condition_score?: number | null
          car_description?: Json
          car_id?: string
          car_name?: string
          car_photo_link?: string
          car_price?: number
          car_type?: string | null
          condition?: Json
          created_at?: string
          id?: number
          model_number?: string
          number_plate?: string
          owner_type?: number | null
          registration_number?: string
        }
        Relationships: []
      }
      users_05655: {
        Row: {
          address: string
          bikes_in_cart: string[] | null
          cars_in_cart: string[] | null
          cover_photo: string
          created_at: string
          email: string
          name: string
          password: string
          phone_number: number
          profile_photo: string
          "rating ": number | null
          user_id: string
        }
        Insert: {
          address?: string
          bikes_in_cart?: string[] | null
          cars_in_cart?: string[] | null
          cover_photo: string
          created_at?: string
          email: string
          name?: string
          password: string
          phone_number: number
          profile_photo: string
          "rating "?: number | null
          user_id?: string
        }
        Update: {
          address?: string
          bikes_in_cart?: string[] | null
          cars_in_cart?: string[] | null
          cover_photo?: string
          created_at?: string
          email?: string
          name?: string
          password?: string
          phone_number?: number
          profile_photo?: string
          "rating "?: number | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["backend_schema"]["Tables"] & Database["backend_schema"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["backend_schema"]["Tables"] &
      Database["backend_schema"]["Views"])
  ? (Database["backend_schema"]["Tables"] &
      Database["backend_schema"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["backend_schema"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["backend_schema"]["Tables"]
  ? Database["backend_schema"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["backend_schema"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["backend_schema"]["Tables"]
  ? Database["backend_schema"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["backend_schema"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["backend_schema"]["Enums"]
  ? Database["backend_schema"]["Enums"][PublicEnumNameOrOptions]
  : never
