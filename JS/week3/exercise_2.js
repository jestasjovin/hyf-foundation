const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTravelTime(travel) {
  const minutes = Math.round((travel.destinationDistance / travel.speed) * 60);
  return `${Math.floor(minutes / 60)} hours and ${minutes % 60} minutes`;
}

const travelTime = calculateTravelTime(travelInformation);

console.log(travelTime); // 8 hours and 38 minutes
