export default class Graph {
    #vertices = new Set();
    #adjacentList = new Map();

    get vertices() {
        return Array.from(this.#vertices);
    }

    get adjacentList() {
        const list = {};

        this.#adjacentList.forEach((val, key) => {
            list[key] = Array.from(val);
        });

        return list;
    }

    addVertex(vertex) {
        if (vertex && !this.#vertices.has(vertex)) {
            this.#vertices.add(vertex);
            this.#adjacentList.set(vertex, new Set());

            vertex.output = (status, data1, data2) => {
                for (const dest of this.#adjacentList.get(vertex)) {
                    dest.input(status, data1, data2);
                }
            };
        }
    }

    connect(source, dest) {
        if (source && dest && source !== dest) {
            this.addVertex(source);
            this.addVertex(dest);

            this.#adjacentList.get(source).add(dest);
        }
    }
}
