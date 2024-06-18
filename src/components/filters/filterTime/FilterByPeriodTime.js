import { useEffect } from 'react';
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
import { FormProvider } from '../../hook-form';
import RHFLabelDateTimePicker from '../../hook-form/RHFLabelDateTimePicker';
import RHFLabelDatepicker from '../../hook-form/RHFLabelDatePicker';
import { FILTER_TIME_MODE } from './constants';

const defaultValues = {
    fromDate: null,
    toDate: null
}

export default function FilterByPeriodTime({ id, timeMode, onSubmit, isDisableMaxDate = false,
    data = defaultValues, maxDate = new Date(), trans }) {
    const DateSchema = yup.object().shape({
        fromDate: yup.date().nullable().required(trans('filterTime.validation.fromDate')),
        toDate: yup.date().nullable().required(trans('filterTime.validation.toDate')),
    })

    const methods = useForm({
        resolver: yupResolver(DateSchema),
        defaultValues: data
    });
    const { handleSubmit, watch, reset } = methods

    useEffect(() => {
        const { fromDate, toDate } = data ?? {}
        reset({
            fromDate: fromDate ? new Date(fromDate) : null,
            toDate: toDate ? new Date(toDate) : null
        })
    }, [data])

    const handleOnSubmit = (data) => {
        const bodyData = {
            fromDate: data.fromDate?.setHours(0, 0, 0, 0),
            toDate: data.toDate?.setHours(23, 59, 59, 999)
        }
        onSubmit?.(bodyData)
    }

    const RHFComponent = timeMode === FILTER_TIME_MODE.date ? RHFLabelDatepicker :
        RHFLabelDateTimePicker;

    return (
        <FormProvider id={id} methods={methods} onSubmit={handleSubmit(handleOnSubmit)}>
            <Stack spacing={1} mt={2}>
                <RHFComponent
                    inputFormat={"yyyy-MM-dd"}
                    name='fromDate'
                    size='small'
                    label={trans("filterTime.fromDateLabel")}
                    {... !isDisableMaxDate && { maxDate: maxDate }} />

                <RHFComponent
                    name='toDate'
                    inputFormat={"yyyy-MM-dd"}
                    size='small'
                    label={trans("filterTime.toDateLabel")}
                    minDate={watch('fromDate')}
                    {... !isDisableMaxDate && { maxDate: maxDate }} />
            </Stack>
        </FormProvider>
    )
}