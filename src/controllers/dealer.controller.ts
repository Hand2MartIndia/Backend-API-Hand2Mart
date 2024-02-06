import { Request, Response } from 'express';
import * as DealerService from '../services/dealer.service';

export const getAllDealers = async (req: Request, res: Response) => {
  try {
    const dealers = await DealerService.getAllDealers();
    res.json(dealers);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getDealerById = async (req: Request, res: Response) => {
  const dealerId = parseInt(req.params.id, 10);

  if (isNaN(dealerId)) {
    res.status(400).json({ error: 'Invalid dealer ID' });
    return;
  }

  try {
    const dealer = await DealerService.getDealerById(dealerId);

    if (!dealer) {
      res.status(404).json({ error: 'Dealer not found' });
      return;
    }

    res.json(dealer);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
