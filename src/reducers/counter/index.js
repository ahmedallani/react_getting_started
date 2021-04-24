function counter(state = { value: 0 }, { type, payload }) {
  switch (type) {
    case "counter/increment":
      return { value: state.value + payload };
    case "counter/decrement":
      return { value: state.value - payload };
    default:
      return state;
  }
}
export default counter;
