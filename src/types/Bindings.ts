export type Env = {
  Bindings?: Bindings;
  Variables?: Variables;
};

export type Bindings = {
  GH_OWNER: string;
  GH_REPO: string;
  GH_AUTH_TOKEN: string;
  KV_POST_FEEDBACK: KVNamespace;
  CF_PAGES_URL: string;
};

export type Variables = {};
