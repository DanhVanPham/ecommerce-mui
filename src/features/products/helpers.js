export const transformParams = (data) => {
    const { name, page, limit, rangePrice, rangeAge, milkBrandIds } =
        data ?? {};
    const formData = new FormData();
    formData.append("PageNumber", page);
    formData.append("PageSize", limit);

    if (name) formData.append("Name", name);
    if (rangeAge?.[1]) {
        formData.append("StartAge", rangeAge?.[0]);
        formData.append("EndAge", rangeAge?.[1]);
    }
    if (rangePrice?.[1]) {
        formData.append("StartPrice", rangePrice?.[0]);
        formData.append("EndPrice", rangePrice?.[1]);
    }
    if (milkBrandIds?.lenght > 0)
        formData.append("MilkBrandIds", milkBrandIds);

    return formData;
}


export function isFormDataEmpty(formData) {
    for (let pair of formData.entries()) {
        // If at least one entry exists, return false
        return false;
    }
    // If no entries exist, return true
    return true;
}