class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' +| +']+/g, "");
  }

  static titleize(string) {
    const lowers = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    const words = string.toLowerCase().split(' ');
    const capitalizedWords = words.map((word, index) => {
      if (index === 0 || !lowers.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    });

    return capitalizedWords.join(' ');
  }
}

console.log(Formatter.capitalize("BURSTING BALLOON"));

console.log(Formatter.sanitize("ca$@#tching cold"))

console.log(Formatter.titleize("Maurice a an but of and for at by from end"))

