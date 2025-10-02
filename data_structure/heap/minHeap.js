class MinHeap {
	constructor() {
		this.data = [];
	}

	insert(val) {
		// 1. 원소를 맨 마지막에 넣는다.
		this.data.push(val);
		this.heapUp();
	}

	heapUp() {
		let currentIdx = this.data.length - 1;
		const currentValue = this.data[currentIdx];

		// 3. 현재 노드가 부모 노드보다 크거나 가장 위에 도달할 때까지 2번 과정을 반복한다.
		while (currentIdx > 0) {
			let parentIdx = Math.floor((currentIdx - 1) / 2);
			let parent = this.data[parentIdx];

			// 2. 부모의 노드와 비교해 더 크다면 자리를 바꾼다.
			if (currentValue >= parent) break;

			this.data[parentIdx] = currentValue;
			this.data[currentIdx] = parent;
			currentIdx = parentIdx;
		}
	}

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

		// 6. 자식 노드들보다 부모노드가 작거나 가장 바닥에 도달할 때까지 5.을 반복한다.
		while (true) {
			const leftIdx = currentIdx * 2 + 1;
			const leftValue = this.data[leftIdx];
			const rightIdx = currentIdx * 2 + 2;
			const rightValue = this.data[rightIdx];

			// 5. 변경된 노드와 자식 노드들을 비교한다. Left, Rigth index로 두 자식 간 노드의 크기를 비교하며 루트 노드보다 더 클 경우 자리를 바꿔준다.
			if (currentValue > leftValue && currentValue > rightValue) {
				const minIdx = leftValue > rightValue ? rightIdx : leftIdx;
				this.data[currentIdx] = this.data[minIdx];
				this.data[minIdx] = currentValue;
				currentIdx = minIdx;
			} else if (currentValue > leftValue) {
				this.data[currentIdx] = leftValue;
				this.data[leftIdx] = currentValue;
				currentIdx = leftIdx;
			} else if (currentValue > rightValue) {
				this.data[currentIdx] = rightValue;
				this.data[rightIdx] = currentValue;
				currentIdx = rightIdx;
			} else {
				break;
			}
		}
	}
}

const minHeap = new MinHeap();

minHeap.insert(5);
minHeap.insert(10);
minHeap.insert(8);
minHeap.insert(25);
minHeap.insert(33);

console.log(minHeap);
console.log(minHeap.poll());
console.log(minHeap.poll());
console.log(minHeap.poll());
console.log(minHeap.poll());
console.log(minHeap.poll());
console.log(minHeap);
