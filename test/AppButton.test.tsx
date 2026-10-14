import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { AppButton } from '../src/components/AppButton';


describe('App button', () => {
    it('fires click event properly', async () => {
        const onClickMock = vi.fn(() => {
        });
        render(<AppButton onClick={() => onClickMock()}>
            Click me
        </AppButton>);
        fireEvent.click(screen.getByRole('button'));
        expect(onClickMock).toHaveBeenCalled();
    });
    it('doesnt fire click event if disabled', async () => {
        const onClickMock = vi.fn(() => {
        });
        render(<AppButton disabled={true} onClick={() => onClickMock()}>
            Click me
        </AppButton>);
        fireEvent.click(screen.getByRole('button'));
        expect(onClickMock).not.toHaveBeenCalled();
    });
});

