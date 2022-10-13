import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

export default {
    title: 'components/Heading',
    component: Heading,
    args: {
        children: 'This is a default Heading',
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
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args: {
        children: 'This is a small Heading',
        size: 'sm'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args:{
        children: 'This is a large Heading',
        size: 'xl'
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args:{
        asChild: true,
        children: (
            <h1>This is a custom component Heading</h1>
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