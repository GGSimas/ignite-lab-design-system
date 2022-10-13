import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
    title: 'components/Button',
    component: Button,
    args: {
        children: 'Default button',
    }

} as Meta<ButtonProps>


export const DefaultButton: StoryObj<ButtonProps> = {};