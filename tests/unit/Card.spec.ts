import Card from '../../src/shared/card/Card.vue';
import { shallowMount } from '@vue/test-utils';

describe('Card component', () => {
  it('should display all the props', async () => {
    const component = shallowMount(Card, {
      props: {
        post: { userId: 1, title: 'title', body: 'body', username: 'username' },
      },
    });
    expect(component.find('.username').text()).toBe('username');
  });

  it('should not display any username', async () => {
    const component = shallowMount(Card, {
      props: {
        post: { userId: 1, title: 'title', body: 'body', username: '' },
      },
    });
    expect(component.find('.username')).toBeUndefined;
  });
});
