const getTheNearestLocation = (locations, point) => {
    let nearestLocation = locations[0];
    let nearestDistance = getDistance(locations[0][1], point);
  
    for (let i = 1; i < locations.length; i++) {
      const [, locationPoint] = locations[i];
      const currentDistance = getDistance(locationPoint, point);
      if (currentDistance < nearestDistance) {
        nearestLocation = locations[i];
        nearestDistance = currentDistance;
      }
    }
  
    return nearestLocation;
  };
  
  const getDistance = (pointA, pointB) => {
    const [xA, yA] = pointA;
    const [xB, yB] = pointB;
    const xDiff = xA - xB;
    const yDiff = yA - yB;
    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  };
  
  const locations = [
    ['Park', [10, 5]],
    ['Sea', [1, 3]],
    ['Museum', [8, 4]],
  ];

  const currentPoint = [5, 5];

  console.log(getTheNearestLocation(locations, currentPoint));