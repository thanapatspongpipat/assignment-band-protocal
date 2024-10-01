const test_case = [
     { n: 5, lr: 5, distance: [2, 5, 10, 12, 15] },
     { n: 6, lr: 10, distance: [1, 11, 30, 34, 35, 37] },
     { n: 4, lr: 5, distance: [3, 4, 6, 7] },
];

function ProtectChicken(test_case) {
     return test_case.map((item) => {
          if (item.n != item.distance.length) {
               return "Data Incorrect";
          }
          let left = 0;
          let maxChickens = 0;
          for (let right = 0; right < item.n; right++) {
               while (item.distance[right] - item.distance[left] >= item.lr) {
                    left++;
               }
               maxChickens = Math.max(maxChickens, right - left + 1);
          }
          return maxChickens;
     });
}

console.log(ProtectChicken(test_case));
