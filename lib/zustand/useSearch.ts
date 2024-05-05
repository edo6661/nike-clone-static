import { create } from "zustand";

interface SearchState {
  isSearch: boolean;
  setIsSearch: (isSearch: boolean) => void;
}

export const useSearch = create<SearchState>((set) => ({
  isSearch: false,
  setIsSearch: (isSearch) => set({ isSearch }),
}));
