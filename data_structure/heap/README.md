## Heap

- 힙(Heap)은 완전 이진 트리로 주로 우선순위 큐를 구현하는데 밑받침이 되는 자료구조입니다.
- 트리 구조이기 때문에 삽입과 추출에 `O(logN)`의 시간이 소요됩니다.
- 힙은 최대 힙 또는 최소 힙으로 구분할 수 있고 빠른 시간안에 최대값 또는 최소값을 찾아낼 수 있습니다.
- BTS(이진 탐색 트리)와는 조금 다른점은 좌 자식, 우 자식의 위치의 대소관계를 구분하지 않고 부모보다만 작으면 됩니다.

## Heap 규칙

- 힙의 규칙은 간단한데 항상 큰 값이 상위 층(level)에 있고 작은 값이 하위 층에 있어야 합니다.

### 최소 힙과 최대 힙 예시 사진

![Heap](https://user-images.githubusercontent.com/115976217/214765886-0f80c327-f2e2-495e-9546-fdc648d84762.png)

## 힙에서 부모 자식간 관계

- 부모 노드 index : Math.floor((자식노드 index - 1) / 2)
- 왼쪽 자식 노드 index : 부모노드 index \* 2 + 1
- 오른쪽 자식 노드 index : 부모노드 index \* 2 + 2

## Javascript로 Max Heap 구현 / Min Heap은 아래와 반대로 비교하면 된다.

### 삽입 알고리즘 ( Insert )

1. 원소를 맨 마지막에 넣는다. **Insert()**

2. 부모의 노드와 비교해 더 크다면 자리를 바꾼다. **HeapUp**

3. 현재 노드가 부모 노드보다 작거나 가장 위에 도달할 때까지 2번 과정을 반복한다. **While**

```javascript
insert(val) {
		// 1. 원소를 맨 마지막에 넣는다.
		this.data.push(val);
		this.heapUp();
	}

heapUp() {
	let currentIdx = this.data.length - 1;
	const currentValue = this.data[currentIdx];

	// 3. 현재 노드가 부모 노드보다 작거나 가장 위에 도달헐 때까지 2번 과정을 반복한다.
	while (currentIdx > 0) {
		let parentIdx = Math.floor((currentIdx - 1) / 2);
		let parent = this.data[parentIdx];

		// 2. 부모의 노드와 비교해 더 크다면 자리를 바꾼다.
		if (currentValue <= parent) break;

		this.data[parentIdx] = currentValue;
		this.data[currentIdx] = parent;
		currentIdx = parentIdx;
	}
}
```

### 추출 알고리즘 ( poll )

1. 배열에 값이 없다면 추출할 수 없으니 예외처리를 해준다. **If()**

2. 최상위 노드의 값을 추출한다.

3. 맨 뒤에있는 원소를 (기존 최상위 노드)를 추출한다.

4. 추출한 맨 뒤에있는 원소를 최상단 위치로 변경한다.

5. 변경된 노드와 자식 노드들을 비교한다. Left, Rigth index로 두 자식 간 노드의 크기를 비교하며 루트 노드보다 더 클 경우 자리를 바꿔준다.

6. 자식 노드들보다 부모노드가 크거나 가장 바닥에 도달할 때까지 5.을 반복한다.

7. 기존에 추출해둔 배열의 최대값인 maxValue를 반환한다.

```javascript
poll() {
	// 1. 배열에 값이 없다면 추출할 수 없으니 예외처리를 해준다.
	if (!this.data.length) return undefined;

	// 2. 최상위 노드의 값을 추출한다.
	const maxValue = this.data[0];

	// 3. 맨 뒤에있는 원소를 (기존 최상위 노드)를 추출한다.
	const endValue = this.data.pop();

	if (this.data.length > 0) {
		// 4. 추출한 맨 뒤에있는 원소를 최상단 위치로 변경한다.
		this.data[0] = endValue;
		this.heapDown();
	}

	// 7. 기존에 추출해둔 배열의 최대값인 maxValue를 반환한다.
	return maxValue;
}

heapDown() {
	let currentIdx = 0;
	const currentValue = this.data[0];

	// 6. 자식 노드들보다 부모노드가 크거나 가장 바닥에 도달할 때까지 5.을 반복한다.
	while (true) {
		const leftIdx = currentIdx * 2 + 1;
		const leftValue = this.data[leftIdx];
		const rightIdx = currentIdx * 2 + 2;
		const rightValue = this.data[rightIdx];

		// 5. 변경된 노드와 자식 노드들을 비교한다. Left, Rigth index로 두 자식 간 노드의 크기를 비교하며 루트 노드보다 더 클 경우 자리를 바꿔준다.
		if (currentValue < leftValue && currentValue < rightValue) {
			const maxIdx = leftValue > rightValue ? leftIdx : rightIdx;
			this.data[currentIdx] = this.data[maxIdx];
			this.data[maxIdx] = currentValue;
			currentIdx = maxIdx;
		} else if (currentValue < leftValue) {
			this.data[currentIdx] = leftValue;
			this.data[leftIdx] = currentValue;
			currentIdx = leftIdx;
		} else if (currentValue < rightValue) {
			this.data[currentIdx] = rightValue;
			this.data[rightIdx] = currentValue;
			currentIdx = rightIdx;
		} else {
			break;
		}
	}
}
```
