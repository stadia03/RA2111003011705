const express = require('express');
const companyRoutes = require('./routes/companyRoutes');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(7000, () => {
  console.log('Listening on port 7000');
});

app.use('/', companyRoutes);
