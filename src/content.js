// ────────────────────────────────────────────────────────────────
// EVERYTHING PERSONAL LIVES IN THIS FILE.
// Fill in the fields below — the rest of the app just renders them.
// Photos: drop image files into src/assets/photos/ and import them,
// then reference the import where a photo field says `photo: null`.
// ────────────────────────────────────────────────────────────────

import rightNowPhoto from "./assets/photos/right-now.jpg";
import middlePhoto from "./assets/photos/IMG_6619.jpg";
import filterSelfieVideo from "./assets/videos/filter-selfie.mp4";
import hugClip from "./assets/videos/hug-clip.mp4";
import memoryThreeVideo from "./assets/videos/memory-three.mp4";
import memoryFourVideo from "./assets/videos/memory-four.mp4";

export const her = {
  fullName: "Adeyemi Karimoh Adenike Abike", // used once, on the landing page
  name: "Abike", // used everywhere else on the site
  togetherSince: "2024-11-03", // YYYY-MM-DD — the date you count from
  birthday: "2026-09-22", // her birthday this cycle — countdown targets this
};

export const landing = {
  dedication: `for ${her.fullName}`,
  eyebrow: "a little corner of the internet that belongs to us",
  line1: "I could have bought you something.",
  line2: "So I built you something instead.",
  cta: "Open it",
};

// The story, told as chapters rather than a generic "timeline."
// Add or remove chapters freely — each renders as one stop.
export const chapters = [
  {
    date: "Where it started",
    title: "How we met",
    text: "It was my parents' compound, and the first time I'd ever laid eyes on you — I fell for you almost immediately. We got talking about sport and school, of all things, and somewhere in that conversation I found the nerve to ask for your number.",
    photo: null,
  },
  {
    date: "Early on",
    title: "The first time I knew",
    text: "I knew it was different from the moment we started talking. There was a connection I couldn't explain — and the best part was finding out you felt it too.",
    photo: null,
  },
 {
  date: "Somewhere in the middle",
  title:"A memory that's just ours",
  text: "The first time you travelled to stay with me.",
  text: "Having you beside me every day, waking up next to you, laughing, disturbing each other and simply getting to experience life together gave me memories I’ll always hold close.",
  photo: middlePhoto,
},
{
  date: "More recently",
  title: "Right now",
  text: "I know we are not perfect and i believe we complete eachother and hope to be with eacother forever.",
  photo: rightNowPhoto,
},
];

// A small, curated set of photos for the "Memories" gallery.
// Keep captions short — one honest sentence each.
export const memories = [
  {
    caption: "Our little disturbances.",
    photo: null,
    video: filterSelfieVideo,
  },
  {
    caption: "One of my favorite places to be.",
    photo: null,
    video: hugClip,
  },
  {
  caption: "Just another little moment with you that I never want to forget.",
  photo: null,
  video: memoryThreeVideo,
},
{
  caption: "It's the simple moments with you that somehow become my favorite memories.",
  photo: null,
  video: memoryFourVideo,
},
];

