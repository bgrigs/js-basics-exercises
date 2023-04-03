/* And on and on and on | The following code keeps looping forever. (You can hit Ctrl-C to stop it.) Why is that? Also modify it so that it stops after the first iteration. 

for (let i = 0; ; i += 1) {
  console.log("and on");
} */

for (let i = 0; ; i += 1) {
  console.log("and on");
  break;
}

// The code doesn't terminate because a condition statement wasn't provided, making the loop continue forever. Adding a break statement or adding a condition will termiante the loop. 