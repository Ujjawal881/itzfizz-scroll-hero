'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
  { value: '58%', label: 'Less time spent\nin traffic' },
  { value: '23%', label: 'Lower average\ncommute cost' },
  { value: '27%', label: 'More moments\nback in your day' },
  { value: '40%', label: 'Cleaner miles\nfor tomorrow' },
];

function CarIllustration() {
  return (
    <svg className="car-svg" viewBox="0 0 760 310" role="img" aria-label="Illustration of a sleek lime-green sports car">
      <defs>
        <linearGradient id="bodyPaint" x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#e1ff9c" />
          <stop offset="0.45" stopColor="#a9e83d" />
          <stop offset="1" stopColor="#5f9f1f" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#34443d" />
          <stop offset="1" stopColor="#101713" />
        </linearGradient>
        <linearGradient id="roadGlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c6f36b" stopOpacity="0" />
          <stop offset="1" stopColor="#c6f36b" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <ellipse cx="393" cy="266" rx="300" ry="18" fill="#000" opacity=".28" />
      <path d="M24 245 H235" stroke="url(#roadGlow)" strokeWidth="3" strokeLinecap="round" />
      <path d="M6 263 H180" stroke="url(#roadGlow)" strokeWidth="1.5" strokeLinecap="round" opacity=".55" />
      <path d="M62 225 H221" stroke="url(#roadGlow)" strokeWidth="2" strokeLinecap="round" opacity=".7" />
      <path d="M122 205 H240" stroke="url(#roadGlow)" strokeWidth="1.5" strokeLinecap="round" opacity=".4" />
      <path d="M123 211 C151 188 196 173 254 164 L330 104 C347 90 365 83 392 82 L480 86 C510 88 534 101 555 121 L606 160 C643 167 674 181 695 201 L712 222 L704 242 L652 250 L118 250 L87 237 L91 222 Z" fill="url(#bodyPaint)" stroke="#d8ff94" strokeWidth="2" />
      <path d="M277 161 L344 111 C356 101 371 96 393 96 L432 98 L425 160 Z" fill="url(#glass)" stroke="#71876a" strokeWidth="2" />
      <path d="M444 98 L477 101 C502 103 520 115 538 133 L560 159 L438 159 Z" fill="url(#glass)" stroke="#71876a" strokeWidth="2" />
      <path d="M431 99 L433 160" stroke="#c4f278" strokeWidth="3" />
      <path d="M259 171 C335 162 465 161 604 173" fill="none" stroke="#f0ffc8" strokeWidth="2" opacity=".7" />
      <path d="M131 211 C220 203 291 204 350 212 L604 211" fill="none" stroke="#4e801e" strokeWidth="3" opacity=".8" />
      <path d="M611 179 L662 192 L684 209 L624 207 Z" fill="#f6ffe5" opacity=".95" />
      <path d="M109 218 L160 211 L151 226 L107 231 Z" fill="#edfff0" />
      <path d="M233 181 L268 174 L253 195 L219 201 Z" fill="#80b832" />
      <path d="M582 222 L690 220 L680 235 L591 239 Z" fill="#31551d" />
      <path d="M168 245 L650 245" stroke="#d6ff9b" strokeWidth="3" opacity=".8" />
      <circle cx="244" cy="242" r="48" fill="#121613" stroke="#9fce56" strokeWidth="5" />
      <circle cx="244" cy="242" r="30" fill="#59615a" stroke="#d7dfd2" strokeWidth="3" />
      <circle cx="244" cy="242" r="10" fill="#171b17" />
      <path d="M244 215 V269 M217 242 H271 M225 223 L263 261 M263 223 L225 261" stroke="#cbd3c8" strokeWidth="4" />
      <circle cx="570" cy="242" r="48" fill="#121613" stroke="#9fce56" strokeWidth="5" />
      <circle cx="570" cy="242" r="30" fill="#59615a" stroke="#d7dfd2" strokeWidth="3" />
      <circle cx="570" cy="242" r="10" fill="#171b17" />
      <path d="M570 215 V269 M543 242 H597 M551 223 L589 261 M589 223 L551 261" stroke="#cbd3c8" strokeWidth="4" />
      <path d="M359 180 L395 180" stroke="#e9ffc7" strokeWidth="2" opacity=".7" />
    </svg>
  );
}

