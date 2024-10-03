const express = require('express');
const employeesRouter = require('./routes/employeesRoute');
const userRouter = require('./routes/userRoute');
const app = express();
app.use(express.json());

app.use('/api/v1/emp/employees', employeesRouter);

app.use('/api/v1/user', userRouter)

module.exports = app;