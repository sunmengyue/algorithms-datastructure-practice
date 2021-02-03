function takeShower() {
  return 'showering';
}

function haveBreakFast() {
  let meal = cookFood();
  return;
  `eating ${meal}`;
}

function cookFood() {
  let items = ['Oatmeals', 'Eggs', 'Protein shake'];
  return items[Math.floor(Math.random() * items.length)];
}

function wakeup() {
  takeShower();
  haveBreakFast();
  console.log(`Ok let's go to work`);
}

wakeup();
