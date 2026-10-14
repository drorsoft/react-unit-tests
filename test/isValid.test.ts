import { describe, expect, it } from "vitest";

const add = (a : number,b : number)=> a+b

describe ("Add function", ()=> {
    
    it ("adds big  numbers correcly", ()=> {
        expect(add(2000,2000)).toBe(4000)
    })
})
