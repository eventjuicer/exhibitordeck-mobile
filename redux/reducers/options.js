import Types from '../types';


const handleOptions = (state = [], action) => {
  switch (action.type) {
    case Types.CHANGE_ACTION_LABELS:

    let comments = [];

    if("comments" in state && Array.isArray(state.comments))
    {
        comments = state.comments;
    }

    return Object.assign({}, state, {comments : [...Array(5)].map(function(el, index)
    {
        if(typeof comments[index] !== "undefined")
        {
          el = comments[index];
        }
        if(action.index === index)
        {
          el = action.text;
        }
        return el;
      })
    });

    case Types.CAMERA_PERMISSION:

      return Object.assign({}, state, {camera : action.status});

    case Types.RECENTLY_SCANNED_CODE:

      return Object.assign({}, state, {lastCode : action.code});

    default:
      return state
  }
}

export default handleOptions;
