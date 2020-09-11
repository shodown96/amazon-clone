const functions = require('firebase-functions');
const express = require('express');
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HPyn0FyNz3IOs9CCPeTUMYXp1HJOP0ue7TUKKmVbaRcSKpeu0tNZVG2n15LOqRFiyR2cMmW1WeIEXhspenA0S0f00hXrhg37I");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// API
// App config
const app = express();

// Middlewares
app.use( cors({origin:true}) );
app.use(express.json());

// API  routes
app.get("/", (request, response) => response.status(200).send("hello world"))
app.get("/quazi", (request, response) => response.status(200).send("Wusup Quazi"))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });
// Listen command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://localhost:4000
// Remove rewrites in firebase.json
// "rewrites": [
//   {
//     "source": "**",
//     "destination": "/index.html"
//   }
// ]
// },