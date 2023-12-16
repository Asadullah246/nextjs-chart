export declare global {
  interface Window {
    PAGE_NAVIGATED: boolean;
    fbq?: (arg1: string, arg2: string) => void;
    twttr?: {
      conversion: {
        trackPid: (arg1: string, arg2: any) => void;
      };
    };
  }
}
