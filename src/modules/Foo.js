export default {
  log(str, ...substitutions) {
    console.log(str, ...substitutions);
  },
  getString() {
    return 'Hello %s world!';
  }
};