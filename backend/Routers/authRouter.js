const router = require("express").Router();
const passport = require("passport");
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Successfully logged in",
      user: req.user,
    });
  } else {
    res.status(403).json({
      error: true,
      message: "not authorised",
    });
  }
});
router.get("/login/failure", (req, res) => {
    res.status(401).json({
        error:true,
        message:"log in failure"
    })
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);
router.get("/google",passport.authenticate("google",["profile","email"]))
router.get("/logout",(req,res)=>{
    req.logOut();
  console.log("successfully logged out")
    res.redirect(process.env.CLIENT_URL)
})
module.exports = router