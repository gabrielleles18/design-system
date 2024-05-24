import Tooltip, {TooltipProps} from "@mui/material/Tooltip";


export function Tooltips({children, ...rest}: TooltipProps) {
    return (
        <Tooltip {...rest}>
            {children}
        </Tooltip>
    )
}

