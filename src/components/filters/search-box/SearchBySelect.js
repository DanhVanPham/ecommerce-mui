import {
    styled,
    TextField,
    MenuItem
} from "@mui/material"
/*--------------------------------------------------------------------------------*/

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

export function SearchBySelect({ value, options, onChange, trans }) {
    return <TextField select
        size='small'
        value={value}
        label={trans?.('toolbar.searchBy') || ""}
        SelectProps={{
            MenuProps: {
                PaperProps: { sx: { maxHeight: 200 }, width: "200px" },
            },
        }}
        sx={{ width: 0.2 }}>
        {
            options?.map((option) => (
                <MenuItemStyle key={option.value}
                    onClick={e => onChange(e, option)}
                    value={option.value}>
                    {option.label}
                </MenuItemStyle>
            ))}
    </TextField>
}