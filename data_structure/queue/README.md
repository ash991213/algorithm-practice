## Queue

- 큐(Queue)는 스택(Stack)과 다르게 선입선출 (First In Frist Out)의 구조를 가지고 있습니다. 스택은 먼저 쌓인 데이터가 가장 늦게 빠져나가는 구조지만 큐는 먼저 쌓인 데이터가 가장 먼저 빠져나가는 구조입니다.
- 대표적인 예시로 Javascript 엔진에서 비동기 함수 실행시 콜백들이 대기열로 들어오는 Task Queue가 있습니다.
- 큐의 삽입과 추출은 항상 끝에서만 일어나므로 `O(1)`의 시간복잡도를 가집니다.

## 큐 예시 사진

![Queue](https://user-images.githubusercontent.com/115976217/215949297-4f6d3383-eaf9-4b76-89b1-cd39c2aba496.png)

## JavaScript Queue 구현 ( Linked List )

## 기본 구조

```javascript
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

	isEmpty = () => {
		return this.front === null && this.rear === null;
	};
}
```

### 삽입 알고리즘 ( Enqueue )

1. 입력받은 값으로 새로운 노드 인스턴스를 생성한다. **new Node()**

2. Linked list가 비어있다면 가장 첫번째 위치에 새로운 노드를 할당한다. **this.front = newNode**

3. Linked list가 비어있지 않다면 마지막 원소의 다음 위치에 새로운 노드를 연결한다. **this.rear.next = newNode**

4. 가장 마지막 위치를 새로운 노드로 할당한다. **this.rear = newNode**

```javascript
enqueue = (data) => {
	const newNode = new Node(data);

	if (this.isEmpty()) this.front = newNode;
	else this.rear.next = newNode;

	this.rear = newNode;
};
```

### 추출 알고리즘 ( Dequeue )

1. Linked list가 비어있을 경우에 대해 예외처리 **if (this.isEmpty())**

2. 가장 처음 원소를 추출한다.

3. 가장 처음 원소를 제거한다. **remove()**

3-1. 가장 처음 원소를 가장 처음 원소의 다음 원소로 할당한다.

3-2. 가장 처음 원소가 빈값이라면 가장 마지막 값도 빈값으로 할당한다.

4. 가장 처음 원소를 반환한다. **return**

```javascript
dequeue = () => {
	if (this.isEmpty()) return;
	const data = this.front.data;

	this.remove();
	return data;
};

remove = () => {
	this.front = this.front.next;

	if (!this.front) this.rear = null;
};
```

### 출력

1. Linked list가 비어있을 경우에 대해 예외처리 **if (this.isEmpty())**

2. 가장 처음 원소부터 출력 **let currentValue = this.front**

3. 가장 처음 원소의 다음 원소 출력 **print += `${currentValue.data} --->`**

4. 가장 처음 원소의 다음 원소가 가장 마지막 원소와 일치할 때까지 반복 **while (currentValue !== this.rear)**

5. 가장 마지막 원소 출력 **print += ` ${this.rear.data} (REAR)`**

```javascript
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
```

## JavaScript Queue 구현 ( Object )

## 기본 구조

```javascript
class Queue {
	constructor() {
		this.storage = {};
		this.front = 0;
		this.rear = 0;
	}
}
```

### 삽입 알고리즘 ( Enqueue )

1. 큐에 데이터가 비어있다면 0번 위치에 값을 할당한다.

2. 큐에 데이터가 비어있지 않다면 마지막 위치 + 1 한 위치에 값을 할당한다.

```javascript
enqueue = (value) => {
	if (this.size() === 0) {
		this.storage[this.rear] = value;
	} else {
		this.rear += 1;
		this.storage[this.rear] = value;
	}
};
```

### 추출 알고리즘 ( Dequeue )

1. 초기 상태에서 큐에 아무런 데이터가 없는 상황에 대해 예외처리

2. 두 포인터의 값이 같은 경우(데이터가 1개 남은 경우)에는 가장 처음 원소를 추출/제거하고, front 포인터에 + 1을 하게되면 가장 처음 위치가 가장 마지막 위치보다 큰 상태가 되기 때문에 포인터를 초기화한다.

3. 가장 처음 원소를 추출/제거하고 가장 처음 위치를 + 1 한다.

### 크기 출력

1. 큐에 데이터가 비어있는 상황에 예외처리를 한다.

2. 마지막 위치 포인터 - 처음 위치 포인터 + 1을 반환한다. + 1을 하는 이유는 포인터를 0부터 시작한다고 정의하였기 때문이다.

```javascript
size = () => {
	if (!this.storage[this.rear]) {
		return 0;
	} else {
		return this.rear - this.front + 1;
	}
};
```
