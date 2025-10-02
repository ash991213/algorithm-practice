const graph = {
	1: [2, 3, 4],
	2: [1, 5, 6],
	3: [1],
	4: [1, 7, 8],
	5: [2, 9, 10],
	6: [2],
	7: [4, 11, 12],
	8: [4],
	9: [5],
	10: [5],
	11: [7],
	12: [7],
};

const bfs = (graph, startNode) => {
	const visited = [];
	let needVisit = [];

	needVisit.push(startNode);

	while (needVisit.length !== 0) {
		const node = needVisit.shift();
		if (!visited.includes(node)) {
			visited.push(node);
			needVisit = [...needVisit, ...graph[node]];
		}
	}

	return visited;
};

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(bfs(graph, 1));
