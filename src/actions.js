export const SETBOOKMARKS = 'SETBOOKMARKS';
export const BOOKMARK = 'BOOKMARK';
export const UNBOOKMARK = 'UNBOOKMARK';

/**
 * This is an action creator.
 */
export const setBookmarks = (bookmarks) => ({
	type: SETBOOKMARKS,
	bookmarks
});

export const bookmark = (storyId) =>({
    type: BOOKMARK,
    storyId
});

export const unbookmark = (storyId) =>({
    type: UNBOOKMARK,
    storyId
});