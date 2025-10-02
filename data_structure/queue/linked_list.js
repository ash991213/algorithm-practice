class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.front = null;
		this.rear = null;
	}

	// Linked list의 가장 처음 원소와 가장 마지막 원소를 확인하여 값이 비었는지 검사
	isEmpty = () => {
		return this.front === null && this.rear === null;
	};

	// Linked list의 값이 비었는지 확인하여 값이 비었다면 가장 처음 원소를 새로운 newNode로 할당
	// 값이 비어있지 않다면 가장 마지막 원소의 다음 원소를 newNode로 연결
	// 마지막원소를 newNode로 할당
	enqueue = (data) => {
		const newNode = new Node(data);

		if (this.isEmpty()) this.front = newNode;
		else this.rear.next = newNode;

		this.rear = newNode;
	};

	// Linked list에 가장 처음 원소를 삭제하고 처음 원소의 다음 원소를 처음 원소로 할당
	// Linked list에 가장 처음 원소 이후에 값이 없을경우 마지막 원소도 null로 설정하여 비어있는 Linked list로 설정
	remove = () => {
		this.front = this.front.next;

		if (!this.front) this.rear = null;
	};

	// 가장 처음 원소를 추출하고 가장 처음 원소를 제거
	dequeue = () => {
		if (this.isEmpty()) return;
		const data = this.front.data;

		this.remove();
		return data;
	};

	// Linked list를 순서대로 나열하여 출력
	printLinkedList = () => {
		if (this.isEmpty()) return;

		let currentValue = this.front;

		let print = '(Front)';
		while (currentValue !== this.rear) {
			print += ` ${currentValue.data} ---> `;
			currentValue = currentValue.next;
		}
		print += ` ${this.rear.data} (REAR)`;

		console.log(print);
	};
}

const queue = new Queue();

queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);

queue.printLinkedList(); // (Front) 5 --->  10 --->  15 --->  20 (REAR)

queue.dequeue();
queue.dequeue();

queue.printLinkedList(); // (Front) 15 --->  20 (REAR)
