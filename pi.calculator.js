console.log(calculatePi());


function calculatePi(pointsCount=1000000) {
  let totalPointsCount = pointsCount;
  let pointsWithinCircleCount = 0;

  for (let i = 0; i < pointsCount; i++) {
    const x = Math.random();
    const y = Math.random();

    if (isWithinCircle(x, y)) {
      pointsWithinCircleCount++
    }
  }

  const pi = 4 * pointsWithinCircleCount / totalPointsCount;
  return pi;
}


function isWithinCircle(x, y) {
  const distance = calculateDistance(x, y);
  return distance <= 1;
}

function calculateDistance(x, y) {
  const squaredDistance = (x ** 2) + (y ** 2);
  return squaredDistance ** 0.5;
}
