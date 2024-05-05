import { headerBottomUserItems } from "@/constants/headerBottomUser";
import { create } from "zustand";

interface NavState {
  selectedLinksHeader: typeof headerBottomUserItems;
  //  ! header
  trueSelectedLinksHeader: (item: string) => void;
  falseSelectedLinksHeader: (item: string) => void;
  selectedLinkHeader: string | null;
  setSelectedLinkHeader: (item: string | null) => void;
  falseAllSelectedLinksHeader: () => void;
  // ! subheader
  trueSelectedLinksSubHeader: (item: string) => void;
  falseSelectedLinksSubHeader: (item: string) => void;
  selectedSubLinkHeader: string | null;
  setSelectedSubLinkHeader: (item: string | null) => void;
  falseAllSelectedSubLinkHeader: () => void;
}

export const useNavState = create<NavState>((set) => ({
  selectedLinksHeader: headerBottomUserItems,
  //  ! header
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
  falseAllSelectedLinksHeader: () =>
    set((state) => ({
      selectedLinksHeader: state.selectedLinksHeader.map((i) => ({
        ...i,
        selected: false,
      })),
    })),
  selectedLinkHeader: null,
  // ! subheader
  setSelectedSubLinkHeader: (item: string | null) =>
    set({ selectedSubLinkHeader: item }),
  trueSelectedLinksSubHeader: (item: string) =>
    set((state) => ({
      selectedLinksHeader: state.selectedLinksHeader.map((i) =>
        i.title === state.selectedLinkHeader
          ? {
              ...i,
              items: i.items.map((i) =>
                i.header === item ? { ...i, selected: true } : i,
              ),
            }
          : i,
      ),
      selectedSubLinkHeader: item,
    })),
  falseSelectedLinksSubHeader: (item: string) =>
    set((state) => ({
      selectedLinksHeader: state.selectedLinksHeader.map((i) =>
        i.title === state.selectedLinkHeader
          ? {
              ...i,
              items: i.items.map((i) =>
                i.header === item ? { ...i, selected: false } : i,
              ),
            }
          : i,
      ),
      selectedSubLinkHeader: null,
    })),
  setSelectedLinkHeader: (item: string | null) =>
    set({ selectedLinkHeader: item }),
  falseAllSelectedSubLinkHeader: () =>
    set((state) => ({
      selectedLinksHeader: state.selectedLinksHeader.map((i) => ({
        ...i,
        items: i.items.map((i) => ({ ...i, selected: false })),
      })),
      selectedLinkHeader: null,
      selectedSubLinkHeader: null,
    })),
  selectedSubLinkHeader: null,
}));
