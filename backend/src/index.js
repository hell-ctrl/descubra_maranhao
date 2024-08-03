const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');

require('dotenv').config();

const swaggerConfig = require("../swaggerConfig.json");

const authRouter = require("./routers/authRouter.js");
const userRouters = require("./routers/userRouters.js");
const attractionRouters = require("./routers/attractionRouters.js")

const limiter = require("./middlewares/requestLimit.js");
const verifyFields = require("./middlewares/verifyFields.js");

require("./database/index.js");

const app = express();

app.use(cors())
app.use(express.json());
app.use(limiter);
app.use(verifyFields);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use("/auth", authRouter);
app.use("/user", userRouters);
app.use("/attraction", attractionRouters);

app.listen(process.env.PORT || 3000, () => 
console.log("server started on port 3000"));
