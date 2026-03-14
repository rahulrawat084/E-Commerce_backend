   
   const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();   // 👈 added

const PORT = process.env.PORT || 9876;  // 👈 updated
const mongoose = require('mongoose');

const stateRoute = require('./admin/state.route.js');
const cityRoute = require('./admin/city.route.js');
const productcatgRoute = require("./admin/productcatg.route.js");
const productRoute = require("./product/product.route.js");
const venderRoute=require("./vender/vender.route.js");
const customerRoute=require('./customer/customer.route.js');
const billRoute = require("./admin/bills/bill.route.js");
const paymentdetailsRoute = require("./admin/bills/paymentdetails.route.js");
const PaymentRoute = require("./payment.js");   
const emailRoute = require("./emailmgt.js");
const emailactivationRoute=require("./emailactivation.js");      
const inventoryRoute = require("./product/inventory.route.js");
const saleRoute = require("./vender/sales.route.js");
const path = require("path");  

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/state',stateRoute);
app.use('/city',cityRoute);
app.use('/productcatg',productcatgRoute);
app.use("/product", productRoute);
app.use('/customer',customerRoute);
app.use("/payment",PaymentRoute);
app.use('/vender',venderRoute);
app.use('/bill',billRoute);
app.use('/paymentdetails',paymentdetailsRoute);
app.use("/email",emailRoute);
app.use("/emailactivation",emailactivationRoute);
app.use("/sales",saleRoute);
app.use("/inventory",inventoryRoute);
app.use("/productimages",express.static(path.join(__dirname,"product/productimages")));

// 👇 MongoDB Atlas Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("DATABASE IS CONNECTED");
})
.catch((err) => {
    console.log("CAN NOT CONNECT TO THE DATABASE", err);
});

app.listen(PORT,function (){
    console.log("SERVER IS RUNNING ON PORT="+PORT);
});








//       const express = require('express');
//       const app = express();
//       const bodyParser = require('body-parser');
//       const cors = require('cors');
//       const PORT = 9876;
//       const mongoose = require('mongoose');
//       const config = require('./DB.js');
//       const stateRoute = require('./admin/state.route.js');
//       const cityRoute = require('./admin/city.route.js');
//       const productcatgRoute = require("./admin/productcatg.route.js");
//       const productRoute = require("./product/product.route.js");
//       const venderRoute=require("./vender/vender.route.js");
//       const customerRoute=require('./customer/customer.route.js');
//       const billRoute = require("./admin/bills/bill.route.js");
//       const paymentdetailsRoute = require("./admin/bills/paymentdetails.route.js");
//       const PaymentRoute = require("./payment.js");   
//        const emailRoute = require("./emailmgt.js");
//        const emailactivationRoute=require("./emailactivation.js");      
//        const inventoryRoute = require("./product/inventory.route.js");
//        const saleRoute = require("./vender/sales.route.js");
//        const path = require("path");  

//        app.use(cors());
//        app.use(bodyParser.urlencoded({extended:true}));
//        app.use(bodyParser.json());
//        app.use('/state',stateRoute);
//        app.use('/city',cityRoute);
//        app.use('/productcatg',productcatgRoute);
//        app.use("/product", productRoute);
//        app.use('/customer',customerRoute);
//        app.use("/payment",PaymentRoute);
//        app.use('/vender',venderRoute);
//        app.use('/bill',billRoute);
//        app.use('/paymentdetails',paymentdetailsRoute);
//        app.use("email",emailRoute);
//        app.use("/emailactivation",emailactivationRoute);
//        app.use("/sales",saleRoute);
//        app.use("/inventory",inventoryRoute);
//        app.use("/productimages",express.static(path.join(__dirname,"product/productimages")));

//     mongoose.connect(config.URL, {
//     useNewUrlParser: true})   .then(() => {
//     console.log("DATABASE IS CONNECTED " + config.URL);
//     },
//    err => {
//     console.log("CAN NOT CONNECT TO THE DATABASE " + err);
//     });
//  app.listen(PORT,function (){
//     console.log("SERVER IS RUNNING ON PORT="+PORT);
//     });




//      ROZORPAY_SECRET="sXfbCn3B67Zq7KkVsnDeCXCl"
//   ROZORPAY_KEY_ID="rzp_test_8CxHBNuMQt1Qn8"
//   EMAIL_USER = rr9595371@gmail.com
//   EMAIL_PASS = dhyfabfervqrkqcu

//   CLUOD_NAME =dkvgvgzgs
//   CLUOD_API_KEY =516961598537289
//   CLUOD_API_SECRET = i4eimQvZ-HT0-EF2KMKFHegGdLM
//   MONGO_URI =mongodb+srv://Rahul:<Rahul%40raw1>@rahul.uto0c1g.mongodb.net/?appName=Rahul

