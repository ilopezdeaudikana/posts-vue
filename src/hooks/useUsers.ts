import { User } from '../models/models';
import { SetUsers } from '../store/actions/actions';
import { getUsers } from '../api/api';

import { onMounted } from 'vue';
import { useStore } from 'vuex';

export default function useUsers() {
  const store = useStore();
  const getUsersFromApi = async () => {
    if (!store.state.users.length) {
      const users: User[] = await getUsers();
      store.dispatch(SetUsers(users));
    }
  };

  onMounted(getUsersFromApi);
}
