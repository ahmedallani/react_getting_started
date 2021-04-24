export const increment = (payload) => ({
  type: "counter/increment",
  payload: payload ? Number(payload) : 1,
});
export const decrement = (payload) => ({
  type: "counter/decrement",
  payload: payload ? Number(payload) : 1,
});

export const incrementAsync = (payload, time) => (dispatch) => {
  setTimeout(() => dispatch(increment(payload)), time);
};
