/**
 * ❤️ A Special Birthday Surprise for Mama ❤️
 * Made with love!
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Zunera Javed",
  photo: "./img/mama.jpeg",
  birthdate: "11/11/1995",
  music: "./music/hbd.mpeg",

  // ── Theme Colors ──────────────────────────────────────────────
  colors: {
    primary: "#f472b6",     // Beautiful pink
    accent: "#fbbf24",      // Golden yellow
    dark: {
      background: "#1c1020",
      text: "#fff1f5",
    },
    light: {
      background: "#fff7f9",
      text: "#4a2635",
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  defaultMode: "dark",

  // ── Birthday Sections ─────────────────────────────────────────
  sections: [
    {
      type: "greeting",
      title: "Happy Birthday Mama ❤️",
      subtitle: "11 November 1995 — The day a beautiful soul was born. ✨",
    },

    {
      type: "countdown",
      from: 3,
      goText: "🎉",
    },

    {
      type: "announcement",
text: "Today, we celebrate the most beautiful blessing in our life. Happy Birthday, Mama! ❤️ May your smile shine forever! ✨",    },

    {
      type: "chatbox",
      message:
        "Happy Birthday, Mama! I pray that your life is always filled with happiness, good health, peace, and endless smiles. You deserve all the love in the world. I love you so much! ❤️",
      buttonText: "Send Love ❤️",
    },

    {
      type: "ideas",
      lines: [
        "I wanted to do something special for you.",
        "Something that could make you smile.",
        "Because you are not just my Mama...",
        "You are my biggest blessing.",
        "My first love, my greatest support, and my forever hero.",
        "I am so lucky you are my Mama! ❤️",
      ],
      bigLetters: "LOVE",
    },

    {
      type: "quote",
      text:
        "A mother's love is the greatest blessing in the world. No words can ever describe how special she is.",
      author: "With Love ❤️",
    },

    {
      type: "stars",
      count: 50,
    },

    {
      type: "balloons",
      count: 25,
    },

    {
      type: "profile",
      wishTitle: "Happy Birthday, Mama! ❤️",
      wishText:
        "May Allah bless you with a long, healthy, and happy life. May He always keep you smiling, protect you from every worry, and fill your days with peace and happiness. Ameen! 🤲",
    },

    {
      type: "fireworks",
      count: 30,
    },

    {
      type: "confetti",
      count: 12,
    },

    {
      type: "closing",
      text:
        "Thank you for everything, Mama. Your love means more to me than words can ever explain. I love you forever! ❤️",
      replayText:
        "This little surprise is just for you. Click here to watch it again! 🎂",
    },
  ],
};