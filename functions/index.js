const functions = require("firebase-functions");
const stripeKey = functions.config().stripe.secret;
const stripe = require("stripe")(stripeKey);

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => res.status(200).send({ message: "hello" }));

app.post("/payments/create", async (request, response) => {
    try {
        const total = request.query.total;
        console.log("Payment Request Amount >>> ", total);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: "usd",
            // Verify your integration in this guide by including this parameter
            metadata: { integration_check: "accept_a_payment" },
        });
        // console.log(paymentIntent);
        // OK - Created
        response.status(201).send({
        clientSecret: paymentIntent.client_secret,
        });
    } catch (e) {
        // BAD REQUEST
        console.log(e.message);
        response.status(400).send({
        message: e.message,
        });
    }
});

// app.listen(5000, () => console.log(`Node server listening at http://localhost:5000`));
exports.api = functions.https.onRequest(app);


// exports.api = functions.https.onRequest(async function(request, response) {
//     try {
//         const total = request.query.total;
//         console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: total,
//             currency: "usd",
//             // Verify your integration in this guide by including this parameter
//             metadata: { integration_check: "accept_a_payment" },
//         });
//         console.log(paymentIntent);
//         // OK - Created
//         response.status(201).send({
//         clientSecret: paymentIntent.client_secret,
//         });
//     } catch (e) {
//         // BAD REQUEST
//         console.log(e.message);
//         response.status(400).send({
//         message: e.message,
//         });
//     }
// })