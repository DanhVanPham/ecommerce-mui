import { useMemo, useEffect } from "react"
import { useController, useFormContext } from "react-hook-form"
import { isFunction } from "lodash"
import { Stack } from "@mui/material"
import { HelperLabel } from "../../HelperLabel"

// ----------------------------------------------------------------------

export default function withErrorWrapper(Component, configs) {
    const { errorBoxStyle, getCondShowError, reValidateOnChange = false } = configs ?? {}

    return ({ name, ...props }) => {
        const { control, trigger, clearErrors } = useFormContext()
        const { field: { value }, fieldState: { error } } = useController({ name, control })

        const isError = useMemo(() => {
            if (isFunction(getCondShowError)) return getCondShowError(error);
            return error?.message;
        }, [error, getCondShowError])

        useEffect(() => {
            if (reValidateOnChange) return trigger(name);

            if (isError) clearErrors(name)
        }, [value])

        return <>
            <Stack sx={{
                ...isError && {
                    border: theme => `1px dashed ${theme.palette.error.main}`,
                    borderRadius: 0.5,
                    overflow: 'hidden',
                    ...errorBoxStyle,
                },
            }}>
                <Component name={name} {...props} />
            </Stack>
            {(error && error?.message) && <HelperLabel label={error?.message}
                sx={{ color: 'error.main' }}
            />}
        </>
    }
}