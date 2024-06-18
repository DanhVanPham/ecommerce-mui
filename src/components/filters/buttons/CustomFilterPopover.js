import React from "react";
import { Typography } from "@mui/material";
import { FilterButtonPopover } from "./FilterButtonPopover";
import { SelectionPopover, SearchMode } from "../../selection-popover";

// ----------------------------------------------------------------------

export function FilterButton({ buttonProps, labelRender,
    children, ...other }) {
    const { label, selectedItems } = other ?? {}

    const defaultLabel = <>
        {label}
        {selectedItems?.length > 0 && <span> {`・`}
            <Typography component="span"
                variant='body2' color='text.secondary'>
                {selectedItems.length}
            </Typography>
        </span>}
    </>

    return <FilterButtonPopover size='small'
        label={labelRender?.(label) ?? defaultLabel}
        selectionPopoverRender={(props) => React.cloneElement(children, {
            ...props, ...other
        })}
        {...buttonProps}
    />
}
export function FilterPopover({ label, localSearchCustom, ...other }) {
    return <SelectionPopover
        // isSearchBarShown
        title={label}
        searchOptions={{
            mode: SearchMode.offline,
            predicate: (item, keyword) => item.name.includes(keyword),
            localSearchCustom
        }}
        displayProperty="name"
        selectId={(item) => item.id}
        {...other}
    />
}
const stylesFiltered = (arrValue) => {
    if (!arrValue?.length) return null;
    return {
        color: 'primary',
        variant: 'soft',
    }
}