import { TextField, InputAdornment, Tooltip, IconButton } from "@mui/material"
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import Iconify from "../Iconify"

export function CopiableTextField({ value, onChange, readOnly = true, ...props }) {
    const { enqueueSnackbar } = useSnackbar();
    const { copy } = useCopyToClipboard();
    const [text, setText] = useState("")

    useEffect(() => {
        setText(value)
    }, [value])

    const onCopy = (text) => {
        if (text) {
            enqueueSnackbar('Copied!');
            copy(text);
        }
    };
    const endAdornment = <InputAdornment position="end">
        <Tooltip title="Copy">
            <IconButton onClick={() => onCopy(text)}>
                <Iconify icon="eva:copy-fill" width={24} />
            </IconButton>
        </Tooltip>
    </InputAdornment>

    const handleChange = (e) => {
        setText(e.target.value)
        onChange(e.target.value)
    }
    return <TextField fullWidth
        {...props}
        sx={{
            ...readOnly && {
                '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                        borderColor: '#919eab52',
                    }
                }
            },
            ...props?.sx
        }}
        value={text}
        onChange={handleChange}
        InputProps={{
            endAdornment: endAdornment,
            ...readOnly && {
                readOnly: true
            }
        }}
    />
}