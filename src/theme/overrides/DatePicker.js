// ----------------------------------------------------------------------

export default function DatePicker() {
  return {
    MuiDatePicker: {
      defaultProps: {
        inputFormat: 'dd/MM/yyyy',
      },
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          '& > div[role="presentation"]': {
            fontWeight: 500,
          },
          '& .PrivatePickersFadeTransitionGroup-root': {
            fontWeight: 500,
          },
        },
        viewTransitionContainer: {
          '& .PrivatePickersSlideTransition-root': {
            minHeight: "200px"
          },
          '& .PrivatePickersFadeTransitionGroup-root': {
            fontWeight: 500
          },
          '& .MuiMonthPicker-root': {
            'button': {
              fontWeight: 500
            }
          },
          '& .MuiYearPicker-root': {
            'button': {
              fontWeight: 500
            }
          }
        }
      }
    },
  };
}
