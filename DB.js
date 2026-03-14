
      const mongoose = require("mongoose")

const connectDB = async () => {

    try {

        await mongoose.connect(process.env.MONGO_URI)

        console.log("DATABASE CONNECTED SUCCESSFULLY")

    } catch (error) {

        console.log("CAN NOT CONNECT TO THE DATABASE", error)

    }

}

module.exports = connectDB


// module.exports = {
      //   URL : 'mongodb://127.0.0.1:27017/ecommerceDB'
      // }
