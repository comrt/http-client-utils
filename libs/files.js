/**
 * Reads a file as a string
 *
 * @param {string} file
 * @returns {string}
 */
export function readAsString(file) {
    return execSync(`cat ${file}`, {
        encoding: 'utf-8', cwd: fetchWorkdir()
    });
}

/**
 * Returns a list of files in a directory
 *
 * @param {string} path
 * @returns {string[]}
 */
export function listFiles(path) {
    return execSync(`ls ${path}`, {
            encoding: 'utf-8', cwd: fetchWorkdir()
        }
    ).split('\n');
}

/**
 * Fetches the workdir from the environment
 *
 * @returns {string} workdir
 */
function fetchWorkdir() {
    return request.environment.get("workdir");
}
