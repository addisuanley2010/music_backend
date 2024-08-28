const { Router } = require("express");
const router = Router();
const {
  createMusic,
  getAllMusic,
  deleteMusic,
  getSingleMusic,
  editMusic,
  getNumber,
  filterMusic,
} = require("../controllers/musicController");
  
router.post("/create", createMusic);
router.get("/get", getAllMusic);
router.get("/get/:id", getSingleMusic);
router.get("/getStatistics", getNumber);
router.delete("/delete/:id", deleteMusic);
router.put("/update/:id", editMusic);
router.get('/filter', filterMusic);

module.exports = router;
