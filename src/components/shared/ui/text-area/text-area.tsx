import { FC, HTMLAttributes, useEffect, useRef } from 'react';
import styles from './text-area.module.scss';
import clsx from 'clsx';

type ClassesKey = 'root';

interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
    classes?: Classes<ClassesKey>;
    height?: number;
}

export const Textarea: FC<TextAreaProps> = ({ classes, height, ...props }) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleInput = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';

            if (height && textareaRef.current.scrollHeight > height)
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
            else textareaRef.current.style.height = `${height}px`;
        }
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.addEventListener('input', handleInput);

            handleInput();

            return () => {
                textareaRef.current?.removeEventListener('input', handleInput);
            };
        }
    }, [textareaRef.current?.value]);

    return (
        <textarea
            className={clsx(styles.root, classes?.root)}
            ref={textareaRef}
            style={{ height }}
            {...props}
            placeholder=" "
        ></textarea>
    );
};
