const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // Replace 'path/to/your/file.json' with the actual path to your JSON file
  const filePath = "./test.json";

  // Read the JSON file
  const jsonData = require(filePath);

  // Set the response header to indicate JSON content
  res.setHeader("Content-Type", "application/json");

  // Send the JSON data as the response
  res.send(JSON.stringify(jsonData));
});

app.listen(80, () => {
  console.log("Server is running on port 80");
});
