<script>
import MainSelect from "./MainSelect.vue";
import CardsList from './CardsList.vue';
import { store } from "../store";
export default {
    name: "AppMain",
    components: {
        MainSelect,
        CardsList,
    },
    data() {
        return {
            store
        }
    },
    methods: {
        performSelection() {
            const url = store.ARCH_API + store.selectArch
            store.fetchCard(url)
        }
    },
    mounted() {
        store.fetchCard(store.YUGI_API)
    }
};
</script>
<template>
    <main>
        <div class="main_container">
            <MainSelect @makeSelection="performSelection(archetype)" />
            <CardsList />
        </div>
    </main>
</template>

<style lang="scss" scoped></style>