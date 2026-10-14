import { describe, expect, it } from "vitest";

const add = (a : number,b : number)=> a+b

describe ("Add function", ()=> {
    it ("adds the numbers correcly", ()=> {
        
        expect(add(2,2)).toBe(4)
        expect(add(4,4)).toBe(8)
        expect(add(2,2)).toBe(4)
        expect(add(2,2)).toBe(4)
        expect(add(2,2)).toBe(4)
    })
      it ("adds big  numbers correcly", ()=> {
        expect(add(2000,2000)).toBe(4000)
    })
})
