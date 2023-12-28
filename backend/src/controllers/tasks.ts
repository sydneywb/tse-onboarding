import { RequestHandler } from "express";
// import { Query } from "mongoose";
// import { Model, Query } from "mongoose";
import TaskModel from "src/models/task";

export const getAllTasks: RequestHandler = async (req, res, next) => {
  try {
    const query = TaskModel.find();

    const sorted = await query.sort({ dateCreated: "asc" });
    res.status(200).json(sorted);
  } catch (error) {
    next(error);
  }
};
