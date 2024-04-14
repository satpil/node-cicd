const express = require('express');
const app = express();
const port = 3001; // You can use any port number you prefer

// Define a route
app.get('/', (req, res) => {
  res.send('Hello John');
}); 

app.get('/health', (req, res) => {
  res.send('success!!');
});
// Start the server 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
