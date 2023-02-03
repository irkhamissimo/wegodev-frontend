export const state = () => ({
  id: null,
  title: null,
  description: null,
  public: null,
});

export const getters = {};
export const mutations = {
  setForm(state, response) {
    state.id = response.form._id ? response.form._id : null;
    state.title = response.form.title ? response.form.title : null;
    state.description = response.form.description ? response.form.description : null;
    state.public = response.form.public ? response.form.public : null;
  },
};

export const actions = {
  async store() {
    const response = await this.$axios.$post('/forms');

    if (!response) return false;
    
    return response;
  },
  async show({ commit }, id) {
    const response = await this.$axios.$get(`/forms/${id}`);

    if (!response) return false;
    commit('setForm', response);
    return response;
  },
};
