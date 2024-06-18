import PropTypes from 'prop-types';
// @mui
import { Typography } from '@mui/material';
// others
import { isEmpty, isFunction } from 'lodash';
// components
import Scrollbar from '../Scrollbar';
import EmptyContent from '../EmptyContent';
import SeachNotFound from '../SearchNotFound'
import { ContentLoading } from './ContentLoading';
// ----------------------------------------------------------------------
SearchResults.propTypes = {
    itemSource: PropTypes.array,
    keyword: PropTypes.string,
};

export default function SearchResults({
    selectedIds, itemSource, shouldSkipIds,
    renderItem, getLabel,
    getId,
    onItemDbClick, keyword, onItemClick,
    isLoading = false, showSkipIdsAsDisabled = true, ...props }) {

    const count = itemSource?.length ?? 0;
    const handleItemClick = (item) => {
        onItemClick?.(item)
    }
    const handleItemDbClick = (item) => {
        onItemDbClick?.(item)
    }

    if (isLoading) return <ContentLoading
        message={"Please wait a few seconds."} />

    if (count === 0 && !keyword) return <EmptyContent
        title='No data'
        sx={{
            '& span.MuiBox-root': { height: 120 },
            '& .MuiTypography-root': { fontSize: '0.875rem' }
        }} />

    if (count === 0 && !!keyword) return <SeachNotFound
        query={keyword}
        sx={{ pt: 5 }}
    />

    const isSelected = (item) => {
        if (isEmpty(selectedIds)) return false;
        return selectedIds.findIndex(id => id === (isFunction(getId) ? getId(item) : item.id)) > -1;
    }
    const shouldSkip = (item) => {
        if (isEmpty(shouldSkipIds)) return false;
        return shouldSkipIds?.findIndex(id => id === (isFunction(getId) ? getId(item) : item.id)) > -1;
    }


    const renderItems = () => {
        const renderItemFunc = (item, index) => {
            return isFunction(renderItem) ? renderItem({ item, selected: isSelected(item), handleItemClick, handleItemDbClick, disabled: shouldSkip(item) })
                : <Typography key={index}>{getLabel?.(item) ?? item}</Typography>
        }
        return itemSource?.reduce?.((prevList, val) => {
            const newItem = renderItemFunc(val);
            if (shouldSkip(val) && !showSkipIdsAsDisabled) return prevList;
            return [...prevList, newItem];
        }, [])
    }

    return (
        <Scrollbar {...props}>
            {
                renderItems()
            }
        </Scrollbar>
    );
}