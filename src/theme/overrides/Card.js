// ----------------------------------------------------------------------

export default function Card(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          position: 'relative',
          boxShadow: theme.customShadows.card,
          borderRadius: Number(theme.shape.borderRadius) * 2,
          zIndex: 0, // Fix Safari overflow: hidden with border radius
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: { variant: 'body2', marginTop: theme.spacing(0.5) },
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(1, 1, 0),
          [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(3, 3, 0),
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1, 1, 0),
          [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(3),
          },
        },
      },
    },
  };
}
