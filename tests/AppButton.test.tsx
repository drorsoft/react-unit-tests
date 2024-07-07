import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import React, { useState } from 'react';
import { AppButton } from '../src/components/AppButton';

describe('test buttons functionality', () => {
    const BUTTON_TEST_CONSTANTS = {
        clicked: 'BUTTON_WAS_CLICKED',
        initial: 'INITIAL_STATE',
        textOnButton: 'Button text',
    };

    /**
     * @param {{ButtonComponentForTesting : JSX.Element, isDisabled : boolean}} props
     * @returns {JSX.Element}
     */
    const TestButtonComponentWrapper = ({
                                            ButtonComponentForTesting,
                                            isDisabled = false,
                                        }: any): React.ReactNode => {
        const [buttonStatusText, setButtonStatusText] = useState(
            BUTTON_TEST_CONSTANTS.initial
        );
        const clicked = () => {
            setButtonStatusText(BUTTON_TEST_CONSTANTS.clicked);
        };
        return (
         <>
                <div id={'show button status'}> {buttonStatusText} </div>
                <ButtonComponentForTesting
                    disabled={isDisabled}
                    onClick={() => clicked()}
                >
                    {BUTTON_TEST_CONSTANTS.textOnButton}
                </ButtonComponentForTesting>
         </>
        );
    };
    const allButtons = [
        {
            element: AppButton,
            name: 'App button',
        }
    ];
    for (const buttonObj of allButtons) {
        describe(`${buttonObj.name}`, () => {
            it('fires click event properly', async () => {
                render(
                    <TestButtonComponentWrapper
                        ButtonComponentForTesting={buttonObj.element}
                    ></TestButtonComponentWrapper>
                );

                fireEvent.click(screen.getByRole('button'));
                expect(
                    screen.getByText(BUTTON_TEST_CONSTANTS.clicked)
                ).toBeTruthy();
            });
            it('doesnt fires click event if diabled', async () => {
                render(
                    <TestButtonComponentWrapper
                        isDisabled={true}
                        ButtonComponentForTesting={buttonObj.element}
                    ></TestButtonComponentWrapper>
                );

                fireEvent.click(screen.getByRole('button'));
                expect(
                    screen.getByText(BUTTON_TEST_CONSTANTS.initial)
                ).toBeTruthy();
            });
        });
    }
});
