import { expect, test } from '@jest/globals';
import { render, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import useBreedList from '../hooks/useBreedList';

import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();
fetchMock.doMock()

function getBreedList(animal) {
    let list;

    function TestComponent () {
        list = useBreedList(animal);
        return null;
    }

    render(<TestComponent />)

    return list;
}

test("gives empty array given no animal", async () => {
    const [ breedList, status ] = getBreedList();

    expect(breedList).toHaveLength(0);
    expect(status).toEqual('unloaded');
})

test("give empty use renderhooks", () => {
    const { result } = renderHook(() => useBreedList());
    const [breedList, status] = result.current;

    expect(breedList).toHaveLength(0);
    expect(status).toEqual('unloaded');
});

xtest("give back breeds with an animal", async () => {
    const breeds = ['Corgie', 'Poodle'];
    console.log('fetch', fetch);
    const responseMock = () => JSON.stringify({
        animal: "dog",
        breeds
    })

    fetch.mockResponseOnce(responseMock())

    console.log(renderHook(() => useBreedList("dog")))

    const { result, waitForNextUpdate } = renderHook(() => useBreedList("dog"))

    await waitForNextUpdate(() => {
        const [breedList, status] = result.current;

        expect(breedList).toEqual(breeds);
        expect(status).toEqual('loaded');
    });
    

})