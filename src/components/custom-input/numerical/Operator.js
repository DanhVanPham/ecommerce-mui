import { useController, useFormContext } from 'react-hook-form';
import { Stack, IconButton } from '@mui/material';
import Iconify from '../../Iconify';

// ----------------------------------------------------------------------

export function useOperator(props) {
    const { value, onChange, allowNegative = true } = props ?? {}

    const increase = () => onChange?.(Number(value) + 1)
    const decrease = () => {
        const curr = Number(value)
        // become a negative number
        // ignore if negatives are not allowed
        if (!allowNegative && curr === 0) return;
        onChange?.(curr - 1)
    }

    return { increase, decrease }
}

export function RHFOperatorController({ name, inputProps, eventId, ...other }) {
    const { control } = useFormContext()
    const { field } = useController({ name, control })
    const { increase, decrease } = useOperator({ ...field, ...inputProps })

    return <Stack {...other} justifyContent='center'>
        <IconifyBtn id={eventId}
            icon={"bi:caret-up-fill"}
            onClick={increase}
        />
        <IconifyBtn id={eventId}
            icon={"bi:caret-down-fill"}
            onClick={decrease}
        />
    </Stack>
}

function IconifyBtn({ id = "child-event", icon, onClick }) {
    return (
        <IconButton id={id} size="small"
            onClick={(e) => {
                e.stopPropagation()
                onClick?.()
            }}
            sx={{
                p: 0, cursor: "default",
                borderRadius: 0,
                ":hover": {
                    color: "text.primary",
                    bgcolor: theme => theme.palette.action.selected,
                },
            }}>
            <Iconify icon={icon} sx={{ width: 12, height: 9 }} />
        </IconButton>
    )
}
