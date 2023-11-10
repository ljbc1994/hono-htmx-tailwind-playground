export type Env = {
    Bindings?: Bindings;
    Variables?: Record<string, unknown>;
}

export type Bindings = {
  GH_OWNER: string;
  GH_REPO: string;
  GH_AUTH_TOKEN: string;
  KV_POST_FEEDBACK: KVNamespace;
};
