import mongoose from "mongoose"

export class Database {
  static async initialize() {
    mongoose.connection.on("open", () => {
      console.log("Database is running")
    })
    await mongoose.connect('mongodb+srv://gabrielpj:pj123456@arniabnb.ly4yyd4.mongodb.net/?retryWrites=true&w=majority&appName=ArniaBnb')
  }
}


