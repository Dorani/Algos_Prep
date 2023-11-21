//Graphs Consists:

//Vertex - a node
//Edge - connection between nodes
//Directed || Undirected - directions assigned to distanced between vertices

//Many types of graphs
//Undirected - two way connections, we can traverse in any direction we choose
//Directed - arrows, as a distinction and specification, the direction assigne between 2 vertices ie nodes
//Weighted - assign a value to the edges, ie information about
//Un-weight - no value associated with an edgte

//What do we need to construct this?
//We could use a matrix, perhaps a nested array,
//Adjacency Matrix to represent the edges, ie an excel sheet with rows/cols
//0/1, TRUE || FALSE, etc..
//This is directed

//We could also use another form of a matrix
//Adjacency List, to store the edges, we index them, and store a list to maintain
//its connections, this is undirected graph
//to optimize this, we can store it in a hash table
//each Key, will represent a list that references its associated nodes

//Runtime Complexity:

//Adjacency List - can take up less space (in sparse graphs), faster to iterate over all edges, can be slower to lookup specific edges;
//Adjacency Matrix - faster to look up, however takes up more space (for sparce data) and slower to iterate over all edges

//We will use Adjacency List, because it is the closest to real life example,

//What we need for our undirected graph, we want to go from A to B, but also B to A:

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
}
