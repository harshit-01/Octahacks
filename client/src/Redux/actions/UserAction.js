import * as actionType from "../types";
import * as api from '../api/index.js';


// const fetchIssuesCount = (org, repo) => async dispatch => {
//     dispatch(getRepoDetailsStarted())
//     try {
//       const repoDetails = await getRepoDetails(org, repo)
//       dispatch(getRepoDetailsSuccess(repoDetails))
//     } catch (err) {
//       dispatch(getRepoDetailsFailed(err.toString()))
//     }
//   }




export const getPosts = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(id);
    dispatch({ type: actionType.SET_USER_DATA, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (id,post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(id,post);

    dispatch({ type: actionType.SET_UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCall = ({phone,email})=>async (dispatch) => {
  try {
    const data = {
      phone : phone,
      email: email
    }
    await api.createCallPI(data);
  } catch (error) {
    console.log(error.message);
  }
}

export const createEmail = (email)=>async (dispatch) => {
  try {
    await api.createEmailPI(email);
  } catch (error) {
    console.log(error.message);
  }
}

export const createSME = (student)=>async (dispatch) => {
  try {
    let x= {
      name:student.firstName,
      phone:student.phone,
      email:student.email
    }
    await api.createSME(x);
  } catch (error) {
    console.log(error.message);
  }
}

// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatePost(id, post);

//     dispatch({ type: SET_UPDATE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

