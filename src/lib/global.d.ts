export { }

declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: { src: string; width: number; height: number };
  export default src;
}

declare module "*.png" {
  const src: { src: string; width: number; height: number };
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare global {
    interface Window {
        gtag?: (...args: any[]) => void
    }
}
