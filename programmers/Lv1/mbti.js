/**
 * 프로그래머스 Lv.1 성격 유형 검사하기
 */

function solution(survey, choices) {
	var answer = '';

	const test = [
		['R', 'T'],
		['C', 'F'],
		['J', 'M'],
		['A', 'N'],
	];

	let count = [
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
	];

	for (let i = 0; i < survey.length; i++) {
		// choices 4를 기준으로 survey의 앞의 유형 점수를 더할지 뒤의 유형 점수를 더할지 체크
		if (choices[i] < 4) {
			// 지표 배열안에 value 배열에 survey의 앞의 유형이 있을 경우 해당 인덱스를 Count 이중 배열에 +
			test.forEach((value, index) => {
				if (value.indexOf(survey[i][0]) !== -1) {
					count[index][value.indexOf(survey[i][0])] += 4 - choices[i];
				}
			});
		} else if (choices[i] > 4) {
			// 지표 배열안에 value 배열에 survey의 뒤의 유형이 있을 경우 해당 인덱스를 Count 이중 배열에 +
			test.forEach((value, index) => {
				if (value.indexOf(survey[i][1]) !== -1) {
					count[index][value.indexOf(survey[i][1])] += choices[i] - 4;
				}
			});
		}
	}

	// count 이중배열에 value 배열을 확인하여 vluae의 0번째 인덱스값이 1번째 인덱스값보다 크거나 같을경우 answer에 value 인덱스에 해당하는 test 배열 문자열 값 +
	count.forEach((value, index) => {
		if (value[0] >= value[1]) {
			answer += test[index][0];
		} else {
			answer += test[index][1];
		}
	});

	return answer;
}

solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]);
// solution(['TR', 'RT', 'TR'], [7, 1, 3]);
