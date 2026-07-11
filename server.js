require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3000;

// =======================
// Middleware
// =======================

app.use(express.json());
app.use(express.static(__dirname));

// =======================
// MongoDB Connection
// =======================

console.log("DNS Servers:", dns.getServers());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });
// =======================
// MongoDB Schema
// =======================

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);
// =======================
// Nodemailer Setup
// =======================

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
// =======================
// Home Route
// =======================

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// =======================
// Profile API
// =======================

app.get("/api/profile", (req, res) => {
  res.json({
    name: "Harsh Shukla",
    college: "BSACET",
    year: "3rd Year",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  });
});

// =======================
// Contact API
// =======================

app.post("/api/contact", async (req, res) => {
  try {
    console.log("========== NEW CONTACT ==========");
    console.log(req.body);

    const { name, email, message } = req.body;

    // Save to MongoDB
    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    // Send Email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "📩 New Portfolio Contact",
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    res.json({
      success: true,
      message: "✅ Message Sent Successfully!",
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      success: false,
      message: "❌ Something went wrong!",
    });

  }
});

// =======================
// Server
// =======================

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});