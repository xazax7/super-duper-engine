import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: '',
        phone: ''
    },
    mutations: {
        updateName(state, name) {
            state.name = name
        },
        updatePhone(state, phone) {
            state.phone = phone
        }
    },
    actions: {},
});
