import type {Meta, Story} from '@storybook/react'
import {toast} from 'react-toastify';

import {Toasts} from "@lars-ui/react/src/components/Toasts";
import {ToastContainerProps} from "react-toastify/dist/types";
import React from "react";
import {Button} from "@lars-ui/react";

export default {
    title: 'Data display/Toasts',
    component: Toasts
} as Meta<ToastContainerProps>


const ButtonWithToast: React.FC = () => {
    const handleClick = () => {
        toast.info('Este é um exemplo de toast!');
    };

    return <Button onClick={handleClick}>Clique aqui</Button>;
};

const Template: Story<ToastContainerProps> = (args) => (
    <>
        <ButtonWithToast/>
        <Toasts {...args} />
    </>
);
export const Primary = Template.bind({

});