// Reasons — you don't need all 100 on day one. Add to this array
// whenever you think of a new one; the counter updates itself.
export const reasons = [
  "The specific way you hum when you're cooking.",
  "You still get excited to tell me small good things that happen to you.",
  "You give me peace — you're my safe place.",
  "Your happiness genuinely matters to me, even after we've already made up.",
  "I love your heart, not just what I see.",
  "I don't want anyone else. What we have means too much to trade for a fresh start with someone new.",
  "Your smile does something to me every time.",
  "I can picture a future with you.",
  "Even on the hard days, I never want out — I want us fixed.",
  "You've become part of my everyday life, not just my highlights.",
  "Loving you makes me want to be a better boyfriend.",
  "What I feel for you goes past attraction — it's peace, comfort, and the fear of ever losing you.",
  "You have a place in my heart that's yours alone.",
  "After everything — the good and the hard parts — I still look at you and think: that's my woman.",
  "Talking to you can change the mood of my whole day.",
  "The way you make ordinary moments feel important.",
  "I genuinely miss you when you're not around.",
  "Hearing from you gives me a different kind of happiness.",
  "I can be emotionally vulnerable with you.",
  "How much your opinion matters to me.",
  "I want you beside me when life gets better.",
  "I want to stand beside you when life gets difficult too.",
  "The little things you do that you probably don't even realize I notice.",
  "Your happiness makes me happy.",
  "When you're hurting, I genuinely want to make things better.",
  "You've become part of the future I imagine for myself.",
  "I can picture us looking back someday, laughing about everything we've been through.",
  "I don't just want beautiful moments with you — I want real life with you.",
  "Even after an argument, I still want to talk to you.",
  "My pride isn't more important to me than keeping what we have.",
  "You've taught me that loving someone means learning how they want to be loved.",
  "You make me want to communicate better.",
  "You make me want to correct my mistakes instead of running from them.",
  "Losing you is something I genuinely don't want to imagine.",
  "You're not just someone I date — you're someone I deeply care about.",
  "I want to protect your feelings.",
  "I want you to feel safe telling me when something's wrong.",
  "I want to know what's on your mind, even when it's hard to hear.",
  "I care about the things that matter to you.",
  "I want to see you achieve everything you dream about.",
  "I want to be one of the loudest people cheering for you when you succeed.",
  "I want to comfort you when things don't go according to plan.",
  "Your birthday feels important to me — it's the day you came into this world.",
  "Celebrating you makes me happy.",
  "I want you to actually know you're appreciated, not just assume it.",
  "I still look for new ways to tell you how much you mean to me.",
  "Saying \"I love you\" to you never feels like enough.",
  "I want my actions to match the love I tell you I have.",
  "You've seen sides of me not everybody gets to see.",
  "I can admit when I've hurt you and genuinely feel bad about it.",
  "Making things right with you matters more than pretending I don't care.",
  "Our disagreements don't erase everything beautiful about us.",
  "I want us to grow through our problems instead of letting them destroy us.",
  "Every challenge teaches me something new about you.",
  "Loving you has taught me things about myself too.",
  "You're worth putting effort into.",
  "Our relationship is something I don't want to take for granted.",
  "I want to make memories with you we'll still talk about years from now.",
  "I want to experience new things with you.",
  "I want to laugh ridiculously hard with you.",
  "I want to annoy you and still be the person you want around afterward.",
  "Even your little attitudes somehow make me love you more.",
  "You can make me smile without trying too hard.",
  "Sometimes just knowing you're mine makes me smile.",
  "There are things that immediately make me think of you.",
  "You've become someone I naturally want to tell things to.",
  "When something good happens, you're one of the first people I want to tell.",
  "When I'm struggling, having you beside me means something.",
  "I want to understand you, not just know you.",
  "I want to keep discovering new things about you, no matter how long we're together.",
  "I care about what makes you laugh.",
  "I care about what makes you uncomfortable.",
  "I care about what makes you feel loved.",
  "I want to remember the little details you tell me.",
  "You deserve effort, not excuses.",
  "I want to be someone you can depend on.",
  "I want to give you reassurance when you need it.",
  "I never want you questioning whether you're enough for me.",
  "You never have to compete with anybody for my heart.",
  "I choose you for who you are, not because I'm searching for perfection.",
  "Neither of us is perfect, but what we have is still worth protecting.",
  "I'm willing to keep learning how to love you better.",
  "I want to become more patient with you.",
  "I want us to understand each other more as time passes.",
  "I want us to talk through uncomfortable things and still end up holding each other close.",
  "I want to be part of the reason you believe genuine love exists.",
  "I want you to feel beautiful even on the days you don't see it yourself.",
  "I admire so much more than just your physical beauty.",
  "There's something about your personality no other pretty face could replace.",
  "You're Abike Mhi — and nobody else could ever be you.",
  "Even the name \"Abike Mhi\" carries feelings for me that no other name would.",
  "I want to see what kind of woman you become as we keep growing.",
  "I want you to see me grow too.",
  "I want us to look back someday and be proud of how far we've come.",
  "I want more mornings where you're the first person on my mind.",
  "I want more nights where we end the day knowing we're okay.",
  "I want more birthdays, more random conversations, more arguments we later laugh about, and more beautiful memories with you.",
  "\"Us\" means something to me.",
  "Despite the mistakes I've made, my answer to who I want has never changed.",
  "I could write a thousand reasons and still not put it fully into words. When my heart thinks about the woman it wants, it thinks about my Abike Mhi.",
];

// Quiz — "how well do you know us." Keep it specific to your actual history.
export const quiz = [
  {
    question: "Where did we first meet?",
    options: [
      "My parents' compound",
      "In a group chat",
      "At a wedding neither of us was invited to",
      "You slid into my DMs",
    ],
    correct: 0,
  },
  {
    question: "Who said 'I love you' first?",
    options: ["Me", "You", "We said it at the same time", "Neither of us remembers"],
    correct: 0,
  },
  {
    question: "What's my favorite thing about You?",
    options: [
      "Your smile, the way you talk, and how beautiful you are — your eyes especially",
      "How organized you are",
      "Your cooking",
      "Your sense of direction",
    ],
    correct: 0,
  },
  {
    question: "What's our funniest shared memory?",
    options: [
      "Just being together, gossiping about everything",
      "The time we got lost",
      "That one group chat disaster",
      "Neither of us remembers",
    ],
    correct: 0,
  },
];

