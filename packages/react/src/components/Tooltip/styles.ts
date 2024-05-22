import {styled} from "../../styles";
import * as Tooltip from "@radix-ui/react-tooltip";

export const TooltipsContainer = styled(Tooltip.Root, {
    padding: '$1',
    backgroundColor: '$gray100',
    borderRadius: '$1',
})
