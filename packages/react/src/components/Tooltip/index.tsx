import Tooltip, {TooltipProps} from "@mui/material/Tooltip";
import {Text} from "../Text";


export function Tooltips({children, ...rest}: TooltipProps) {
    return (
        <Tooltip {...rest}>
            {children}
        </Tooltip>
    )
}

