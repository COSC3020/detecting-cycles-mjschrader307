function hasCycle(graph) {
    // Uses DFS process to detect cycles

    let visited = [];

    // Need to run dfs() on every node in case of disjoint portions
    for (let node in graph) {
        if (!visited.includes(node)) {
            if (dfs(graph, node, null, visited)) {
                return true;
            }
        }
    }

    return false;
}

function dfs(graph, node, parent, visited=[], path=[]) {
    visited.push(node);
    path.push(node);

    let neighbors = graph[node] || [];

    for (let i = 0; i < neighbors.length; i++) {
        let neighbor = neighbors[i];

        // If neighbor is parent, ignore
        if (neighbor !== parent) {
            // If neighbor in path already, there is a cycle
            if (path.includes(neighbor)) return true;

            // If not visited yet, run DFS from there
            if (!visited.includes(neighbor)) {
                // If the function returns true, return true
                if (dfs(graph, neighbor, node, visited, path)) {
                    return true;
                }
            }
        }
    }

    // If getting here, dead end
    path.pop();
    return false;
}