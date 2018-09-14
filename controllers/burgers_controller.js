var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res)
{
  burger.all(function (data)
  {
    var burgerObj = {
      burger: data
    };
    // console.log(burgerObj);
    res.render("index", burgerObj);
  });
});

router.post("/api/burgers", function (req, res)
{
  console.log(req.body);
  burger.create(["burger_name"], [
      req.body.name
    ], function (result)
    {
      console.log(result);
      res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res)
{
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function (result)
  {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function (req, res)
{
  var condition = "id = " + req.params.id;

  burger.delete(condition, function (result)
  {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }                                                                           
  });
});

// Export routes for server.js to use.
module.exports = router;


/* app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }

      res.render("index", { burgers: data });
    });
  });

  // Show the user the individual quote and the form to update the quote.
  app.get("/:id", function(req, res) {
    connection.query("SELECT * FROM quotes where id = ?", [req.params.id], function(err, data) {
      if (err) {
        return res.status(500).end();
      }

      console.log(data);
      res.render("index", data[0]);
    });
  });

  app.post("/api/burgers", function(req, res) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(
      err,
      result
    ) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }

      // Send back the ID of the new quote
      res.json({ id: result.id });
    });
  });

  app.delete("/api/burgers/:id", function(req, res) {
    connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
      else if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    });
  });

  // Update a burger by its id and then redirect to the root route.
  app.put("/api/burgers/:id", function(req, res) {
    connection.query(
      "UPDATE burgers SET devoured = ? WHERE id = ?",
      [req.body.author, req.params.id],
      function(err, result) {
        if (err) {
          return res.status(500).end();
        }
        else if (result.changedRows === 0) {
          return res.status(404).end();
        }
        res.status(200).end();

      }
    );
  }); */
  /* app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }

      res.render("index", { burgers: data });
    });
  });

  // Show the user the individual quote and the form to update the quote.
  app.get("/:id", function(req, res) {
    connection.query("SELECT * FROM quotes where id = ?", [req.params.id], function(err, data) {
      if (err) {
        return res.status(500).end();
      }

      console.log(data);
      res.render("index", data[0]);
    });
  });

  app.post("/api/burgers", function(req, res) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(
      err,
      result
    ) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }

      // Send back the ID of the new quote
      res.json({ id: result.id });
    });
  });

  app.delete("/api/burgers/:id", function(req, res) {
    connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
      else if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    });
  });

  // Update a burger by its id and then redirect to the root route.
  app.put("/api/burgers/:id", function(req, res) {
    connection.query(
      "UPDATE burgers SET devoured = ? WHERE id = ?",
      [req.body.author, req.params.id],
      function(err, result) {
        if (err) {
          return res.status(500).end();
        }
        else if (result.changedRows === 0) {
          return res.status(404).end();
        }
        res.status(200).end();

      }
    );
  }); */