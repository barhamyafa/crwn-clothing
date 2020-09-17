import {createSelector} from 'reselect';

export const userSelector = state=> state.user;

export const currentUserSelector = createSelector(
    [userSelector],
    user => user.currentUser
)

