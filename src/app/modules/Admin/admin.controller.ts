import { Request, Response } from "express";
import { AdminServices } from "./admin.service";

const getAllFromDB = async (req: Request, res: Response) => {
  try {
    const result = await AdminServices.getAllFromDB(req.query);

    res.status(200).json({
      success: true,
      message: "Admin data fetched",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Admin data fetch fail",
      error: error,
    });
  }
};

export const AdminController = {
  getAllFromDB,
};
