import { FC } from 'react';
import { DayPicker, DayPickerProps, getDefaultClassNames } from 'react-day-picker';

import { ru } from 'date-fns/locale/ru';
import clsx from 'clsx';

import 'react-day-picker/style.css';
import styles from './datepicker.module.scss';

export const Datepicker: FC<DayPickerProps> = ({ ...props }) => {
    const { root, caption_label, month_caption, button_next, button_previous } = getDefaultClassNames();
    return (
        <DayPicker
            navLayout="around"
            locale={ru}
            classNames={{
                root: clsx(root, styles.root),
                button_next: clsx(button_next, styles.next),
                button_previous: clsx(button_previous, styles.prev),
                month_caption: clsx(month_caption, styles.monthCaption),
                day: styles.day,
                today: styles.todayButton,
                caption_label: clsx(caption_label, styles.captionLabel),
            }}
            {...props}
        />
    );
};
