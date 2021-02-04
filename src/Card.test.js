import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

// smoke test
test("renders without crashing", () => {
    render(<Card/>)
  });

test('it matches snapshot', () => {
    const { asFragment } = render(<Card/>);
    expect(asFragment()).toMatchSnapshot();
});

test('playing with queries', () => {
    const { getByText, queryByText } = render(<Card/>);
    console.log(getByText('Image', {exact: false}));
    console.log(queryByText('Image', {exact: false}));
});