export const letter = {
  heading: "A letter for you",

  paragraphs: [
    `Abike Mhi, there’s something I don’t think I’ve ever properly explained to you. Sometimes when I tell you I love you, those three words don’t really carry everything I’m trying to say.`,

    `I love you, but I’m also grateful for you. Grateful that out of all the people you could have chosen, somehow you chose me. You trusted me with parts of yourself that you could have protected from me, you allowed yourself to be vulnerable with me, and you gave me a place in your life that I never want to take for granted.`,

    `That first time you travelled to stay with me changed something in me. Having you there for a whole month wasn't just about us being together physically. It was waking up and realizing the person I loved was right beside me. It was going to sleep knowing I'd wake up to you again. It was the random conversations, laughing over nonsense, disturbing each other, having our little disagreements, making up, spending lazy moments together and enjoying things that wouldn't have meant anything if I was doing them alone.`,

    `You probably don't realize how much those ordinary moments meant to me.`,

    `And when I think about the trust you placed in me during that time, it makes it even more precious. You gave me something deeply personal and precious to you, but beyond that, you gave me your trust. That's the part I never want to forget. I know what it means for someone to make themselves vulnerable because they believe the person they love will protect their heart.`,

    `I hope I never make you regret choosing me.`,

    `I know I haven't been perfect. I've made mistakes, I've upset you, and there have probably been moments when my actions didn't match how deeply I say I love you. But please don't mistake my imperfections for a lack of love. I'm still learning how to love you better, communicate with you better, understand you better and become the kind of man who deserves the trust you've placed in him.`,

    `When I say “I choose you,” I'm not saying it because it sounds romantic. I'm saying that after knowing you, experiencing life with you, seeing your good sides and your difficult sides, going through our misunderstandings and experiencing all the beautiful moments in between, you're still the woman I want.`,

    `I don't need you to be perfect. I just want you to be you.`,

    `And I want more of those ordinary moments with you. More mornings beside you. More nights talking until we're tired. More laughing until our stomachs hurt. More teasing each other. More trips. More pictures. More memories that nobody else will completely understand because they belong to us.`,

    `I want to watch you grow. I want you to watch me grow. I want us to look back years from now at the two people we are today and smile because despite everything, we kept choosing each other.`,

    `You aren't just someone I'm scared of losing, Abike. You're someone I'm grateful I found. There's a difference.`,

    `I don't want to hold onto you because I can't exist without you. I want to hold onto you because life genuinely feels more beautiful with you in it. ❤️`,

    `So if I don't say it properly sometimes, remember this: thank you for choosing me. Thank you for trusting me. Thank you for those mornings I woke up beside you. Thank you for every stupid laugh, every cuddle, every conversation, every memory, every chance you've given me, and every piece of your heart you've trusted me with.`,

    `I don't know exactly what the future will bring us, but I know what I want from it.`,

    `More you. More me. More us. ❤️`,

    `I love you, Abike Mhi. Not only for the woman you are, but for the way having you in my life has changed what love means to me. And if I had the opportunity to choose again, knowing everything I know now, I'd still choose you and i dont know what i would have done or be without you in my life. 🥹❤️🫂`,
  ],

  signoff: "Always yours OLAWALE ❤️.",
};

// Things you want to do together, not things you've already done.
export const future = [
  "Build a life together where we both feel loved, safe, understood, and always chosen.",
  "Travel together and see places we’ve always talked about, creating memories in different parts of the world.",
  "Wake up beside you every day again—but this time, not because you’re visiting, because we’ve built a home together.",
  "Watch us both achieve our dreams, support each other through the difficult days, and celebrate every win together.",
  "Grow old with you and someday look back at everything we went through and be proud that we never stopped choosing each other.",
];

export const birthdaySurprise = {
  countdownLabel: "until your birthday",
  lockedMessage: "Something's waiting here for the 22nd. Come back that day.",
  unlockedHeading: `Happy birthday, ${her.name}.`,
  unlockedParagraphs: [
    "Replace with the actual birthday message — what this year with her has meant, what you're hoping for the year ahead.",
    "Keep it as specific and real as the letter above.",
  ],
};