import React from 'react';
import { shallow, mount } from 'enzyme';
import {spy} from 'sinon'

import { BeerListContainer } from './components';
import { InputArea, BeerList } from './components';

describe('BeerListContainer', () => {
  it('should render InputArea and BeerList', () => {
    const wrapper = shallow(<BeerListContainer/>);
    expect(wrapper.containsAllMatchingElements([
      <InputArea onSubmit={wrapper.instance().addItem} />,
      <BeerList/>
    ])).toEqual(true);
  });

  it('should start with an empty list ', () => {
    const wrapper = shallow(<BeerListContainer />);
    expect(wrapper.state('beers')).toEqual([]);
  })

  it('adds items to the list', () => {
    const wrapper = shallow(<BeerListContainer />);
    wrapper.instance().addItem('Sam Adams');
    expect(wrapper.state('beers')).toEqual(['Sam Adams']);
  })

  it('passes addItem to InputArea', () => {
    const wrapper = shallow(<BeerListContainer/>);
    const inputArea = wrapper.find(InputArea);
    const addItem = wrapper.instance().addItem;
    expect(inputArea.prop('onSubmit')).toEqual(addItem);
  });

  it('passes a bound addItem function to InputArea', () => {
    const wrapper = shallow(<BeerListContainer/>);
    const inputArea = wrapper.find(InputArea);
    inputArea.prop('onSubmit')('Sam Adams');
    expect(wrapper.state('beers')).toEqual(['Sam Adams']);
  });

  it('render the items', () => {
    const wrapper = mount(<BeerListContainer />);
    wrapper.instance().addItem('Bob sinclar');
    wrapper.instance().addItem('Roger Wilco');
    wrapper.update();
    expect(wrapper.find('li')).toHaveLength(2);
  });
});

describe('InputArea', () => {
  it('should contain an input and a button', () => {
    const wrapper = shallow(<InputArea onSubmit={() => {} } />);
    expect(wrapper.containsAllMatchingElements([
      <input />,
      <button>Add</button>
    ])).toEqual(true);
  });

  it('should accept input', () => {
    const wrapper = mount(<InputArea onSubmit={() => {} } />);
    const input = wrapper.find('input');
    input.simulate('change', {target: { value: 'Resin' }});
    expect(wrapper.state('text')).toEqual('Resin');
    expect(wrapper.find('input').prop('value')).toEqual('Resin');
  });


  it('should call onSubmit when button is clicked', () => {
    const addItemSpy = spy();
    const wrapper = shallow(<InputArea onSubmit={addItemSpy} />);
    wrapper.setState({text: 'OctoberFest'});
    const addButton = wrapper.find('button');
    addButton.simulate('click');
    expect(addItemSpy.calledOnce).toEqual(true);
  })
});

describe('BeerList', () => {
  it('should render 0 items', () => {
    const wrapper = shallow(<BeerList items={[]}/>);
    expect(wrapper.find('li')).toHaveLength(0)
  });

  it('should render undefined item', () => {
    const wrapper = shallow(<BeerList items={undefined} />);
    expect(wrapper.find('li')).toHaveLength(0);
  });

  it('should render some items', () => {
    const items = ['Bob', 'Jean', 'Simon'];
    const wrapper = shallow(<BeerList items={items} />);
    expect(wrapper.find('li')).toHaveLength(3);
  });
});


