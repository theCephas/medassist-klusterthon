import { create } from 'zustand'

interface ISideBarState {
  sideBarOpen: boolean;

  toggleSidebar: (value?: boolean) => void;
}

export const useSidebarState = create<ISideBarState>((set) => ({
  sideBarOpen: false,

  toggleSidebar: (value?: boolean) =>
    set((state) => ({ sideBarOpen: value ?? !state.sideBarOpen })),
}));