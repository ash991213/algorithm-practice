/**
 * 프로그래머스 Lv.1 신고 결과 받기
 */

function solution(id_list, report, k) {
	let answer = new Array(id_list.length).fill(0); // 처리 결과 메일 받은 횟수
	let reportCount = new Array(id_list.length).fill(0); // 신고 당한 횟수
	let benID = []; // 누적 신고로 정지당한 ID

	// 중복 신고 메일 제거
	const NewReport = Array.from(new Set(report));

	// 사용자 index를 기준으로 신고 당한 횟수 및 누적 신고로 정지당한 ID 구하기
	for (let i = 0; i < NewReport.length; i++) {
		const reporterIndex = id_list.indexOf(NewReport[i].split(' ')[1]);

		// 신고당한 ID index에 신고횟수 + 1
		reportCount[reporterIndex] += 1;

		/**
		 * 신고당한 횟수가 k와 같을시 정지당한 계정 배열에 추가
		 * reportCount[reporterIndex] >= k 이렇게 조건을 달면 정지당한 계정 배열에 계속하여 추가되기에
		 * ===로 최초로 k횟수에 도달했을 때 정지당한 계정 배열에 추가하도록 함
		 */

		if (reportCount[reporterIndex] === k) {
			benID.push(NewReport[i].split(' ')[1]);
		}
	}

	// 정지당한 ID를 확인하여 해당 계정을 신고한 유저의 메일 받은 횟수 + 1
	NewReport.forEach((v) => {
		if (benID.indexOf(v.split(' ')[1]) !== -1) {
			answer[id_list.indexOf(v.split(' ')[0])] += 1;
		}
	});

	return answer;
}

console.log(solution(['muzi', 'frodo', 'apeach', 'neo'], ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'], 2));
console.log(solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3));
