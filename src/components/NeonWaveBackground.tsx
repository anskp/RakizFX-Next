"use client";
import React, { useEffect, useRef } from 'react';

export default function NeonWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0, dpr = 1;
    let animationFrameId: number;
    let startTime = performance.now();

    function resize() {
      if (!canvas) return;
      if (!ctx) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.parentElement?.clientWidth || window.innerWidth;
      H = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    
    resize();
    window.addEventListener('resize', resize);

    const waves: any[] = [];
    const WAVE_COUNT = 7;
    const greenPalette = [
      { r: 0,   g: 255, b: 120 },
      { r: 0,   g: 220, b: 100 },
      { r: 20,  g: 255, b: 80  },
      { r: 0,   g: 200, b: 130 },
      { r: 40,  g: 255, b: 100 },
      { r: 0,   g: 180, b: 100 },
      { r: 10,  g: 240, b: 90  },
    ];

    for (let i = 0; i < WAVE_COUNT; i++) {
      const t = i / (WAVE_COUNT - 1);
      waves.push({
        baseY: 0.25 + t * 0.5,
        amplitude: 30 + Math.random() * 50,
        frequency: 0.002 + Math.random() * 0.003,
        speed: 0.3 + Math.random() * 0.6,
        phase: Math.random() * Math.PI * 2,
        secondaryFreq: 0.005 + Math.random() * 0.004,
        secondaryAmp: 10 + Math.random() * 20,
        secondarySpeed: 0.5 + Math.random() * 0.8,
        color: greenPalette[i % greenPalette.length],
        glowSize: 15 + Math.random() * 20,
        lineWidth: 1.2 + Math.random() * 1.5,
        opacity: 0.5 + Math.random() * 0.5,
      });
    }

    const particles: any[] = [];
    const PARTICLE_COUNT = 120;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        waveIndex: Math.floor(Math.random() * WAVE_COUNT),
        xRatio: Math.random(),
        size: 1 + Math.random() * 2.5,
        brightness: 0.5 + Math.random() * 0.5,
        pulseSpeed: 1 + Math.random() * 3,
        pulsePhase: Math.random() * Math.PI * 2,
        drift: (Math.random() - 0.5) * 0.0002,
      });
    }

    const ambientParticles: any[] = [];
    const AMBIENT_COUNT = 80;
    for (let i = 0; i < AMBIENT_COUNT; i++) {
      ambientParticles.push({
        x: Math.random() * 2000,
        y: Math.random() * 2000,
        size: 0.5 + Math.random() * 1.2,
        speed: 0.1 + Math.random() * 0.3,
        opacity: 0.1 + Math.random() * 0.3,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const forexSymbols = [
      { type: 'text', char: '$' },
      { type: 'text', char: '€' },
      { type: 'text', char: '£' },
      { type: 'text', char: '¥' },
      { type: 'text', char: '₿' },
      { type: 'text', char: '₣' },
      { type: 'text', char: '₩' },
      { type: 'text', char: '₽' },
      { type: 'text', char: '¢' },
      { type: 'arrow', dir: 1 },
      { type: 'arrow', dir: -1 },
      { type: 'candle', bullish: true },
      { type: 'candle', bullish: false },
    ];
    const forexIcons: any[] = [];
    const FOREX_ICON_COUNT = 28;
    for (let i = 0; i < FOREX_ICON_COUNT; i++) {
      const sym = forexSymbols[Math.floor(Math.random() * forexSymbols.length)];
      forexIcons.push({
        ...sym,
        waveIndex: Math.floor(Math.random() * WAVE_COUNT),
        xRatio: Math.random(),
        fontSize: 8 + Math.random() * 5,
        brightness: 0.3 + Math.random() * 0.4,
        pulseSpeed: 0.8 + Math.random() * 2,
        pulsePhase: Math.random() * Math.PI * 2,
        drift: (Math.random() - 0.5) * 0.00012,
        yOffset: (Math.random() - 0.5) * 6,
        rotation: (Math.random() - 0.5) * 0.4,
      });
    }

    function getWaveY(wave: any, x: number, time: number) {
      const baseY = wave.baseY * H;
      const y1 = Math.sin(x * wave.frequency + time * wave.speed + wave.phase) * wave.amplitude;
      const y2 = Math.sin(x * wave.secondaryFreq + time * wave.secondarySpeed + wave.phase * 1.7) * wave.secondaryAmp;
      return baseY + y1 + y2;
    }

    function drawWave(wave: any, time: number) {
      const { color, glowSize, lineWidth, opacity } = wave;
      const { r, g, b } = color;

      ctx!.save();
      ctx!.globalAlpha = opacity;
      ctx!.strokeStyle = `rgb(${r},${g},${b})`;
      ctx!.lineWidth = lineWidth;
      ctx!.shadowColor = `rgb(${r},${g},${b})`;
      ctx!.shadowBlur = glowSize;
      ctx!.lineCap = 'round';
      ctx!.lineJoin = 'round';

      ctx!.beginPath();
      const step = 3;
      for (let x = -10; x <= W + 10; x += step) {
        const y = getWaveY(wave, x, time);
        if (x === -10) ctx!.moveTo(x, y);
        else ctx!.lineTo(x, y);
      }
      ctx!.stroke();

      ctx!.globalAlpha = opacity * 0.6;
      ctx!.lineWidth = lineWidth * 0.5;
      ctx!.shadowBlur = glowSize * 1.8;
      ctx!.strokeStyle = `rgb(${Math.min(255, r + 80)},${Math.min(255, g + 40)},${Math.min(255, b + 60)})`;
      ctx!.beginPath();
      for (let x = -10; x <= W + 10; x += step) {
        const y = getWaveY(wave, x, time);
        if (x === -10) ctx!.moveTo(x, y);
        else ctx!.lineTo(x, y);
      }
      ctx!.stroke();
      ctx!.restore();
    }

    function drawParticles(time: number) {
      for (const p of particles) {
        const wave = waves[p.waveIndex];
        p.xRatio += p.drift;
        if (p.xRatio > 1.05) p.xRatio -= 1.1;
        if (p.xRatio < -0.05) p.xRatio += 1.1;

        const x = p.xRatio * W;
        const y = getWaveY(wave, x, time);
        const pulse = 0.5 + 0.5 * Math.sin(time * p.pulseSpeed + p.pulsePhase);
        const alpha = p.brightness * pulse;
        const size = p.size * (0.7 + 0.3 * pulse);
        const { r, g, b } = wave.color;

        ctx!.save();
        ctx!.globalAlpha = alpha;
        ctx!.shadowColor = `rgb(${r},${g},${b})`;
        ctx!.shadowBlur = size * 6;
        ctx!.fillStyle = `rgb(${Math.min(255, r + 100)},${Math.min(255, g + 60)},${Math.min(255, b + 80)})`;
        ctx!.beginPath();
        ctx!.arc(x, y, Math.max(0.5, size), 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();
      }
    }

    function drawForexIcons(time: number) {
      for (const icon of forexIcons) {
        const wave = waves[icon.waveIndex];
        icon.xRatio += icon.drift;
        if (icon.xRatio > 1.08) icon.xRatio -= 1.16;
        if (icon.xRatio < -0.08) icon.xRatio += 1.16;

        const x = icon.xRatio * W;
        const y = getWaveY(wave, x, time) + icon.yOffset;
        const pulse = 0.4 + 0.6 * Math.sin(time * icon.pulseSpeed + icon.pulsePhase);
        const alpha = icon.brightness * pulse;
        const { r, g, b } = wave.color;

        ctx!.save();
        ctx!.globalAlpha = alpha;
        ctx!.translate(x, y);
        ctx!.rotate(icon.rotation + Math.sin(time * 0.5 + icon.pulsePhase) * 0.08);
        ctx!.shadowColor = `rgb(${r},${g},${b})`;
        ctx!.shadowBlur = 10;

        const colorStr = `rgb(${Math.min(255, r + 60)},${Math.min(255, g + 30)},${Math.min(255, b + 40)})`;

        if (icon.type === 'text') {
          ctx!.font = `${icon.fontSize}px monospace`;
          ctx!.textAlign = 'center';
          ctx!.textBaseline = 'middle';
          ctx!.fillStyle = colorStr;
          ctx!.fillText(icon.char, 0, 0);
        } else if (icon.type === 'arrow') {
          const s = icon.fontSize * 0.5;
          ctx!.strokeStyle = colorStr;
          ctx!.lineWidth = 1;
          ctx!.lineCap = 'round';
          ctx!.beginPath();
          if (icon.dir === 1) {
            ctx!.moveTo(0, s); ctx!.lineTo(0, -s);
            ctx!.moveTo(-s * 0.6, -s * 0.4); ctx!.lineTo(0, -s); ctx!.lineTo(s * 0.6, -s * 0.4);
          } else {
            ctx!.moveTo(0, -s); ctx!.lineTo(0, s);
            ctx!.moveTo(-s * 0.6, s * 0.4); ctx!.lineTo(0, s); ctx!.lineTo(s * 0.6, s * 0.4);
          }
          ctx!.stroke();
        } else if (icon.type === 'candle') {
          const h = icon.fontSize * 0.9;
          const w = icon.fontSize * 0.3;
          const bullish = icon.bullish;
          ctx!.strokeStyle = colorStr;
          ctx!.lineWidth = 0.8;
          ctx!.fillStyle = bullish ? colorStr : 'transparent';
          ctx!.beginPath();
          ctx!.moveTo(0, -h); ctx!.lineTo(0, h);
          ctx!.stroke();
          if (bullish) {
            ctx!.fillRect(-w / 2, -h * 0.3, w, h * 0.6);
          } else {
            ctx!.strokeRect(-w / 2, -h * 0.3, w, h * 0.6);
          }
        }
        ctx!.restore();
      }
    }

    function drawAmbient(time: number) {
      for (const p of ambientParticles) {
        const x = (p.x + time * p.speed * 20) % (W + 40) - 20;
        const yBase = (p.y / 2000) * H;
        const y = yBase + Math.sin(time * 0.5 + p.phase) * 15;
        const alpha = p.opacity * (0.5 + 0.5 * Math.sin(time * 1.5 + p.phase));

        ctx!.save();
        ctx!.globalAlpha = alpha;
        ctx!.shadowColor = 'rgb(0,200,100)';
        ctx!.shadowBlur = 8;
        ctx!.fillStyle = 'rgb(0,220,110)';
        ctx!.beginPath();
        ctx!.arc(x, y, Math.max(0.3, p.size), 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();
      }
    }

    function drawScanlines() {
      ctx!.save();
      ctx!.globalAlpha = 0.03;
      ctx!.fillStyle = '#000';
      for (let y = 0; y < H; y += 3) {
        ctx!.fillRect(0, y, W, 1);
      }
      ctx!.restore();
    }

    function drawVignette() {
      const gradient = ctx!.createRadialGradient(W / 2, H / 2, H * 0.25, W / 2, H / 2, H * 0.9);
      gradient.addColorStop(0, 'rgba(0,0,0,0)');
      gradient.addColorStop(1, 'rgba(0,0,0,0.6)');
      ctx!.fillStyle = gradient;
      ctx!.fillRect(0, 0, W, H);
    }

    function animate(now: number) {
      const time = (now - startTime) / 1000;

      ctx!.fillStyle = 'rgba(0,0,0,0.92)';
      ctx!.fillRect(0, 0, W, H);

      drawAmbient(time);
      for (const wave of waves) drawWave(wave, time);
      drawParticles(time);
      drawForexIcons(time);
      drawScanlines();
      drawVignette();

      animationFrameId = requestAnimationFrame(animate);
    }

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block pointer-events-none z-0" />;
}
