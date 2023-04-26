import { Story } from '@storybook/react';
// eslint-disable-next-line feature-sliced-design-checker/layer-imports
import '@/app/styles/index.scss';

export const StyleDecorator = (story: () => Story) => story();
