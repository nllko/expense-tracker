import api from '@/services/api'

export default {
    saveTransaction (data) {
        return api().post('saveTransaction', data)
    }
}
