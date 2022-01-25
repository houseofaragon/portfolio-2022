import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { Header } from '../components/Header';

test('Renders Header', async () => {
    const header = render(<Header />);
    expect(header).toMatchSnapshot()
})