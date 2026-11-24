const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.resolve(__dirname);

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.zip': 'application/zip',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.java': 'text/plain; charset=utf-8',
    '.sql': 'text/plain; charset=utf-8',
    '.xml': 'text/xml; charset=utf-8',
    '.txt': 'text/plain; charset=utf-8',
    '.php': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
    let safeUrl = decodeURI(req.url.split('?')[0]);
    if (safeUrl === '' || safeUrl === '/') safeUrl = '/index.html';

    // Strip leading slashes to prevent root-relative path resolution
    const cleanRelativePath = safeUrl.replace(/^\/+/, '');
    const targetFilePath = path.resolve(PUBLIC_DIR, cleanRelativePath);

    // Security check: ensure file is inside PUBLIC_DIR
    if (!targetFilePath.toLowerCase().startsWith(PUBLIC_DIR.toLowerCase())) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
        return;
    }

    fs.stat(targetFilePath, (err, stats) => {
        if (!err && stats.isDirectory()) {
            const indexInside = path.join(targetFilePath, 'index.html');
            if (fs.existsSync(indexInside)) {
                res.writeHead(302, { 'Location': safeUrl.endsWith('/') ? `${safeUrl}index.html` : `${safeUrl}/index.html` });
                res.end();
                return;
            }
        }

        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
        }

        const ext = path.extname(targetFilePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.writeHead(200, {
            'Content-Type': contentType,
            'Content-Length': stats.size,
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin': '*'
        });

        const stream = fs.createReadStream(targetFilePath);
        stream.pipe(res);
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`\n======================================================`);
    console.log(` Scripting Languages (SL) Lab Portal Server Running `);
    console.log(` Local URL: http://localhost:${PORT}`);
    console.log(`======================================================\n`);
});
