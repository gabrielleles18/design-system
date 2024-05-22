import {Tooltip, TooltipProvider} from '@radix-ui/react-tooltip';

interface TooltipsProps {
    content: string
}

export function Tooltips({content}: TooltipsProps) {
    return (
        <TooltipProvider>
            <Tooltip/>
        </TooltipProvider>
    )
}
