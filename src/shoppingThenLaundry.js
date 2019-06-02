function* shoppingThenLaundry() {
    // start walking to the store

    // still walking

    // at the store going in with cash
    const stuffFromStore = yield 'cash';

    // walking to laundry place
    const cleanClothes = yield 'laundry';

    // walking back home, bring back "groceries" and "clean clothes"
    return [stuffFromStore, cleanClothes];
}

export default shoppingThenLaundry;