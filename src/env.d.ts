/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GOOGLE_SITE_VERIFICATION: string;
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
