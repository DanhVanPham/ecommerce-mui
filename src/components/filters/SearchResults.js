import PropTypes from 'prop-types';
// @mui
import { Typography } from '@mui/material';
// others
import { isEmpty, isFunction } from 'lodash';
// components
import Scrollbar from '../Scrollbar';
import EmptyContent from '../EmptyContent';
import SeachNotFound from '../SearchNotFound';
import { ContentLoading } from './ContentLoading';
import ErrorAlert from '../ErrorAlert';
// ----------------------------------------------------------------------
SearchResults.propTypes = {
    itemSource: PropTypes.array,
    keyword: PropTypes.string,
};

export default function SearchResults({
    selectedIds, itemSource,
    shouldSkipIds, showSkipIdsAsDisabled = true,
    renderItem, getLabel,
    getId, getDisableConditions,
    onItemDbClick, keyword, onItemClick,
    isLoading = false, isError = false,
    hasFiltered = false, noDataComponent,
    isShowByKeyword = false, ...props }) {
    const count = itemSource?.length ?? 0;

    if (isLoading) return <ContentLoading />

    if (isError) return <ErrorAlert />

    const typeShowEmpty = isShowByKeyword ? keyword : hasFiltered

    if (count === 0 && !typeShowEmpty) return noDataComponent ?? <EmptyContent
        title='データはありません。'
        description={"まずデータを追加しましょう"}
        sx={{
            '& span.MuiBox-root': { height: 120 },
            '& .MuiTypography-root': { fontSize: '0.875rem' }
        }} />

    if (count === 0 && typeShowEmpty) return <SeachNotFound
        query={keyword}
        // mode="filter"
        sx={{ pt: 5 }}
    />

    const isSelected = (item) => {
        if (isEmpty(selectedIds)) return false;
        return checkExistence(selectedIds, item, getId)
    }
    const isDisabled = (item) => {
        // check disable condition
        if (getDisableConditions?.(item)) return true;
        // check for existence in skip list 
        if (showSkipIdsAsDisabled) return shouldSkip(item)
        // default
        return false;
    }
    const shouldSkip = (item) => {
        if (isEmpty(shouldSkipIds)) return false;
        return checkExistence(shouldSkipIds, item, getId)
    }

    const renderItemFunc = (item) => {
        const id = isFunction(getId) ? getId(item) : item.id
        if (isFunction(renderItem)) return renderItem({
            item,
            selected: isSelected(item),
            handleItemClick: onItemClick,
            handleItemDbClick: onItemDbClick,
            disabled: isDisabled(item),
        })
        return <Typography key={id}>{getLabel?.(item) ?? item}</Typography>
    }

    const renderItems = () => {
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

function checkExistence(sourceIds, item, getId) {
    return sourceIds?.findIndex(id => id === (isFunction(getId) ? getId(item) : item.id)) > -1;
}