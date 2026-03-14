import mongoose from "mongoose";

async function connectToDatabase() {

    mongoose.connection.on("error", (err) => {
        console.error("Erro na conexão:", err);
    });

    mongoose.connection.once("open", () => {
        console.log("Conexão com o banco estabelecida!");
    });

    await mongoose.connect(
        process.env.DB_CONECTION_STRING
    );

    return mongoose.connection;
}

export default connectToDatabase;