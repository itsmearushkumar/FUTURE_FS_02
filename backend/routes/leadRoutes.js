const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead"); // ✅ IMPORT MODEL

const {
  createLead,
  getLeads,
  updateLead,
} = require("../controllers/leadController");

// CREATE lead
router.post("/", createLead);

// GET all leads
router.get("/", getLeads);

// UPDATE lead
router.put("/:id", updateLead);

// DELETE lead
router.delete("/:id", async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ message: "Lead deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
});

module.exports = router;
