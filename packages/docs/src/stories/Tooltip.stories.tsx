import type {Meta, StoryObj} from '@storybook/react'
import {TooltipsProps, Tooltips} from '@lars-ui/react'

export default {
    title: 'Data display/Tooltip',
    component: Tooltips,
} as Meta<TooltipsProps>

export const Primary: StoryObj<TooltipsProps> = {
    args: {
        content: 'Add to library',
    },
}
