import { createStore } from 'vuex';
import type { State, User, Action, PostFromApi, Post } from '../models/models';
import { PostsAppActions } from '../store/actions/actions';

interface Context {
  commit: (action: string, payload: any) => void
}
export default createStore({
  state: {
    posts: [],
    users: [],
    user: null as unknown as User,
  } as State,
  mutations: {
    setPosts(state: State, { items } : { items: Post[] }) {
      state.posts = items;
    },
    createNewPost(state: State, { item }: { item: Post }) {
      state.posts = state.posts.concat(item);
    },
    setUsers(state: State, { items }: { items: User[] }) {
      state.users = items;
    },
    setUser(state: State, { item }: { item: User }) {
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
    [PostsAppActions.SET_POSTS]: (context: Context , action: Action) =>
      context.commit('setPosts', { items: action.payload }),
    [PostsAppActions.SET_USERS]: (context: Context, action: Action) =>
      context.commit('setUsers', { items: action.payload }),
    [PostsAppActions.SET_USER]: (context: Context, action: Action) =>
      context.commit('setUser', { item: action.payload }),
    [PostsAppActions.CREATE_POST]: (context: Context, action: Action) =>
      context.commit('createNewPost', { item: action.payload }),
  },
  modules: {},
});
