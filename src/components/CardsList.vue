<script>
import { store } from '../store'
import CardItem from './CardItem.vue'
export default {
    name: 'CardsList',
    components: {
        CardItem
    },
    data() {
        return {
            store
        }
    }
};
</script>
<template>
    <div class="cardlist_container">
        <div class="cardlist_content">
            <div class="found">
                <span class="d-block p-3">Found cards</span>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-5">
                <CardItem v-for="card in store.cards" :card="card" />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>