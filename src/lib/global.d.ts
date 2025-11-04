export { }

declare module "*.mp4" {
  const src: string;
  export default src;
}

declare global {
    interface Window {
        gtag?: (...args: any[]) => void
    }
}
