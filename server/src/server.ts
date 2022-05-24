import express from "express";

const app = express();

app.use(express.json());

app.post("/feedbacks", (req, res) => {
  console.log(req.body);

  res.status(201).send();
});

app.listen(3333, () => {
  console.log("Server started on port 3333!");
});
