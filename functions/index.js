const functions = require('firebase-functions');

const express= require('express');
const cors = require('cors');

const stripe= require('stripe')('sk_test_51HOT8ADSHvomRkCEFXjg6SGqepGALdw2ddFHCIgXiLB5SvYgGod9TlRKSDUQEDzQp5vOkDclzTKVe02xwm9AgOaD00ACeykdso')

 // -app config
 const app = express();
 
 // -middlewares
 app.use(cors({origin:true}));
 app.use(express.json());

 app.get('/', (req , res) => res.status(200).send('hello world'))

 app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log("payment request receicved", total);

   const paymentIntent = await stripe.paymentIntents.create({
     description: 'Software development services',
     shipping: {
       name: 'Jenny Rosen',
       address: {
         line1: '510 Townsend St',
         postal_code: '98140',
         city: 'San Francisco',
         state: 'CA',
         country: 'US',
       },
     },
     amount: total,
     currency: 'inr',
   })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});

 // -listen command
 exports.api = functions.https.onRequest(app);