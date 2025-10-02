/**
 * 프로그래머스 Lv.2 두 큐 합 같게 만들기
 */

class Queue {
	constructor() {
		this.storage = {};
		this.front = 0;
		this.rear = 0;
	}

	size = () => {
		if (!this.storage[this.rear]) {
			return 0;
		} else {
			return this.rear - this.front + 1;
		}
	};

	queueSum = () => {
		let sum = 0;

		if (this.size() === 0) return sum;

		let point = this.front;

		while (point !== this.rear) {
			sum += this.storage[point];
			point += 1;
		}

		sum += this.storage[point];

		return sum;
	};

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

		if (!this.storage[this.front]) return null;

		if (this.front === this.rear) {
			currentValue = this.storage[this.front];
			delete this.storage[this.front];

			this.front = 0;
			this.rear = 0;
		} else {
			currentValue = this.storage[this.front];
			delete this.storage[this.front];

			this.front += 1;
		}
		return currentValue;
	};
}

function solution(queue1, queue2) {
	var answer = 0;

	const newQueue1 = new Queue();
	const newQueue2 = new Queue();

	for (let i = 0; i < queue1.length; i++) {
		newQueue1.enqueue(queue1[i]);
		newQueue2.enqueue(queue2[i]);
	}

	let priviousQueue1 = newQueue1.queueSum();
	let priviousQueue2 = newQueue2.queueSum();

	const totalQueueValue = priviousQueue1 + priviousQueue2;

	if (totalQueueValue % 2 !== 0) return -1;

	let i = 0;
	let value;

	while (i <= queue1.length * 3) {
		i++;
		if (priviousQueue1 > priviousQueue2) {
			value = newQueue1.dequeue();
			newQueue2.enqueue(value);
			priviousQueue1 -= value;
			priviousQueue2 += value;

			answer++;
		} else if (priviousQueue1 < priviousQueue2) {
			value = newQueue2.dequeue();
			newQueue1.enqueue(value);
			priviousQueue2 -= value;
			priviousQueue1 += value;

			answer++;
		} else {
			return answer;
		}
	}

	return -1;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1], 2));
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2], 7));
console.log(solution([1, 1], [1, 5], -1));
