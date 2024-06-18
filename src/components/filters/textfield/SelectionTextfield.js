import { TextField, MenuItem, Divider } from '@mui/material';

/**
 * 
 * @param {*} options An array of options [ opt ] or [ {id, ...otherFields} ]
 * @param {*} optLabelRender Specifies how options are displayed function(option)=>{}
 * @param {*} hasNullOpt Is there a null/empty optional value? 
 * True if select can be null (Default is false === selection is required)
 * @param {*} nullOptText Text value for option null/empty
 * @returns 
 */
export default function SelectionTextfield({ options, optLabelRender, optSx,
    hasNullOpt=false, nullOptText='None', nullOptSx, 
    sx, ...other }){

    return <TextField fullWidth size='small' select
        SelectProps={{
            MenuProps: { PaperProps: { sx: { maxHeight: 220 } } },
        }}
        sx={{ 
            textTransform: 'capitalize', 
            maxHeight: 40,
            ...sx,
        }}
        {...other}>
        {hasNullOpt && <MenuItem value=""
            sx={{
                mx: 1,
                borderRadius: 0.75,
                typography: 'body2',
                fontStyle: 'italic',
                color: 'text.secondary',
                ...nullOptSx,
            }}> {nullOptText} </MenuItem>}
        {hasNullOpt && <Divider />}
        {options?.map((option, index) => 
            <MenuItem key={index}
                value={option?.id || option}
                sx={{
                    mx: 1,
                    my: 0.5,
                    borderRadius: 0.75,
                    typography: 'body2',
                    textTransform: 'capitalize',
                    '&:first-of-type': { mt: 0 },
                    '&:last-of-type': { mb: 0 },
                    ...optSx,
                }}>
                {optLabelRender?.(option) || option?.value || option}
            </MenuItem>
        )}
    </TextField>
}