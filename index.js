const express = require('express')
const app = express()
const dotenv = require('dotenv')
const routes = require("./src/routes");
const { DBConnect } = require("./src/config/mongo.init");

dotenv.config()

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type');
    res.header('Content-Type', 'application/json');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

//Initializing the database connections.
DBConnect();

// Import and use routes
routes.map((route) =>
    app.use(
        "/api/v1" + route.path,
        route.router(express.Router())
    )
);



app.listen(process.env.PORT, () => console.log(`App is listening port ${process.env.PORT}`))