import { isDate } from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import { Typography, Stack, Button, Divider } from '@mui/material';
import { MonthPicker as MUIMonthPicker } from '@mui/x-date-pickers';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import { getMonth, getYear } from 'date-fns';
import { IconButtonAnimate } from '../../animate';
import MenuPopover from '../../MenuPopover';

function isValidDate(date, minDate, maxDate) {
    const min = isDate(minDate) ? minDate.getTime() : 0;
    const max = isDate(maxDate) ? maxDate.getTime() : Number.MAX_VALUE;
    const cTime = date.getTime();
    return min <= cTime && cTime <= max;
}

export function MonthPicker({ open, onChange, value, minDate, maxDate, onClose, renderActions }) {

    const today = new Date();

    const [year, setYear] = useState();

    const [date, setDate] = useState();

    const canBack = !isDate(minDate) || year > getYear(minDate);

    const canNext = !isDate(maxDate) || year < getYear(maxDate);

    function handleYearChange(offset = 0) {
        const y = year + offset;
        setYear(y)
        setDate(new Date(`${y}-${getMonth(date) + 1}-01`));
    }

    const shouldThisYearShow = useMemo(() => {
        const thisYear = getYear(today);
        const min = isDate(minDate) ? getYear(minDate) : 0;
        const max = isDate(maxDate) ? getYear(maxDate) : Number.MAX_VALUE;
        return min <= thisYear && thisYear <= max;
    }, [minDate, maxDate])

    useEffect(() => {
        const y = getYear(value ?? today)
        setYear(y)
        setDate(value ?? today);
    }, [value])

    const handleChange = (e) => {
        setDate(e);
        onChange?.(e);
    }

    const resetToThisYear = () => {
        const y = getYear(today);
        setYear(y)
        setDate(new Date(`${y}-${getMonth(date) + 1}-01`));
    }

    const shouldDisableMonth = (e) => {
        return !isValidDate(e, minDate, maxDate);
    }

    return <MenuPopover
        arrow="top-left"
        onClose={onClose}
        open={Boolean(open)}
        disabledArrow={false}
        anchorEl={open}>
        <Stack>
            <Stack sx={{ px: 0, pt: 0 }} direction="row" alignItems="center">
                <Typography sx={{
                    flexGrow: 1,
                    pl: 1,
                    fontSize: "1rem",
                    fontWeight: 400,
                }}>
                    {year}年
                </Typography>
                <Stack direction="row" sx={{ pr: 2 }} alignItems="center">
                    {shouldThisYearShow && <Button size='small' onClick={() => resetToThisYear()} sx={{ minWidth: "60px" }}>今年</Button>}
                    <IconButtonAnimate sx={{ width: "25px", height: "25px" }} disabled={!canBack} size="small" onClick={() => handleYearChange(-1)}>
                        <ChevronLeftRounded sx={{ fontSize: "1.25rem", color: canBack ? "#212B36" : "unset" }} />
                    </IconButtonAnimate>
                    <IconButtonAnimate sx={{ width: "25px", height: "25px" }} disabled={!canNext} size="small" onClick={() => handleYearChange(+1)}>
                        <ChevronRightRounded sx={{ fontSize: "1.25rem", color: canNext ? "#212B36" : "unset" }} />
                    </IconButtonAnimate>
                </Stack>
            </Stack>
            <Divider sx={{ mt: 1, borderStyle: "dashed" }} />
            <MUIMonthPicker
                minDate={minDate}
                shouldDisableMonth={shouldDisableMonth}
                maxDate={maxDate}
                date={date}
                onChange={handleChange}
                sx={{
                    width: "250px",
                    '& .MuiTypography-root.PrivatePickersMonth-root': {
                        fontWeight: 400
                    }
                }}
            />
            {renderActions &&
                <Stack>
                    <Divider sx={{ mt: 1, borderStyle: "dashed" }} />
                    {renderActions()}
                </Stack>
            }
        </Stack>
    </MenuPopover>
}
