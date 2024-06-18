import { IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import Iconify from '../../Iconify';
import { FilterBodyStyle, FilterConditionStyle, FilterContainerStyle, FilterHeaderStyle } from './styles'
/**
 * A container for filter buttons
 * @param {*} param0 
 * @returns 
 */
export function FilterButtonsGroup({ label, isHideButton = false, isShowLabel = true,
    children, onFilterItemDeleted, sxFilterCondition, ...others }) {
    const [isOpenFilter, setOpenFilter] = useState(true);

    const handleChangeStatusFilter = () => {
        setOpenFilter(prev => !prev);
    }
    return (
        <FilterContainerStyle {...others} >
            <FilterHeaderStyle style={{
                display: isShowLabel ? "inline-block" : "none"}}>
                <IconButton onClick={handleChangeStatusFilter} sx={{
                    display: isHideButton ? "none" : "inline-block"}}>
                    <Iconify icon={isOpenFilter ? 'akar-icons:chevron-down' : 'akar-icons:chevron-up'} />
                </IconButton>
                <Typography variant='h6' color="text.secondary">{label}</Typography>
            </FilterHeaderStyle>
            {isOpenFilter &&
                <FilterBodyStyle>
                    <FilterConditionStyle {...sxFilterCondition}>
                        {children}
                    </FilterConditionStyle>
                </FilterBodyStyle>
            }
        </FilterContainerStyle>
    )
}
export default FilterButtonsGroup 
