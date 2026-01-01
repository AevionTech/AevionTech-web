"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  angle: number;
  radius: number;
  baseRadius: number;
  size: number;
  glowIntensity: number;
  isAccent: boolean;
  speed: number;
}

const ConstellationCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number | undefined>(undefined);
  const timeRef = useRef(0);
  const centerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      
      // Center point for the explosion effect
      centerRef.current = { x: width * 0.5, y: height * 0.45 };
    };

    const initParticles = () => {
      const numParticles = 120; // More particles for density
      particlesRef.current = [];
      const center = centerRef.current;

      for (let i = 0; i < numParticles; i++) {
        // Create particles in a radial burst pattern
        const angle = (Math.PI * 2 * i) / numParticles + Math.random() * 0.5;
        const layerRandom = Math.random();
        
        // Multiple layers - dense core, medium ring, outer scattered
        let radius;
        if (layerRandom < 0.3) {
          radius = 20 + Math.random() * 80; // Core cluster
        } else if (layerRandom < 0.6) {
          radius = 100 + Math.random() * 150; // Middle ring
        } else {
          radius = 200 + Math.random() * 250; // Outer burst
        }
        
        const z = 0.3 + Math.random() * 0.7;
        const isAccent = Math.random() < 0.2;
        
        particlesRef.current.push({
          x: center.x + Math.cos(angle) * radius,
          y: center.y + Math.sin(angle) * radius,
          z,
          vx: Math.cos(angle) * 0.1,
          vy: Math.sin(angle) * 0.1,
          angle,
          radius,
          baseRadius: radius,
          size: 1.5 + z * 2.5,
          glowIntensity: 0.5 + z * 0.5,
          isAccent,
          speed: 0.002 + Math.random() * 0.003,
        });
      }

      // Add extra dense core particles
      for (let i = 0; i < 40; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 10 + Math.random() * 60;
        const z = 0.6 + Math.random() * 0.4;
        
        particlesRef.current.push({
          x: center.x + Math.cos(angle) * radius,
          y: center.y + Math.sin(angle) * radius,
          z,
          vx: 0,
          vy: 0,
          angle,
          radius,
          baseRadius: radius,
          size: 2 + z * 3,
          glowIntensity: 0.7 + z * 0.3,
          isAccent: Math.random() < 0.25,
          speed: 0.001 + Math.random() * 0.002,
        });
      }
    };

    const drawGlowingNode = (
      x: number, 
      y: number, 
      size: number, 
      intensity: number, 
      isAccent: boolean,
      pulsePhase: number
    ) => {
      const pulse = 0.8 + Math.sin(pulsePhase) * 0.2;
      const finalIntensity = intensity * pulse;
      
      // Large outer glow
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 12);
      
      if (isAccent) {
        gradient.addColorStop(0, `hsla(24, 100%, 55%, ${finalIntensity})`);
        gradient.addColorStop(0.2, `hsla(24, 100%, 50%, ${finalIntensity * 0.5})`);
        gradient.addColorStop(0.5, `hsla(24, 100%, 45%, ${finalIntensity * 0.15})`);
        gradient.addColorStop(1, "transparent");
      } else {
        gradient.addColorStop(0, `rgba(255, 255, 255, ${finalIntensity})`);
        gradient.addColorStop(0.15, `rgba(220, 235, 255, ${finalIntensity * 0.6})`);
        gradient.addColorStop(0.4, `rgba(180, 200, 230, ${finalIntensity * 0.2})`);
        gradient.addColorStop(1, "transparent");
      }
      
      ctx.beginPath();
      ctx.arc(x, y, size * 12, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Bright core
      ctx.beginPath();
      ctx.arc(x, y, size * 0.8, 0, Math.PI * 2);
      ctx.fillStyle = isAccent 
        ? `hsla(24, 100%, 70%, ${finalIntensity})` 
        : `rgba(255, 255, 255, ${finalIntensity})`;
      ctx.fill();
    };

    const animate = () => {
      timeRef.current += 0.016;
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const center = centerRef.current;
      const connectionDistance = 100;
      const mouseRadius = 150;

      // Breathing effect for explosion
      const breathe = 1 + Math.sin(timeRef.current * 0.5) * 0.08;

      // Update particle positions
      particles.forEach((particle, idx) => {
        // Rotate around center slowly
        particle.angle += particle.speed;
        
        // Breathing radius
        const targetRadius = particle.baseRadius * breathe;
        particle.radius += (targetRadius - particle.radius) * 0.05;
        
        // Calculate position based on angle and radius
        const targetX = center.x + Math.cos(particle.angle) * particle.radius;
        const targetY = center.y + Math.sin(particle.angle) * particle.radius;
        
        // Smooth movement
        particle.x += (targetX - particle.x) * 0.1;
        particle.y += (targetY - particle.y) * 0.1;

        // Mouse interaction - push away
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < mouseRadius && distToMouse > 0) {
          const force = (mouseRadius - distToMouse) / mouseRadius;
          particle.x += (dx / distToMouse) * force * 15;
          particle.y += (dy / distToMouse) * force * 15;
        }
      });

      // Draw connections - thicker and more visible
      ctx.lineCap = "round";
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = Math.pow(1 - distance / connectionDistance, 1.5);
            const avgZ = (p1.z + p2.z) / 2;
            const lineOpacity = opacity * avgZ * 0.8;
            
            const useAccentLine = p1.isAccent && p2.isAccent;
            const usePartialAccent = (p1.isAccent || p2.isAccent) && !useAccentLine;
            
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            if (useAccentLine) {
              ctx.strokeStyle = `hsla(24, 100%, 50%, ${lineOpacity})`;
              ctx.lineWidth = 1.2 + avgZ * 0.8;
            } else if (usePartialAccent) {
              // Gradient line for mixed connections
              const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
              if (p1.isAccent) {
                grad.addColorStop(0, `hsla(24, 100%, 50%, ${lineOpacity})`);
                grad.addColorStop(1, `rgba(150, 170, 200, ${lineOpacity})`);
              } else {
                grad.addColorStop(0, `rgba(150, 170, 200, ${lineOpacity})`);
                grad.addColorStop(1, `hsla(24, 100%, 50%, ${lineOpacity})`);
              }
              ctx.strokeStyle = grad;
              ctx.lineWidth = 0.8 + avgZ * 0.6;
            } else {
              ctx.strokeStyle = `rgba(120, 150, 180, ${lineOpacity})`;
              ctx.lineWidth = 0.5 + avgZ * 0.5;
            }
            
            ctx.stroke();
          }
        }
      }

      // Draw radial burst lines from center
      const burstParticles = particles.filter(p => p.baseRadius > 180);
      burstParticles.forEach((particle) => {
        const distFromCenter = Math.sqrt(
          Math.pow(particle.x - center.x, 2) + Math.pow(particle.y - center.y, 2)
        );
        const opacity = 0.1 * particle.z;
        
        ctx.beginPath();
        ctx.moveTo(center.x + (particle.x - center.x) * 0.3, center.y + (particle.y - center.y) * 0.3);
        ctx.lineTo(particle.x, particle.y);
        ctx.strokeStyle = particle.isAccent 
          ? `hsla(24, 100%, 50%, ${opacity * 0.5})`
          : `rgba(100, 130, 160, ${opacity})`;
        ctx.lineWidth = 0.3;
        ctx.stroke();
      });

      // Draw nodes on top
      particles.forEach((particle, idx) => {
        const pulsePhase = timeRef.current * 2 + idx * 0.3;
        drawGlowingNode(
          particle.x, 
          particle.y, 
          particle.size, 
          particle.glowIntensity,
          particle.isAccent,
          pulsePhase
        );
      });

      // Draw central glow
      const centerGlow = ctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, 120);
      centerGlow.addColorStop(0, `hsla(24, 100%, 50%, ${0.15 + Math.sin(timeRef.current) * 0.05})`);
      centerGlow.addColorStop(0.3, `rgba(255, 200, 150, 0.05)`);
      centerGlow.addColorStop(1, "transparent");
      
      ctx.beginPath();
      ctx.arc(center.x, center.y, 120, 0, Math.PI * 2);
      ctx.fillStyle = centerGlow;
      ctx.fill();

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    resizeCanvas();
    initParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "auto" }}
    />
  );
};

export default ConstellationCanvas;
