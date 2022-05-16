const port = process.env.PORT || 5000;


app.get("/", async (req, res) => {
    res.send("Hello! This is Swipe Cleaning Corporation");
  });
  
  app.listen(port, () => {
    console.log(`Listening to the port: ${port}`);
  });