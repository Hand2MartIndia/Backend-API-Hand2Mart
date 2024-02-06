import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../config/sequalize.config';
import { syncWithSupabase } from '../../utils/syncSupabase';
import { supabaseClient } from './../../db/supabase.db';

class Dealer extends Model {}

Dealer.init(
  {
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    best_selling_bike_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    best_selling_car_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cover_photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dealer_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dealer_license: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dealer_sales_till_now: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    intro_video_link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    profile_picture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'dealer_05655',
  }
);

// Sync with Supabase for the 'dealer_05655' table
syncWithSupabase({
  model: Dealer,
  tableName: 'dealer_05655',
  supabaseClient: supabaseClient,
});

export default Dealer;
