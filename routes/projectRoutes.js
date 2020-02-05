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

  app.get("/api/projects/:projectId", (req, res, next) => {
    const id = req.params.projectId;
    Project.findById(id)
      .exec()
      .then(doc => {
        if (doc) {
          res.status(200).json(doc);
        } else {
          res
            .status(404)
            .json({ message: "No valid entry found for provided ID" });
        }
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
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
