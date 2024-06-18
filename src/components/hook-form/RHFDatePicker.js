import React from 'react';
import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from "react-hook-form";
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

RHFDatePicker.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string
};

export function RHFDatePicker({ name, size = 'medium', defaultValue = null, styles = null, ...props }) {
    const { control } = useFormContext()

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
                if (value && value < props.minDate) {
                    onChange(defaultValue)
                }
                return (
                    <DatePicker
                        {...props}
                        onChange={onChange}
                        value={value}
                        renderInput={(params) => (
                            <TextField
                                autoComplete='off'
                                {...params}
                                size={size}
                                error={!!error}
                                helperText={error?.message}
                                sx={styles}
                            />
                        )}
                    />
                )
            }}
        />
    )
}

// ----------------------------------------------------------------------
export function RHFTimePicker({ name, defaultValue = null, styles = null, ...props }) {
    const { control } = useFormContext()

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
                if (value && value < props.minTime) {
                    onChange(defaultValue)
                }
                return (
                    <TimePicker
                        {...props}
                        onChange={onChange}
                        value={value}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                error={!!error}
                                helperText={error?.message}
                                sx={styles}
                            />
                        )}
                    />
                )
            }}
        />
    )
}