import { RadioGroup, FormControlLabel, Radio, FormHelperText, Stack } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

export function RHFOtherRadio({ option, otherTextField, sxFomrControlLabel, styleRadio }) {
    return (
        <Stack direction="row" spacing={2}>
            <FormControlLabel
                value={option.id}
                control={<Radio {...styleRadio} />}
                label={option.name}
                sx={{ height: '40px', ...sxFomrControlLabel }}
            />
            {otherTextField}
        </Stack>
    );
}

export default function RHFRadioGroupOtherOption({
    name,
    options,
    isOtherOptionIncluded = false,
    otherTextField,
    sxFomrControlLabel,
    styleRadio,
    ...props
}) {
    const { control } = useFormContext();
    const optionsNotIncludedOther = isOtherOptionIncluded ? options.slice(0, options.length - 1) : [...options]
    const optionOther = options.slice(-1)[0]

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <div>
                    <RadioGroup {...field} sx={{ pl: 1 }} row {...props}  >
                        {optionsNotIncludedOther.map((option) => (
                            <FormControlLabel key={option.id}
                                value={option.id}
                                control={<Radio {...styleRadio} />}
                                label={option.name}
                                sx={{ height: '40px', ...sxFomrControlLabel }}
                            />
                        ))}
                        {isOtherOptionIncluded &&
                            <RHFOtherRadio
                                option={optionOther}
                                otherTextField={otherTextField}
                                sxFomrControlLabel
                                styleRadio={styleRadio}
                            />
                        }
                    </RadioGroup>
                    {!!error && (
                        <FormHelperText error sx={{ px: 2 }}>
                            {error.message}
                        </FormHelperText>
                    )}
                </div>
            )}
        />
    );
}
