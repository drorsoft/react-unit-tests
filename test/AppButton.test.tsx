import {render, screen} from "@testing-library/react"
import { describe, expect, it } from "vitest"

const Hello = ()=>  <span>Hello</span>

describe("Shows text", () => {
    it("Show Hello", () => {
        render(<Hello/>)
        const hello = screen.getByText("Hello")
        expect(hello).toBeTruthy
    })
})

