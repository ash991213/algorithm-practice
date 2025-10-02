/**
 * 프로그래머스 Lv.1 로또의 최고 순위와 최저 순위
 */

function solution(lottos, win_nums) {
	var answer = [];

	/**

	let max = 7;
	let min = 7;

	lottos.forEach((v) => {
		if (v === 0) max--;
		else {
			win_nums.forEach((k) => {
				if (v === k) {
					max--;
					min--;
				}
			});
		}
	});

	if (min === 7) min = 6;

	answer.push(max, min);

	 */

	/**

	let max = 0;
	let min = 0;

	for (let i = 0; i < lottos.length; i++) {
		if (lottos[i] === 0) max++;
		else {
			for (let j = 0; j < win_nums.length; j++) {
				if (lottos[i] === win_nums[j]) {
					max++;
					min++;
				}
			}
		}
	}

	min = min === 0 ? 6 : 7 - min;

	answer.push(7 - max, min);

	 */

	let zero = 0;

	const a = lottos.filter((v) => {
		if (v === 0) zero += 1;

		let flag;

		win_nums.filter((k) => {
			if (v === k) {
				flag = true;
			}
		});
		return flag;
	});

	let min = a.length === 0 ? 6 : 7 - a.length;
	// let max = 7 - a.length - zero; // 하나도 안 맞을시 7등으로 반환해서 Error
	let max = a.length + zero === 0 ? 6 : 7 - a.length - zero;

	answer.push(max, min);

	return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
