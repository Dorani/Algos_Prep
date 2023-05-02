//Front end and Back end dev, trees come up very often in software engineering.

//You will also be using trees to complete a given task:
// In computer science, a tree is a widely used abstract data type (ADT)
// — or data structure implementing this ADT—that simulates a hierarchical tree structure,
// with a root value and subtrees of children with a parent node, represented as a set of linked nodes.

//Several diff types of trees out there:

//1.Diagram 76
  //each box can be categorized, refered to as a node
  //an indivisual node holds data, and also hold a reference to all of its children
  //a child is any node that is directly underneath of a given node
  //parent child relationship with diff nodes on the trees
  //looks kinda like a linked list


  //data can be anything, any data structure, string, array, obj etc..


  //siblings need to share a common parent.


  //One of the most common things we will need to do in an interview is tree transversal
  //ie iterating through every element in some fashion



  //2 big ways to iterate through a tree:

  // Breadth First Traversal: diagram
    //Start at the top and interate from left to right
    //then go down to the next level, then work our way from left to right
    //then go down and then work our way from left to right, regardless of not having a common parent


  //Depth-First Traversal:
    //start at the very top, then we go to the very bottom left hand side as far as we go
    // then as soon as we hit the bottom, we go back up and down.
    //we try to get to the bottom of the tree, the absolute depth, right away
