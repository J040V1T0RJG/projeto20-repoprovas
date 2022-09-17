import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = Number(process.env.PORT) || 4000;

app.listen(PORT, () => {
    console.log(`Server is up on port: ${PORT}`)
});