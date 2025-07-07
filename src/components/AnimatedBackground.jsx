import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create animated particles
    const particles = [];
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,    // Random X Position
        y: Math.random() * canvas.height,   // Random Y Position
        vx: (Math.random() - 0.5) * 0.5,    // Random X Velocity
        vy: (Math.random() - 0.5) * 0.5,    // Random Y Velocity
        size: Math.random() * 3 + 1,        // Random Particle Size (1 - 4 px)
        opacity: Math.random() * 0.5 + 0.1  // Random Opacity (0.1 - 0.6)
      });
    }

    let animationFrameId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear Canvas

      particles.forEach(particle => {
        // Move the particle
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges (Making the particle reappear on the opposite side)
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with our accent color
        // Using our accent-light color: #00B1F5 (0, 177, 245)
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 177, 245, ${particle.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate); // Continue animation
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);

      // Cancel animation when component unmounts 
      // (i.e. when the user navigates away from the page)
      // Preventing memory leaks
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    /* change `fixed` to `absolute` positioning for applying animation 
    only to a particular section 
    (i.e. the section where our `AnimatedBackground` component is called. 
    eg: Inside the Hero Section. 
    And the parent should also have `relative` positioning) */
    />
  );
};

export default AnimatedBackground; 