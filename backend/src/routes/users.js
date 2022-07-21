const express = require("express");
const debug = require("debug")("app:routes");

const sequelize = require("../db");
const User = require("../models/User");

const { check } = require("express-validator");

const router = express.Router();

const {
  getAllUsers,
  getUserById,
  deleteUsertById,
  createUser,
  updateUser,
} = require("../controllers/users");

router.get("*/users", getAllUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUsertById);
router.post(
  "/users",
  [
    check("first_name").not().isEmpty().trim(),
    check("last_name").not().isEmpty().trim(),
    check("email").not().normalizeEmail().isEmail().isEmpty().trim(),
    check("username").not().isEmpty().trim(),
    check("password").not().isEmpty().trim(),
    check("avatar").not().isEmpty().trim(),
    check("profile_pic").not().isEmpty().trim(),
  ],
  createUser
);
router.put(
  "/users/:id",
  [
    check("first_name").not().isEmpty().trim(),
    check("last_name").not().isEmpty().trim(),
    check("email").not().normalizeEmail().isEmail().isEmpty().trim(),
    check("username").not().isEmpty().trim(),
    check("password").not().isEmpty().trim(),
    check("avatar").not().isEmpty().trim(),
    check("profile_pic").not().isEmpty().trim(),
  ],
  updateUser
);

module.exports = router;
