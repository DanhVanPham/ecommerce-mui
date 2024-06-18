import { Chip } from '@mui/material'
import React from 'react'
/**
 * Condition Item
 * @param {*} param0 
 * @returns 
 */
export function ConditionItem({ item, displayProperty, getText, onDelete }) {
    const text = getText?.(item) ?? item?.[displayProperty] ?? item?.toString();
    return <Chip label={text}
            variant="filled"
            size="small"
            onDelete={() => onDelete(item)}
            sx={{ m: 0.1, fontWeight:"400" }}/>
}
export default ConditionItem 
