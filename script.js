const context = document.querySelector("canvas");

const ctx = context.getContext("2d");

for (let i = 0; i < 5; i++) {
   for (let j = 0; j < 5; j++) {
      const width = 50;
      const height = 50;
      const gap = 10;
      const x = 100;
      const y = 100;

      let nx = x + (width + gap) * i;
      let ny = y + (height + gap) * j;

      ctx.lineWidth = 4;

      drawRect(nx, ny, width, height);

      ctx.lineWidth = 10;

      if (Math.random() < 0.5) {
         drawRect(nx + 8, ny + 8, width - 16, height - 16);
      }
   }
}

function drawRect(x, y, w, h) {
   ctx.beginPath();
   ctx.rect(x, y, w, h);
   ctx.stroke();
}
