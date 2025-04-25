const fs = require("fs");
eval(fs.readFileSync("code.js") + "");

const tests = [
    {
        // Regular graph with cycle
        "Graph": {
            'A': ['C', 'D', 'E'],
            'B': ['C', 'F'],
            'C': ['A', 'B', 'E', 'F', 'G'],
            'D': ['A'],
            'E': ['A', 'C'],
            'F': ['C', 'B'],
            'G': ['C']
        },
        "Has Cycle": true
    },
    {
        // Disjoint graph
        "Graph": {
            'A': ['B'],
            'B': ['A'],
            'C': ['D'],
            'D': ['E'],
            'E': []
        },
        "Has Cycle": false
    },
    {
        // Simple triangle graph
        "Graph": {
            'A': ['B'],
            'B': ['C'],
            'C': ['A']
        },
        "Has Cycle": true
    },
    {
        // Linear path
        "Graph": {
            'A': ['B'],
            'B': ['C'],
            'C': ['D'],
            'D': ['E'],
            'E': ['F'],
            'F': []
        },
        "Has Cycle": false
    }
];

function testFxn() {
    tests.forEach((testCase, index) => {
      const graph = testCase["Graph"];
      const expected = testCase["Has Cycle"];
  
      const result = hasCycle(graph);
  
      const match = (result === expected);
  
      if (!match) {
        throw new Error(`Test ${index + 1} failed.`);
      }
    });
}
  
testFxn();