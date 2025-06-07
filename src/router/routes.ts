import MainTest from '@views/main-test/main-test';
import { ComponentType } from 'react';

export interface Route {
    path: string;
    Component: ComponentType;
}

export const routes: Route[] = [{ path: '/test', Component: MainTest }];
