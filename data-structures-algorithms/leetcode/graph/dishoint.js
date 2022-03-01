const graphExample = [[0,1],[1,2],[2,0],[1,3],[5,4], [7,8], [6,8]];

//   /---------\
// (0)---(1)---(2)  (3)  (5)---(4)  (7)---(8)---(6)
//         \--------/

console.log(isConnected(graphExample, [6,7])); // true
console.log(isConnected(graphExample, [1,7])); // false
console.log(isConnected(graphExample, [1,9])); // false
console.log(isConnected(graphExample, [5,0])); // false
console.log(isConnected(graphExample, [5,12])); // false
console.log(isConnected(graphExample, [13,12])); // false

// TODO: continue here : https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3881/

function isConnected(graph, targetVertices) {
  // disjoint set:
  
  // 1. make unions with its head
  // its an array,that the index mean the node and the value mean the head of its union
  let unions = [0,1,2,3,4,5,6,7,8,9];
  
  // go through graph
  // for each verteces pair check if the index of the items(each vertex) and the values are the same if event one of them is different
  //    then use the value from the different item into the other one
  //    else use the first item index as value for the others

  graph.forEach(pair => {
    let [v1, v2] = pair;
    if(unions[v1] !== v1 || unions[v2] !== v2) {
      const leadVertex = unions[v1] !== v1 ? v1 : v2;
      const otherVertexIndex = unions[v1] !== v1 ? v2 : v1;

      unions[otherVertexIndex] = unions[leadVertex];
    } else {
      unions[v2] = v1;
    }
  })

  // 2. find each vertex's head for each target vertex
  // 3. if they have same head, return true else return false
  const [tv1, tv2] = targetVertices;
  return !!(unions[tv1] && unions[tv2] && unions[tv1] === unions[tv2]);
}