import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import {
  her,
  landing,
  chapters,
  memories,
  reasons,
  quiz,
  letter,
  future,
  birthdaySurprise,
} from "./content.js";

function Stars({ count = 60 }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 1.6 + 0.6,
        delay: Math.random() * 6,
      })),
    [count]
  );
  return (
    <div className="stars" aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className="star"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function Media({ photo, video, alt, fallback }) {
  if (video) {
    return (
      <div className="photo-frame">
        <video src={video} autoPlay muted loop playsInline />
      </div>
    );
  }
  return (
    <div className="photo-frame">
      {photo ? (
        <img src={photo} alt={alt} />
      ) : (
        <span className="photo-fallback">{fallback}</span>
      )}
    </div>
  );
}

function daysSince(dateStr) {
  const start = new Date(dateStr);
  const now = new Date();
  const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
}

/* ───────────────────────── Pages ───────────────────────── */

function LandingPage({ goNext }) {
  return (
    <div className="page-inner landing-inner">
      <Stars count={90} />
      <div className="page-scroll landing-content">
        <p className="dedication">{landing.dedication}</p>
        <p className="eyebrow">{landing.eyebrow}</p>
        <h1 className="display-xl">
          {landing.line1}
          <br />
          {landing.line2}
        </h1>
        <p className="together-counter">
          {daysSince(her.togetherSince).toLocaleString()} days, and counting
        </p>
        <button className="btn-primary" onClick={goNext}>
          {landing.cta}
        </button>
      </div>
    </div>
  );
}

function StoryPage() {
  return (
    <div className="page-inner">
      <h2 className="section-title">Our story</h2>
      <div className="page-scroll">
        <div className="chapter-list">
          {chapters.map((c, i) => (
            <div className="chapter" key={i}>
              <div className="chapter-spine">
                <span className="chapter-node" />
                {i < chapters.length - 1 && <span className="chapter-line" />}
              </div>
              <div className="chapter-body">
                <p className="chapter-date">{c.date}</p>
                <h3 className="chapter-title">{c.title}</h3>
                <p className="chapter-text">{c.text}</p>
                {(c.photo || c.video) && (
                  <Media photo={c.photo} video={c.video} alt={c.title} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MemoriesPage() {
  return (
    <div className="page-inner">
      <h2 className="section-title">Memories</h2>
      <div className="page-scroll">
        <div className="memory-grid">
          {memories.map((m, i) => (
            <figure className="memory-card" key={i}>
              <Media
                photo={m.photo}
                video={m.video}
                alt={m.caption}
                fallback="♡"
              />
              <figcaption>{m.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReasonsPage() {
  const [revealed, setRevealed] = useState(() => new Set());
  const toggle = (i) =>
    setRevealed((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <div className="page-inner">
      <h2 className="section-title">Reasons</h2>
      <p className="section-lede">Pick a number. Each one is something true.</p>
      <p className="reason-counter">
        {revealed.size} of {reasons.length} discovered
      </p>
      <div className="page-scroll">
        <div className="reason-grid">
          {reasons.map((text, i) => {
            const isOpen = revealed.has(i);
            return (
              <button
                key={i}
                className={"reason-card" + (isOpen ? " is-open" : "")}
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                style={{ animationDelay: `${(i % 8) * 45}ms` }}
              >
                <span className="reason-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {isOpen && <span className="reason-text">{text}</span>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function QuizPage() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState(null);
  const done = step >= quiz.length;
  const current = quiz[step];

  const choose = (idx) => {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === current.correct) setScore((s) => s + 1);
    setTimeout(() => {
      setPicked(null);
      setStep((s) => s + 1);
    }, 900);
  };

  const restart = () => {
    setStep(0);
    setScore(0);
    setPicked(null);
  };

  return (
    <div className="page-inner">
      <h2 className="section-title">How well do you know us?</h2>
      <div className="page-scroll">
        {!done ? (
          <div className="quiz-card">
            <p className="quiz-progress">
              Question {step + 1} of {quiz.length}
            </p>
            <p className="quiz-question">{current.question}</p>
            <div className="quiz-options">
              {current.options.map((opt, i) => {
                const isPicked = picked === i;
                const isCorrect = picked !== null && i === current.correct;
                return (
                  <button
                    key={i}
                    className={
                      "quiz-option" +
                      (isPicked ? " is-picked" : "") +
                      (picked !== null && isCorrect ? " is-correct" : "")
                    }
                    onClick={() => choose(i)}
                    disabled={picked !== null}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="quiz-result">
            <p className="quiz-score">
              You scored {score} / {quiz.length}
            </p>
            <p className="quiz-note">
              But honestly, there's one thing I don't need a quiz to know —
              I love you.
            </p>
            <button className="btn-ghost" onClick={restart}>
              Play again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function LetterPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="page-inner">
      <h2 className="section-title">{letter.heading}</h2>
      <div className="page-scroll">
        {!open ? (
          <button className="btn-primary" onClick={() => setOpen(true)}>
            Read it
          </button>
        ) : (
          <div className="letter-body">
            {letter.paragraphs.map((p, i) => (
              <p
                key={i}
                className="letter-paragraph"
                style={{ animationDelay: `${i * 0.35}s` }}
              >
                {p}
              </p>
            ))}
            <p className="letter-signoff">{letter.signoff}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function FuturePage() {
  return (
    <div className="page-inner">
      <h2 className="section-title">Our future</h2>
      <p className="section-lede">Not what we've done. What I still want.</p>
      <div className="page-scroll">
        <ul className="future-list">
          {future.map((item, i) => (
            <li key={i} style={{ animationDelay: `${i * 90}ms` }}>
              {item}
            </li>
          ))}
        </ul>
        <p className="future-closer">To be continued.</p>
      </div>
    </div>
  );
}

function useCountdown(target) {
  const [remaining, setRemaining] = useState(() => target - Date.now());
  useEffect(() => {
    const id = setInterval(() => setRemaining(target - Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);
  return remaining;
}

function BirthdayPage() {
  const target = useMemo(() => new Date(her.birthday).getTime(), []);
  const remaining = useCountdown(target);
  const unlocked = remaining <= 0;
  const [revealed, setRevealed] = useState(false);

  // Reference to the birthday scroll container
  const birthdayScrollRef = useRef(null);

  const days = Math.max(0, Math.floor(remaining / 86400000));
  const hours = Math.max(0, Math.floor((remaining / 3600000) % 24));
  const minutes = Math.max(0, Math.floor((remaining / 60000) % 60));
  const seconds = Math.max(0, Math.floor((remaining / 1000) % 60));

  const revealBirthdayMessage = () => {
    setRevealed(true);
  };

  // Whenever the birthday letter opens, force it back to the beginning
  useEffect(() => {
    if (!revealed) return;

    const scrollToTop = () => {
      if (birthdayScrollRef.current) {
        birthdayScrollRef.current.scrollTop = 0;
        birthdayScrollRef.current.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });
      }

      window.scrollTo(0, 0);
    };

    // Wait until React has rendered the full letter
    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToTop);
    });
  }, [revealed]);

  return (
    <div className="page-inner birthday-inner">
      <Stars count={40} />

      <div
        ref={birthdayScrollRef}
        className="page-scroll birthday-content birthday-scroll"
      >
        {!unlocked ? (
          <>
            <p className="eyebrow">
              {birthdaySurprise.countdownLabel}
            </p>

            <div className="countdown">
              <div>
                <span>{days}</span>
                <small>days</small>
              </div>

              <div>
                <span>{String(hours).padStart(2, "0")}</span>
                <small>hrs</small>
              </div>

              <div>
                <span>{String(minutes).padStart(2, "0")}</span>
                <small>min</small>
              </div>

              <div>
                <span>{String(seconds).padStart(2, "0")}</span>
                <small>sec</small>
              </div>
            </div>

            <p className="birthday-locked">
              {birthdaySurprise.lockedMessage}
            </p>
          </>
        ) : !revealed ? (
          <div className="birthday-ready">
            <h2 className="display-xl">
              {birthdaySurprise.readyMessage}
            </h2>

            <button
              className="btn-primary"
              onClick={revealBirthdayMessage}
            >
              {birthdaySurprise.readyCta}
            </button>
          </div>
        ) : (
          <div className="birthday-letter">
            <h2 className="display-xl birthday-heading">
              {birthdaySurprise.unlockedHeading}
            </h2>

            <div className="birthday-letter-body">
              {birthdaySurprise.unlockedParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="letter-paragraph"
                  style={{
                    animationDelay: `${Math.min(i * 90, 1800)}ms`,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            <p className="birthday-ending">♡</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ───────────────────────── Deck / paging shell ───────────────────────── */

const PAGES = [
  { id: "landing", label: "Us", Component: LandingPage },
  { id: "story", label: "Our story", Component: StoryPage },
  { id: "memories", label: "Memories", Component: MemoriesPage },
  { id: "reasons", label: "Reasons", Component: ReasonsPage },
  { id: "quiz", label: "The quiz", Component: QuizPage },
  { id: "letter", label: "A letter", Component: LetterPage },
  { id: "future", label: "Our future", Component: FuturePage },
  { id: "birthday", label: "Sept 22", Component: BirthdayPage },
];

function Dots({ index, onJump }) {
  return (
    <div className="dots" aria-label="Pages">
      {PAGES.map((p, i) => (
        <button
          key={p.id}
          className={"dot" + (i === index ? " is-active" : "")}
          onClick={() => onJump(i)}
          aria-label={p.label}
          aria-current={i === index}
        />
      ))}
    </div>
  );
}

function BottomNav({ index, onPrev, onNext, onJump }) {
  const isFirst = index === 0;
  const isLast = index === PAGES.length - 1;
  return (
    <div className="bottom-nav">
      <button
        className="nav-btn"
        onClick={onPrev}
        disabled={isFirst}
        aria-label="Back"
      >
        ← Back
      </button>
      <div className="nav-center">
        <Dots index={index} onJump={onJump} />
        <p className="nav-label">
          {PAGES[index].label} · {index + 1}/{PAGES.length}
        </p>
      </div>
      <button
        className="nav-btn nav-btn-primary"
        onClick={onNext}
        disabled={isLast}
        aria-label="Next"
      >
        {isLast ? "♡" : "Next →"}
      </button>
    </div>
  );
}

export default function App() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [direction, setDirection] = useState("next");
  const touchStart = useRef(null);

  const goTo = (target) => {
    const clamped = Math.max(0, Math.min(PAGES.length - 1, target));
    if (clamped === index) return;
    setDirection(clamped > index ? "next" : "prev");
    setPrevIndex(index);
    setIndex(clamped);
  };
  const goNext = () => goTo(index + 1);
  const goPrev = () => goTo(index - 1);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  const current = PAGES[index];
  const outgoing = prevIndex !== null ? PAGES[prevIndex] : null;

  return (
    <div
      className="app-shell"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="stage">
        {outgoing && (
          <div
            key={"out-" + outgoing.id}
            className={"page page-flip-out page-flip-" + direction}
            onAnimationEnd={() => setPrevIndex(null)}
          >
            <outgoing.Component goNext={goNext} />
          </div>
        )}
        <div
          key={"in-" + current.id}
          className={"page page-flip-in page-flip-" + direction}
        >
          <current.Component goNext={goNext} />
        </div>
      </div>
      <BottomNav index={index} onPrev={goPrev} onNext={goNext} onJump={goTo} />
    </div>
  );
}
