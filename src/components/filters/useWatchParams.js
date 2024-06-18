import { useContext } from "react";
import {
    hasRegistered,
    selectParams,
    selectParamsByKey
} from "../../app/redux/filters/filterSlide";
import { useSelector } from "../../app/store";
import { FilterContext } from "./FilterContextProvider";

export default function useWatchParams(registerId) {
    const { uiId } = useContext(FilterContext) ?? { uiId: registerId }
    const available = useSelector(state => hasRegistered(state, uiId))
    const values = useSelector(state => selectParams(state, uiId));
    return {
        available: available,
        values
    }
}
