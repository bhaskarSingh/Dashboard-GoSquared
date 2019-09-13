const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const mockData = [
  {
    title: "Total no of concurrent users",
    data: "70,000"
  },
  {
    title: "Office Temperature",
    data: "24 celsius"
  },
  {
    title: "when to water plants",
    data: "18/9/2019"
  },
  {
    title: "Outside Weather",
    data: "30 celsius"
  },
  {
    title: "No of dirnks in the fridge",
    data: "30"
  }
];

app.get("/data", (req, res) => {
  try {
    res.json(mockData);
  } catch (err) {
    res.status(400).send(err);
  }
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log("listening on port 3004"));
