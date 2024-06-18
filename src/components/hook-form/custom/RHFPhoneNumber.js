import { useEffect, useState } from "react";
import { useFormContext, useController } from "react-hook-form";
import { isEqual } from "lodash";
// @mui
import { TextField, Stack, Box, Typography } from "@mui/material";
//
import { HelperLabel } from "../../HelperLabel";
import { fPhoneNumber } from "../../../utils/formatNumber";

// ----------------------------------------------------------------------

const ERR_MESS_HEIGHT = 34
const MAX_WIDTH = 65
const MAX_LENGTH = 4

const DefaultParts = ['', '', '']

// ----------------------------------------------------------------------

const getPhoneParts = (value = "") => {
    if (!value) return DefaultParts;
    // get parts from value
    let parts = value?.toString()?.split('-')
    // invalid if 1 part exceeds max length
    const invalid = parts.some(part => part.length > MAX_LENGTH)
    // if current is invalid
    // retrieve parts with default phone number format
    if (invalid) parts = fPhoneNumber(value)?.split('-')

    return parts;
}

const createValidTel = (parts = []) => {
    // avoiding only dashes
    // returns an empty string if all parts are null
    const invalid = parts?.every(part => !part)
    if (invalid) return "";

    return parts?.join('-')
}

// ----------------------------------------------------------------------

export default function RHFPhoneNumber({ name, fieldProps, required = false,
    label, labelStyle, ...other }) {
    const { control } = useFormContext()
    const {
        field: { value, onChange },
        fieldState: { error },
    } = useController({ name, control })

    const [phoneParts, setPhoneParts] = useState(getPhoneParts(value));

    useEffect(() => {
        if (!value) return;
        // re-set parts
        const curValue = createValidTel(phoneParts)
        if (!isEqual(value, curValue)) handlePartsChange(getPhoneParts(value))
    }, [value])

    const handlePartsChange = (parts) => {
        setPhoneParts(parts)
        onChange(createValidTel(parts))
    }

    const handleInputChange = (index, value) => {
        const newPhoneParts = [...phoneParts];
        newPhoneParts[index] = value;
        handlePartsChange(newPhoneParts)
    }


    return <Stack width={1}
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ sm: "center" }}
        // flexWrap={"wrap"} 
        mb={error?.message && ERR_MESS_HEIGHT/8}
        spacing={0.5}
        {...other}>
        {label && <Typography variant="body2"
            color="text.secondary"
            flexGrow={1}
            sx={labelStyle}>
            {label}
            {required && <span style={{ color: 'red' }}> *</span>}
        </Typography>}
        <Box position={"relative"}>
            <Stack direction="row"
                divider={<span> - </span>}
                alignItems="center"
                spacing={0.5}>
                {[...Array(3)].map((_, index) =>
                    <TextField key={index}
                        size="small"
                        type="number"
                        value={phoneParts[index]}
                        onChange={(e) => {
                            const newValue = e.target.value
                            if (newValue.length > MAX_LENGTH) return;
                            handleInputChange(index, newValue)
                        }}
                        error={!!error}
                        placeholder="0000"
                        {...fieldProps}
                        sx={{
                            // minWidth: MAX_WIDTH,
                            ...label && { maxWidth: MAX_WIDTH },
                            ...fieldProps?.sx,
                        }}
                    />
                )}
            </Stack>
            {error?.message && <HelperLabel
                sx={{
                    color: 'error.main',
                    position: "absolute",
                    top: 40, // small_field_height
                    height: ERR_MESS_HEIGHT,
                }}
                label={error?.message}
            />}
        </Box>
    </Stack>
}