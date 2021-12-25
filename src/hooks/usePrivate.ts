import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default function usePrivate() {
  const store = useStore();
  const router = useRouter();
  if (!store.state.user?.id) {
    router.push('/');
  }
}
