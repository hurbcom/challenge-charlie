export function setupProcessEnv(environment: Record<string, any>) {
    for (const key in environment) {
        if (process.env[key]) continue

        process.env[key] = environment[key]
    }
}