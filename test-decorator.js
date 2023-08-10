class ABC {
  constructor() {
    proxyClassFunctions(this, {
      before: function (key, target, ctx, args) {
        console.log(`${key} is called`)
      },
      after: function (key, target, ctx, args,res) {
        console.log(`${key} result is ${res}`);
      }
    });
  }

  fun1() {
    console.log("fun1")
    return 'aaa';
  }

  fun2() {
    console.log("fun2")
    throw Error(3);
    return '222'
  }


}

const r = new ABC()
try {
  r.fun2(4,2,1);
}catch (e) {
  console.log(1)
}

r.fun1();
console.log(123)

function proxyClassFunctions(thiz, {before, after}) {
  Object.entries(
    Object.getOwnPropertyDescriptors(Object.getPrototypeOf(thiz)))
    .forEach(([key, val], b) => {
      if (key === 'constructor' || val.name === thiz.constructor.name) return;
      if (typeof val.value === 'function') {
        Object.getPrototypeOf(thiz)[key] = new Proxy(val.value, {
          apply(target, ctx, args) {
            before(key, target, ctx, args)
            const res = Reflect.apply(...arguments);
            after(key, target, ctx, args, res)
            return res;
          }
        });
      }
    })
}
