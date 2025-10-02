const phone_book = ['119', '97674223', '1195524421'];
const phone_book2 = ['123', '456', '789'];
const phone_book3 = ['12', '123', '1235', '567', '88'];

function solution(phone_book) {
	var answer = true;

	phone_book.sort();

	for (let i = 0; i < phone_book.length - 1; i++) {
		if (phone_book[i + 1].startsWith(phone_book[i])) {
			answer = false;
		}
	}

	console.log(answer);
	return answer;
}

solution(phone_book);
solution(phone_book2);
solution(phone_book3);
