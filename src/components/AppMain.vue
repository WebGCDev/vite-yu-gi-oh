<script>
import CardsList from './CardsList.vue';
export default {
    name: 'AppMain',
    components: {
        CardsList
    }
};
</script>
<template>
    <main>
        <div class="select"></div>
        <CardsList />
    </main>
</template>

<style lang="scss" scoped></style>