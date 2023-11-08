//.sort is sub optimal method cause of its mechanism to conver to unique code first
//but we if we use it:
//it takes 2 items, a and b
//and then we manipulate it when comparing it

const numComp = (n1, n2) => {
  return n1 - n2;
};

numComp.sort();

//or
numComp.sort((a, b) => a - b);
