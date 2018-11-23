import Vue from 'vue'
import Test4Tests from '@/components/Test4Tests'

describe ('Test4Tests.vue', () =>{
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Test4Tests)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent).toEqual('To test the tests')
  })
})
