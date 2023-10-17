const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app = express();

// 3FPU59jv0wsPkiag
// mahfujurrahman06627
// middleware
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

const uri =
  'mongodb+srv://mahfujurrahman06627:3FPU59jv0wsPkiag@cluster0.naavgtm.mongodb.net/?retryWrites=true&w=majority';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );

    const coffeesCollection = client.db('coffeesDB').collection('coffees');

    app.post('/coffees', async (req, res) => {
      const coffee = req.body;
      console.log(coffee);
      const result = await coffeesCollection.insertOne(coffee);
      console.log(result);
      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Crud is running...');
});

app.listen(port, () => {
  console.log(`Simple Crud is Running on port ${port}`);
});
