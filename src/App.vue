<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store';
export default {
  components: {
    AppHeader,
    AppMain
  },
  mounted() {
    store.fetchCard(store.YUGI_API)
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss" scoped></style>
