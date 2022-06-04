<template>
  <div class="vp-home">
    <div class="grid grid-cols-6">
      <div class="col-span-6 md:col-span-3 text-center">
        <h2 class="font-bold text-lg mt-10">Willkommen</h2>
        <p>
          auf der neuen Webseite von Mauelshagen Baustoffe. <br />
          Hier findest du alle Informationen zu unseren Baustoffen.
        </p>
      </div>
      <div class="col-span-6 md:col-span-3">
        <div class="grid grid-cols-6">
          <div class="col-span-6">
            <h2 class="font-bold text-lg">Unser Team</h2>
          </div>
          <div class="col-span-6 md:col-span-2 text-center">
            <img
              src="https://avatars.githubusercontent.com/u/20771653?v=4"
              class="w-1/2 rounded-full mx-auto mt-2"
              alt=""
            />
            <h2 class="mt-2">Jonathan Martz</h2>
          </div>
          <div class="col-span-6 md:col-span-2 text-center">
            <img
              src="https://avatars.githubusercontent.com/u/20771653?v=4"
              class="w-1/2 rounded-full mx-auto mt-2"
              alt=""
            />
            <h2 class="mt-2">Jonathan Martz</h2>
          </div>
          <div class="col-span-6 md:col-span-2 text-center">
            <img
              src="https://avatars.githubusercontent.com/u/20771653?v=4"
              class="w-1/2 rounded-full mx-auto mt-2"
              alt=""
            />
            <h2 class="mt-2">Jonathan Martz</h2>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <hr class="mt-5 mb-5" />
      </div>
      <div class="col-span-6 md:col-span-3">
        <h2>Produkte</h2>
      </div>
      <div class="col-span-6 md:col-span-3">
        <h2>Fahrzeuge</h2>

        <div class="cards">
          <div class="card bg-black text-white px-2 py-2 mb-2">
            <img src="https://picsum.photos/640/360" alt="" />
            <h2>Test</h2>
            <p>Test</p>
          </div>
          <div class="card bg-black text-white px-2 py-2 mb-2">
            <img src="https://picsum.photos/640/360" alt="" />
            <h2>Test</h2>
            <p>Test</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
};
</script>
