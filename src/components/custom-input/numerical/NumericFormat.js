import { forwardRef, useState, useEffect, useMemo } from 'react';
import { NumericFormat } from 'react-number-format';
import { Box } from '@mui/material';
import { useOperator, RHFOperatorController } from './Operator';

// ----------------------------------------------------------------------

export const NumericFormatCustom = forwardRef((props, ref) => {
    const { value, onChange, onBlur, ...other } = props;

    const createEvent = (value) => ({
        target: {
            name: props?.name || props?.id,
            value,
        },
    })
    const changeValue = (newValue) => onChange(createEvent(newValue));

    const { increase, decrease } = useOperator({
        value, onChange: changeValue,
        ...other,
    })

    return <NumericFormat {...other}
        getInputRef={ref}
        // valueIsNumericString
        value={value || 0} // defaultValue={0}
        onValueChange={(values, sourceInfo) => {
            let newValue = values?.value

            const inputType = sourceInfo.event?.nativeEvent?.inputType
            // "insertFromPaste" === user copy and paste the text
            // user types the text
            if (inputType === "insertText") {
                // ignore default 0 when first input and pointer before value
                if (!value && newValue.endsWith('0')) {
                    newValue = newValue?.slice(0, -1)
                }
            }

            changeValue(Number(newValue))
        }}
        onBlur={() => {
            let submitValue = Number(value)
            if (!value) {
                // set default 0 when input null
                changeValue(0)
                submitValue = 0;
            }
            onBlur?.(createEvent(submitValue))
        }}
        onKeyDown={(e) => {
            // keyCode 38
            if (e.key === "ArrowUp") increase?.()
            // keyCode 40
            if (e.key === "ArrowDown") decrease?.()
        }}
    />
});

export function withNumericFormat(Component, configs) {
    const { controlProps } = configs ?? {}

    return ({ hasOperatorBtn = false, showBtnOnHover = false,
        inputProps, focused, ...props }) => {

        const [shown, setShow] = useState(false)

        useEffect(() => {
            if (hasOperatorBtn) setShow(focused)
            if (!focused) props?.onBlur?.()
        }, [focused])

        const mouseEvents = useMemo(() => {
            if (!hasOperatorBtn) return;
            if (!showBtnOnHover) return;

            return {
                onMouseEnter: () => setShow(true),
                onMouseLeave: () => {
                    if (focused) return;
                    setShow(false)
                }
            }
        }, [hasOperatorBtn, showBtnOnHover])

        return <Box {...mouseEvents}
            sx={{ display: 'flex' }}>
            <Component {...props}
                sx={{
                    ...props?.sx,
                    ...(hasOperatorBtn && shown && !props.disabled) && {
                        width: `calc(100% - 12px)`,
                        pr: 0.5,
                    },
                }}
                InputProps={{
                    ...props?.InputProps,
                    inputComponent: NumericFormatCustom,
                    inputProps: inputProps,
                }}
            />
            {(shown && !props.disabled) && <RHFOperatorController
                {...controlProps}
                name={props?.name}
                inputProps={inputProps}
            />}
        </Box>
    }
}