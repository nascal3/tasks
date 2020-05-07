// Get square radius of each circle
const innerCircle = 1
const middleCircle = 25
const outerCircle = 100

const score = (x, y) => {
    // Use the formular to (X sqaured + Y squared = RADIUS sqaured)
    // to determine if point is inside a circle
    const radiusSquared = Math.pow(x, 2) + Math.pow(y, 2);

    // Run an if else statement to determine the points to be awarded
    if ( radiusSquared >= 0 && radiusSquared <= 1 ) {
        return 10
    } else if ( innerCircle < radiusSquared && radiusSquared <= middleCircle ) {
        return 5
    } else if ( radiusSquared > middleCircle && radiusSquared <= outerCircle ) {
        return 1
    } else {
        return 0
    }
}