let scores = " 90:30:80 ";


let [math, english, science] = scores.trim().split(':').map(Number);


let average=(math+english+science)/3;

console.log("평균 점수는 "+average+"입니다.");