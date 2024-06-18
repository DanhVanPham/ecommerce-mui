import { useState, useEffect } from "react"
import { isEmpty } from "lodash"
// @mui
import { styled, Autocomplete, IconButton, Stack, Typography, MenuItem } from "@mui/material"
// Other
import Iconify from "../../Iconify"
import { CustomTextField } from "../../custom-input"
import useSearchHistoryContext from "./useSearchHistoryContext"
/*--------------------------------------------------------------------------------*/
const SearchBoxStyle = styled(Stack)(({ theme }) => {
    return {
        width: "100%",
    }
})

export function SearchBox({ id, defaultText,
    onSearch, allowTypingSearch = false,
    allowSearchWhenEmpty = true,
    allowShowHistory = true, placeholder, showSearchButton = true, sx, ...props }) {
    const [open, setOpen] = useState(false);
    const [searchText, setSearchText] = useState(defaultText ?? "")
    const [selectedKeyword, setSelectedKeyword] = useState("")
    const { recentlyKeywords, addKeyword } = useSearchHistoryContext();
    useEffect(() => {
        setSearchText(defaultText || "")
    }, [defaultText])

    const handleSearch = (text) => {
        const keyword = text ?? "";
        if (!isEmpty(keyword)) addKeyword(keyword)
        setSearchText(keyword);
        setSelectedKeyword("");
        onSearch?.(keyword)
        setOpen(false)
    }

    const handleTextChange = (e, newInputValue, reason) => {
        if (!e?.target) return;
        if (reason === 'clear') {
            setSearchText('')
            onSearch?.('')
        }
        else {
            const text = e.target.value
            setSearchText(text)
            if (allowTypingSearch) onSearch?.(text)
        }
    }

    const handleSelectChange = (e, value) => {
        if (defaultText === (value ?? '')) return;
        if (allowSearchWhenEmpty || !isEmpty(value)) handleSearch(value)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const text = e.target.value;
            e.defaultMuiPrevented = true;
            handleSearch(text);
        }
    }

    const closePopper = () => setOpen(false);
    const openPopper = () => setOpen(true);

    const handleSearchBtnClick = (e) => {
        handleSearch(searchText);
    }

    return <SearchBoxStyle spacing={1} direction="row" sx={sx}>
        <Autocomplete
            {...props}
            freeSolo
            open={open}
            onOpen={openPopper}
            onClose={closePopper}
            onKeyDown={handleKeyDown}
            onChange={handleSelectChange}
            disableClearable={!defaultText}
            clearOnEscape
            clearOnBlur
            autoComplete
            isOptionEqualToValue={(op, value) => op === value}
            size='small'
            sx={{ fontSize: "0.875rem", flex: 1 }}
            options={allowShowHistory ? recentlyKeywords : []}
            inputValue={searchText}
            onInputChange={handleTextChange}
            value={selectedKeyword}
            renderOption={(props, option) => {
                return <MenuItem {...props}>
                    <Stack sx={{ alignItems: "center" }} spacing={1.5} direction={"row"}>
                        <Iconify sx={{ width: "20px", height: "20px" }} icon={"ic:round-access-time"} />
                        <Typography>{option}</Typography>
                    </Stack>
                </MenuItem>
            }}
            renderInput={(params) => (
                <CustomTextField
                    {...params}
                    placeholder={placeholder ?? "Search..."}
                    InputProps={{
                        ...params.InputProps
                    }}
                />
            )}
        />
        {showSearchButton && <IconButton onClick={handleSearchBtnClick} sx={{ borderRadius: 1 }}>
            <Iconify icon={'bi:search'} />
        </IconButton>}
    </SearchBoxStyle>
}