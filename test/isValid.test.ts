import {it, expect, describe} from "vitest"
import {isValidUrl} from "../src/utils/isValidUrl"
describe("Not Valid url test", () => {
    it ("Url string" , () => {
        expect(isValidUrl("Hello world"))
        .toBeFalsy()
    })
})

describe("valid url test", () => {
    it ( "Url string" , () => {
        expect(isValidUrl("https://www.gov.il/he/departments/dynamiccollectors/youth-school-search?skip=0"))
        .toBeTruthy()
    })
})

