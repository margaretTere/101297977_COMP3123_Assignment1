const mongoose = require('mongoose');
const app = require('./app');


mongoose.connect("mongodb://127.0.0.1:27017/fullStack")
  .then(() => console.log('Connected to Mongo DB'))
  .catch(err => console.log(err.message));
  
const port =  8000;

app.listen(port, () => {

    console.log(`Assignment is running on port ${port}....`);
});


