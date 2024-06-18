// @mui
import { Typography, Box } from '@mui/material'
// components
import MenuPopover from '../../MenuPopover'
// others

export default function FilterMenu({ open, label,
    onClose, children, renderActions, ...others }) {

    return (
        <MenuPopover
            open={Boolean(open)}
            onClose={onClose}
            anchorEl={open}
            sx={{ width: 360, px: 2.5, py: 2 }}
            {...others}
        >
            <Typography variant="subtitle1" sx={{ flexGrow: 1, textAlign: 'left' }}>
                {label}
            </Typography>
            <Box my={1} mb={1.5}>
                {children}
            </Box>
            {renderActions}
        </MenuPopover>
    )
}