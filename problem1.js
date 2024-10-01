const test_case = ["SRSSRRR", "RSSRR", "SSSRRRRS", "SRRSSR", "SSRSRR"];

function BossBaby(test_case) {
     return test_case.map((item) => {
          let shots = 0;

          for (let i = 0; i < item.length; i++) {
               if (item[i] === "S") {
                    shots++;
               } else if (item[i] === "R") {
                    if (shots === 0) {
                         return "Bad boy";
                    }
                    shots--;
               }
          }
          return shots === 0 ? "Good boy" : "Bad boy";
     });
}

console.log(BossBaby(test_case));
