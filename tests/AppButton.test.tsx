import { describe, expect, it,vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { AppButton } from '../src/components/AppButton';


describe.only ("App Button", ( ) => {
    it("Should render the button correctly",  ()=> {
        render(<AppButton  > {}</AppButton>);
        const button = screen.getByRole('button');
        expect(button).toBeTruthy();
    })
    it("Should fire onclick when click",  ()=> {
        const onClickMock = vi.fn()
        render(<AppButton onClick={onClickMock}> My button</AppButton>);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalled();
    })
    it("Should not fire onclick when disable",  ()=> {
        const onClickMock = vi.fn()
        render(<AppButton disabled={true} onClick={onClickMock}> My button</AppButton>);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(onClickMock).not.toHaveBeenCalled();

    })
})

