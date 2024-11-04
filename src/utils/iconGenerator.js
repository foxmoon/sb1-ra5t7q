// Function to load and resize image for different icon sizes
async function generateIcon(size) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = size;
  canvas.height = size;
  
  // Draw a text-themed icon
  ctx.fillStyle = '#4285f4'; // Google Blue
  ctx.fillRect(0, 0, size, size);
  
  // Add a "T" letter
  ctx.fillStyle = '#ffffff';
  ctx.font = `bold ${size * 0.6}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('T', size/2, size/2);
  
  // Add a subtle border
  ctx.strokeStyle = '#3367d6'; // Darker blue
  ctx.lineWidth = size * 0.05;
  ctx.strokeRect(0, 0, size, size);
  
  return canvas.toDataURL('image/png');
}

// Generate icons for all required sizes
async function generateAllIcons() {
  const sizes = [16, 32, 48, 128];
  const icons = {};
  
  for (const size of sizes) {
    icons[size] = await generateIcon(size);
  }
  
  return icons;
}