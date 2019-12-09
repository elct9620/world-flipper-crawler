const PREFIX = 'WEAPON.'

const types = {
  UPDATE: `${PREFIX}UPDATE`
}

const  state = () => {
  return {
    items: []
  }
}

const mutations = {
  [types.UPDATE] (state, items) {
    state.items =
      Array
      .from(items)
      .map((item, id) => Object.assign(item, { id }))
  }
}

const actions = {
  async reloadWeapons({ commit }) {
    const items = await fetch('/api/weapons.json').then(res => res.json())
    commit(types.UPDATE, items)
  }
}

const  getters = {
  getWeapons(state) {
    return state.items
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
