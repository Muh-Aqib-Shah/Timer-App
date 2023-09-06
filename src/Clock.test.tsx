import {  render } from '@testing-library/react';
import { Clock } from './Clock';

test('Checks For three buttons in the Clock', () => {
  let  element  = render(<Clock />);

  expect(element.getAllByTestId("clock-btn").length).toEqual(3)

});

test('Testing Start and Stop Buttons', () => {
  let  element  = render(<Clock />);
  let buttons = element.getAllByTestId("clock-btn")

  for(let i=0;i<2;i++){
    let btn = buttons[i];

  btn.click()
  expect(btn).toHaveClass("true")
  btn.click()
  expect(btn.classList).not.toContain("true")
  }
  
});

test('Testing Reset Buttons', () => {
  let  element  = render(<Clock />);
  let button = element.getAllByTestId("clock-btn")[2];

  button.click()

  expect(button).toHaveClass("false");
  button.click();
  expect(button.classList).not.toContain("false")
  
});

test('Checks For Leds in Clock for telling time', () => {
  let  element  = render(<Clock />);

  expect(element.getAllByTestId("led").length).toEqual(28)

});


