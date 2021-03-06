import { createSelector } from 'reselect'

export const overview = state => state.sidebar

export const showSidebar = createSelector(overview, state => state.showSidebar)

export const pageUrl = createSelector(overview, state => state.page.url)

export const pageTitle = createSelector(overview, state => state.page.title)

export const mouseOnSidebar = createSelector(
    overview,
    state => state.mouseOnSidebar,
)
