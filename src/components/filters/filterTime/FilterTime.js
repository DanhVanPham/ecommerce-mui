/* eslint-disable no-nested-ternary */
import { Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { FilterButton } from '../buttons';
import { FilterTimeTypes, FILTER_TIME_MODE } from './constants';
import FilterByPeriodTime from './FilterByPeriodTime';
import FilterMenu from './FilterMenu';
import RangeDate from './RangeDate';
import RangeBy from './RangeBy';
import { defineFilterTime, translateDefaultTimeTypeOpts } from './utils';
import useLocales from '../../../hooks/useLocales';
import { getShortLabelRangeDate } from '../../../utils/datetime/formatHelper';
import RHFSubmitButton from '../../hook-form/RHFSubmitButton';

FilterTime.propTypes = {
    label: PropTypes.string,
    contentButton: PropTypes.string,
    disabledMaxDate: PropTypes.bool,
    timeTypes: PropTypes.array,
    defaultFilterTime: PropTypes.any,
    rangeByOpts: PropTypes.array,
    timeMode: PropTypes.oneOf(Object.values(FILTER_TIME_MODE)),
    getTimeTypeCustom: PropTypes.func,
    customDefineTime: PropTypes.func,
    onSubmit: PropTypes.func
}

// /**
//  * 
//  * @param {String} label Label of button
//  * @param {String} contentButton Custom content of button
//  * @param {Array} timeTypes  Custom time types. Default values: FilterTimeTypes. Ex: [{label: 'This Month', value: 'thisMonth'}]
//  * @param {*} defaultFilterTime Default value time filter. Ex: {value, rangeBy, rangeTime}
//  * @param {Array} rangeByOpts  Custom range by options. Ex: [{label: 'Created At', value: 'createdAt'}]
//  * @param {*} timeMode Type of TextField for custom range time. Includes: [Date, DateTime]. Default: Date 
//  * @returns 
//  */

export default function FilterTime({ label, defaultFilterTime, contentButton,
    timeTypes, rangeByOpts, disabledMaxDate, timeMode = FILTER_TIME_MODE.date, defaultTimeType = '',
    getTimeTypeCustom, customDefineTime, propsButton, onSubmit, translationNs}) {
    const { t: trans } = useTranslation('translations', { keyPrefix: translationNs ?? `filter` })
    const { currentLang } = useLocales()
    const [openMenuPopover, setOpenMenuPopover] = useState(null);
    const [period, setPeriod] = useState(null);
    const [isCustom, setIsCustom] = useState(false)

    const ID_TIME_FORM = 'filter-by-time'

    const [filterTime, setFilterTime] = useState({
        value: '',
        rangeBy: '',
        rangeTime: null
    })

    const timeTypeOpts = timeTypes || translateDefaultTimeTypeOpts(Object.values(FilterTimeTypes), trans)

    useEffect(() => {
        const { value, rangeBy, rangeTime } = defaultFilterTime ?? {};

        if (value === FilterTimeTypes.Custom) {
            setPeriod({
                fromDate: rangeTime?.fromDate || null,
                toDate: rangeTime?.toDate || null
            })
        }
        setFilterTime({
            value: value ?? '',
            rangeBy: rangeBy ?? '',
            rangeTime: rangeTime ?? null
        })
    }, [openMenuPopover, defaultFilterTime])

    const handleFilterbyTimeCustom = (data) => {
        const filterValue = {
            ...filterTime,
            rangeTime: data
        }
        setPeriod(data)
        onSubmit(filterValue)
        handleClose()
    }

    const handleFilterRangeBy = (data) => {
        setFilterTime(prev => ({
            ...prev,
            rangeBy: data
        }))
    }

    const handleFilterRangeDate = (data) => {
        setFilterTime(prev => ({
            ...prev,
            value: data
        }))
    }

    const handleSubmit = () => {
        const { value: rangeDate } = filterTime ?? {};
        const periodTime = customDefineTime ? customDefineTime(rangeDate) :
            defineFilterTime(rangeDate)
        const filterValue = {
            ...filterTime,
            rangeTime: periodTime
        }
        onSubmit(filterValue)
        handleClose()
    }

    const handleReset = () => {
        const periodTime = customDefineTime ? customDefineTime(defaultTimeType) :
            defineFilterTime(defaultTimeType)
        const filterValue = {
            ...filterTime,
            value: defaultTimeType,
            rangeTime: periodTime,
        }
        setPeriod(periodTime)
        onSubmit(filterValue)
    }

    const handleOpen = (e) => {
        setOpenMenuPopover(e.currentTarget)
    }

    const handleClose = () => {
        setOpenMenuPopover(null)
    }

    useEffect(() => {
        if (getTimeTypeCustom?.(filterTime?.value) || filterTime?.value === FilterTimeTypes.Custom) {
            setIsCustom(true)
        }
        else setIsCustom(false)
    }, [filterTime?.value])

    const { rangeBy, value, rangeTime } = defaultFilterTime ?? {}

    const rangeByContent = rangeBy ? trans?.(`filterTime.rangeBy.${rangeBy}`) : ''

    const filterTimeContent = contentButton || value ?
        Boolean(getTimeTypeCustom?.(value) || value === FilterTimeTypes.Custom) && !!rangeTime
            ? getShortLabelRangeDate(
                new Date(rangeTime?.fromDate),
                new Date(rangeTime?.toDate), currentLang.value
            ) :
            trans(`filterTime.rangeDate.${value}`)
        : trans('filterTime.none');

    return (
        <>
            {openMenuPopover && (
                <FilterMenu
                    open={Boolean(openMenuPopover)}
                    anchorEl={openMenuPopover}
                    label={label}
                    onClose={handleClose}
                    renderActions={
                        <Stack direction='row'
                            justifyContent='flex-end'
                            alignItems='center'
                        >
                            {defaultFilterTime?.value !== defaultTimeType && <Button
                                onClick={handleReset}>
                                {trans("filterTime.actions.clear")}
                            </Button>}
                            {isCustom ? // icon="dashicons:saved"
                                (<RHFSubmitButton
                                    form={ID_TIME_FORM}
                                    content={trans("filterTime.actions.save")}
                                />) : (<Button onClick={handleSubmit}>{trans("filterTime.actions.save")}</Button>)
                            }
                        </Stack>
                    }
                >
                    <Stack alignItems='center' spacing={2}>
                        <RangeBy selectedValue={filterTime?.rangeBy ?? ''}
                            rangeByOpts={rangeByOpts}
                            trans={trans}
                            onSubmit={handleFilterRangeBy}
                        />
                        <RangeDate selectedValue={filterTime?.value ?? ''}
                            timeTypeOpts={timeTypeOpts}
                            trans={trans}
                            onSubmit={handleFilterRangeDate}
                        />
                    </Stack>
                    {isCustom && <FilterByPeriodTime
                        id={ID_TIME_FORM}
                        timeMode={timeMode}
                        isDisableMaxDate={disabledMaxDate}
                        onSubmit={handleFilterbyTimeCustom}
                        data={period}
                        trans={trans} />}
                </FilterMenu>
            )}
            <FilterButton
                sx={{ flexShrink: 0 }}
                label={<>
                    {rangeByContent || label}
                    <Typography component="span" variant="body2" noWrap sx={{
                        color: 'text.secondary',
                        maxWidth: 150,
                    }}>
                        :&nbsp;{filterTimeContent}
                    </Typography>
                </>}
                onOpen={handleOpen}
                open={openMenuPopover}
                {...propsButton}
            />
        </>
    )
}
