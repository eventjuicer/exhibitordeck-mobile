import Types from '../types';

const participantsFetched = (state = [], action) => {
  switch (action.type) {
    case Types.PARTICIPANTS_FETCHED:
      return Object.assign({}, state, action.payload);
    default:
      return state
  }
}

export default participantsFetched;
