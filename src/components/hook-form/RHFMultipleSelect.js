import PropTypes from 'prop-types'
// form
import { Controller, useFormContext } from 'react-hook-form'
// @mui
import { Autocomplete, Avatar, Box, Chip, CircularProgress, Stack, TextField, Typography } from '@mui/material'

// ---------------------------------------------------------

RHFMultipleSelect.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.array,
}

export default function RHFMultipleSelect({ name, size = 'small', isLoading = false, isReadOnly = false,
    options = [], isDisableClearable = false, isShowAvatar = false, onDisableOption = () => { }, ...other }) {
    const { control } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <Autocomplete
                    {...field}
                    multiple
                    fullWidth
                    freeSolo={isReadOnly}
                    loading={isLoading}
                    readOnly={isReadOnly}
                    onChange={(event, newValue) => field.onChange(newValue)}
                    options={options}
                    disableClearable={isDisableClearable}
                    getOptionLabel={(option) => option?.value || option}
                    isOptionEqualToValue={(option, value) => option.key === value.key}
                    renderOption={(props, option) => (
                        <Box component='li' sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            {isShowAvatar && (
                                <Avatar sx={{ width: 24, height: 24, mr: 1 }}>
                                    {option?.name?.charAt(0).toUpperCase()}
                                </Avatar>
                            )}
                            <Stack>
                                {option?.name && <Typography variant='caption'>{option.name}</Typography>}
                                <Typography variant='caption'>{option.value}</Typography>
                            </Stack>
                        </Box>
                    )}
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip key={option.key}
                                disabled={option?.disabled}
                                size={size}
                                label={
                                    <Stack>
                                        {option?.name && <Typography variant='caption'>{option.name}</Typography>}
                                        <Typography variant='caption'>{option.value}</Typography>
                                    </Stack>
                                }
                                {...getTagProps({ index })}
                                avatar={isShowAvatar ? (
                                    <Avatar>
                                        {option?.name?.charAt(0).toUpperCase()}
                                    </Avatar>
                                ) : null}
                                sx={{
                                    height: option?.name ? 40 : 32,
                                    '& .MuiChip-avatar': { width: 32, height: 32 }
                                }}
                            />
                        ))
                    }
                    getOptionDisabled={option => onDisableOption(option)}
                    renderInput={(params) => <TextField fullWidth error={!!error}
                        helperText={error?.message} {...params} {...other}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <>
                                    {isLoading ? <CircularProgress size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </>
                            ),
                        }}
                    />}
                />
            )}
        />
    )
}