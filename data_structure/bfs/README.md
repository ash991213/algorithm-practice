## BFS ( 너비 우선 탐색 )

- 너비 우선 탐색(Breadth-First Search)는 루트 노드와 인접한 노드들을 먼저 탐색하는 방식입니다.
- 루트노드를 시작으로 인접한 모든 노드들을 우선 방문하는 방법이므로 두개의 큐(Queue)를 사용합니다.
- 출발 노드에서 목표 노드까지의 **최단 길이 경로**를 구할 수 있습니다.
- 경로가 매우 길 경우 탐색 가지가 급격히 증가하므로 많은 메모리 공간을 필요로 합니다.
- 인접 행렬 그래프, 인접 리스트 그래프로 구현할 수 있으며 아래는 인접 리스트 그래프로 구현한 것이며 시간 복잡도는 `O(n+e)`입니다.

### BFS 예시 사진

<p align="center">
    <img src="https://user-images.githubusercontent.com/115976217/217460322-4e09af02-9b7d-4646-9561-7ad56730c992.png">
</p>

## Javascript로 BFS 구현

### 인접 리스트 그래프

```javascript
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
```

### BFS 함수

1. 방문한 노드를 담을 visited 큐 생성

2. 방문해야 할 노드를 담을 needVisit 큐 생성

3. 출발점 노드를 방문해야 할 목록에 삽입

4. 방문해야 할 노드 목록에서 선입선출 방식으로 노드 추출

5. 방문한 노드 목록에 추출한 노드가 없다면 추출한 노드 삽입

6. 방문해야 할 노드 목록 업데이트 ( 방문해야 할 인접한 노드들 추가 )

7. 더이상 방문해야 할 노드가 없을 때까지 4 ~ 6 반복

```javascript
const bfs = (graph, startNode) => {
	// 1. 방문한 노드를 담을 visited 큐 생성
	const visited = [];

	// 2. 방문해야 할 노드를 담을 needVisit 큐 생성
	let needVisit = [];

	// 3. 출발점 노드를 방문해야 할 목록에 삽입
	needVisit.push(startNode);

	// 7. 더이상 방문해야 할 노드가 없을 때까지 4 ~ 6 반복
	while (needVisit.length !== 0) {
		// 4. 방문해야 할 노드 목록에서 선입선출 방식으로 노드 추출
		const node = needVisit.shift();

		// 5. 방문한 노드 목록에 추출한 노드가 없다면 추출한 노드 삽입
		if (!visited.includes(node)) {
			visited.push(node);

			// 6. 방문해야 할 노드 목록 업데이트 ( 방문해야 할 인접한 노드들 추가 )
			needVisit = [...needVisit, ...graph[node]];
		}
	}

	return visited;
};
```
