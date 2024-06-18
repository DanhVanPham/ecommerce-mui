import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Stack } from '@mui/material'
import { ConditionItem } from './ConditionItem'
import { LabelStyle, WrapperStyle } from './styles'
import ConditionMore from './ConditionMore';

/**
 * 
 * @param {*} groupLabel 
 * @param {*} conditions 
 * @param {*} displayMemberProperty 
 * @param {*} getItemText 
 * @param {*} itemRender 
 * @param {*} onConditionRemoved 
 * @returns 
 */
export function ConditionsGroup({ groupLabel,
    conditions,
    displayMemberProperty,
    getItemText,
    itemRender,
    maxItemsToShow = 0,
    onConditionRemoved }) {

    const renderItemDefault = (item, getItemText, displayMemberProperty, onConditionRemoved,) => {
        return <ConditionItem
            key={item.id}
            item={item}
            getText={getItemText}
            displayProperty={displayMemberProperty}
            onDelete={onConditionRemoved}
        />
    }
    const total = conditions?.length ?? 0;
    const left = total - maxItemsToShow;

    const items = useMemo(() => {
        const results = [];
        for (let index = 0; index < conditions.length; index += 1) {
            let renderFunc = renderItemDefault;
            const itemData = conditions[index];
            if (maxItemsToShow && index > maxItemsToShow - 1) break;
            if (itemRender) renderFunc = itemRender;
            const itemView = renderFunc(itemData, getItemText, displayMemberProperty, onConditionRemoved);
            results.push(itemView);
        }
        return results;
    }, [conditions, maxItemsToShow])

    return conditions?.length > 0 && <WrapperStyle>
        <LabelStyle>{groupLabel}:</LabelStyle>
        <Stack direction="row" flexWrap="wrap" sx={{ p: 0.5 }}>
            {items}
            {left > 0 && <ConditionMore num={left} />}
        </Stack>
    </WrapperStyle>
}
ConditionsGroup.propTypes = {
    groupLabel: PropTypes.string,
    conditions: PropTypes.array,
    displayMemberProperty: PropTypes.string,
    getItemText: PropTypes.func,
    itemRender: PropTypes.func,
    onConditionRemoved: PropTypes.func
};
export default ConditionsGroup
