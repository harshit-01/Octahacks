import * as actionType from "../types";

export function setUserData(user) {
    return (dispatch) => {
      dispatch({
        type: actionType.SET_USER_DATA,
        data: user,
      });
    };
}

// const fetchIssuesCount = (org, repo) => async dispatch => {
//     dispatch(getRepoDetailsStarted())
//     try {
//       const repoDetails = await getRepoDetails(org, repo)
//       dispatch(getRepoDetailsSuccess(repoDetails))
//     } catch (err) {
//       dispatch(getRepoDetailsFailed(err.toString()))
//     }
//   }