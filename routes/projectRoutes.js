const mongoose = require("mongoose");

const Project = mongoose.model("projects");

module.exports = app => {
  app.post("/api/newProject", (req, res) => {
    const project = new Project({
      ...req.body,
      creationDate: Date.now()
    });
    project.save();
    res.send("post req done");
  });

  app.get("/api/projects", (req, res, next) => {
    Project.find()
      .exec()
      .then(docs => {
        res.status(200).json(docs);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
};
