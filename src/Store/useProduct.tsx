import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import axios from "./axios";

type Store = {
  product: [];
  category: [];
  store: {};
  details: any;
  load_details: boolean;
  loading: boolean;
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
        loading: true,
        store: {},
        category: [],
        load_details: false,
        getProducts: async (args) => {
          try {
            const response = await axios.get(
              `users/store/${storeName}/products`
            );
            set({ product: response.data?.data });
          } catch (err) {
          } finally {
            set({ loading: false });
          }

          // .then((rs) => {
          //   set({
          //     product: rs.data?.data || [],
          //     store: rs?.data,
          //   });
          // })
          // .catch((er) => {
          //   if (er.response.data.message === "no request match!") {
          //     set({ product: [], category: [], store: {} });
          //   }
          // });
        },
        getProductCategoy: async () => {
          // set({ loading: true });

          try {
            const response = await axios.get(`users/store/${storeName}`);
            set({ category: response.data.category });
          } catch (err) {
          } finally {
            set({ loading: false });
          }

          // .then((rs) => {
          //   set({
          //     category: rs.data?.category || [],
          //     store: rs?.data,
          //   });
          // })
          // .catch((er) => {
          //   if (er.response.data.message === "no request match!") {
          //     set({ product: [], category: [], store: {} });
          //   }
          // });
        },
        productDetails: async ({ uid }) => {
          console.log(get().product);
          const details = get().product.find(
            (res: { productId: string }) => res.productId === uid
          );
          console.log(details);
          set({ details: details });
        },
      }),
      {
        name: "products-local2",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
