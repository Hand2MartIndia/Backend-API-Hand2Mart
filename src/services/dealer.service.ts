import Dealer from "../models/SequalizeModels/dealer.model";

export const getAllDealers = async () => {
  try {
    const dealers = await Dealer.findAll();
    return dealers;
  } catch (error) {
    console.error('Error getting dealers:', error);
    throw error;
  }
};

export const getDealerById = async (id: number) => {
  try {
    const dealer = await Dealer.findByPk(id);
    return dealer;
  } catch (error) {
    console.error(`Error getting dealer with id ${id}:`, error);
    throw error;
  }
};
