export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, {payload: id}) {
      console.log("state:", state);
      return state.filter( item => item.id !== id);
    },
    'add'(state, {payload: id}) {
      return state.push(item => item.id);
    }
  },
};
