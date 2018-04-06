export default () => {
    const addCounter = list => {
        // return list.concat([0]);
        return [...list, 0];
    };

    const removeCounter = (list, index) => {
        // return list
        //     .slice(0, index)
        //     .concat(list.slice(index + 1))
        return [
            ...list.slice(0, index),
            ...list.slice(index + 1)
        ]
    };

    const incrementCounter = (list, index) => {
        // return list
        //     .slice(0, index)
        //     .concat([list[index] + 1])
        //     .concat(list.slice(index + 1));
        return [
            ...list.slice(0, index),
            list[index] + 1,
            ...list.slice(index + 1)
        ];
    };

////

    const testAddCounter = () => {
        const listBefore = [],
            listAfter = [0];

        deepFreeze(listBefore);

        expect(
            addCounter(listBefore)
        ).toEqual(listAfter);
    };

    const testRemoveCounter = () => {
        const listBefore = [0, 10, 20],
            listAfter = [0, 20];

        deepFreeze(listBefore);

        expect(
            removeCounter(listBefore, 1)
        ).toEqual(listAfter);
    };

    const testIncrementCounter = () => {
        const listBefore = [0, 10, 20],
            listAfter = [0, 11, 20];

        deepFreeze(listBefore);

        expect(
            incrementCounter(listBefore, 1)
        ).toEqual(listAfter);
    };

////

    testAddCounter();
    testRemoveCounter();
    testIncrementCounter();
    console.log('All Test Passed.');
};
