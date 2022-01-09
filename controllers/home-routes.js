const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

router.get("/", (req, res) => {
  // console-log the session variables
  console.log(req.session);

  Post.findAll({
    attributes: ["id", "post_url", "title", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      // pass a single post object into the homepage template
      //   console.log(dbPostData[0]);
      //   res.render("homepage", dbPostData[0]);
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      //   res.render("homepage", dbPostData[0].get({ plain: true }));
      res.render("homepage", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Login page route
router.get("/login", (req, res) => {
  // check for a session and redirect to the homepage if one exists
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
