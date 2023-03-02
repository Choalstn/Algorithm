function solution(spell, dic) {
  return dic.filter((el1) => spell.every((el2) => el1.includes(el2))).length
    ? 1
    : 2;
}