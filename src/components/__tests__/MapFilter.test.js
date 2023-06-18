import MapFilter from '../MapFilter';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

const handleMinTotMock = jest.fn();
const handleMinSizeMock = jest.fn();

it("renders", () => {
    const { asFragment } = render(<MapFilter 
        handleMinTot={handleMinTotMock}
        handleMinSize={handleMinSizeMock}>
    </MapFilter>);
    expect(asFragment()).toMatchSnapshot();
});

it("will select the choice properly w/ a normal minTot", () => {
    const { asFragment } = render(<MapFilter 
        handleMinTot={handleMinTotMock}
        minTot={10}
        handleMinSize={handleMinSizeMock}>
    </MapFilter>);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId('tot-accident-select')).toHaveValue("10")
});

it("will not fail if an improper size is sent in minTot", () => {
    const { asFragment } = render(<MapFilter 
        handleMinTot={handleMinTotMock}
        minTot={88}
        handleMinSize={handleMinSizeMock}>
    </MapFilter>);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId('tot-accident-select')).toHaveValue("0")
});

it("will select the choice properly w/ a normal minSize", () => {
    const { asFragment } = render(<MapFilter 
        handleMinTot={handleMinTotMock}
        minSize={800000}
        handleMinSize={handleMinSizeMock}>
    </MapFilter>);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId('neighborhood-size-select')).toHaveValue("800000")
});

it("will not fail if an improper size is sent in minSize", () => {
    const { asFragment } = render(<MapFilter 
        handleMinTot={handleMinTotMock}
        minSize={88}
        handleMinSize={handleMinSizeMock}>
    </MapFilter>);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId('neighborhood-size-select')).toHaveValue("0")
});

