import React, { useEffect, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography, TextField, Box } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/ClearRounded';
import { MonthPicker } from '@mui/x-date-pickers';

export default function DateFilter({ value, label, allowTypingChange = true, onChange, labelStyle, size = "small", datePickerProps, width, allowClearButton = false }) {
    const error = null;

    const [date, setDate] = useState(value);

    useEffect(() => {
        setDate(value);
    }, [value])

    const handleChange = (e) => {
        setDate(e);
    }

    const handleAccept = (e) => {
        onChange?.(e);
    }

    const handleClear = (e) => {
        onChange?.(null);
        setDate(null);
    }

    const onKeyDown = (e) => {
        if(allowTypingChange)  e.preventDefault();
     };
    
    return (
        <Box sx={{ display: "flex" }}>
            <Typography variant="subtitle2"
                sx={{
                    flexGrow: 1,
                    mt: 1,
                    fontWeight: 500, mr: 1,
                    ...labelStyle && labelStyle
                }}>
                {label}
            </Typography>
            
            <DatePicker
                onAccept={handleAccept}
                {...datePickerProps}
                onChange={handleChange}
                InputAdornmentProps={{ position: 'start' }}
                value={date ?? null}
                actionBar={<>S</>}
                renderInput={(params) => {
                    return <TextField
                        {...params}
                        InputProps={{
                            ...params?.InputProps,
                            ...allowClearButton && {
                                endAdornment: (<InputAdornment position="end">
                                    {
                                        date && <IconButton
                                            onClick={handleClear}
                                            edge="end"
                                            sx={{
                                                color: "#212B36"
                                            }}
                                        >
                                            <ClearIcon sx={{ width: "1.2rem", height: "1.2rem" }} />
                                        </IconButton>
                                    }
                                </InputAdornment>)
                            },
                        }}
                        onKeyDown={onKeyDown}
                        size={size}
                        error={!!error}
                        helperText={error?.message}
                        sx={{
                            '& .MuiInputBase-root': {
                                height: '40px',
                                width: width ?? (allowClearButton ? "160px" : "140px")
                            },
                            '& .MuiInputAdornment-root': {
                                marginRight: 0
                            },
                            '& .MuiInputBase-input': {
                                padding: "8px 0",
                            }
                        }}
                    />
                }}
            />
        </Box>
    )
}