/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TRIAL_DAYS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
