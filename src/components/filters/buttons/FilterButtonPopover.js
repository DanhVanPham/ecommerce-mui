import PropTypes from 'prop-types'
import { useState } from 'react';
import FilterButton from './FilterButton'
/**
 * 
 * @param {*} label 
 * @param {*} selectionPopoverRender 
 * @returns 
 */
export function FilterButtonPopover({ customBtn, label, onOpenEvent, selectionPopoverRender, ...others }) {
    const [open, setOpen] = useState(null);
    const handleOpen = (event) => {
        setOpen(event.currentTarget);
        onOpenEvent?.()
    };
    const handleClose = () => {
        setOpen(null);
    };
    return (
        <>
            {
                customBtn?.(open, handleOpen) ||
                <FilterButton open={open} onOpen={handleOpen}
                    label={label} {...others} />
            }
            {open &&
                selectionPopoverRender({ open: open, anchorEl: open, onClose: handleClose })
            }
        </>
    )
}
FilterButtonPopover.prototype = {
    label: PropTypes.any.isRequired,
    selectionPopoverRender: PropTypes.func.isRequired
}
export default FilterButtonPopover