import mongoose from "mongoose";

async function connectToDatabase() {

    await mongoose.connect(
        "mongodb://admin:admin123@ac-vhz46ll-shard-00-00.pdk6rx3.mongodb.net:27017,ac-vhz46ll-shard-00-01.pdk6rx3.mongodb.net:27017,ac-vhz46ll-shard-00-02.pdk6rx3.mongodb.net:27017/livraria?ssl=true&replicaSet=atlas-6fc313-shard-0&authSource=admin"
    );

    mongoose.connection.on("error", err => {
        console.log("Erro Mongo:", err);
    });

    mongoose.connection.once("open", () => {
        console.log("Mongo conectado");
    });

    return mongoose.connection;
}

export default connectToDatabase;