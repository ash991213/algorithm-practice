const graph = {
	1: [2, 7, 8],
	2: [1, 3, 6],
	7: [1],
	8: [1, 9, 12],
	3: [2, 4, 5],
	6: [2],
	9: [8, 10, 12],
	12: [8],
	4: [3],
	5: [3],
	10: [9],
	11: [9],
};

const dfs = (graph, startNode) => {
	const visited = [];
	let needVisit = [];

	needVisit.push(startNode);

	while (needVisit.length !== 0) {
		const node = needVisit.pop();

		if (!visited.includes(node)) {
			visited.push(node);

			graph[node].sort((a, b) => {
				if (a > b) return -1;
				else if (a < b) return 1;
				else return 0;
			});

			needVisit = [...needVisit, ...graph[node]];
		}
	}
	return visited;
};

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
console.log(dfs(graph, 1));
