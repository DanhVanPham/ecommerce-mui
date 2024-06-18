import { useTranslation } from 'react-i18next';
import { Stack, Typography, Pagination, Skeleton } from "@mui/material";

// ----------------------------------------------------------------------

export default function PagiLoadMore({ meta, page, onPageChange, isLoading = false }) {
    const { t: trans } = useTranslation("translations", { keyPrefix: "table.pagination" });

    if (!meta) return; // hidePagiWhenEmpty

    return <Stack width={1} direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between" alignItems="center"
        sx={{
            padding: 0.5,
            borderTop: theme => `1px dashed ${theme.palette.divider}`,
        }}>
        {isLoading ? <Skeleton variant="text" sx={{ width: 0.3, height: 22 }} /> :
            <Typography variant='caption' color='text.secondary'>
                {trans('displayedRows', { ...getDisplayedRowNum(meta) })}
            </Typography>}
        <Pagination siblingCount={0}
            shape="rounded" color='primary'
            variant="soft" size="small"
            page={page || meta?.currentPage}
            count={meta?.lastPage}
            onChange={(e, value) => onPageChange?.(value)}
            sx={{ flexShrink: 0 }}
        />
    </Stack>
}
export function getDisplayedRowNum(meta) {
    const { currentPage, lastPage, total, perPage } = meta ?? {}
    return {
        count: total,
        from: perPage * (currentPage - 1) + 1,
        to: currentPage === lastPage ? total : perPage * currentPage,
    }
}