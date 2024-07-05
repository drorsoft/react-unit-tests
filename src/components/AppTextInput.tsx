import React from 'react';

export const AppTextInput = ({
    id,
    label,
    placeholder,
    inputClassName,
    ...config
}: {
    id: string;
    label: string;
    placeholder?: string;
    inputClassName?: string;
    config?: React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >;
} & React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>) => {
    return (
        <div
            id={'label-text-input'}
            className={
                '  flex h-full w-full  flex-col items-start gap-1.5 text-sm'
            }
        >
            <label htmlFor={id} className="  text-sm text-app-main-text ">
                {label}
            </label>
            <div
                className={'w-full rounded-lg border border-[#DFDFDF] p-0.5'}
                data-id={'input-wrapper'}
            >
                <input
                    placeholder={placeholder}
                    name={id}
                    id={id}
                    role={'input'}
                    style={{ letterSpacing: '0.8px' }}
                    className={`h-11 p-3  ${inputClassName || ''} `}
                    {...config}
                />
            </div>
        </div>
    );
};
