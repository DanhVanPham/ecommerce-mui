import { Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Iconify from "../Iconify";
import useLocales from "../../hooks/useLocales";

export function LoadMore({ currentPage = 1, 
    total = 0, perPage = 0, from = 1, 
    onLoadMore, isLoading=false, 
    displayCounting = true }){
    const { translate } = useLocales()
    const loaded = Number(perPage) * Number(currentPage) 
    const canLoadMore = loaded < Number(total);
    
    return canLoadMore && <Stack width={1} 
        sx={{ 
            py: 0.5, justifyContent: "center", 
            position: 'relative',
            borderTop: (theme) => `1px dashed ${theme.palette.divider}`
        }}>
        <LoadingButton size="small"
            onClick={onLoadMore}
            loading={isLoading}
            startIcon={<Iconify icon={'ic:outline-expand-more'} />}>
            {translate('dialogs.actions.loadMore')}
        </LoadingButton>
        {displayCounting && 
            <Stack sx={{ position: "absolute", right: "10px" }}>
                {!isLoading && <Typography 
                    variant="body2" color="text.secondary">
                    {translate(
                        'table.pagination.displayedRows', 
                        { count: total, from, to: loaded }
                    )}
                </Typography>}
            </Stack>
        }
    </Stack>
}