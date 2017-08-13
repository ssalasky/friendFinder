var path = require("path");

module.exports = function(app) {

  //displays tables and who has reserved them
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

    // Basic route that sends the user first to the home Page
    app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};