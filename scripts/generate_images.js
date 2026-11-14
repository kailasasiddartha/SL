const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Function to create a clean PNG with pure Node.js (zero dependencies)
function createPNG(width, height, drawPixel) {
    const rowSize = width * 4 + 1;
    const rawData = Buffer.alloc(rowSize * height);

    for (let y = 0; y < height; y++) {
        const rowStart = y * rowSize;
        rawData[rowStart] = 0; // Filter: None
        for (let x = 0; x < width; x++) {
            const pixelIdx = rowStart + 1 + x * 4;
            const [r, g, b, a] = drawPixel(x, y, width, height);
            rawData[pixelIdx] = r;
            rawData[pixelIdx + 1] = g;
            rawData[pixelIdx + 2] = b;
            rawData[pixelIdx + 3] = a;
        }
    }

    const compressed = zlib.deflateSync(rawData);

    // PNG Header
    const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

    // IHDR Chunk
    const ihdr = Buffer.alloc(13);
    ihdr.writeUInt32BE(width, 0);
    ihdr.writeUInt32BE(height, 4);
    ihdr[8] = 8; // Bit depth: 8
    ihdr[9] = 6; // Color type: RGBA
    ihdr[10] = 0; // Compression: Deflate
    ihdr[11] = 0; // Filter: None
    ihdr[12] = 0; // Interlace: None

    function makeChunk(type, data) {
        const chunk = Buffer.alloc(4 + 4 + data.length + 4);
        chunk.writeUInt32BE(data.length, 0);
        chunk.write(type, 4, 4, 'ascii');
        data.copy(chunk, 8);
        const crc = crc32(chunk.slice(4, 8 + data.length));
        chunk.writeUInt32BE(crc, 8 + data.length);
        return chunk;
    }

    // CRC32 calculation table
    function crc32(buf) {
        let c = 0xffffffff;
        for (let i = 0; i < buf.length; i++) {
            c = c ^ buf[i];
            for (let j = 0; j < 8; j++) {
                c = (c >>> 1) ^ ((c & 1) ? 0xedb88320 : 0);
            }
        }
        return (c ^ 0xffffffff) >>> 0;
    }

    const ihdrChunk = makeChunk('IHDR', ihdr);
    const idatChunk = makeChunk('IDAT', compressed);
    const iendChunk = makeChunk('IEND', Buffer.alloc(0));

    return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Generate Image 1: Minimalist Dark Slate / OFF State
const img1 = createPNG(240, 240, (x, y, w, h) => {
    const cx = w / 2, cy = h / 2;
    const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
    // Background: dark slate #1e293b
    if (dist > 80) return [30, 41, 59, 255];
    // Border: #475569
    if (dist > 76) return [71, 85, 105, 255];
    // Inner Circle: #334155
    if (dist > 35) return [51, 65, 85, 255];
    // Center icon/bulb off: #94a3b8
    return [148, 163, 184, 255];
});

// Generate Image 2: Minimalist Silver / ON State
const img2 = createPNG(240, 240, (x, y, w, h) => {
    const cx = w / 2, cy = h / 2;
    const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
    // Background: light silver #f1f5f9
    if (dist > 80) return [241, 245, 249, 255];
    // Border: #cbd5e1
    if (dist > 76) return [203, 213, 225, 255];
    // Inner Circle: #e2e8f0
    if (dist > 35) return [226, 232, 240, 255];
    // Center icon/bulb on: #0f172a (dark contrast active)
    return [15, 23, 42, 255];
});

const outDir = path.resolve(__dirname, '..', 'tasks', 'task3');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

fs.writeFileSync(path.join(outDir, 'image1.png'), img1);
fs.writeFileSync(path.join(outDir, 'image2.png'), img2);

console.log('Successfully generated image1.png and image2.png for Task 3b.');
