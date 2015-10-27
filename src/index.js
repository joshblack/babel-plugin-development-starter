export default ({ Plugin, types: t }) => {
  return new Plugin('babel-plugin-name', {
    visitor: {
      Program: {
        exit() {
          console.log('We did it!');
        }
      }
    }
  });
}
