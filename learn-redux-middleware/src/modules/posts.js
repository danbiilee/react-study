import * as postApi from '../api/posts'; // api/posts 안의 함수 모두 불러오기
import {
  createPromiseThunk,
  createPromiseThunkById,
  handleAsyncActions,
  handleAsyncActionsById,
  reducerUtils,
} from '../lib/asyncUtils';

// 액션 타입
// 포스트 목록 조회
const GET_POSTS = 'posts/GET_POSTS';
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'posts/GET_POSTS_ERROR';
// 포스트 하나 조회
const GET_POST = 'posts/GET_POST';
const GET_POST_SUCCESS = 'posts/GET_POST_SUCCESS';
const GET_POST_ERROR = 'posts/GET_POST_ERROR';

// thunk 함수
export const getPosts = createPromiseThunk(GET_POSTS, postApi.getPosts);
export const getPost = createPromiseThunkById(GET_POST, postApi.getPostById);

// 세 번째 인자로 ReduxThunk.withExtraArgument로 넣어준 값들을 사용할 수 있다.
export const goToHome = () => (dispatch, getState, { history }) => {
  history.push('/');
};

// 초깃값
const initialState = {
  posts: reducerUtils.initial(),
  post: {},
};

// 리듀서
export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return handleAsyncActions(GET_POSTS, 'posts', true)(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActionsById(GET_POST, 'post', true)(state, action);
    default:
      return state;
  }
}
