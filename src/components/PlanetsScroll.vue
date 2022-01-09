<template>
  <div class="flex flex-col z-50">
    <!-- the planets banner -->
    <div class="w-full h-60 flex" id="planets-banner">
      <div class="h-full bg-gray-500 w-full items-center flex">
        <p class="text-8xl w-full text-center bg-gray-500 font-serif text-yellow-100">The Planets</p>
      </div>
    </div>

    <!-- solar system model placeholder -->
    <div class="w-full p-80"></div>
    <div class="w-full p-80"></div>
    <!-- <div class="w-full flex" id="mercury">
      <div class="w-1/2 bg-transparent rounded-xl flex flex-col ml-auto border-2 border-gray-500">
      <div class="flex flex-row px-10 py-6">
        <div class="text-5xl text-white my-auto p-4 font-sans ">
          Mercury
        </div>
        <div class="font-sans text-xl p-2 h-full text-white text-center">
          Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.
        </div>
      </div>
      <div class="flex flex-col justify-around px-20 py-6 pb-10">
        <div class="flex flex-wrap">
          <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
            <div class="flex flex-row space-x-4">
              <p class="text-blue-500 text-3xl">88</p>
              <p class="my-auto text-gray-100 uppercase font-mono">Earth days</p>
            </div>
            <p class="text-gray-500">Length of year</p>
          </div>
          <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
            <div class="flex flex-row space-x-4">
              <p class="text-blue-500 text-3xl">0.4</p>
              <p class="my-auto text-gray-100 uppercase font-mono">AU</p>
            </div>
            <p class="text-gray-500">Distance From Sun</p>
          </div>
          <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
            <div class="flex flex-row space-x-4">
              <p class="text-blue-500 text-3xl">.</p>
              <p class="my-auto text-gray-100 uppercase font-mono">Roman God of Speed</p>
            </div>
            <p class="text-gray-500">Namesake</p>
          </div>
          <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
            <div class="flex flex-row space-x-4">
              <p class="text-blue-500 text-3xl">0</p>
              <p class="my-auto text-gray-100 uppercase font-mono">🌕</p>
            </div>
            <p class="text-gray-500">Moons</p>
          </div>
        </div>
      </div>
      </div>
    </div> -->
    <div class="w-full flex" id="mercury">
      <div class="w-1/2 bg-transparent rounded-xl flex flex-col ml-auto border-2 border-gray-500">
      <div class="flex flex-row px-10 py-6">
        <div class="text-5xl text-white my-auto p-4 font-sans ">
          Mercury
        </div>
        <div class="font-sans text-xl p-2 h-full text-white text-center">
          Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.
        </div>
      </div>
      <div class="flex flex-col justify-around px-20 py-6 pb-10">
        <div class="flex flex-wrap">
          <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
            <div class="flex flex-row space-x-4">
              <p class="text-blue-500 text-3xl">88</p>
              <p class="my-auto text-gray-100 uppercase font-mono">Earth days</p>
            </div>
            <p class="text-gray-500">Length of year</p>
          </div>
          <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
            <div class="flex flex-row space-x-4">
              <p class="text-blue-500 text-3xl">0.4</p>
              <p class="my-auto text-gray-100 uppercase font-mono">AU</p>
            </div>
            <p class="text-gray-500">Distance From Sun</p>
          </div>
          <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
            <div class="flex flex-row space-x-4">
              <p class="text-blue-500 text-3xl">.</p>
              <p class="my-auto text-gray-100 uppercase font-mono">Roman God of Speed</p>
            </div>
            <p class="text-gray-500">Namesake</p>
          </div>
          <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
            <div class="flex flex-row space-x-4">
              <p class="text-blue-500 text-3xl">0</p>
              <p class="my-auto text-gray-100 uppercase font-mono">🌕</p>
            </div>
            <p class="text-gray-500">Moons</p>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="w-full p-96"></div>
    <div class="w-full flex" id="venus">
      <div class="w-1/2 bg-transparent rounded-xl flex flex-col ml-auto border-2 border-gray-500">
      <div class="flex flex-row px-10 py-6">
        <div class="text-5xl text-white my-auto p-4 font-sans ">
          Venus
        </div>
        <div class="font-sans text-xl p-2 h-full text-white text-center">
          Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.
        </div>
      </div>
      <div class="flex flex-col justify-around px-20 py-6 pb-10">
        <div class="flex flex-wrap">
          <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
            <div class="flex flex-row space-x-4">
              <p class="text-blue-500 text-3xl">255</p>
              <p class="my-auto text-gray-100 uppercase font-mono">Earth days</p>
            </div>
            <p class="text-gray-500">Length of year</p>
          </div>
          <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
            <div class="flex flex-row space-x-4">
              <p class="text-blue-500 text-3xl">0.7</p>
              <p class="my-auto text-gray-100 uppercase font-mono">AU</p>
            </div>
            <p class="text-gray-500">Distance From Sun</p>
          </div>
          <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
            <div class="flex flex-row space-x-4">
              <p class="text-blue-500 text-3xl">.</p>
              <p class="my-auto text-gray-100 uppercase font-mono">ROMAN GODDESS OF LOVE</p>
            </div>
            <p class="text-gray-500">Namesake</p>
          </div>
          <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
            <div class="flex flex-row space-x-4">
              <p class="text-blue-500 text-3xl">0</p>
              <p class="my-auto text-gray-100 uppercase font-mono">🌕</p>
            </div>
            <p class="text-gray-500">Moons</p>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="w-full p-96"></div>
    <div class="w-full flex" id="earth">
      <div class="w-1/2 bg-transparent rounded-xl flex flex-col ml-auto border-2 border-gray-500">
      <div class="flex flex-row px-10 py-6">
        <div class="text-5xl text-white my-auto p-4 font-sans ">
          Earth
        </div>
        <div class="font-sans text-xl p-2 h-full text-white text-center">
          Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.
        </div>
      </div>
      <div class="flex flex-col justify-around px-20 py-6 pb-10">
        <div class="flex flex-wrap">
          <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
            <div class="flex flex-row space-x-4">
              <p class="text-blue-500 text-3xl">365.25</p>
              <p class="my-auto text-gray-100 uppercase font-mono">Days</p>
            </div>
            <p class="text-gray-500">Length of year</p>
          </div>
          <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
            <div class="flex flex-row space-x-4">
              <p class="text-blue-500 text-3xl">1</p>
              <p class="my-auto text-gray-100 uppercase font-mono">AU</p>
            </div>
            <p class="text-gray-500">Distance From Sun</p>
          </div>
          <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
            <div class="flex flex-row space-x-4">
              <p class="text-blue-500 text-3xl">.</p>
              <p class="my-auto text-gray-100 uppercase font-mono">VARIATION OF "THE GROUND" IN MANY LANGUAGES</p>
            </div>
            <p class="text-gray-500">Namesake</p>
          </div>
          <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
            <div class="flex flex-row space-x-4">
              <p class="text-blue-500 text-3xl">1</p>
              <p class="my-auto text-gray-100 uppercase font-mono">🌕</p>
            </div>
            <p class="text-gray-500">Moons</p>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="w-full p-96"></div>
    <div class="w-full flex" id="mars">
      <div class="w-1/2 bg-transparent rounded-xl flex flex-col ml-auto border-2 border-gray-500">
      <div class="flex flex-row px-10 py-6">
        <div class="text-5xl text-white my-auto p-4 font-sans ">
          Mars
        </div>
        <div class="font-sans text-xl p-2 h-full text-white text-center">
          Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.
        </div>
      </div>
      <div class="flex flex-col justify-around px-20 py-6 pb-10">
        <div class="flex flex-wrap">
          <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
            <div class="flex flex-row space-x-4">
              <p class="text-blue-500 text-3xl">1.88</p>
              <p class="my-auto text-gray-100 uppercase font-mono">Earth years</p>
            </div>
            <p class="text-gray-500">Length of year</p>
          </div>
          <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
            <div class="flex flex-row space-x-4">
              <p class="text-blue-500 text-3xl">1.5</p>
              <p class="my-auto text-gray-100 uppercase font-mono">AU</p>
            </div>
            <p class="text-gray-500">Distance From Sun</p>
          </div>
          <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
            <div class="flex flex-row space-x-4">
              <p class="text-blue-500 text-3xl">.</p>
              <p class="my-auto text-gray-100 uppercase font-mono">Roman God of War</p>
            </div>
            <p class="text-gray-500">Namesake</p>
          </div>
          <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
            <div class="flex flex-row space-x-4">
              <p class="text-blue-500 text-3xl">2</p>
              <p class="my-auto text-gray-100 uppercase font-mono">🌕</p>
            </div>
            <p class="text-gray-500">Moons</p>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="w-full p-96"></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  mounted() {
  },
}
</script>