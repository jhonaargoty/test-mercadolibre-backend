const express = require("express");
const router = express.Router();
const allDataMLibre = require("../controllers/allDataMLibre.controller");
const itemMLibre = require("../controllers/itemDataMLibre.controller");

router.get("/api/items", allDataMLibre.allData);
router.get("/api/items/:id", itemMLibre.itemMLibre);

module.exports = router;
