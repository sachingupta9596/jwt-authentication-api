const express = require("express");

const app = express();

app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use("/auth", require("./routes/private"));

app.get("/", (req, res) => {
  res.send("working correctly");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Listening on port 5000");
});
