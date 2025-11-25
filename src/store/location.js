import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "../constants";

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(
  immer((set, get) => ({
    activeLocation: () => get().activeLocation || DEFAULT_LOCATION,
    setActiveLocation: (location) => set({ activeLocation: location }),
    resetLocation: () => set({ activeLocation: DEFAULT_LOCATION }),
  }))
);

export default useLocationStore;
