import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  tableData: []
}

const mutations = {
  ADD_NOTE (state) {
    const newNote = {
      text: 'New note',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },

  EDIT_NOTE (state, text) {
    state.activeNote.text = text
  },
}

export default new Vuex.Store({
  state,
  mutations
})
