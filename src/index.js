const express = require('express');
const {ServerConfig, Connect} = require("./config");
const apiRoutes = require("./routes/index");



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/api", apiRoutes);

app.listen(4000, async() => {
    console.log(`Server started at PORT: 4000`);
    await Connect();
    console.log("MongoDB connected");
});