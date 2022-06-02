import create from "zustand";

interface State {
  backgroundImageUrl: string;
  setBackgroundImageUrl: (imageUrl: string) => void;
}

export const useStore = create<State>((set) => ({
  backgroundImageUrl: "",
  setBackgroundImageUrl: (imageUrl: string) => {
    set({ backgroundImageUrl: imageUrl });
  },
}));
