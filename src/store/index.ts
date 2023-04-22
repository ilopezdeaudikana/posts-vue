import { createStore } from 'vuex';
import type { State, User, Action, PostFromApi } from '../models/models';
import { PostsAppActions } from '../store/actions/actions';

export default createStore({
  state: {
    posts: [],
    users: [],
    user: null as unknown as User,
  } as State,
  mutations: {
    setPosts(state, { items }) {
      state.posts = items;
    },
    createNewPost(state, { item }) {
      state.posts = state.posts.concat(item);
    },
    setUsers(state, { items }) {
      state.users = items;
    },
    setUser(state, { item }) {
      state.user = item;
    },
  },
  getters: {
    mergedPosts(state: State) {
      const othersPosts = state.posts.filter(
        (post: PostFromApi) => post.userId !== state.user.id,
      );
      return othersPosts.map((post: PostFromApi) => {
        const user = state.users.find((user: User) => user.id === post.userId);
        return { ...post, username: user ? user.name : '' };
      });
    },
    myPosts(state: State) {
      return state.posts.filter(
        (post: PostFromApi) => post.userId === state.user.id,
      );
    },
  },
  actions: {
    [PostsAppActions.SET_POSTS]: (context, action: Action) =>
      context.commit('setPosts', { items: action.payload }),
    [PostsAppActions.SET_USERS]: (context, action: Action) =>
      context.commit('setUsers', { items: action.payload }),
    [PostsAppActions.SET_USER]: (context, action: Action) =>
      context.commit('setUser', { item: action.payload }),
    [PostsAppActions.CREATE_POST]: (context, action: Action) =>
      context.commit('createNewPost', { item: action.payload }),
  },
  modules: {},
});
