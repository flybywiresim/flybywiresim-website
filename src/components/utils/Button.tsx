import { ReactNode } from 'react';

type ButtonProps = {
    className?: string,
    children: ReactNode,
    onClick?: any
};

export function Button(props: ButtonProps): JSX.Element {
    return (
        <button
            onClick={props.onClick}
            type="button"
            className={`focus:outline-none inline-flex justify-center rounded-full py-3 text-lg shadow-md-dark-contrast ${props.className}`}
        >
            {props.children}
        </button>
    );
}
