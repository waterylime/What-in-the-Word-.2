var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    console.log(req.user.id);
    res.json(req.user);
  });

  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/dashboard", function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      db.Word.findAll({
        where: {
          UserId: req.user.id
        }
      })
        .then(function(data) {
          res.json(data);
        })
        .catch(function(err) {
          res.status(401).json(err);
        });
    }
  });

  app.post("/api/dashboard", function(req, res) {
    if (req.user) {
      db.Word.create({
        name: req.body.name,
        language: req.body.language,
        description: req.body.description,
        image: req.body.image,
        UserId: req.body.UserId
      })
        .then(function(response) {
          res.json(response);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  });

  app.delete("/api/dashboard/:id", function(req, res) {
    if (req.user) {
      db.Word.destroy({
        where: { id: req.params.id }
      }).then(function(response) {
        res.json(response);
      });
    }
  });
};
