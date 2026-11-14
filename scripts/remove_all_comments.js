const fs = require('fs');
const path = require('path');

function cleanBlankLines(str) {
    const lines = str.split(/\r?\n/);
    const cleaned = [];
    let prevEmpty = false;
    for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed === '') {
            if (!prevEmpty && cleaned.length > 0) {
                cleaned.push('');
                prevEmpty = true;
            }
        } else {
            cleaned.push(line);
            prevEmpty = false;
        }
    }
    return cleaned.join('\r\n').trim() + '\r\n';
}

function stripCssComments(code) {
    return code.replace(/\/\*[\s\S]*?\*\//g, '');
}

function stripHtmlAndXmlComments(code) {
    // 1. Remove XML/HTML comments <!-- ... -->
    let out = code.replace(/<!--[\s\S]*?-->/g, '');

    // 2. Strip CSS comments inside <style>...</style>
    out = out.replace(/(<style[^>]*>)([\s\S]*?)(<\/style>)/gi, (match, openTag, styleContent, closeTag) => {
        return openTag + stripCssComments(styleContent) + closeTag;
    });

    // 3. Strip JS comments inside <script>...</script>
    out = out.replace(/(<script[^>]*>)([\s\S]*?)(<\/script>)/gi, (match, openTag, scriptContent, closeTag) => {
        // If external script with no body, keep as is
        if (!scriptContent.trim()) return match;
        return openTag + stripJsComments(scriptContent) + closeTag;
    });

    return cleanBlankLines(out);
}

function stripJsComments(source) {
    let result = '';
    let i = 0;
    const len = source.length;
    let inString = false;
    let stringChar = '';
    let inBlockComment = false;
    let inLineComment = false;
    let inRegex = false;

    while (i < len) {
        const char = source[i];
        const next = source[i + 1];

        if (inLineComment) {
            if (char === '\n' || char === '\r') {
                inLineComment = false;
                result += char;
            }
            i++;
            continue;
        }

        if (inBlockComment) {
            if (char === '*' && next === '/') {
                inBlockComment = false;
                i += 2;
                continue;
            }
            i++;
            continue;
        }

        if (inString) {
            result += char;
            if (char === '\\') {
                if (i + 1 < len) {
                    result += source[i + 1];
                    i += 2;
                    continue;
                }
            } else if (char === stringChar) {
                inString = false;
            }
            i++;
            continue;
        }

        if (inRegex) {
            result += char;
            if (char === '\\') {
                if (i + 1 < len) {
                    result += source[i + 1];
                    i += 2;
                    continue;
                }
            } else if (char === '/') {
                inRegex = false;
            }
            i++;
            continue;
        }

        if (char === '"' || char === "'" || char === '`') {
            inString = true;
            stringChar = char;
            result += char;
            i++;
            continue;
        }

        if (char === '/' && next === '*') {
            inBlockComment = true;
            i += 2;
            continue;
        }

        if (char === '/' && next === '/') {
            inLineComment = true;
            i += 2;
            continue;
        }

        if (char === '/') {
            const prevNonWs = result.trimEnd().slice(-1);
            if (['=', '(', '[', ':', '!', '&', '|', '?', ';', ',', '{', '}', '+', '-'].includes(prevNonWs) || prevNonWs === '') {
                inRegex = true;
                result += char;
                i++;
                continue;
            }
        }

        result += char;
        i++;
    }
    return cleanBlankLines(result);
}

function stripPhpComments(source) {
    let result = '';
    let i = 0;
    const len = source.length;
    let inString = false;
    let stringChar = '';
    let inBlockComment = false;
    let inLineComment = false;
    let inPhp = false;

    while (i < len) {
        if (!inPhp) {
            if (source.startsWith('<?php', i)) {
                inPhp = true;
                result += '<?php';
                i += 5;
                continue;
            } else if (source.startsWith('<?', i)) {
                inPhp = true;
                result += '<?';
                i += 2;
                continue;
            } else {
                result += source[i];
                i++;
                continue;
            }
        } else {
            if (!inString && !inBlockComment && !inLineComment && source.startsWith('?>', i)) {
                inPhp = false;
                result += '?>';
                i += 2;
                continue;
            }
        }

        // Inside PHP block:
        const char = source[i];
        const next = source[i + 1];

        if (inLineComment) {
            if (char === '\n' || char === '\r') {
                inLineComment = false;
                result += char;
            }
            i++;
            continue;
        }

        if (inBlockComment) {
            if (char === '*' && next === '/') {
                inBlockComment = false;
                i += 2;
                continue;
            }
            i++;
            continue;
        }

        if (inString) {
            result += char;
            if (char === '\\') {
                if (i + 1 < len) {
                    result += source[i + 1];
                    i += 2;
                    continue;
                }
            } else if (char === stringChar) {
                inString = false;
            }
            i++;
            continue;
        }

        if (char === '"' || char === "'") {
            inString = true;
            stringChar = char;
            result += char;
            i++;
            continue;
        }

        if (char === '/' && next === '*') {
            inBlockComment = true;
            i += 2;
            continue;
        }

        if (char === '/' && next === '/') {
            inLineComment = true;
            i += 2;
            continue;
        }

        if (char === '#') {
            inLineComment = true;
            i++;
            continue;
        }

        result += char;
        i++;
    }

    // Now also clean any HTML comments in HTML portions of PHP file
    result = result.replace(/<!--[\s\S]*?-->/g, '');

    return cleanBlankLines(result);
}

function stripSqlComments(source) {
    let out = source.replace(/\/\*[\s\S]*?\*\//g, '');
    out = out.replace(/--.*$/gm, '');
    return cleanBlankLines(out);
}

function processFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const original = fs.readFileSync(filePath, 'utf8');
    let cleaned = original;

    if (ext === '.html' || ext === '.xml' || ext === '.xsl' || ext === '.dtd') {
        if (original.includes('<?php') || original.includes('<?')) {
            cleaned = stripPhpComments(original);
        }
        cleaned = stripHtmlAndXmlComments(cleaned);
    } else if (ext === '.css') {
        cleaned = cleanBlankLines(stripCssComments(original));
    } else if (ext === '.js') {
        cleaned = stripJsComments(original);
    } else if (ext === '.php') {
        cleaned = stripPhpComments(original);
    } else if (ext === '.sql') {
        cleaned = stripSqlComments(original);
    }

    if (cleaned !== original) {
        fs.writeFileSync(filePath, cleaned, 'utf8');
        console.log(`[Cleaned Comments] ${filePath}`);
    }
}

function walkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            walkDir(full);
        } else {
            const ext = path.extname(entry.name).toLowerCase();
            if (['.html', '.css', '.js', '.php', '.sql', '.xml', '.dtd', '.xsl'].includes(ext)) {
                processFile(full);
            }
        }
    }
}

console.log('--- Processing tasks/ directory ---');
walkDir(path.resolve(__dirname, '../tasks'));

console.log('--- Processing Task progrms/ directory ---');
walkDir(path.resolve(__dirname, '../Task progrms'));

console.log('Done cleaning all comment lines!');
