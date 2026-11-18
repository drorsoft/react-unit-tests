import {render, screen} from "@testing-library/react"
import { describe, expect, it } from "vitest"

const Button = ({text} : {text:string})=> {
    return (
        <button>{text}</button>
    )
}

describe("Shows text", () => {
    it("Show Hello", () => {
        render(<Button text={"Send"}/>)
        const buttonToCheck = screen.getByText("Send")
        expect(buttonToCheck).toBeTruthy
    })
})