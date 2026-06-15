import React, { useEffect, useRef } from 'react';
import { ExternalLink, Music as MusicIcon } from 'lucide-react';

export function Music() {
  const bgRef = useRef(null);
  const miniRef = useRef(null);

  useEffect(() => {
    const canvas = bgRef.current;
    const mini = miniRef.current;
    const ctx = canvas.getContext('2d');
    const mctx = mini.getContext('2d');
    let time = 0;
    let rafId;

    const waves = Array.from({ length: 8 }, () => ({
      value: Math.random() * 0.5 + 0.1,
      target: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.02 + 0.01,
    }));

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      mini.width = mini.offsetWidth;
      mini.height = mini.offsetHeight;
    }

    function updateWaves() {
      waves.forEach((w) => {
        if (Math.random() < 0.01) w.target = Math.random() * 0.7 + 0.1;
        w.value += (w.target - w.value) * w.speed;
      });
    }

    function drawBg() {
      ctx.fillStyle = '#06040f';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      waves.forEach((w, i) => {
        const freq = w.value * 7;
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
          const nx = (x / canvas.width) * 2 - 1;
          const px = nx + i * 0.04 + freq * 0.03;
          const py =
            Math.sin(px * 10 + time) *
            Math.cos(px * 2) *
            freq *
            0.1 *
            ((i + 1) / 8);
          const y = (py + 1) * (canvas.height / 2);
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        const intensity = Math.min(1, freq * 0.3);
        const r = Math.round(79 + intensity * 80);
        const g = Math.round(70 + intensity * 80);
        ctx.lineWidth = 1 + i * 0.25;
        ctx.strokeStyle = `rgba(${r},${g},229,0.45)`;
        ctx.stroke();
      });
    }

    function drawMini() {
      mctx.clearRect(0, 0, mini.width, mini.height);
      const bars = 24;
      const bw = mini.width / bars;
      for (let i = 0; i < bars; i++) {
        const h =
          ((Math.sin(time * 2 + i * 0.7) + 1) * 0.5) * (mini.height * 0.55) +
          mini.height * 0.05;
        const intensity = (Math.sin(time + i * 0.5) + 1) * 0.5;
        const r = Math.round(100 + intensity * 100);
        const g = Math.round(80 + intensity * 100);
        mctx.fillStyle = `rgba(${r},${g},240,${0.3 + intensity * 0.5})`;
        mctx.beginPath();
        mctx.roundRect(i * bw + 2, (mini.height - h) / 2, bw - 4, h, 3);
        mctx.fill();
      }
    }

    function loop() {
      time += 0.025;
      updateWaves();
      drawBg();
      drawMini();
      rafId = requestAnimationFrame(loop);
    }

    resize();
    loop();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="music" className="relative py-24 border-y border-white/5 overflow-hidden">
      {/* Full-section wave canvas */}
      <canvas ref={bgRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 flex items-center justify-center px-4">
        <div className="w-full max-w-xs">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(139,92,246,0.35)',
              background: 'rgba(10,8,24,0.72)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              animation: 'musicFloat 4s ease-in-out infinite',
            }}
          >
            {/* Album art area with mini waveform */}
            <div className="p-4 pb-0">
              <div
                className="relative rounded-xl overflow-hidden"
                style={{
                  height: 180,
                  border: '1px solid rgba(139,92,246,0.3)',
                  background: 'linear-gradient(135deg,#1a103c 0%,#0f1a2e 100%)',
                }}
              >
                <canvas ref={miniRef} className="absolute inset-0 w-full h-full" />

                {/* Vinyl record */}
                <div
                  className="absolute top-1/2 left-1/2 flex items-center justify-center"
                  style={{
                    width: 110,
                    height: 110,
                    borderRadius: '50%',
                    background:
                      'conic-gradient(#1a103c 0deg,#2d1b5e 60deg,#1a103c 120deg,#2d1b5e 180deg,#1a103c 240deg,#2d1b5e 300deg,#1a103c 360deg)',
                    boxShadow: '0 0 24px rgba(139,92,246,0.4)',
                    transform: 'translate(-50%,-50%)',
                    animation: 'vinylSpin 4s linear infinite',
                  }}
                >
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: '50%',
                      background: '#0f0d1e',
                      border: '2px solid rgba(139,92,246,0.5)',
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: 'rgba(139,92,246,0.8)',
                      }}
                    />
                  </div>
                </div>

                {/* Play button */}
                <div
                  className="absolute bottom-2.5 right-2.5 flex items-center justify-center"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'rgba(139,92,246,0.85)',
                    border: '1px solid rgba(139,92,246,0.5)',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d="M6 4l15 8-15 8V4z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div
              className="mx-4 mt-3"
              style={{
                height: 1,
                background:
                  'linear-gradient(90deg,transparent,rgba(139,92,246,0.4),transparent)',
              }}
            />

            {/* Card body */}
            <div className="p-4">
              <span
                className="inline-block mb-2.5 text-xs font-medium"
                style={{
                  padding: '3px 10px',
                  borderRadius: 999,
                  background: 'rgba(139,92,246,0.15)',
                  border: '1px solid rgba(139,92,246,0.35)',
                  color: '#a78bfa',
                }}
              >
                Música
              </span>

              <div className="flex items-center gap-2 mb-1.5">
                <MusicIcon size={16} color="#a78bfa" />
                <h3 className="text-base font-medium text-white">Jony Reyes</h3>
                <span
                  className="text-xs"
                  style={{
                    color: 'rgba(167,139,250,0.7)',
                    background: 'rgba(139,92,246,0.12)',
                    border: '1px solid rgba(139,92,246,0.2)',
                    borderRadius: 999,
                    padding: '1px 8px',
                  }}
                >
                  Artista Verificado
                </span>
              </div>

              <p
                className="text-xs leading-relaxed mb-3"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                Explorando la frontera entre tecnología y arte con música
                impulsada por IA.
              </p>

              <div className="flex justify-between items-center">
                <a
                  href="https://open.spotify.com/artist/34X4pmiC1lKMz9dH1OEWy5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-80"
                  style={{
                    padding: '6px 14px',
                    background: 'rgba(29,185,84,0.18)',
                    border: '1px solid rgba(29,185,84,0.35)',
                    borderRadius: 10,
                    color: '#1DB954',
                    textDecoration: 'none',
                  }}
                >
                  Escuchar en Spotify
                  <ExternalLink size={12} />
                </a>
                <span
                  className="text-xs"
                  style={{
                    color: 'rgba(255,255,255,0.4)',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '4px 10px',
                    borderRadius: 999,
                  }}
                >
                  Live
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes musicFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes vinylSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

