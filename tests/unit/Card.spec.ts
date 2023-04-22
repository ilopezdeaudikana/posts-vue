import Card from '../../src/shared/card/Card.vue';
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils';
import { DisclosurePanel } from '@headlessui/vue'

describe('Card component', () => {
  it('should display all the props', async () => {
    const component = mount(Card, {
      props: {
        post: { userId: 1, title: 'title', body: 'body', username: 'username' },
      },
    });
    const panel = component.findComponent(DisclosurePanel)
    expect(panel).toBeDefined
    expect(component.text()).toBe('title');
  });
});
