const someOtherShit = () => {
  import('./deleteIcon.js').then((r) => r());
  console.log('hui');
};

const someTestFunction = () => {
  import('./deleteIcon.js').then((r) => r());
  console.log('someTestFunction');
};

export { someOtherShit, someTestFunction };
