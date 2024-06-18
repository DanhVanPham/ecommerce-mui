import { useCallback, useContext } from "react";
import { isEmpty } from "lodash";
import { useDispatch, useSelector } from "../../../app/store";
import { selectHistory, addKeyword as addKeywordAction } from "../../../app/redux/search-history/searchHistorySlide";
import { SearchHistoryContext } from "./SearchHistoryProvider";
/*--------------------------------------------------------------------------------*/
/**
 * 
 * @param {*} fixedKey 
 * @param {*} depth depth of quere of keywords
 * @returns 
 */
export default function useSearchHistoryContext() {
    const value = useContext(SearchHistoryContext);
    const registerId = value?.uiId ?? null;
    const dispatch = useDispatch()
    const recentlyKeywords = useSelector(state => selectHistory(state, registerId))
    const emptyList = []

    const saveKeyword = useCallback((keyword) => {
        if (registerId) dispatch(addKeywordAction({ uiId: registerId, keyword: keyword }))
    }, [dispatch, registerId])

    const addKeyword = (keyword) => {
        if (isEmpty(keyword)) return;
        saveKeyword(keyword);
    }

    return {
        addKeyword,
        recentlyKeywords: recentlyKeywords ?? emptyList
    }
}