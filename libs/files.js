export function readAsString(file) {
    return execSync(`cat ${file}`, {
        encoding: 'utf-8', cwd: fetchWorkdir()
    });
}

export function listFiles(path) {
    return execSync(`ls ${path}`, {
            encoding: 'utf-8', cwd: fetchWorkdir()
        }
    ).split('\n');
}

function fetchWorkdir() {
    return request.environment.get("workdir");
}
