import React from 'react';

import renderer from 'react-test-renderer';
import LoginComponent from '../modules/login/login.component';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <LoginComponent />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});