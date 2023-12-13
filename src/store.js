import { reactive } from 'vue'
import axios from 'axios'
export const store = reactive({
    loading: true,
    YUGI_API: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    cards: null,
    fetchCard(url) {
        axios.get(url)
            .then(response => {
                this.cards = response.data.data
            })
    }
})