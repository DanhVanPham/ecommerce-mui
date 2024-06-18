import { useEffect, useMemo, useRef, useState } from "react"
import { Box, MenuItem, Chip } from "@mui/material"
import { isArray, isEmpty } from "lodash";
import Iconify from "../../Iconify"
import MenuPopover from "../../MenuPopover"
import StateManager, { specifyState } from "../../StateManager";
import { LoadingContent, EmptyContent } from "../../compopent-utils/popover";

export default function FilterChip({ label,
    onChange,
    defaultValue = null,
    options = [],
    allowsMultipleSelection = false,
    allowChangeWhenSelection = true,
    renderOption = null,
    isLoading = false,
    renderActions,
    ...props
}) {
    const chipRef = useRef()
    const [selectedOptions, setSelectedOptions] = useState(null);
    const [open, setOpen] = useState(null)

    useEffect(() => {
        const items = defaultValue ? options.filter(op => isDefaulSelected(op)) : []
        setSelectedOptions(items)
    }, [defaultValue, options])

    const title = useMemo(() => {
        const len = selectedOptions ? selectedOptions.length : 0;
        if (len === 0) return label ?? "";
        if (len > 1) return isEmpty(label) ? { len } : `${label}・${len}`
        return isEmpty(label) ? selectedOptions[0].label : `${label}・${selectedOptions[0].label}`
    }, [label, selectedOptions])

    const selectCount = selectedOptions?.length ?? 0;

    const isDefaulSelected = (op) => {
        if (defaultValue === null) return false;
        if (!isArray(defaultValue)) return op.value === defaultValue;
        return defaultValue.filter(v => v === op.value)?.length > 0 ?? false;
    }
    const isSelected = (op) => {
        if (selectedOptions === null) return false;
        return selectedOptions.filter(v => v.value === op.value)?.length > 0 ?? false;
    }
    const handleSelect = (option) => {
        let arr = []
        if (allowsMultipleSelection) {
            const isSelected = selectedOptions.findIndex(s => s.value === option.value) !== -1;
            if (isSelected) arr = selectedOptions.filter(i => i.value !== option.value)
            else arr = [...selectedOptions, option]
        }
        else {
            arr = [option]
        }
        setSelectedOptions(arr)
        if (!allowsMultipleSelection) handleClose();
        if (allowChangeWhenSelection) onChange?.(arr)
    }

    const handleConfirm = () => {
        onChange?.(selectedOptions)
        handleClose()
    }

    const handleClose = () => setOpen(null)

    const state = specifyState({
        isSuccess: true,
        data: options,
        isLoading,
    })

    return <>
        <Chip label={title}
            ref={chipRef}
            variant="outlined"
            // disabled={isLoading}
            onClick={(e) => setOpen(chipRef.current)}
            deleteIcon={<Iconify 
                sx={{ width: "20px", height: "20px" }} 
                icon={open ? 'eva:chevron-up-fill' : 'eva:chevron-down-fill'} 
            />}
            onDelete={(e) => setOpen(chipRef.current)}
            sx={{
                fontWeight: 500,
                color: "text.secondary",
                borderColor: selectCount > 0 ? "black" : "",
                '&.MuiChip-root .MuiChip-deleteIcon': {
                    color: "#212B36"
                }
            }}
        />
        <MenuPopover open={open} onClose={handleClose} 
            arrow={'top-left'}
            sx={{ 
                mt: 1, minWidth: 150, 
                minHeight: isEmpty(options) && 100, 
            }}>
            <StateManager state={state}
                loadingState={<LoadingContent size={25} />}
                emptyState={<EmptyContent sx={{ fontWeight: 500 }} />}>
                {options.map((option) => {
                    const params = { option, selected: isSelected(option), handleSelect };
                    return renderOption?.(params) || defaulRenderOption(params)
                })}
            </StateManager>
            {renderActions && renderActions(selectedOptions, handleConfirm)}
        </MenuPopover>
    </>
}
function defaulRenderOption({ option, selected, handleSelect }) {
    return (
        <MenuItem
            sx={{ minHeight: "34px" }}
            key={option.value}
            selected={selected} // option === filterTag
            onClick={() => {
                handleSelect?.(option); // setFilterTag
            }}>
            {option.value !== "none" ? option.label : <Box sx={{ height: 20, width: 1 }} />}
        </MenuItem>
    )
}