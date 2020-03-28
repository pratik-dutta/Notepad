const express = require("express");

const router = express.Router();
const passport = require("passport");

const noteController = require("../controller/note_controller");
const userController = require("../controller/user_controller");

// a.	/login
// b.	/register
// c.	/newNote
// d.	/getNotes
// e.	/editNote
// f.	/deleteNote

// router.get("/", (req, res) => {
//     res.status(200).json({
//         message: "App is running"
//     })
// });


router.post("/newNote",passport.authenticate('jwt', {session:false}), noteController.createNote);

router.get("/getNote",passport.authenticate('jwt', {session:false}), noteController.getNote);

router.use("/editNote", require("./editnote"));

router.use("/deleteNote", require("./deletenote"));

router.post("/register", userController.register);
router.get("/login", userController.login);



module.exports = router;