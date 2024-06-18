import React, { useEffect, useRef, useState } from 'react';
import { Typography, Box, TextField } from '@mui/material';
import { EventRounded } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import { format } from 'date-fns';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/ClearRounded';
import { MonthPicker } from './MonthPicker';

export default function MonthFilter({ value, inputFormat = 'yyyy-mm', minDate = new Date("2023-01-01"), maxDate = new Date("2025-05-05"), error, label, labelStyle, width, allowClearButton = false, allowTyping = false }) {

    const [open, setOpen] = useState(null)

    const [date, setDate] = useState(null)

    const [input, setInput] = useState("")

    useEffect(() => {
        setDate(value);
    }, [value])

    const handleChange = (newDate) => {
        const formated = format(newDate, inputFormat.replace('mm', "MM"))
        setInput(formated);
        setDate(newDate)
        setOpen(null);
    }

    const handleTyping = (e) => {
        if (!allowTyping) e.preventDefault();
    }

    const handleClear = (e) => {
        setInput("")
        setDate(null);
    }

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
            <TextField
                placeholder={inputFormat}
                value={input}
                onKeyDown={handleTyping}
                InputProps={{
                    startAdornment: (<InputAdornment position="start">
                        <IconButton onClick={e => setOpen(e.currentTarget)} edge="start"
                            sx={{ color: "#212B36" }}>
                            <EventRounded sx={{ width: "1.2rem", height: "1.2rem" }} />
                        </IconButton>
                    </InputAdornment>),
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
                    }
                }}
                onChange={e => setInput(e.target.value)}
                size={"small"}
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
                        padding: "0px 0",
                    }
                }}
            />
            <MonthPicker
                onClose={() => setOpen(null)}
                open={open}
                value={date}
                minDate={minDate}
                maxDate={maxDate}
                onChange={handleChange}
            />
        </Box>
    )
}

