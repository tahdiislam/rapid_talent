const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
const Jobs = client.db("rapid_talent").collection("jobs_collection");

app.get("/jobs", async (req, res) => {
  const query = {};
  const cursor = Jobs.find(query);
  const result = await cursor.toArray();
  res.send({ result });
});

async function run() {
  try {

    // get all jobs
    

    // get single job
    app.get("/jobs/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await Jobs.findOne(query);
      res.send(result);
    });

    // add jobs
    app.post("/jobs", async (req, res) => {
      const job = req.body;
      const result = await Jobs.insertOne(job);
      res.send({ result });
    });

    // delete jobs
    // app.delete("/jobs", async (req, res) => {
    //   const query = {};
    //   const result = await Jobs.deleteMany({});
    //   res.send({ result });
    // });
  } finally {
  }
}
run().catch(console.log);

app.listen(port, () => {
  console.log(`Rapid talent server is running on port ${port}`);
});
