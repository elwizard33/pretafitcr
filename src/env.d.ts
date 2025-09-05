/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare namespace App {
  interface Locals {
    nonce?: string;
  }
}

// Add global Fragment for Astro
declare global {
  const Fragment: any;
}