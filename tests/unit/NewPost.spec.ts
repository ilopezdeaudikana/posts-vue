import NewPost from '../../src/pages/posts/new/NewPost.vue'
import * as Api from '../../src/api/api'

import { describe, expect, it, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'

vi.mock('vuex', () => {
  const useStore = vi.fn().mockImplementation(() => ({ dispatch: vi.fn() }))
  return { useStore }
})

describe('NewPost component', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })
  it('should display the form', async () => {
    vi.spyOn(Api, 'createPost')
    const component = mount(NewPost, {
      props: {
        userId: 14
      }
    })

    const btn = component.find('button')
    expect(btn.text()).toBe('Create new Post')
    const hiddenLabel = component.find('label')

    expect(hiddenLabel).toBeUndefined

    await btn.trigger('click')
 
    const label = component.find('label')
    expect(label.text()).toBe('Title')

    const submit = component.findAll('button')[1]
    expect(submit).toBeDefined
    expect(submit.text()).toBe('Save Post')

    const input = component.find('input')
    const textarea = component.find('textarea')

    await input.setValue('hello')
    await textarea.setValue('world')

    expect(component.find('input').element.value).toBe('hello')
    expect(component.find('textarea').element.value).toBe('world')

    const form = component.find('form')
    expect(form).toBeDefined
    await form.trigger('submit.prevent')

    await component.vm.$nextTick()
    expect(Api.createPost).toHaveBeenCalled()
  })
})
