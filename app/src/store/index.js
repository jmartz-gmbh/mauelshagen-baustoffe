import {createStore} from "vuex";
import nav from "./nav";
import url from "./url";
import categories from "./categories";
import products from "./products";

const store = createStore({
    modules: {
      categories: categories,
      products: products,
      url: url,
      nav: nav,
    },
  });

export default store;
