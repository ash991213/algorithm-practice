const participant = ['leo', 'kiki', 'eden'];
const completion = ['eden', 'kiki'];

const participant2 = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
const completion2 = ['josipa', 'filipa', 'marina', 'nikola'];

const participant3 = ['mislav', 'stanko', 'mislav', 'ana'];
const completion3 = ['stanko', 'ana', 'mislav'];

function solution(participant, completion) {
	var answer = '';

	participant.sort();
	completion.sort();

	for (let i = 0; i < participant.length; i++) {
		if (participant[i] !== completion[i]) {
			answer = participant[i];
			console.log(answer);
			return answer;
		}
	}
}

solution(participant, completion);
solution(participant2, completion2);
solution(participant3, completion3);
