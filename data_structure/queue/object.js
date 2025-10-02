class Queue {
	constructor() {
		this.storage = {};
		this.front = 0;
		this.rear = 0;
	}

	// 큐에 데이터가 비어있는 상황에 예외처리
	size = () => {
		if (!this.storage[this.rear]) {
			return 0;
		} else {
			// 데이터가 있다면 마지막 위치 포인터 - 처음 위치 포인터 + 1
			// + 1은 포인터가 0부터 시작한다고 정의했기 때문
			return this.rear - this.front + 1;
		}
	};

	// 큐에 데이터가 비어있다면 0번 위치에 값을 넣는다.
	// 큐에 데이터가 비어있지 않다면 마지막 위치에 + 1 한 위치에 값을 넣는다.
	enqueue = (value) => {
		if (this.size() === 0) {
			this.storage[this.rear] = value;
		} else {
			this.rear += 1;
			this.storage[this.rear] = value;
		}
	};

	dequeue = () => {
		let currentValue;

		// 초기 상태에서 아무런 데이터가 없는 상황에 대해 예외처리
		if (!this.storage[this.front]) return null;

		// 두 포인터의 값이 같은 경우(데이터가 1개 남은 경우)
		// front 포인터에 + 1을 하게되면 가장 처음 위치가 가장 마지막 위치보다 큰 상태가 되기 때문에 포인터를 초기화해준다.
		if (this.front === this.rear) {
			currentValue = this.storage[this.front];
			delete this.storage[this.front];

			this.front = 0;
			this.rear = 0;
		} else {
			// 가장 처음 원소를 추출하고 가장 처음 원소를 제거하고 가장 처음 위치를 + 1 한다.
			currentValue = this.storage[this.front];
			delete this.storage[this.front];

			this.front += 1;
		}
		return currentValue;
	};
}

const queue = new Queue();

queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);

console.log(queue.size());

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.size());

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.size());
