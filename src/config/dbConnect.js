import mongoose from "mongoose";

async function connectToDatabase() {
    /* mongoose.connect("mongodb+srv://admin:admin@cluster0.pdk6rx3.mongodb.net/livraria")
        .then(() => console.log("Conectado no Mongo"))
        .catch(err => console.log(err)); */

    await mongoose.connect(
        "mongodb+srv://admin:admin123@cluster0.pdk6rx3.mongodb.net/?appName=Cluster0"
    );

    return mongoose.connection;
}

export default connectToDatabase;