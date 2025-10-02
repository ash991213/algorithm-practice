/**
 * 프로그래머스 Lv.1 예산
 */

function solution(d, budget) {
	var answer = 0;

	// [1,2,3,4,5]
	d.sort((a, b) => {
		return a - b;
	});

	for (let i = 0; i < d.length; i++) {
		if (0 <= budget - d[i]) {
			budget = budget - d[i];
			answer += 1;
		}
	}

	return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9)); // 3
console.log(solution([2, 2, 2, 3], 10)); // 4
