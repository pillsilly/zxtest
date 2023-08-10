#!/usr/bin/env zx

class ABC {

  constructor() {
    Object.entries(this).forEach(([key,val], b) => {
      console.log(val)
    })
  }
  fun1() {
    console.log("fun1")
  }

  fun2() {
    console.log("fun2")
  }


}
