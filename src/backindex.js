const functions = require('firebase-functions');
const express= require('express');
const cors = require('cors');
const uuid = require('uuid')

const stripe= require('stripe')('sk_test_51HOT8ADSHvomRkCEFXjg6SGqepGALdw2ddFHCIgXiLB5SvYgGod9TlRKSDUQEDzQp5vOkDclzTKVe02xwm9AgOaD00ACeykdso')
 // -api
 
 // -app config
 const app = express();
 
 // -middlewares
 app.use(cors());
 app.use(express.json());
 
//  // -api routes
//  app.get("/", (request, response) => response.status(200).send("hello world"));

 app.post("/payment" , (req , res) => {

  const{product , token} = req.body;
  console.log("product" , product)
  console.log("price" , product.price);
  const idempotentcyKey = uuid()

  return stripe.customers.create({
    email:token.email,
    source:token.id
    }).then(customer =>{
      stripe.charges.create({
          amount: product.price * 100,
          currency: 'INR',
          customer:customer.id,
          receipt_email: token.email,
          description:`purchase of ${product.name}`,
          shipping: {
            name : token.card.name,
            address: {
              country : token.card.address_country
            }
          }
      } , {idempotentcyKey})

  }).then(result => res.status(200).json(result))
    .catch(err => console.log(err))

 })

 app.post("/payments/create", async (request, response) => {
     const total = request.query.total;
     console.log("payment request receicved", total);
     paymentIntent = await stripe.paymentIntents.create({
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
      amount: 1099,
      currency: 'inr',
      payment_method_types: ['card'],
    })
     //created
     response.status(201).send({
         clientSecret: paymentIntent.client_secret,
     })
 });
 
 // -listen command
 exports.api = functions.https.onRequest(app);

//http://localhost:5001/fir-bebd8/us-central1/api