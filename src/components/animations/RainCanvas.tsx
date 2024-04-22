import { useEffect, useRef } from "react";
const RainCanvas = () => {
  const rainCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvas = rainCanvasRef.current;
  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "#000000";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(5, 5);
    ctx.lineTo(30, 50);
    ctx.stroke();
  };
  useEffect(() => {
    // Evite les erreurs TS
    if (canvas) {
      const test = document
        .getElementById("c-wrapper")
        ?.getBoundingClientRect();
      if (test) {
        canvas.width = test.width;
        canvas.height = test.height;
      }
      const context = canvas.getContext("2d");
      // Evite les erreurs TS
      if (context) {
        canvas.width = canvas.width * 2;
        canvas.height = canvas.height * 2;
        // canvas.style.width = (canvas.width / 2).toString() + "px";
        // canvas.style.height = (canvas.height / 2).toString() + "px";
        const dpi = window.devicePixelRatio;
        context.scale(dpi, dpi);
        draw(context);
      } else {
        console.log("erreur 2d context");
      }
    } else {
      console.log("canvas = null");
    }
  }, [canvas, draw]);
  return (
    <div className="w-full h-full" id="c-wrapper">
      <canvas
        ref={rainCanvasRef}
        className="absolute top-0 left-0 bg-red-500 pointer-events-none opacity-30 rounded-lg"
      />
    </div>
  );
};

export default RainCanvas;
