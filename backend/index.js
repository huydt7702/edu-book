const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const db = require("./config/db");

// Connect to database
db.connect();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//Routes
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);

app.listen(8000, () => {
    console.log(`Server is running on port ${8000}`);
});
