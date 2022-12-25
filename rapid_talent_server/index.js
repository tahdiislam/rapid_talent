const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// default route
app.get("/", (req, res) => {
  res.send(`Rapid talent server is running or port ${port}`);
});

// connect to db

const uri = `mongodb+srv://${process.env.DB_Username}:${process.env.DB_Password}@cluster0.yjbl96t.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
    const Jobs = client.db("rapid_talent").collection("jobs_collection")

    // add jobs
    app.post("/jobs", (req, res) => {
        
    })
}

app.listen(port, () => {
  console.log(`Rapid talent server is running on port ${port}`);
});