<template>
  <div class="vp-home">
    <div class="grid grid-cols-6 gap-2">
      <div
        class="col-span-6 md:col-span-3 text-center bg-white rounded-lg px-2 py-2"
      >
        <h2 class="font-bold text-lg mt-5">Willkommen</h2>
        <p>
          auf der neuen Webseite von Mauelshagen Baustoffe. <br />
          Hier findest du alle Informationen zu unseren Baustoffen. <br />
          <br />
          Bei Fragen sind wir unter
          <a href="tel:+49 02261 / 53167" class="text-blue-400"
            >02261 / 53167</a
          >
          erreichbar. <br />
          <br />
        </p>
      </div>
      <div class="col-span-6 md:col-span-3">
        <div class="grid grid-cols-6 bg-white rounded-lg px-2 py-2">
          <div class="col-span-6">
            <h2 class="font-bold text-lg">Unser Team</h2>
          </div>
          <div class="col-span-6 md:col-span-2 text-center">
            <img
              src="https://avatars.githubusercontent.com/u/20771653?v=4"
              class="w-1/2 rounded-full mx-auto mt-2"
              alt=""
            />
            <h2 class="mt-2 font-bold">Jonathan Martz</h2>
            <p>Chef</p>
          </div>
          <div class="col-span-6 md:col-span-2 text-center">
            <img
              src="https://avatars.githubusercontent.com/u/20771653?v=4"
              class="w-1/2 rounded-full mx-auto mt-2"
              alt=""
            />
            <h2 class="mt-2 font-bold">Jonathan Martz</h2>
            <p>Chef</p>
          </div>
          <div class="col-span-6 md:col-span-2 text-center">
            <img
              src="https://avatars.githubusercontent.com/u/20771653?v=4"
              class="w-1/2 rounded-full mx-auto mt-2"
              alt=""
            />
            <h2 class="mt-2 font-bold">Jonathan Martz</h2>
            <p>Chef</p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <hr class="mt-5 mb-5" />
      </div>
      <div class="col-span-6 md:col-span-4">
        <h2 class="flex justify-between font-bold text-xl mb-2">
          <span class="mt-2">Produkte:</span>
          <router-link to="/catalog">
            <button class="px-2 py-2 bg-white border border-black text-sm">
              zum Katalog
            </button>
          </router-link>
        </h2>
        <div class="grid grid-cols-6 gap-2">
          <div
            v-for="(p, i) in products"
            class="col-span-6 md:col-span-3 card bg-white px-2 py-2"
          >
            <img :src="p.pic" alt="" />
            <h2 class="mt-2 font-bold">{{ p.name }}</h2>
            <p>{{ p.desc }}</p>
          </div>
        </div>
      </div>
      <div class="col-span-6 md:col-span-2">
        <h2 class="font-bold text-xl mb-2">Fahrzeuge:</h2>

        <div class="cards">
          <div
            v-for="(v, i) in vehicles"
            :key="i"
            class="card bg-white px-2 py-2 mb-2 rounded-lg"
          >
            <img :src="v.pic" alt="" />
            <h2 class="font-bold mt-2">{{ v.name }}</h2>
            <p>{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {
      vehicles: [
        {
          name: "LKW",
          desc: "Test",
          pic: "https://picsum.photos/640/360",
        },
        {
          name: "Bagger",
          desc: "Test",
          pic: "https://picsum.photos/640/360",
        },
        {
          name: "Gabelstapler",
          desc: "Test",
          pic: "https://picsum.photos/640/360",
        },
      ],
    };
  },
  computed: {
    products: function () {
      return this.$store.state.products.items.reverse().slice(-10);
    },
  },
};
</script>
