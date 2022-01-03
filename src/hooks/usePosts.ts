import { PostFromApi } from '../models/models';
import { SetPosts } from '../store/actions/actions';
import { getPosts } from '../api/api';

import { onMounted } from 'vue';
import { useStore } from 'vuex';

export default function usePosts(): void {
  const store = useStore();

  const getPostsFromApi = async () => {
    const posts: PostFromApi[] = await getPosts();
    store.dispatch(SetPosts(posts));
  };

  onMounted(getPostsFromApi);
}
