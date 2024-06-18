
import { useEffect, useMemo, useState } from "react";
import { Typography } from "@mui/material";
import { format } from "date-fns";
import { isDate } from "lodash";
import { FilterButton } from "..";
import { MonthPicker } from "../filterTime/MonthPicker";

function createLabel(label, value) {
    return <>
        {label}
        {value && <span> {`・`}
            <Typography component="span"
                variant='body2' color='text.secondary'>
                {value}
            </Typography>
        </span>}
    </>
}

export function SelectMonth({ label = "該当月", defaultValue, formatFunc = null, onChange }) {
    const [open, setOpen] = useState(null)

    const [value, setValue] = useState("");

    useEffect(() => {
        setValue(defaultValue ? getFormatedValue(defaultValue) : "");
    }, [defaultValue])

    const getFormatedValue = (date) => {
        if(!isDate(date)) return "";
        return (formatFunc == null) ? format(date, 'yyyy-MM') : formatFunc(date);
    }

    const lb = useMemo(() => {
        return createLabel(label, value);
    }, [label, value])

    const handleMonthChange = (date) => {
        setOpen(null);
        onChange?.(date);
        setValue(getFormatedValue(date));
    }

    return <>
        <FilterButton
            onOpen={(e) => setOpen(e.currentTarget)}
            open={open}
            label={lb}
        />
        <MonthPicker open={open} 
            onClose={() => setOpen(null)}
            onChange={handleMonthChange} 
        />
    </>
}