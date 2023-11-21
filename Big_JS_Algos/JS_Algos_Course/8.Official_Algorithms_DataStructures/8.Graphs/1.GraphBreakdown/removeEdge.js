class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
}

const g = new Graph();
g.addVertex("Tokyo");
g.addVertex("SF");
g.addVertex("NYC");

g.addEdge("Tokyo", "NYC");
g.addEdge("Tokyo", "SF");

g.removeEdge("Tokyo", "NYC");
g.removeEdge("Tokyo", "SF");
g;
