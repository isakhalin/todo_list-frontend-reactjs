const getPageCount = (totalCount, limits) => {
    return Math.ceil(totalCount / limits)
}

export default getPageCount;