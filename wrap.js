const wrap = (fn, ...args) => {
  return function (...newargs) {
    return fn(...args, ...newargs);
  };
};
let obj = {
  name: "ahmed",
  say: function (str,str2) {
    return `${this.name} says ${str} and ${str2}`;
  },
};

const say = obj.say.bind(obj);
const sayW = wrap(say, "hi");
console.log(sayW("welcome"));
