import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}
export function Button({ children, asChild = false }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp className={
            clsx(
                'py-4 px-3 rounded bg-cyan-500 w-full  font-semibold text-black text-sm hover:bg-cyan-300 transition-colors focus:ring-2 ring-white',
            )
        }>
            {children}
        </Comp>
    );
}