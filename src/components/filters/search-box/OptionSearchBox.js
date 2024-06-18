import { MenuItem, Stack, styled, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import useResponsive from "../../../hooks/useResponsive"
import { SearchBox } from "./SearchBox"
/*--------------------------------------------------------------------------------*/
const RootStyle = styled(Stack)(({ theme }) => {
    return {
        width: "100%"
    }
})

const MenuItemStyle = styled(MenuItem)(({ theme }) => {
    return {
        margin: theme.spacing(0.5, 1),
        borderRadius: 0.75,
        typography: 'body2',
        textTransform: 'capitalize',
        '&:first-of-type': { marginTop: 0 },
        '&:last-of-type': { marginButton: 0 },
    }
})

function SearchBySelect({ value, options, onChange, label, ...props }) {
    return <TextField select
        size='small'
        value={value || ""}
        label={label || ""}
        SelectProps={{
            MenuProps: {
                PaperProps: { sx: { maxHeight: 200 }, width: "200px" },
            },
        }}
        {...props}>
        {
            options?.map((option) => (
                <MenuItemStyle key={option.value}
                    onClick={e => onChange?.(e, option)}
                    value={option.value}>
                    {option.label}
                </MenuItemStyle>
            ))}
    </TextField>
}

export default function OptionSearchBox({
    id, defaultOptionValue, onOptionChange,
    options, defaultText,
    onSearch, allowTypingSearch = false,
    allowShowHistory = true, placeholder, ...props }) {
    const smUp = useResponsive("up", "sm")
    const [selectedValue, setSelectedValue] = useState(defaultOptionValue)
    useEffect(() => {
        setSelectedValue(defaultOptionValue)
    }, [defaultOptionValue])
    const handleOptionChange = (e, option) => {
        setSelectedValue(option?.value)
        onOptionChange(option)
    }
    return (
        <RootStyle
            spacing={1}
            direction={smUp ? "row" : "column"} >
            <SearchBySelect
                sx={{ width: smUp ? 0.2 : 1, ...smUp && { maxWidth: "100px" } }}
                value={selectedValue || ""}
                onChange={handleOptionChange}
                options={options} />
            <Stack sx={{ width: smUp ? 0.8 : 1 }}
                spacing={1}
                direction={"row"}>
                <SearchBox
                    defaultText={defaultText}
                    onSearch={onSearch}
                    allowTypingSearch={allowTypingSearch}
                    allowShowHistory={allowShowHistory}
                    placeholder={placeholder}
                    {...props} />
            </Stack>
        </RootStyle>
    )
}