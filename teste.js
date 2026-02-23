const validaEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

console.log(validaEmail('mac@test.com'))
console.log(validaEmail('@test.com'))
console.log(validaEmail('mac@test'))