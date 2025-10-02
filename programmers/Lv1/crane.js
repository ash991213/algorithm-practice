/**
 * 프로그래머스 Lv.1 크레인 인형뽑기 게임
 */

function solution(board, moves) {
	var answer = 0;
	let box = [];
	for (let i = 0; i < moves.length; i++) {
		for (let j = 0; j < board.length; j++) {
			if (board[j][moves[i] - 1]) {
				if (box[box.length - 1] === board[j][moves[i] - 1]) {
					box.pop();
					answer += 2;
				} else {
					box.push(board[j][moves[i] - 1]);
				}
				board[j][moves[i] - 1] = 0;
				break;
			}
		}
	}
	return answer;
}

console.log(
	solution(
		[
			[0, 0, 0, 0, 0],
			[0, 0, 1, 0, 3],
			[0, 2, 5, 0, 1],
			[4, 2, 4, 4, 2],
			[3, 5, 1, 3, 1],
		],
		[1, 5, 3, 5, 1, 2, 1, 4],
		4,
	),
);
