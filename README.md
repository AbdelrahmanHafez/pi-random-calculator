# Pi Random Calculator
## What it is:
This repo answers the following interview question:
You have a funciton that generates a random number between 0 and 1. Calculate the value of Pi.

The question seems strange at first, but it is doable by using some maths.

The trick is drawing X and Y axis, drawing a circle with radius of 1, and a square with the side of 1.
By doing that, we add random points in the square, and calculate the distance between those points and the center of the circle. Once we do that, we can determine whether the point is within the circle or not by seeing if the distance between the point and the center is less than 1 or greater than one.

So we'll have two numbers:
1- The number of the points within the circle.
2- The number of the points within the square.

Knowing that the area of the circle is pi * (R ^2), and we can represent that area by the number of points that fall within the circle.
The area of the square is 1 * 1 = 1;

So the number of points should have the same ratio as the area, which means that:
area of circle / (4 * area of square) = number of points in circle / number of points in square.
pi * (R ^ 2) / 4 = number of points in circle / number of points in square;

The reason we're dividing the area of circle by 4 here is that we're only looking at quarter of the circle.

We do know that R has the value of 1, so in the equation above, the only unknown value is pi.
By evaluating R with `1`, and moving pi to one side of the equation:
pi = 4 * number of points in circle / number of points in square.

![alt text][scattaered points]

## How to run
Clone the repository, then run the following
```bash
$ node pi.calculator.js
```

[scattaered points]: ./scattered-points.png "Scattered points in square"
