//ARRAYS

const playlist = [
  { title: "Levitating", artist: "Dua Lipa", seconds: 203 },
  { title: "Yellow", artist: "Coldplay", seconds: 266 },
  { title: "Flowers", artist: "Miley Cyrus", seconds: 200 },
  { title: "Houdini", artist: "Dua Lipa", seconds: 185 },
];

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const formattedSeconds = seconds % 60;
  return `${minutes}:${formattedSeconds}`;
}
function getTotalTime(playlist) {
  let totalSeconds = 0;
  for (let i = 0; i < playlist.length; i++) {
    totalSeconds += playlist[i].seconds;
  }
  return formatTime(totalSeconds);
}

// for (let i = 0; playlist.length; i++) {
//   playlist[i].time = formatTime(playlist[i].seconds);
// }

function getSongsBy(playlist, artist) {
  for (let i = 0; i < playlist.length; i++) {
    if (playlist[i].artist.includes(artist)) {
      return playlist[i];
    }
  }
}

function addSong(playlist, artist) {
  const song = {
    artist: artist,
    title: "ABC",
    seconds: 200,
  };
  playlist.push(song);
  return playlist[playlist.length - 1];
}

console.log(getTotalTime(playlist));
console.log(getSongsBy(playlist, "Coldplay"));
console.log(addSong(playlist, "Jovin"));

// formatTime(203) → "3:23" — use Math.floor and %. Careful: 185 → "3:05"
// Log each song: Levitating — Dua Lipa (3:23)
// getTotalTime(playlist) → "14:14"
// getSongsBy(playlist, "Dua Lipa") → titles
// Bonus: addSong(title, artist, seconds) — no duplicates.

const openingHours = {
  monday: { open: 8, close: 17 },
  friday: { open: 8, close: 20 },
  saturday: { open: 10, close: 14 },
  sunday: null,
};
["tuesday", "wednesday", "thursday"].forEach((day) => {
  openingHours[day] = openingHours.monday;
});

function isOpen(day, hour) {
  const schedule = openingHours[day.toLowerCase()];
  return schedule && hour >= schedule.open && hour < schedule.close
    ? true
    : false;
}

function getOpeningText(day_) {
  const day = openingHours[day_.toLowerCase()];
  return `${day_} ${day ? day.open + "–" + day.close : closed}`;
}

console.log(isOpen("friday", 19)); // true
console.log(isOpen("saturday", 15)); // false
console.log(isOpen("sunday", 12)); // false

console.log(isOpen("Monday", 9)); // works too

console.log(getOpeningText("friday")); //→ "friday: 8–20" or "sunday: closed"
