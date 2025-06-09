import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './button.module.scss';

type ClassesKey = 'root';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    classes?: Classes<ClassesKey>;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ classes, children, ...props }, ref) => {
    return (
        <button className={clsx(styles.root, classes?.root)} {...props} ref={ref}>
            {children}
        </button>
    );
});

Button.displayName = 'Button';
