const router = require("express").Router();
const { indexControl } = require("../../controllers/index_controller/index");

router.get("/", indexControl);

module.exports = router;