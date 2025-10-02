/**
 * 프로그래머스 Lv.1 개인정보 수집 유효기간
 */

function solution(today, terms, privacies) {
	var answer = [];

	/**
	// 오늘일자 년,월,일
	let t_year = parseInt(today.split('.')[0]);
	let t_month = parseInt(today.split('.')[1]);
	let t_date = parseInt(today.split('.')[2]);

	// 수집일자 년,월,일
	let year;
	let month;
	let date;

	for (let i = 0; i < privacies.length; i++) {
		for (let j = 0; j < terms.length; j++) {
			year = parseInt(privacies[i].split(' ')[0].split('.')[0]);
			month = parseInt(privacies[i].split(' ')[0].split('.')[1]);
			date = parseInt(privacies[i].split(' ')[0].split('.')[2]);

			// 약관 일치하는것끼리 매칭
			if (privacies[i].split(' ')[1] === terms[j].split(' ')[0]) {
				// 개인정보 수집 기간 +
				month += parseInt(terms[j].split(' ')[1]);
				// 전날 개인정보 파기해야하기 때문에 일자 -1
				date -= 1;

				// 날짜 0이면 1달전으로 보내고 일자는 다시 28일
				if (0 === date) {
					month -= 1;
					date += 28;
				}

				// 12달 넘을 경우 1년 올리고 -12달
				if (12 <= month) {
					year += 1;
					month -= 12;
				}

				// 수집기간 timestamp 오늘일자 timestamp 비교하여 수집기간 지난지 확인
				if (new Date(year, month, date).getTime() < new Date(t_year, t_month, t_date).getTime()) answer.push(i + 1);
			}
		}
	}
     */

	privacies.forEach((privacy, index) => {
		terms.forEach((term) => {
			let [date, p_type] = privacy.split(' ');
			let [type, month] = term.split(' ');

			if (p_type === type && new Date(date).setMonth(new Date(date).getMonth() + Number(month)) <= new Date(today).getTime()) answer.push(index + 1);
		});
	});

	return answer;
}

console.log(solution('2022.05.19', ['A 6', 'B 12', 'C 3'], ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']));
console.log(solution('2020.01.01', ['Z 3', 'D 5'], ['2019.01.01 D', '2019.11.15 Z', '2019.08.02 D', '2019.07.01 D', '2018.12.28 Z']));
