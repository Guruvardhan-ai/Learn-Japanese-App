
# Learn Japanese — Starter Project (Expo)

This repository is a **scaffold** matching the PRD you provided. It includes:
- Expo (React Native) app skeleton with bottom navigation
- Firebase placeholders (Auth, Firestore, Storage)
- Firebase Functions skeleton for Gemini & handwriting evaluation
- Example screens and UI placeholders
- A README with setup steps

**Important:** This scaffold does NOT include the full 2000+ kanji / vocab content or a production-grade Gemini integration. It provides a complete, buildable starting project you can open in Expo or Android Studio (expo prebuild).

## What's included
- /App.js — app entry with navigation
- /screens/* — Home, Learn, AI, Practice, Profile placeholder screens
- /firebase/* — firebase config template
- /functions/index.js — Firebase Functions skeleton (Gemini + handwriting)
- /assets/* — placeholder icons & images
- firebase.rules (placeholder)
- README with setup steps

## To run locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure Firebase: replace `firebase/config.example.js` with your project config.
3. Start Expo:
   ```bash
   npm run start
   npm run android
   ```
4. Deploy functions (optional):
   ```bash
   cd functions
   npm install
   firebase deploy --only functions
   ```

If you want, I can now:
- Fill in the full content (kanji/vocab) progressively,
- Implement the handwriting evaluator logic,
- Implement Gemini cloud function (you must provide an API key and agree to usage),
- Or generate a Flutter variant.

You asked for a ZIP — download link is provided after this file is created.
