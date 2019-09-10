
function rootReducer(state = [], action) {
  if (typeof action === 'undefined') {
    return state;
  }

  switch (action.type) {
      case 'SETBOOKMARKS':
      if (state.length === 0) { // no bookmarks so far
        return Array.from(action.bookmarks);
      } else {
        return state.concat(action.bookmarks);
      }

      case 'BOOKMARK':
          return state.concat(action.storyId);
          
      case 'UNBOOKMARK':
          let index = state.indexOf(action.storyId);
          // there is no story to remove, will just return current state
          if (index === -1) {
            return state;
          } else {
             return state.slice(0, index).concat(state.slice(index + 1));   
          }
      default:
          return state;
      }
  };

export default rootReducer;

 