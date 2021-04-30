const {
  findSecondHL,
  isPerfect,
  allFactors,
  amountToCoins,
  extractUniqueChar,
  countLetters,
  exp,
  binarySearch,
  filterLarger,
  generateId,
} = require("./index2");

// findSecondHL
test("return [2, 4] for [1, 2, 3, 4, 5]", () => {
  expect(findSecondHL([1, 2, 3, 4, 5])).toEqual([2, 4]);
});
test("return [-1, 6] for [10 ,6, -2, 1, 2, 3, 4, 5, -1]", () => {
  expect(findSecondHL([10, 6, -2, 1, 2, 3, 4, 5, -1])).toEqual([-1, 6]);
});

//isPerfect
test("return true for 6", () => {
  expect(isPerfect(6)).toBe(true);
});
test("return true for 28", () => {
  expect(isPerfect(28)).toBe(true);
});
test("return true for 8128", () => {
  expect(isPerfect(8128)).toBe(true);
});
test("return true for 10", () => {
  expect(isPerfect(10)).toBe(false);
});
test("return true for 93", () => {
  expect(isPerfect(93)).toBe(false);
});
test("return true for 9854", () => {
  expect(isPerfect(9854)).toBe(false);
});

//allFactors

test("return [1,2,4,7,14] for 28", () => {
  expect(allFactors(28)).toEqual([1, 2, 4, 7, 14]);
});
test("return [1,2,3,4,5,6,10,12,15,20,30] for 60", () => {
  expect(allFactors(60)).toEqual([1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30]);
});

//amountToCoins

test("return [25,10,10,1] for 46, [25,10,5,2,1]", () => {
  expect(amountToCoins(46, [25, 10, 5, 2, 1])).toEqual([25, 10, 10, 1]);
});
test("return [5,2,2] for 9, [25,10,5,2,1]", () => {
  expect(amountToCoins(9, [25, 10, 5, 2, 1])).toEqual([5, 2, 2]);
});

//exp
test("returns 16 for [2,4]", () => {
  expect(exp(2,4)).toEqual(16);
});

//extractUniqueChar
test("extract unique char 'thequickbrownfxjmpsvlazydg' from 'thequickbrownfoxjumpsoverthelazydog'", () => {
  expect(extractUniqueChar("thequickbrownfoxjumpsoverthelazydog")).toEqual(
    "thequickbrownfxjmpsvlazydg"
  );
});

//countLetters
test("counts letters for 'the quick brown fox jumps over the lazy dog'", () => {
  expect(
    countLetters("the quick brown fox jumps over the lazy dog")
  ).toEqual({
    t: 2,
    h: 2,
    e: 3,
    q: 1,
    u: 2,
    i: 1,
    c: 1,
    k: 1,
    b: 1,
    r: 2,
    o: 4,
    w: 1,
    n: 1,
    f: 1,
    x: 1,
    j: 1,
    m: 1,
    p: 1,
    s: 1,
    v: 1,
    l: 1,
    a: 1,
    z: 1,
    y: 1,
    d: 1,
    g: 1,
  });
});

//binarySearch
test("return true for [2,6,3,8,5,4], 4", () => {
  expect(binarySearch([2,6,3,8,5,4], 4)).toBe(true);
});
test("return false for [2,6,3,8,5,4], 1", () => {
  expect(binarySearch([2,6,3,8,5,4], 1)).toBe(false);
});


//filterLarger
test("return numbers higher than 4 in [2,6,3,8,5,4]", () => {
  expect(filterLarger([2,6,3,8,5,4], 4)).toEqual([6,8,5]);
});
test("return numbers higher than 6 in [2,6,3,8,5,4]", () => {
  expect(filterLarger([2,6,3,8,5,4], 6)).toEqual([8]);
});

//generateId
test("return a random id of length 10 for 10", () => {
  expect(generateId(10).length).toBe(10);
});