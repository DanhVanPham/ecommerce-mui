/* eslint-disable no-nested-ternary */
import {
	format, formatDistance, formatRelative,
	isDate, differenceInDays, isValid
} from "date-fns";
import { vi } from "date-fns/locale"; // import all locales we need
import { FormatType } from "../constants/datetime/formatType";

// ----------------------------------------------------------------------

export const formatDate = (value, formatType, lng) => {
	if (!isDate(value)) return value;
	switch (formatType) {
		case FormatType.long:
		case FormatType.longDateWithDay:
			return format(value, "PPPP", { locale: vi })
		case FormatType.longDate:
			return format(value, "", { locale: vi })
		case FormatType.longDateAbbreviated:
			return format(value, "PPP", { locale: vi })
		case FormatType.dayOfMonth:
			return format(value, "do", { locale: vi })
		case FormatType.dayOfWeek:
			return format(value, "E", { locale: vi })
		case FormatType.shortWithDay:
			return format(value, "P (E)", { locale: vi })
		case FormatType.relative:
			return formatRelative(value, new Date(), { locale: vi })
		case FormatType.ago:
			return formatDistance(value, new Date(), {
				vi,
				addSuffix: true,
			})
		case FormatType.monthDayOnly:
			return value.toLocaleString(lng, { month: 'numeric', day: 'numeric' })
		case FormatType.yearMonthOnly:
			return format(value, "yyyy/MM", { locale: vi })
		case FormatType.monthOnly:
			return value.toLocaleString(lng, { month: 'long' })
		case FormatType.flexible:
			if (isRecentlyDate(value)) return formatDistance(value, new Date(), {
				vi,
				addSuffix: true,
			})
			return value.toLocaleString(lng, { year: "numeric", month: 'numeric', day: 'numeric' })
		case FormatType.fullDateTime:
			return format(value, "PPPp", { locale: vi })
		case FormatType.fullDateTimeWithSecond:
			return format(value, "yyyy-MM-dd pp", { locale: vi });
		case FormatType.short:
		default:
			return format(value, "P", { locale: vi })
	}
}

function isRecentlyDate(date) {
	return differenceInDays(Date.now(), date) < 10
}

// ----------------------------------------------------------------------

export const formatDateRequest = (date) => {
	const convertDate = new Date(date);
	if (!isDate(convertDate) || !isValid(convertDate)) return '';

	return format(convertDate, 'yyyy-MM-dd')
}

// ----------------------------------------------------------------------

const FORMAT_TYPE = {
	sameMonth: 'sameMonth',
	diffMonth: 'diffMonth'
}

const LANGUAGES = {
	en: 'en',
	ja: 'ja'
}

export function formatDateRange(startDate, endDate, language = LANGUAGES.ja,
	formatType = FORMAT_TYPE.sameMonth,
	defaultFromFormat = '', defaultToFormat = '') {
	let fromDateFormat = defaultFromFormat || 'yyyy/MM/dd';
	let toDateFormat = defaultToFormat || 'yyyy/MM/dd'

	switch (language) {
		case LANGUAGES.ja:
			fromDateFormat = 'yyyy/MM/dd';
			toDateFormat = formatType === FORMAT_TYPE.diffMonth ? 'MM/dd' : 'dd'
			break;
		case LANGUAGES.en:
			fromDateFormat = formatType === FORMAT_TYPE.diffMonth ? 'dd/MM' : 'dd'
			toDateFormat = 'dd/MM/y'
			break;
		default:
			break;
	}
	const formattedStartDate = format(startDate, fromDateFormat, { locale: vi });
	const formattedEndDate = format(endDate, toDateFormat, { locale: vi });
	return `${formattedStartDate} ~ ${formattedEndDate}`;
}