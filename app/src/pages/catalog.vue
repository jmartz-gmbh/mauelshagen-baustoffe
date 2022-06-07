<template>
  <div class="vp-catalog">
    <div v-for="(categorie, index) in categories">
      <category-list :identifier="categorie.id"></category-list>
    </div>
  </div>
</template>

<script>
import CategoryList from "../components/category/list.vue";

export default {
  name: "Katalog",
  components: {
    "category-list": CategoryList,
  },
  computed: {
    categories: function () {
      return this.$store.state.categories.items;
    },
  },
};
</script>
