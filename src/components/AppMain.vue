<script>
import MainSelect from "./MainSelect.vue";
import CardsList from './CardsList.vue';
export default {
    name: "AppMain",
    components: {
        MainSelect,
        CardsList,
    },
};
</script>
<template>
    <main>
        <div class="main_container">
            <MainSelect />
            <CardsList />
        </div>
    </main>
</template>

<style lang="scss" scoped></style>