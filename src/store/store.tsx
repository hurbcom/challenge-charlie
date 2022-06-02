import create from "zustand";

interface State {
  backgroundImageUrl: string;
  addBackgroundImage: (imageUrl: string) => void;
}

export const useStore = create<State>((set) => ({
  backgroundImageUrl: "",
  addBackgroundImage: (imageUrl: string) => {
    set({ backgroundImageUrl: imageUrl });
  },
}));
