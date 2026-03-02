export type OBSSettings = {
  backgroundColor: string;
  text1Color: string;
  text2Color: string;
  side: string;
  width: string;
  height: string;
  verticalPosition: string;
  topOffset: string;
  bottomOffset: string;
  text1Font: string;
  text2Font: string;
  text1Size: string;
  text2Size: string;
  textPaddingLeft: string;
  textPaddingRight: string;
  textGap: string;
  starPosition: string;
  starColor: string;
  badgeTemplate: string;
  badgeScale: number;
  text1LetterSpacing?: string;
  text2LetterSpacing?: string;
  text1TextTransform?: string;
  paddingTop?: string;
  paddingBottom?: string;
};

export type OBSState = {
  version: number;
  isShowing: boolean;
  text1: string;
  text2: string;
  settings: OBSSettings;
};

const defaultSettings: OBSSettings = {
  backgroundColor: "#000000",
  text1Color: "#FFFFFF",
  text2Color: "#CCCCCC",
  side: "left",
  width: "auto",
  height: "auto",
  verticalPosition: "bottom",
  topOffset: "32px",
  bottomOffset: "32px",
  text1Font: "'Namu', 'Manrope', sans-serif",
  text2Font: "'Namu', 'Manrope', sans-serif",
  text1Size: "24px",
  text2Size: "20px",
  textPaddingLeft: "0px",
  textPaddingRight: "0px",
  textGap: "4px",
  starPosition: "none",
  starColor: "#731cfe",
  badgeTemplate: "custom",
  badgeScale: 100,
  text1LetterSpacing: "",
  text2LetterSpacing: "",
  text1TextTransform: "",
  paddingTop: "",
  paddingBottom: "",
};

let state: OBSState = {
  version: 0,
  isShowing: false,
  text1: "",
  text2: "",
  settings: { ...defaultSettings },
};

const listeners = new Set<(s: OBSState) => void>();

function notify() {
  const snapshot = { ...state, settings: { ...state.settings } };
  listeners.forEach((fn) => {
    try {
      fn(snapshot);
    } catch (e) {
      console.error("[OBS store] listener error:", e);
    }
  });
}

export function getState(): OBSState {
  return { ...state, settings: { ...state.settings } };
}

export function applyCommand(command: { type: string; data?: Record<string, unknown> }): OBSState {
  if (command.type === "SHOW_HOST_NAME" && command.data) {
    state = {
      ...state,
      version: state.version + 1,
      isShowing: true,
      text1: (command.data.text1 as string) ?? "",
      text2: (command.data.text2 as string) ?? "",
      settings: {
        ...state.settings,
        ...(typeof command.data.settings === "object" && command.data.settings
          ? (command.data.settings as Partial<OBSSettings>)
          : {}),
      },
    };
  } else if (command.type === "HIDE_HOST_NAME") {
    state = {
      ...state,
      version: state.version + 1,
      isShowing: false,
      text1: "",
      text2: "",
    };
  }
  notify();
  return getState();
}

export function subscribe(fn: (s: OBSState) => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
