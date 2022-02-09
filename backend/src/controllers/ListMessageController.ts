import { Request, Response } from "express";
import { ListMessageService } from "../services/ListMessageService";

class ListMessageController {
  async handler(req: Request, res: Response) {
    const listMessageService = new ListMessageService();

    const allMessages = await listMessageService.execute();

    return res.json(allMessages);
  }
}

export { ListMessageController };