const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function logOutSeriesText() {
  const lifespanYears = 80;
  const daysPerYear = 365;
  const hoursPerDay = 24;
  const minutesPerHour = 60;
  const minutesPerDay = hoursPerDay * minutesPerHour;
  const lifespanMinutes = lifespanYears * daysPerYear * minutesPerDay;

  let totalPercentage = 0;

  for (let i = 0; i < seriesDurations.length; i++) {
    const series = seriesDurations[i];

    const seriesMinutes =
      series.days * minutesPerDay +
      series.hours * minutesPerHour +
      series.minutes;

    const seriesPercentage = (seriesMinutes / lifespanMinutes) * 100;

    totalPercentage += seriesPercentage;

    console.log(
      `${series.title} took ${seriesPercentage.toFixed(3)}% of my life`,
    );
  }

  console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
}

logOutSeriesText();
