// принимает функцию и возвращает ее обратно уже обернутой
// requestAnimationFrames, которая сообщает браузеру,
// о необходимости выполнить принятую handleResize
// перед следующей отрисовкой
export const debounceRaf = (fn) => {
  let raf = 0;
  // аргументы с принятой функции
  return (...args) => {
    if (raf) return; // если requestAnimationFrames уже запущена, то return
    // если нет:
    // returns an ID you can use to cancel it - обычно возвращает 1, если других requestAnimationFrames не запущено
    raf = requestAnimationFrame(() => {
      fn(...args);
      raf = 0;
    });
  };
};
// requestAnimationFrame takes a function and tells the browser to execute that function AFTER the next repaint.
// there are two use cases for using requestAnimationFrame:
// needing repaint for further code usage
// do something constantly (animations etc.)

// Advantages перед setInterval:
// 1.The browser can optimize it, so animations will be smoother - срабатывает в нужный момент (а не через регулярные промежутки времени как setInterval)
// 2.Animations in inactive tabs will stop, allowing the CPU to chill
// 3.More battery-friendly

// Call it once to kick it off, and your function recursively calls itself:

// function repeatOften() {
//   Do whatever
//   requestAnimationFrame(repeatOften);
// }
// requestAnimationFrame(repeatOften);
