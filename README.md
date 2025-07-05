# CYBER VERSE 2025 - Event Entry Display System

Welcome to the official repository for the **CYBER VERSE 2025 Entry Display System** — a high-impact interactive launch experience designed for the **CYBER VERSE 2025** tech event, which features:

👥 Hackathon • 🌐 Web Development • 🛡 Capture The Flag (CTF) • 🎮 Esports

This system is built using **Node.js and Express**, simulating a futuristic entry process where guests “touch” a palm scanner, triggering an animated progress bar and a **video-based countdown and logo reveal**.

**GitHub Repository**: [Suneeh99/intro\_video-CyberVerse2025-](https://github.com/Suneeh99/intro_video-CyberVerse2025-)

---

## 🚀 Features

### 👋 Palm Touch Simulation (`/`)

* A fullscreen palm scanner interface for guest interactions.
* Visual-only interaction (no actual palm data collection).
* Each touch increases a **progress meter**.

### 🎮 Countdown & Logo Reveal (`/display`)

* When the required number of interactions is reached:

  * A **countdown video** begins.
  * Followed by a **logo reveal video** presenting the CYBER VERSE 2025 emblem.
* Optimized for large displays and LED walls for live audiences.

### 🛠 Admin Control Panel (`/admin`)

* Configure:

  * Total number of required guest interactions.
  * Trigger system reset and simulation manually.
* Useful for rehearsals, testing, and live adjustments during the event.

---

## 📸 Screenshots

### Palm Touch Interface

![image](https://github.com/user-attachments/assets/6ae85e1c-babb-480e-997b-af7fb5982ae8)


### Progress and Countdown Trigger

![image](https://github.com/user-attachments/assets/9cc50bbd-06a2-405f-a971-d62bc868a809)


### Admin Panel

![image](https://github.com/user-attachments/assets/5b3afd02-824f-4960-bf52-f2199edaf2e1)


---

## 🎥 Media Files

* `/public/countdown.mp4` – Countdown video shown after full progress.
* `/public/bgv.mp4` – Animated background video.

> **Note**: Make sure these video files are placed correctly in the `public/` directory for proper playback.

---

## 🧰 Tech Stack

* **Backend**: Node.js + Express
* **Frontend**: HTML, CSS, JavaScript
* **Media**: Embedded MP4 videos using `<video>` tags
* **Start Command**: `npm start`

---

## 🔧 Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/Suneeh99/intro_video-CyberVerse2025-.git
   cd intro_video-CyberVerse2025-
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Place media files**

   * Add `countdown.mp4` and `logo-reveal.mp4` inside:

     ```
     /public/videos/
     ```

4. **Start the server**

   ```bash
   npm start
   ```

5. **View in browser**

   * Home (Palm Touch): `http://localhost:3000/`
   * Display (Progress + Video): `http://localhost:3000/display`
   * Admin Panel: `http://localhost:3000/admin`

---

## ⚠️ Disclaimer

> No biometric data is collected or stored.
> The palm scan is a visual simulation only.

---

## 🙌 Credits

Developed for the opening experience of **CYBER VERSE 2025**.
Feel free to fork, enhance, or contribute!

---

## 📬 Contact

For questions or suggestions, open an [issue on GitHub](https://github.com/Suneeh99/intro_video-CyberVerse2025-/issues).

---
