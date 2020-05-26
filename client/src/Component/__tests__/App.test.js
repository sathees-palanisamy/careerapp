import React from 'react';
import ReactDom from 'react-dom'
import App from '../../App';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Root from '../../Root';
import Home from '../Home';
import Department from '../Department/Department';
import Sharepath from '../Sharepath/Sharepath';


describe('router test', () => {

    let wrapper;

it('Home router Test',() => {

    wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
         <Root>
          <App/>
          </Root>
        </MemoryRouter>
      );
      expect(wrapper.find(Home)).toHaveLength(1);
      expect(wrapper.find(Department)).toHaveLength(0);
      expect(wrapper.find(Sharepath)).toHaveLength(0);  

      wrapper.unmount();
})


it('Department router Test',() => {

    wrapper = mount(
        <MemoryRouter initialEntries={[ '/paths' ]}>
         <Root>
          <App/>
          </Root>
        </MemoryRouter>
      );


      expect(wrapper.find(Home)).toHaveLength(0);
      expect(wrapper.find(Department)).toHaveLength(1);
      expect(wrapper.find(Sharepath)).toHaveLength(0);

      wrapper.unmount();
})


it('Department router Test',() => {
    wrapper = mount(
        <MemoryRouter initialEntries={[ '/sharepath' ]}>
         <Root>
          <App/>
          </Root>
        </MemoryRouter>
      );
      expect(wrapper.find(Home)).toHaveLength(0);
      expect(wrapper.find(Department)).toHaveLength(0);
      expect(wrapper.find(Sharepath)).toHaveLength(1);     
      wrapper.unmount();
})

it('notfound link ',() => {
    wrapper = mount(
        <MemoryRouter initialEntries={[ '/unknown' ]}>
         <Root>
          <App/>
          </Root>
        </MemoryRouter>
      );
      expect(wrapper.find(Home)).toHaveLength(0);
      expect(wrapper.find(Department)).toHaveLength(0);
      expect(wrapper.find(Sharepath)).toHaveLength(0);     
      wrapper.unmount();
})

});
