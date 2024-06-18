import {
    addDays, endOfMonth, endOfWeek, addMonths,
    startOfDay,
    startOfMonth, startOfWeek, subDays, subMonths, subWeeks, endOfDay
} from "date-fns"
import { FilterTimeTypes } from "./constants"

export function defineFilterTime(filterValue) {
    const now = new Date()

    const startOfToday = startOfDay(now);
    const endOfToday = endOfDay(now);

    const startThisWeek = startOfWeek(now);
    const endOfThisWeek = endOfWeek(now); 

    const startOfLastWeek = startOfWeek(subWeeks(now, 1));
    const endOfLastWeek = endOfWeek(subWeeks(now, 1));

    const startOfThisMonth = startOfMonth(now);
    const endOfThisMonth = endOfMonth(now);

    const startOfLastMonth = startOfMonth(subMonths(now, 1));

    const endOfLastMonth =  endOfMonth(subMonths(now, 1));
    
    switch (filterValue) {
        case FilterTimeTypes.ToDay:
            return {
                fromDate: startOfToday,
                toDate: endOfToday
            }
        case FilterTimeTypes.ThisWeek:
            return {
                fromDate: startThisWeek,
                toDate: endOfThisWeek
            }
        case FilterTimeTypes.LastWeek:
            return {
                fromDate: startOfLastWeek,
                toDate: endOfLastWeek
            }
        case FilterTimeTypes.ThisMonth:
            return {
                fromDate: startOfThisMonth,
                toDate: endOfThisMonth
            }
        case FilterTimeTypes.LastMonth:
            return {
                fromDate: startOfLastMonth,
                toDate: endOfLastMonth
            }
        default: return null

    }
}

export const translateDefaultTimeTypeOpts = (data, trans) => {
    return data?.map(item => ({
        value: item,
        label: trans(`filterTime.rangeDate.${item}`)
    })) || []
}