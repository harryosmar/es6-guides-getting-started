class Comment {
    constructor(content, children) {
        this.content = content;
        this.children = children;
    }

    *[Symbol.iterator] () {
        yield this.content;
        for (let child of this.children) {
            yield* child;
        }
    }
}


const commentTree = new Comment(
    'Great post!',
    [
        new Comment('good comment', []),
        new Comment('bad comment', []),
        new Comment('meh', []),
    ]
);

const values = [];

for (let value of commentTree) {
    values.push(value);
}

export default values;