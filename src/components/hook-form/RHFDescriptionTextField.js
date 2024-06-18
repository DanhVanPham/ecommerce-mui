import { Box, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

export default function RHFDescriptionTextField({ name, maxLength = 255, ...other }) {
    const { control } = useFormContext();
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
    };
    const remainingCharacters = maxLength - inputValue.length;

    return (
        <Box >
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, field }, fieldState: { error } }) => (
                    <TextField
                        {...field}
                        fullWidth
                        onChange={(e) => {
                            onChange(e)
                            handleChange(e)
                        }}
                        value={typeof field?.value === 'number' && field?.value === 0 ? '' : field?.value}
                        error={!!error}
                        helperText={error?.message}
                        inputProps={{ maxLength }}
                        {...other}
                    />
                )}
            />
            <Stack p={1} alignItems='flex-end'>
                <Typography variant="caption" color="textSecondary">
                    {`${remainingCharacters}/${maxLength} `}
                </Typography>
            </Stack>
        </Box>
    );
}