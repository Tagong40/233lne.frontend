import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import axios from "./axios";

type Store = {
  category: [];
  fetch_cate_products: [];
  loading: boolean;
  getCategory: () => void;
  getCategoryProduct: (args: { name: any }) => void;
};

export const useCategory = create<Store>()(
  devtools(
    persist(
      (set, get): Store => ({
        category: [],
        loading: false,
        fetch_cate_products: [],
        getCategory: async () => {
          await axios
            .get("category")
            .then((rs) => {
              set({ category: rs.data || [] });
            })
            .catch((er) => {
              console.log(er.response);
            });
        },
        getCategoryProduct: async ({ name }) => {
          set({ loading: true });
          await axios
            .get(`category/${name}`)
            .then((rs) => {
              set({ fetch_cate_products: rs.data || [] });
            })
            .catch((er) => {
              console.log(er.response);
            })
            .finally(() => {
              set({ loading: false });
            });
        },
      }),
      {
        name: "pcategories-local",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
