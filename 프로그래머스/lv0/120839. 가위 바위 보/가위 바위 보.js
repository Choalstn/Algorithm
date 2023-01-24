function solution(rsp) {
    // 가위 2 바위 0 보 5
  let obj = {
    2: 0,
    0: 5,
    5: 2,
  };

  const answer = [...rsp].map((v) => obj[v]).join('');
  return answer;
}