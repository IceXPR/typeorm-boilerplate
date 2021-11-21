import { connect } from "net";
import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import { User } from "./entity/User";
import express = require('express');

const admin = express()
admin.use(express.json());

const app = express()
app.use(express.json());
app.use('/admin', admin) 

const port = 3000

createConnection().then(async connection => {

  console.log("DB Connected...");

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/api/v1.0/users', async (req, res) => {
    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);
    res.json(users)
  })

  app.post('/api/v1.0/users/', async (req, res) => {
    try {
      console.log(`payload received: ${JSON.stringify(req.body)}`)
      let userpayload = req.body;
      const user = new User();
      user.firstName = userpayload.firstName;
      user.lastName = userpayload.lastName;
      user.age = userpayload.age;
      await connection.manager.save(user);
      console.log("Saved a new user with id: " + user.id);
      res.sendStatus(200)
    }
    catch(err) {
      res.status(400).send('Invalid payload')
    };
  })

  admin.get('/', function (req, res) {
    console.log(admin.mountpath) // /admin
    res.send('Admin Homepage')
  })

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    })

}).catch(error => console.log(error));
