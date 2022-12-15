// this function assumes that the y coordinates are from the top
function angleRad(cx, cy, ex, ey) {
    var dy = ey - cy;
    var dx = ex - cx;
    var theta = Math.atan2(dx, dy);
    theta = theta - Math.PI / 2;
    theta = normalizeRad(theta);
    return theta;
  }
  
  function angleDeg(cx, cy, ex, ey) {
    var theta = angleRad(cx, cy, ex, ey);
    theta *= 180 / Math.PI;
    return theta;
  }
  
  function normalizeRad(theta) {
      return (theta + (Math.PI * 2)) % (Math.PI * 2);
  }
  
  function distance(ax, ay, bx, by) {
      const dx = bx - ax;
    const dy = by - ay;
    return Math.sqrt( dx*dx + dy*dy );
  }
  