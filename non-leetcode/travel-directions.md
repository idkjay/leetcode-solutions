# Travel Directions Reduction
```You're travelling in the desert, and you're exhausted. You have a list of directions that you need to follow to get to your destination. They look a lot like this:

  ['N', 'N', 'W', 'S', 'E', 'W', 'S']
You're a smart person right? You realize that most of these directions are useless. North and south cancel out, and east and west cancel out. You could really just simplify these directions to:

  ['W']
So you walk one unit west, and arrive at your destination without dying of thirst.
```
# Requirements
```
You need to write a function called reduceDirections() that will take an array of directions represented as characters. You will also return an array of characters, but with the most reduced directions.

You may only move north, south, east, and west
Ignore any instructions other than 'N', 'S', 'E', or 'W'
Each instruction means to move one unit in that direction
Return an empty array if you're somehow already at your destination but didn't even notice!
```
# Solution 1
```
function reduceDirections (directions) {
	// TODO: Don't die in the desert
  let x = 0
  let y = 0
  
  let results = [];
  
	for(let i = 0; i < directions.length; i++) {
		if (directions[i] === "E") {
    	x += 1
    } else if (directions[i] === "W") {
    	x -= 1
    } else if (directions[i] === "N") {
   		y += 1
    } else if (directions[i] === "S") {
    	y -= 1
    } 
  }	
  
  for (let i = 0; i < Math.abs(y); i ++) {
  	if (y > 0) {
    	results.push("N")
    } else {
    	results.push("S")
    }
  }
  
  for (let i = 0; i < Math.abs(x); i ++) {
		//if result is negative, print out S Math.abs(result) number of times otherwise is result is positive, print out N math.abs(result) number of times
		if (x > 0) {
    	results.push("E")
    } else {
    	results.push("W")
    }
  }
 
	return results
}
```

# Explanation
```
My thought process on this was to visualize the directions on a grid with an X and Y plane. I set variables x and y to 0 and “results” as an empty array.

On the X axis, which is horizontal, we have the East and West directions. If you’re going East, that’s a positive number, it takes you to the right, West is negative and will be taking you to the left. 

On the vertical Y axis, North is a positive number, taking you up, and South is negative, taking you down. 

After, I set a for loop, running through the length of directions, our given array. If directions[i] === “E”, we add 1 to our x variable. If it === “W”, we subtract 1 from the x variable. Same happens with “N” and “S”.

What happens next is two for loops, each accounting for their own axis. The for loop runs through the absolute value of x or y. In the logic under the for loop, we check to see if x or y itself is positive or negative. If positive, we push either “N” or “E” to the empty “results” array I had set earlier. The second for loop is the same thing but it pushes “S” or “W” to the results array based on if the x variable is positive or negative. 

Then return the results array.
```

# Solution 2
```
function reduceDirections (directions) {
	// TODO: Don't die in the desert
  let ns = [];
  let ew = [];

  for(x of directions){
    if(x === 'S'){
      ns[ns.length-1] === 'N'? ns.pop(): ns.push('S')
    }
    else if(x === 'N'){
      ns[ns.length-1] === 'S'? ns.pop(): ns.push('N')
    }
    else if(x === 'W'){
      ew[ew.length-1] === 'E'? ew.pop(): ew.push('W')
    }
    else if(x === 'E'){
      ew[ew.length-1] === 'W'? ew.pop(): ew.push('E')
    }
  }

	let results = ns.concat(ew);
  return results ;
}
```