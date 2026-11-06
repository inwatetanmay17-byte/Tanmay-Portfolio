# Tanmay — Personal Engineering Portfolio

Dark cinematic personal portfolio built with React and Vite.

## Run locally
```bash
npm install
npm run dev
```

## Deploy on Vercel
1. Push this folder to a new GitHub repository, e.g. `tanmay-portfolio`.
2. In Vercel choose **Add New → Project** and import that repository.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

## Personalize
- Add LinkedIn and professional email links when ready.
- Add a resume PDF and a download link when available.
- Add future project cards as your portfolio grows.
- Replace `public/dashboard-preview.png` with an updated export if needed.

The featured manufacturing project uses synthetic data generated with ChatGPT for educational and portfolio purposes, not real factory data.


## Swarm Rebuild introduction
The portfolio includes an original React/CSS reconstruction intro (not the Chrome extension's source code).
- It plays automatically on the first visit when motion is not reduced in the visitor's system settings.
- Visitors can replay it with the **REPLAY INTRO** control in the bottom-right corner.
- **SKIP INTRO** closes the animation immediately.
- To test the first-visit experience again in the same browser, clear the site's local storage key `tanmay-swarm-intro-seen`.
