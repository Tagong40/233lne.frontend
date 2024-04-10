import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import axios from "./axios";

type Store = {
  product: [];
  category: [];
  store: {};
  details: any;
  load_details: boolean;
  getProducts: (args: { pagId?: string }) => void;
  getProductCategoy: () => void;
  productDetails: (args: {
    uid: string | undefined;
    storeName: string | undefined;
  }) => void;
};

const storeName = "Demo Store Gh";

export const useProduct = create<Store>()(
  devtools(
    persist(
      (set, get): Store => ({
        product: [],
        details: {},
        store: {},
        category: [],
        load_details: false,
        getProducts: async (args) => {
          await axios
            .get(`users/store/${storeName}/products`)
            .then((rs) => {
              set({
                product: rs.data?.data || [],
                store: rs?.data,
              });
            })
            .catch((er) => {
              if (er.response.data.message === "no request match!") {
                set({ product: [], category: [], store: {} });
              }
            });
        },
        getProductCategoy: async () => {
          await axios
            .get(`users/store/${storeName}`)
            .then((rs) => {
              set({
                category: rs.data?.category || [],
                store: rs?.data,
              });
            })
            .catch((er) => {
              if (er.response.data.message === "no request match!") {
                set({ product: [], category: [], store: {} });
              }
            });
        },
        productDetails: async ({ uid }) => {
          const details = get().product.filter(
            (res: { productId: string }) => res.productId === uid
          )[0];
          set({ details: details });
        },
      }),
      {
        name: "products-local",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
