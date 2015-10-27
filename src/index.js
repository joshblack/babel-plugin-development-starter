export default ({ Plugin, types: t }) => {
  return new Plugin('babel-plugin-functional-component-displayname', {
    visitor: {
      Program: {
        exit() {
          console.log('We did it!');
        }
      }
    }
  });
}