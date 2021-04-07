const countDecimals = require("./countDecimals");

test("counts decimal places", () => {
  expect(countDecimals(0.153)).toBe(3);
  expect(countDecimals(0)).toBe(0);
  expect(countDecimals(12.56153)).toBe(5);
  expect(countDecimals(-0.56)).toBe(2);
});
