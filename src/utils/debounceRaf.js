// принимает функцию и возвращает ее обратно уже обернутой
// requestAnimationFrames, которая сообщает браузеру,
// о необходимости выполнить принятую handleResize
// перед следующей отрисовкой

// Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for `wait` milliseconds.
export const debounceRaf = (fn) => {
  let raf = 0;
  // This is the function that is returned and will be executed many times
  // We spread (...args) to capture any number of parameters we want to pass from fn
  return (...args) => {
    // console.log(raf);
    // условие - стопор
    if (raf) return; // если raf = 0; то выполняет дальше
    // чтобы все остальные вызовы в течение фракции 1000/60(?) игнорировались
    // returns an ID you can use to cancel it - обычно возвращает 1, если других requestAnimationFrames не запущено

    // Restart the debounce waiting period.
    // returns a truthy value (it differs in web vs Node)
    raf = requestAnimationFrame(
      // The callback function to be executed after
      // the debounce time has elapsed
      () => {
        fn(...args);
        raf = 0;
      }
    );
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
