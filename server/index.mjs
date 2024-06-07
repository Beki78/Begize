import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Branch from "./models/queue.models.mjs";
import cors from "cors"
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors())

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("DB is connected");
    app.listen(process.env.PORT, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

app.post("/", async (req, res) => {
  try {
    const { branch, firstName, lastName, phoneNo } = req.body;
    // if (!firstName || lastName) {
    //   return res.status(400).json({ message: "Name Can't Be Empty" });
    // }
    // if (!branch) {
    //   return res.status(400).json({ message: "Branch Not Found" });
    // }
    const newQueue = new Branch({ firstName, lastName, phoneNo, branch });
    await newQueue.save();
    res.status(200).json({ message: "Queue added" });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.get("/", async (req, res) => {
  try {
    const branch = await Branch.find().sort({ createdAt: -1 });
    res.status(200).json(branch);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const branch = await Branch.findById(id);
    res.status(200).json({ message: "Queue has Deleted" });
  } catch (error) {
    res.status(500).json(error.message);
  }
});


app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const branch = await Branch.findByIdAndDelete(id);
    if (!branch) {
      return res.status(400).json({ message: "Id Not Found" });
    }
    res.status(200).json({ message: "Queue Deleted" });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.delete("/", async (req, res) => {
  try {
    const branch = await Branch.deleteMany();
    res.status(200).json({ message: "All Queue Deleted" });
  } catch (error) {
    res.status(500).json(error.message);
  }
});
