import { format, dateFormatter } from "../src/dateFormatter";

it('when the system date and the date to format are the same day formats as "TODAY"', () => {
  const December = 11; //js Date object month is indexed from 0
  const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, December, 15, 12, 50).getTime(); //Same day different time
  expect(format(dateTimeToFormat, systemDateTime)).toBe("TODAY");
});

it("dateFormatter formats date to follow DD/MM/YYYY", () => {
  const date = "2018-01-20";
  expect(dateFormatter(date)).toBe("20/01/2018");
});

it("dateFormatter formats date to follow DD/MM/YYYY", () => {
  const November = 10;
  const date = new Date(2018, November, 20).toLocaleDateString();
  expect(dateFormatter(date)).toBe("20/11/2018");
});

it("when the system date and the date to format are not the same day formats returns the formatted date in DD/MM/YYYY", () => {
  const October = 9;
  const systemDateTime = new Date(2018, October, 22).getTime();
  const dateTimeToFormat = new Date(2018, October, 23).getTime();
  expect(format(dateTimeToFormat, systemDateTime)).toBe("23/10/2018");
});

it("when the system date and the date to format are not the same day formats returns the formatted date in DD/MM/YYYY", () => {
  const October = 9;
  const systemDateTime = new Date().getTime();
  const dateTimeToFormat = new Date(2018, October, 23).getTime();
  expect(format(dateTimeToFormat, systemDateTime)).toBe("23/10/2018");
});

it("when the system date and the date to format are not the same day formats returns the formatted date in DD/MM/YYYY", () => {
  const July = 6;
  const systemDateTime = new Date().getTime();
  const dateTimeToFormat = new Date(2018, July, 28, 10, 5).getTime();
  expect(format(dateTimeToFormat, systemDateTime)).toBe("28/7/2018");
});
