const fs = require('fs');
const path = require('path');

const root = process.cwd();
const outDir = path.join(root, 'out');
const buildAppDir = path.join(root, '.next', 'server', 'app');
const buildPagesDir = path.join(root, '.next', 'server', 'pages');
const staticDir = path.join(root, '.next', 'static');
const publicDir = path.join(root, 'public');

function removeDir(dir) {
    if (fs.existsSync(dir)) {
        fs.rmSync(dir, { recursive: true, force: true });
    }
}

function copyDir(src, dest) {
    if (!fs.existsSync(src)) return;
    fs.mkdirSync(dest, { recursive: true });
    for (const name of fs.readdirSync(src)) {
        const srcPath = path.join(src, name);
        const destPath = path.join(dest, name);
        const stat = fs.statSync(srcPath);
        if (stat.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

removeDir(outDir);
copyDir(buildAppDir, outDir);
copyDir(buildPagesDir, outDir);
copyDir(staticDir, path.join(outDir, '_next', 'static'));
copyDir(publicDir, outDir);

const nojekyllSrc = path.join(root, '.nojekyll');
if (fs.existsSync(nojekyllSrc)) {
    fs.copyFileSync(nojekyllSrc, path.join(outDir, '.nojekyll'));
}

console.log('Exported static files to out/');
