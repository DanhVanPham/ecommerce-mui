import PropTypes from 'prop-types';
import { Button } from '@mui/material'
import Iconify from '../../Iconify';
/**
 * a filter button
 * @param {*} param0 
 * @returns 
 */
export function FilterButton({ open, label, onOpen, sx, ...others }) {
    return (
        <Button color='inherit'
            disableRipple
            endIcon={<Iconify icon={open ? "eva:chevron-up-fill" : "eva:chevron-down-fill"} />}
            onClick={onOpen}
            sx={{
                flexShrink: 0,
                fontWeight: 500,
                '& .MuiButton-endIcon':{ ml: 0 },
                ...sx,
            }}
            {...others}>
            {label}
        </Button>
    )
}
FilterButton.propTypes = {
    open: PropTypes.any,
    label: PropTypes.any,
    onOpen: PropTypes.func
};
export default FilterButton