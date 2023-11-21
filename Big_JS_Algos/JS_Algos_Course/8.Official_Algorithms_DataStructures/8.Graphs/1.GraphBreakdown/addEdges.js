//Say we want to add connections for each city, the edge can represent the flight
//from one city to another

//We can call these flight connections by calling them vertex1, and vertex2

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
}

const g = new Graph();
g.addVertex("Tokyo");
g.addVertex("SF");
g.addVertex("NYC");

g.addEdge("Tokyo", "NYC");
g.addEdge("SF", "NYC");
g;
