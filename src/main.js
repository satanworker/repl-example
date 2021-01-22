export const someTestFunction = () => {
  import('./deleteIcon').then((r) => r())
  console.log('someTestFunction')
}
