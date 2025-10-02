/**
 * 프로그래머스 Lv.2 이모티콘 할인행사 X
 */

function solution(users, emoticons) {
	let answer = [0, 0];

	// 할인율
	const discounts = [10, 20, 30, 40];

	// 할인율과 이모티콘의 모든 경우의 수를 담을 배열
	const totalArr = [];

	// 모든 경우의 수를 찾을 완전 탐색 재귀함수
	const recursive = (emoticons, arr) => {
		// 이모티콘이 없으면 모든 더 이상 탐색이 불가능하므로 모든 경우의 수 배열에 경우의수를 삽입하고 함수 종료
		if (emoticons.length < 1) {
			totalArr.push(arr);
			return;
		}

		// Ex : [10, 7000] * 4 / [20, 7000] * 4 / [30, 7000] * 4 / [40, 7000] * 4 실행
		for (let i = 0; i < discounts.length; i++) {
			recursive(emoticons.slice(1), [...arr, [discounts[i], emoticons[0]]]);
		}
	};

	// 이모티콘과 할인율의 모든 경우의 수를 구함
	recursive(emoticons, []);

	// 모든 경우의 수를 조회하여 최고의 효율을 내는 할인율을 찾는다
	totalArr.forEach((arr) => {
		const result = [0, 0];

		// 회원 수 만큼 반복하여 최고의 효율을 내는 할인율을 찾는다
		users.forEach(([ratio, limitPrice]) => {
			let sum = 0;

			// 이모티콘 할인 경우의수를 조회하여 유저의 구매 할인율보다 같거나 높은 할인율일 경우에만 이모티콘을 구매한다.
			arr.forEach(([discount, cost]) => {
				if (discount >= ratio) sum += (cost / 100) * (100 - discount);
			});

			// 이모티콘 총 구매액이 유저의 마지노선 가격을 넘어가면 이모티콘 플러스에 가입하고 아닐 경우 이모티콘 판매액을 추가한다.
			if (sum >= limitPrice) {
				result[0] += 1;
			} else {
				result[1] += sum;
			}

			// answer와 result를 비교하여 이모티콘 가입자 수가 더 많은 경우의 수의 result로 재할당한다.
			if (answer[0] < result[0]) {
				answer = result;

				// 이모티콘 가입자 수가 같다면 총 판매금액을 비교하여 더 많은 수익
			} else if (answer[0] === result[0]) {
				if (answer[1] < result[1]) {
					answer = result;
				}
			}
		});
	});

	console.log(answer);

	return answer;
}

console.log(
	solution(
		[
			[40, 10000],
			[25, 10000],
		],
		[7000, 9000],
		[1, 5400],
	),
);

console.log(
	solution(
		[
			[40, 2900],
			[23, 10000],
			[11, 5200],
			[5, 5900],
			[40, 3100],
			[27, 9200],
			[32, 6900],
		],
		[1300, 1500, 1600, 4900],
		[4, 13860],
	),
);
