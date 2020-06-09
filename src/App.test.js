import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import Counter from './components/counter';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import Testreducer from './redux/reducer';
// import TestinitialState from './redux/initialState';
import App from './App';

const store = createStore(Testreducer);


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
});

it('renders our Counter component', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.contains(<Counter />)).toEqual(true);
});

