const express = require('express');
const Tour = require('../models/Tour');

const router = express.Router();

// Get all tours
router.get('/', async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new tour
router.post('/', async (req, res) => {
  const { title, description, price, location, date } = req.body;

  const newTour = new Tour({
    title,
    description,
    price,
    location,
    date
  });

  try {
    const savedTour = await newTour.save();
    res.status(201).json(savedTour);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
