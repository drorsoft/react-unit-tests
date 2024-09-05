import {describe, it, expect   } from 'vitest';
import { isValidUrl } from '../src/utils/isValidUrl';

describe ("Url validator", () => {
      describe("Happy path", () => {
          it ("Should return true for valid URL", ()=> {
            const res =   isValidUrl("google.com")
              expect(res).toEqual(true); // expect === assert
          })
          it ("Should return false for invalid URL", ()=> {
              const res =   isValidUrl("google con")
              expect(res).toEqual(false); // expect === assert
          })
      })
    describe('Unhappy path', () => {
        it("Should throw and error if gets an object", () => {
            const obj  : any= {}
            expect(() => isValidUrl(obj)).toThrow();
        })

    })

})

