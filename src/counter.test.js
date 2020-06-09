import React from 'react';
import { shallow } from 'enzyme';
import Counter from './components/counter'; 
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});


describe('<Counter />', () => {
    describe('render()', () => {
            test('renders a <h1>', () => {
            const wrapper = shallow(<Provider store={store}><Counter /></Provider>);
            expect(wrapper.find('h1').exists()).toEqual(true);
        });
    });
});
