const express =require('express');
const cors = require('cors')

const app = express();
const port = 8000;

const { sequelize } = require('./src/models/index');

sequelize.sync({alter: false}).then().catch(err=> console.log(err));

const routesV1 = require('./src/routes/routes.v1');


global.__basedir = __dirname;

app.use(express.json())
app.use(cors())

app.get('/', async (req, res) => {
    res.send('Hello World!')
});

routesV1(app, '/api');
app.listen(port, ()=>{
    console.log(`listening to server on port ${port}`)
})