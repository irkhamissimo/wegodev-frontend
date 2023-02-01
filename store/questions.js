export const state = () => ({});

export const getters = {};
export const mutations = {};

export const actions = {
  async store({}, id) {
    const response = await this.$axios.$post(`/forms/${id}/question`);


    if (!response) return false;

    return response;
  },
};
