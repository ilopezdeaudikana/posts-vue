import { Post, User, PostFromApi, Action } from '../../models/models';

export enum PostsAppActions {
  SET_POSTS = '[PostsAppActions] Set posts',
  CREATE_POST = '[PostsAppActions] Create a new post',
  SET_USER = '[PostsAppActions] Set user',
  SET_USERS = '[PostsAppActions] Set users',
  FETCH_USER = '[PostsAppActions] Fetch user from API',
  FETCH_USERS = '[PostsAppActions] Fetch users from API',
  FETCH_POSTS = '[PostsAppActions] Fetch posts from API',
  AUTH_SUCCESS = '[PostsAppActions] Redirect after logged in',
  AUTH_FAILURE = '[PostsAppActions] Unable to log in',
}

export const SetUsers = (users: User[]): Action => ({
  type: PostsAppActions.SET_USERS,
  payload: users,
});

export const SetPosts = (posts: Post[]): Action => ({
  type: PostsAppActions.SET_POSTS,
  payload: posts,
});

export const CreatePost = (post: PostFromApi): Action => ({
  type: PostsAppActions.CREATE_POST,
  payload: post,
});

export const SetUser = (user: User): Action => ({
  type: PostsAppActions.SET_USER,
  payload: user,
});

export const AuthSuccess = (user: User): Action => ({
  type: PostsAppActions.AUTH_SUCCESS,
  payload: user,
});

export const AuthFailure = (): Action => ({
  type: PostsAppActions.AUTH_FAILURE,
  payload: null,
});

export const FetchPosts = (): Action => ({
  type: PostsAppActions.FETCH_POSTS,
  payload: null,
});

export const FetchUsers = (): Action => ({
  type: PostsAppActions.FETCH_USERS,
  payload: null,
});

export const FetchUser = (obj: {
  email: string;
  history: { push: (path: string) => void };
}): Action => ({
  type: PostsAppActions.FETCH_USER,
  payload: obj,
});
