<script>
import CardItem from './CardItem.vue'
export default {
    name: "CardsList",
    components: {
        CardItem
    }
};
</script>
<template>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        <CardItem />
    </div>
</template>

<style lang="scss" scoped></style>