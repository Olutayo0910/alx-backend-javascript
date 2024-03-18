export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees).reduce((accumulator, currentValue) => {
    accumulator.push(...currentValue);
    return accumulator;
  }, []);
  let currentIndex = 0;
  const maxIndex = allEmployees.length;

  return {
    next() {
      if (currentIndex < maxIndex) {
        const result = { value: allEmployees[currentIndex], done: false };
        currentIndex += 1;
        return result;
      }
      return { value: null, done: true };
    },
    [Symbol.iterator]: function* () {
      while (currentIndex < maxIndex) {
        yield allEmployees[currentIndex];
        currentIndex += 1;
      }
    },
  };
}
