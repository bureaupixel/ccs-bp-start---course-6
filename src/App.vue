<script setup>
import { RouterLink, RouterView } from 'vue-router'
import  SitetitleComp from './components/SitetitleComp.vue'
import NavComp from './components/NavComp.vue'
import  FooterComp from './components/FooterComp.vue'
import { ref } from 'vue';

const x = ref(0)

function onMousemove(e) {
  x.value = e.clientX
}

</script>

<template>
  <div class="
    w-full h-full
    bg-fixed
    text-slate-800 dark:text-slate-700
    animate-fade animate-once
    ">

    <div
      @mousemove="onMousemove"
      :style="{ backgroundColor: `hsl(${x}, 80%, 90%)` }"
      class="movearea"
    >
      
      <NavComp />
      <div class="p-10 mb-5">
        <SitetitleComp />
        <!-- router transitions -->
        <RouterView v-slot="{ Component }">
          <transition name="slide-fade">
            <component :is="Component" />
          </transition>
        </RouterView>

      </div>
      <div >
        <FooterComp /> 
      </div>
    </div>
  </div>
</template>

<style>
.movearea {
  transition: 0.3s background-color ease;
}


/*
  https://router.vuejs.org/guide/advanced/transitions.html
  https://vuejs.org/guide/built-ins/transition.html

  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(1vh);
  opacity: 0;
}

</style>

