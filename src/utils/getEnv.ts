import { Bindings } from "../types/Bindings";

function getCloudflarePagesUrl(cfPagesUrl?: string) {
    if (cfPagesUrl != null) {
        return `https://${cfPagesUrl}.pages.dev`
    }
    return process.env.CF_PAGES_URL
}

export function getEnv(env: Bindings | undefined) {
    return {
        GH_AUTH_TOKEN: env?.GH_AUTH_TOKEN ?? process.env.GH_AUTH_TOKEN,
        GH_OWNER: env?.GH_OWNER ?? process.env.GH_OWNER,
        GH_REPO: env?.GH_REPO ?? process.env.GH_REPO,
        CF_PAGES_URL: getCloudflarePagesUrl(env?.CF_PAGES_URL),
    }
}