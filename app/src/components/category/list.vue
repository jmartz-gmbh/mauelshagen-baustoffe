<template>
  <div class="grid grid-cols-6 gap-2">
    <div class="col-span-6">
      <div class="card bg-white px-2 py-2 rounded-lg mb-2">
        <div class="flex justify-between">
          <span class="text-xl font-bold">{{ category.name }}:</span>
          <div class="buttons">
            <button
              @click="more('/catalog/category/' + category.id)"
              class="button text-sm bg-black px-2 py-2 text-white"
            >
              mehr
            </button>
          </div>
        </div>
        <div class="grid grid-cols-6 gap-2">
          <div
            v-for="(product, index) in products"
            class="col-span-6 md:col-span-2 mb-5"
          >
            <div class="card bg-gray-300 px-2 py-2">
              <img :src="product.pic" alt="" />
              <h2 class="mt-2 flex justify-between px-2">
                <span class="font-bold">{{ product.name }}</span>
                <span class="text-sm">{{ product.price }}€</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryList",
  methods: {
    more: function (route) {
      this.$router.push(route);
    },
  },
  computed: {
    category: function () {
      for (let i = 0; i < this.$store.state.categories.items.length; i++) {
        if (this.$store.state.categories.items[i].id == this.identifier) {
          return this.$store.state.categories.items[i];
        }
      }
    },
    products: function () {
      let items = [];
      for (let i = 0; i < this.$store.state.products.items.length; i++) {
        if (this.$store.state.products.items[i].categorie == this.identifier) {
          items.push(this.$store.state.products.items[i]);
        }
      }
      return items.reverse().slice(-3);
    },
  },
  props: {
    identifier: {
      required: true,
      typ: Number,
    },
  },
};
</script>
