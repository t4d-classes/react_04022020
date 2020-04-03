import * as React from 'react';
import { render, mount, shallow } from 'enzyme';

import { ToolHeader } from './ToolHeader';

describe('<ToolHeader /> Enzyme Static HTML', () => {

  test('<ToolHeader /> renders', () => {
    
    const componentHtml = render(
      <div><ToolHeader headerText="The Tool" /></div>
    ).html();
    
    expect(componentHtml).toMatchSnapshot();
  });

});

describe('<ToolHeader /> Enzyme Mock DOM', () => {

  let component;
  let componentDOMNode;

  beforeEach(() => {
    component = mount(<ToolHeader headerText="The Tool" />);
    componentDOMNode = component.find('h1');
  });

  test('<ToolHeader /> renders', () => {
    expect(componentDOMNode.text()).toBe('The Tool');
  });

});

describe('<ToolHeader /> Shallow with Enzyme', () => {

  let component;
  let componentDOMNode;

  beforeEach(() => {
    component = shallow(<ToolHeader headerText="The Tool" />);
    componentDOMNode = component.find('h1');
  });

  test('<ToolHeader /> renders', () => {
    expect(componentDOMNode.text()).toBe('The Tool');
  });

});
