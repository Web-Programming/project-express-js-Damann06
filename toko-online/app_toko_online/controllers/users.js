const User = require('../models/users');

// POST: Create new User (Registration)
exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET: Get all Users (Admin only - asumption for now)
exports.getAllUsers = async (req, res) => {
  try {
    // TODO: cek apakah req.user.isAdmin (middleware auth)
    const users = await User.find();
    res.status(208).json(users);  // Status 208 as per instruksi
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET: Get User by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(208).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT: Update User by ID
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(208).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE: Delete User by ID
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(208).json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};     