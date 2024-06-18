import { createContext, useCallback } from "react";
import PropTypes from 'prop-types'
import { registerUi, hasRegistered } from "../../../app/redux/search-history/searchHistorySlide";
import { useDispatch, useSelector } from "../../../app/store";

export const SearchHistoryContext = createContext();

SearchHistoryProvider.propTypes = {
    uiId: PropTypes.string.isRequired,
    maxDepth: PropTypes.number,
};

export default function SearchHistoryProvider({ uiId, maxDepth = 20, ...props }) {
    const dispatch = useDispatch();
    const isExisted = useSelector(state => hasRegistered(state, uiId));

    const register = useCallback((uiId, depth) => {
        dispatch(registerUi({ uiId: uiId, maxDepth: depth }))
    }, [dispatch])

    if (!isExisted) {
        register(uiId, maxDepth);
    }

    return isExisted && <SearchHistoryContext.Provider value={{ uiId: uiId }}>
        {props.children}
    </SearchHistoryContext.Provider>
}
