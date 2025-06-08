import { forwardRef, HTMLAttributes } from 'react';

import UploadIcon from '@assets/icons/upload-icon.svg?react';
import AlertIcon from '@assets/icons/alert-icon.svg?react';
import ArrowRightIcon from '@assets/icons/arrow-right.svg?react';
import RefreshIcon from '@assets/icons/refresh-icon.svg?react';
import LikeIcon from '@assets/icons/like-icon.svg?react';
import FlagIcon from '@assets/icons/flag-icon.svg?react';
import ChevronLeftIcon from '@assets/icons/chevron-left.svg?react';
import ChevronRightIcon from '@assets/icons/chevron-right.svg?react';

export const icons = {
    upload: UploadIcon,
    alert: AlertIcon,
    arrow_right: ArrowRightIcon,
    refresh: RefreshIcon,
    like: LikeIcon,
    flag: FlagIcon,
    chevron_left: ChevronLeftIcon,
    chevron_right: ChevronRightIcon,
};

export type IconKind = keyof typeof icons;

export type IconProps = {
    name: IconKind;
} & HTMLAttributes<SVGElement>;

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const { name, ...otherProps } = props;
    const Tag = icons[name];

    return <Tag {...otherProps} ref={ref} />;
});

Icon.displayName = 'Icon';
