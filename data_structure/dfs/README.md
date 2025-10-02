## DFS ( 깊이 우선 탐색 )

- 깊이 우선 탐색(Depth-First Search)는 루트노드의 자식 노드들을 먼저 탐색하는 방식입니다.
- 한개의 큐와 한개의 스택을 사용합니다.
- 미로게임에 탈출 경로가 존재하는지 파악하는데 사용할 수 있습니다.
- 탈출구가 깊은 레벨에 있을 경우 빨리 찾을 수 있으나 해당 경로가 최단 경로인지는 알 수 없습니다.
- 인접 행렬 그래프, 인접 리스트 그래프로 구현할 수 있으며 아래는 인접 리스트 그래프로 구현한 것이며 시간 복잡도는 `O(n+e)`입니다.

### DFS 예시 사진

<p align="center">
    <img src="https://user-images.githubusercontent.com/115976217/217467578-e79208f9-2f4e-4480-aa8e-dfc529541705.png">
</p>

## Javascript로 DFS 구현

### 인접 리스트 그래프

```javascript
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
```

### DFS 함수

1. 방문한 노드를 담을 visited 큐 생성

2. 방문해야 할 노드를 담을 needVisit 큐 생성

3. 출발점 노드를 방문해야 할 목록에 삽입

4. 방문해야 할 노드 목록에서 후입선출 방식으로 노드 추출

5. 방문한 노드 목록에 추출한 노드가 없다면 추출한 노드 삽입

6. 그래프의 왼쪽을 먼저 탐색하도록 정렬 / 후입선출이기 때문에 작은숫자가 뒤로 정렬

7. 방문해야 할 노드 목록 업데이트 ( 방문해야 할 인접한 노드들 추가 )

8. 더이상 방문해야 할 노드가 없을 때까지 4 ~ 7 반복

```javascript
const dfs = (graph, startNode) => {
	// 1. 방문한 노드를 담을 visited 큐 생성
	const visited = [];

	// 2. 방문해야 할 노드를 담을 needVisit 큐 생성
	let needVisit = [];

	// 3. 출발점 노드를 방문해야 할 목록에 삽입
	needVisit.push(startNode);

	// 8. 더이상 방문해야 할 노드가 없을 때까지 4 ~ 7 반복
	while (needVisit.length !== 0) {
		// 4. 방문해야 할 노드 목록에서 후입선출 방식으로 노드 추출
		const node = needVisit.pop();

		// 5. 방문한 노드 목록에 추출한 노드가 없다면 추출한 노드 삽입
		if (!visited.includes(node)) {
			visited.push(node);

			// 6. 그래프의 왼쪽을 먼저 탐색하도록 정렬 / 후입선출이기 때문에 작은숫자가 뒤로 정렬
			graph[node].sort((a, b) => {
				if (a > b) return -1;
				else if (a < b) return 1;
				else return 0;
			});

			// 7. 방문해야 할 노드 목록 업데이트 ( 방문해야 할 인접한 노드들 추가 )
			needVisit = [...needVisit, ...graph[node]];
		}
	}
	return visited;
};
```
