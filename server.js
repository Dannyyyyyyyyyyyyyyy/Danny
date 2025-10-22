const express = require('express');
const path = require('path');
const app = express();

// Serve all files in this directory as static
app.use(express.static(path.join(__dirname)));

// Listen on the port that Elastic Beanstalk sets or default 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
