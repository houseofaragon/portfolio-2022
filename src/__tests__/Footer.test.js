import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { Footer } from '../components/Footer';

test('Renders Footer', async () => {
    const footer = render(<Footer />);
    expect(footer).toMatchSnapshot()
})