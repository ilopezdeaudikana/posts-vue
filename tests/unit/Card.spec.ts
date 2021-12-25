import Card from '../../src/shared/card/Card.vue';
import { shallowMount } from '@vue/test-utils';

describe('Card component', () => {
  it('should display all the props', async () => {
    const component = shallowMount(Card, {
      props: {
        post: { userId: 1, title: 'title', body: 'body', username: 'username' },
      },
    }) as any;
    console.log(component)
    // expect(component.contains('.username')).toBe(true);
  });

  /*it('should not display any username', async () => {
    const component = shallowMount(Card, {
      post: { userId: 1, title: 'title', body: 'body', username: '' },
    }) as any;

    // const username = getByTestId('username');
    expect(queryByTestId('username')).toBeNull();
  });*/
});
