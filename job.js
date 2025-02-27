const firstCandidate = {
  name: "Sahabul Islam",
  honours: 40,
  hsc: 30,
  isFreedomFighterFamily: true,
};
const secondCandidate = {
  name: "Sifat",
  honours: 45,
  hsc: 32,
  isFreedomFighterFamily: false,
};
const thirdCandidate = {
  name: "Islam Sifat",
  honours: 35,
  hsc: 50,
  isFreedomFighterFamily: false,
};

function jobSelection(candidateInfo) {
  if (typeof candidateInfo !== "object") {
    return "Invalid Object";
  }

  let totalMarks = candidateInfo.honours + candidateInfo.hsc;
  console.log(totalMarks);

  if (candidateInfo.isFreedomFighterFamily) {
    totalMarks = totalMarks + totalMarks * 0.2;
  }

  //   if (totalMarks >= 80) {
  //     console.log("You got the job...");
  //   } else {
  //     console.log("Alas! you failed");
  //   }

  if (candidateInfo.isFreedomFighterFamily && totalMarks >= 80) {
    return "Congratulations! you got job by quota";
  } else if (candidateInfo.isFreedomFighterFamily && totalMarks < 80) {
    return "Bad luck! You failed. try next time";
  } else if (!candidateInfo.isFreedomFighterFamily && totalMarks >= 80) {
    return "Congratulations! you got the job. we proud of you....";
  } else if (!candidateInfo.isFreedomFighterFamily && totalMarks < 80) {
    return "Bad bad bad luck. you failed....";
  }

  return totalMarks;
}

// console.log(jobSelection(firstCandidate));
// console.log(jobSelection(secondCandidate));
// console.log(jobSelection(thirdCandidate));
