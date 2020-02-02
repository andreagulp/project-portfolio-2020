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
};
