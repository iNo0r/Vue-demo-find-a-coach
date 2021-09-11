<template>
  <div>
    <the-header></the-header>

    <router-view v-slot="slotProps">
      <transition name="pnRoute" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheHeader from './layout/TheHeader.vue';
export default {
  components: {
    TheHeader
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

.pnRoute-enter-active {
  animation: routeAnimateEnter 0.3s ease-out;
}
.pnRoute-leave-active {
  animation: routeAnimateLeave 0.3s ease-in;
}

/* btw i animated in my way  */
@keyframes routeAnimateEnter {
  from {
    opacity: 0;
    transform: translateY(-100px);
    /* transform: translateY(-50px) scale(0); */
  }
  to {
    opacity: 1;
    transform: translateY(0px);
    /* transform: translateY(0px) scale(1); */
  }
}
@keyframes routeAnimateLeave {
  from {
    opacity: 1;
    transform: translateY(-0);
    /* transform: translateY(-0) scale(1); */
  }
  to {
    opacity: 0;
    transform: translateY(-100px);
    /* transform: translateY(-50px) scale(0); */
  }
}
</style>
