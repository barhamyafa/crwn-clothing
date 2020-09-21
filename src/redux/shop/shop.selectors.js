import { createSelector } from 'reselect';

export const shopSelector = state => state.shop

export const shopCollectionsSelector = createSelector(
    [shopSelector],
    shop => shop.collections
)

export const shopCollectionsForPreviewSelector = createSelector(
    [shopCollectionsSelector],
    collections => Object.keys(collections).map(key => collections[key])
);
export const collectionSelector = collectionUrlParam =>
    createSelector(
        [shopCollectionsSelector],
        collections => collections[collectionUrlParam]
    );
