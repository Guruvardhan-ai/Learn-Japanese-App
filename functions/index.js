
/**
 * Firebase Functions skeleton for:
 * - Gemini API proxy (placeholder)
 * - Handwriting evaluator endpoint (placeholder)
 *
 * IMPORTANT:
 * - Add your API keys to environment variables (functions config) or a secure secret manager.
 * - This file contains templates only and won't call any real Gemini endpoints until you add keys and code.
 */

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');

admin.initializeApp();

const app = express();
app.use(express.json());

// Health
exports.health = functions.https.onRequest((req, res) => {
  res.send('Functions ready');
});

// Example: handwriting evaluator (POST strokes JSON)
exports.evaluateHandwriting = functions.https.onRequest(async (req, res) => {
  try {
    const strokes = req.body.strokes; // [{x,y,t},...]
    // TODO: implement DTW / stroke-order / timing comparison
    // For now return a mocked response
    const response = {
      accuracy: 78,
      strokeOrderScore: 70,
      shapeScore: 80,
      speedScore: 84,
      correctionSVG: "<svg><!-- correction placeholder --></svg>",
      ghostTrace: "data:svg+xml;utf8,<svg></svg>",
      gradingCard: { summary: "Good attempt — focus on stroke order" }
    };
    res.json(response);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'internal' });
  }
});

// Example: Gemini proxy (POST with prompt)
exports.geminiProxy = functions.https.onRequest(async (req, res) => {
  // WARNING: Add secure key handling before calling real Gemini API
  const prompt = req.body.prompt || "Hello";
  // TODO: call Gemini REST API here and stream or return result
  res.json({ reply: "This is a placeholder Gemini reply for prompt: " + prompt });
});
