import { forwardRef } from 'react';
import { Chip } from "@mui/material"
import Iconify from "../../Iconify"

const ChipButton = forwardRef(({ open, onOpen, sx, ...props }, ref) => {
    return <Chip ref={ref}
        variant="outlined"
        onClick={onOpen}
        deleteIcon={<Iconify sx={{width: "20px", height: "20px"}} 
            icon={open ? 'eva:chevron-up-fill' : 'eva:chevron-down-fill'} />}
        onDelete={onOpen}
        sx={{ 
            fontWeight: 500, 
            color:"text.secondary", 
            '&.MuiChip-root .MuiChip-deleteIcon': {
                color : theme => theme.palette.grey[800],
            },
            ...sx,
        }}
        {...props}
    />
})

export default ChipButton;