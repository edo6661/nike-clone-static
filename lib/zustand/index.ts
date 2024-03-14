import { headerBottomUserItems } from "@/constants/headerBottomUser";
import { create } from "zustand";

interface GlobalState {
  selectedLinksHeader: typeof headerBottomUserItems;
  trueSelectedLinksHeader: (item: string) => void;
  falseSelectedLinksHeader: (item: string) => void;
  selectedLinkHeader: string | null;
  setSelectedLinkHeader: (item: string) => void;
}

export const useGlobalState = create<GlobalState>((set) => ({
  selectedLinksHeader: headerBottomUserItems,
  trueSelectedLinksHeader: (item: string) =>
    set((state) => ({
      selectedLinksHeader: state.selectedLinksHeader.map((i) =>
        i.title === item ? { ...i, selected: true } : i,
      ),
      selectedLinkHeader: item,
    })),
  falseSelectedLinksHeader: (item: string) =>
    set((state) => ({
      selectedLinksHeader: state.selectedLinksHeader.map((i) =>
        i.title === item ? { ...i, selected: false } : i,
      ),
      selectedLinkHeader: null,
    })),
  selectedLinkHeader: null,
  setSelectedLinkHeader: (item: string) => set({ selectedLinkHeader: item }),
}));
