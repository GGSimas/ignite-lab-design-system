import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
    title: 'components/Text',
    component: Text,
    args: {
        children: 'This is a default text',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'xl'],
            control: {
                type: 'inline-radio',
            }
        }
    }
} as Meta<TextProps>;

export const Default: StoryObj = {}

export const Small: StoryObj<TextProps> = {
    args: {
        children: 'This is a small text',
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args:{
        children: 'This is a large text',
        size: 'xl'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args:{
        asChild: true,
        children: (
            <p>This is a custom component text</p>
        ),
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}