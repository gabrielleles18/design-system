import type {Meta, StoryObj} from '@storybook/react'
import {Button, Tooltips} from '@lars-ui/react'
import {TooltipProps} from '@mui/material/Tooltip'

export default {
    title: 'Data display/Tooltip',
    component: Tooltips,
    argTypes: {
        arrow: {
            options: [true, false],
            control: {
                type: 'inline-radio',
            },
        },
        placement: {
            options: ['top', 'right', 'bottom', 'bottom-end', 'left'],
            control: {
                type: 'inline-radio',
            },
        }
    },
} as Meta<TooltipProps>

export const Arrow: StoryObj<TooltipProps> = {
    args: {
        children: <Button>Enviar</Button>,
        title: 'Oi...',
        arrow: true
    },
}

export const NoArrow: StoryObj<TooltipProps> = {
    args: {
        children: <Button>Enviar</Button>,
        title: 'Testando o elemento Tooltip',
        arrow: false
    },
}