export default function Home() {
  const root = useRef<HTMLElement>(null);
  const car = useRef<HTMLDivElement>(null);
  const trail = useRef<HTMLDivElement>(null);
  const headline = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollHint = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const letters = headline.current?.querySelectorAll('.headline-letter');
    const statCards = statsRef.current?.querySelectorAll('.stat-card');

    const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
    intro
      .fromTo('.eyebrow', { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 })
      .fromTo(Array.from(letters ?? []), { yPercent: 115, opacity: 0, rotateX: -35 }, { yPercent: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.035 }, '-=0.28')
      .fromTo(statCards, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, stagger: 0.12 }, '-=0.24')
      .fromTo('.hero-caption', { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.2')
      .fromTo(scrollHint.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.1');

    // The pinned scene is driven by scroll progress; it never runs as an autoplay animation.
    const motion = gsap.timeline({
      scrollTrigger: {
        trigger: root.current,
        start: 'top top',
        end: '+=1450',
        scrub: 1.1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    motion
      .fromTo(car.current, { xPercent: 38, y: 48, scale: 0.72, rotate: -2 }, { xPercent: 0, y: 0, scale: 1, rotate: 0, ease: 'none', duration: 0.48 }, 0)
      .fromTo(trail.current, { scaleX: 0, opacity: 0.1, transformOrigin: 'right center' }, { scaleX: 1, opacity: 1, ease: 'none', duration: 0.48 }, 0)
      .to(car.current, { xPercent: -30, y: -16, scale: 0.84, rotate: 1.5, ease: 'none', duration: 0.52 }, 0.48)
      .to('.hero-copy', { y: -55, opacity: 0.18, ease: 'none', duration: 0.55 }, 0.45)
      .to('.orb', { scale: 1.35, opacity: 0.3, ease: 'none', duration: 1 }, 0);

    return () => {
      motion.scrollTrigger?.kill();
      motion.kill();
      intro.kill();
    };
  }, { scope: root });

  return (
    <main>
      <section ref={root} className="hero-section relative min-h-screen overflow-hidden bg-ink text-paper">
        <div className="grain" aria-hidden="true" />
        <div className="orb orb-one" aria-hidden="true" />
        <div className="orb orb-two" aria-hidden="true" />

        <nav className="topbar relative z-10 flex items-center justify-between">
          <a className="brand" href="#top" aria-label="ITZFIZZ home">itz<span>fizz</span><i>.</i></a>
          <div className="nav-note"><span className="status-dot" /> THE FUTURE IS IN MOTION</div>
          <a className="menu-link" href="mailto:hello@itzfizz.example">LET&apos;S TALK <span>↗</span></a>
        </nav>

        <div id="top" className="hero-copy relative z-10 mx-auto flex w-full flex-col items-center text-center">
          <p className="eyebrow"><span className="eyebrow-line" /> A BETTER WAY FORWARD <span className="eyebrow-line" /></p>
          <h1 ref={headline} className="hero-headline" aria-label="Welcome ITZFIZZ">
            {'WELCOME'.split('').map((letter, i) => <span className="headline-letter" key={`welcome-${i}`}>{letter}</span>)}
            <span className="headline-gap" aria-hidden="true" />
            {'ITZFIZZ'.split('').map((letter, i) => <span className="headline-letter headline-accent" key={`itz-${i}`}>{letter}</span>)}
          </h1>
          <p className="hero-caption">Small shifts. Big impact. <span>Let&apos;s move what matters.</span></p>

          <div ref={statsRef} className="stats-grid grid w-full grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <article className="stat-card" key={stat.value}>
                <div className="stat-index">0{i + 1} <span>— IMPACT</span></div>
                <div className="stat-value">{stat.value}<span className="stat-star">↗</span></div>
                <p>{stat.label.split('\n').map((line, j) => <span key={j}>{line}</span>)}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="visual-stage" aria-hidden="true">
          <div className="stage-grid" />
          <div className="road-line road-line-one" />
          <div className="road-line road-line-two" />
          <div ref={trail} className="light-trail" />
          <div ref={car} className="car-wrap"><CarIllustration /></div>
          <div className="stage-label stage-label-left">DESIGNED TO MOVE <span>↗</span></div>
          <div className="stage-label stage-label-right">SCROLL TO EXPLORE <span>↓</span></div>
        </div>

        <div ref={scrollHint} className="scroll-hint relative z-10">
          <span className="scroll-mouse"><i /></span>
          <span>SCROLL TO FEEL THE DIFFERENCE</span>
          <span className="scroll-rule" />
        </div>
        <div className="hero-footer relative z-10"><span>INNOVATION / IN MOTION</span><span>01 — 04</span><span>BUILT FOR WHAT&apos;S NEXT</span></div>
      </section>
      <section className="after-section">
        <p className="after-kicker">THE JOURNEY DOESN&apos;T STOP HERE</p>
        <h2>Progress looks good<br /><span>on you.</span></h2>
        <p>Better journeys begin with better ideas. Let&apos;s make the next move count.</p>
        <a href="mailto:hello@itzfizz.example" className="after-cta">MAKE YOUR NEXT MOVE <span>↗</span></a>
      </section>
    </main>
  );
}
