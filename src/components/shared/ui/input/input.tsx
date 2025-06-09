import React, { forwardRef, InputHTMLAttributes } from 'react';
import styles from './input.module.scss';
import clsx from 'clsx';

type ClassesKeys = 'root' | 'input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelText?: string;
    classes?: Classes<ClassesKeys>;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ labelText, classes, ...props }, ref) => {
    return (
        <label className={clsx(styles.root, classes?.root)}>
            {labelText && labelText}
            <input className={clsx(styles.input, classes?.input)} ref={ref} {...props} />
        </label>
    );
});

Input.displayName = 'Input';
