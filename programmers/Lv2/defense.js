/**
 * 프로그래머스 Lv.2 디펜스 게임
 */

class Heap {
	constructor() {
		this.data = [];
	}

	insert(val) {
		this.data.push(val);
		this.heapUp();
	}

	heapUp() {
		let currentIdx = this.data.length - 1;
		const currentValue = this.data[currentIdx];

		while (currentIdx > 0) {
			let parentIdx = Math.floor((currentIdx - 1) / 2);
			let parent = this.data[parentIdx];

			if (currentValue <= parent) break;

			this.data[parentIdx] = currentValue;
			this.data[currentIdx] = parent;
			currentIdx = parentIdx;
		}
	}

	poll() {
		if (!this.data.length) return undefined;

		const maxValue = this.data[0];
		const endValue = this.data.pop();

		if (this.data.length > 0) {
			this.data[0] = endValue;
			this.heapDown();
		}

		return maxValue;
	}

	heapDown() {
		let currentIdx = 0;
		const currentValue = this.data[0];

		while (true) {
			const leftIdx = currentIdx * 2 + 1;
			const leftValue = this.data[leftIdx];
			const rightIdx = currentIdx * 2 + 2;
			const rightValue = this.data[rightIdx];

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
}

function solution(n, k, enemy) {
	var answer = 0;

	// MaxHeap 인스턴스 생성한다.
	const maxHeap = new Heap();

	for (let i = 0; i < enemy.length; i++) {
		// MaxHeap에 라운드마다 공격하는 병사의 수를 삽입한다.
		maxHeap.insert(enemy[i]);

		// 준호가 보유한 병사에서 라운드마다 공격하는 병사의 수를 뺀다.
		n -= enemy[i];

		// 준호의 병사가 -가 된다면 공격하는 병사를 막을 수 없다는 것이니 무적권을 사용한다.
		if (n < 0) {
			if (k) {
				// 무적권이 있을때, 현재 라운드까지 라운드마다 공격한 병사 수의 최댓값을 추출한다.
				const maxEnemy = maxHeap.poll();

				// 무적권을 효율적으로 사용할 것이니 라운드마다 공격한 병사 수의 최댓값을 더한다.
				n += maxEnemy;

				// 사용한 무적권을 뺀다.
				k--;
			} else break; // 병사도 부족하고 무적권도 없을 시 더이상 라운드를 진행할 수 없다.
		}

		answer++;
	}

	return answer;
}

const A = solution(7, 3, [4, 2, 4, 5, 3, 3, 1]);
const B = solution(2, 4, [3, 3, 3, 3]);

console.log(A);
console.log(B);
