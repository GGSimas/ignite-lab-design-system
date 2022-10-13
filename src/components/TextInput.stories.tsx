import { Meta, StoryObj } from '@storybook/react';
import {TextInput, TextInputInputProps } from './TextInput';
import { Envelope, Lock } from 'phosphor-react';

export default {
    title: 'components/TextInput',
    component: TextInput.Root,
    args: {
       children: (
            <TextInput.Input  placeholder="An default placeholder" />
       )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
} as Meta<TextInputInputProps>

export const Default: StoryObj<TextInputInputProps> = {};

export const EmailInput: StoryObj<TextInputInputProps> = {
    args: {
        children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input  placeholder="An email input placeholder" type="email" />
        ]
    }
};

export const InputPassword: StoryObj<TextInputInputProps> = {
    args: {
        children: [
            <TextInput.Icon>
                <Lock />
            </TextInput.Icon>,
            <TextInput.Input  placeholder="An password input placeholder" type="password" />
        ]
    }
}; 