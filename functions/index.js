const functions = require('firebase-functions');
const express = require('express');
const cors = require("cors");
const stripeKey = functions.config().stripe.key
const stripe = require("stripe")(stripeKey);
// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //   functions.logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });

// // API
// // App config
// const app = express();

// // Middlewares
// // app.use( cors({origin:true}) );
// app.use(express.json());

// // app.use((req, res, next) =>{
// //   res.header("Access-Control-Allow-Origin", "*");
// //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// //   next();
// // });
// // API  routes
// app.get("/", (request, response) => response.status(200).send("hello world"))
// app.get("/quazi", (request, response) => response.status(200).send("Wusup Quazi"))

// app.post("/payments/create", async (request, response) => {
//     const total = request.query.total;
  
//     console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: total, // subunits of the currency
//       currency: "usd",
//     });
  
//     // OK - Created
//     response.status(201).send({
//       clientSecret: paymentIntent.client_secret,
//     });
//     // response.setHeader("Access-Control-Allow-Origin", "*")
//   });
// // Listen command
// exports.api = functions.https.onRequest(app);

// // Example Endpoint
// // http://localhost:4000
// // Remove rewrites in firebase.json
// // "rewrites": [
// //   {
// //     "source": "**",
// //     "destination": "/index.html"
// //   }
// // ]
// // },

// API

// - App config
const app = express();

// - Middlewares
// app.use();
app.use(express.json());

const options = {
  origin: true,
  methods: ["POST"],
  credentials: true,
  maxAge: 3600
}
// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", cors(options), async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  // response.header("Access-Control-Allow-Origin", "*")

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api
