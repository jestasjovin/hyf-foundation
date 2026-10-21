const activities = [];
const usageLimit = 120;

function addActivity(date, activity, duration) {
  activities.push({ date, activity, duration });
}

function showStatus() {
  if (activities.length === 0) {
    console.log("Add some activities first");
    return;
  }

  let totalMinutes = 0;

  for (let i = 0; i < activities.length; i++) {
    totalMinutes += activities[i].duration;
  }

  console.log(
    `${activities.length} activities, ${totalMinutes} minutes of usage`,
  );

  if (totalMinutes > usageLimit) {
    console.log("You have reached your limit!");
  }
}

function longestActivity() {
  if (activities.length === 0) return;

  let longest = activities[0];

  for (let i = 1; i < activities.length; i++) {
    if (activities[i].duration > longest.duration) {
      longest = activities[i];
    }
  }

  console.log(`${longest.activity}: ${longest.duration} minutes`);
}

addActivity("21/10-26", "Youtube", 30);
addActivity("21/10-26", "Facebook", 25);
addActivity("21/10-26", "News", 23);

showStatus();
longestActivity();
