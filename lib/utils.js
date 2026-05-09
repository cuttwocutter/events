// Utility function to get image URL with basePath prefix
export function getImageUrl(path) {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/events';
    if (path.startsWith('/')) {
        return `${basePath}${path}`;
    }
    return path;
}
