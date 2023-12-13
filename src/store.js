import { reactive } from 'vue'
import axios from 'axios'
export const store = reactive({
    loading: true,
    YUGI_API: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    ARCH_API: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=',
    selectArch: null,
    cards: null,
    archetypes: null,
    fetchCard(url) {
        axios.get(url)
            .then(response => {
                this.cards = response.data.data
                this.loading = false
            })
            .catch(err => {
                console.error(err.message)
            })
    }
})