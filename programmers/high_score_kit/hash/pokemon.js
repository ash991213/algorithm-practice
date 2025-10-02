const pokemon = [3, 1, 2, 3];
const pokemon2 = [3, 3, 3, 2, 2, 4];
const pokemon3 = [3, 3, 3, 2, 2, 2];

function solution(nums) {
	var answer = 0;

	const maxSelect = nums.length / 2;

	const uniquePokemon = [...new Set(nums)];

	maxSelect < uniquePokemon.length ? (answer = maxSelect) : (answer = uniquePokemon.length);

	console.log(answer);
	return answer;
}

solution(pokemon);
solution(pokemon2);
solution(pokemon3);
