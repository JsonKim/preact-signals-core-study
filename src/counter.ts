import { ReadonlySignal, Signal } from './signals';

export function setupCounter(element: HTMLButtonElement, counter: Signal<number>) {
  const setCounter = () => {
    console.log("setCounter 1");
    counter.value = counter.value + 1;
    console.log("setCounter 2");
    element.innerHTML = `count is ${counter.value}`
  }
  element.addEventListener('click', () => setCounter())
  setCounter()
}

export function setupSum(element: HTMLButtonElement, counter: ReadonlySignal<number>) {
  const setCounter = () => {
    element.innerHTML = `sum is ${counter.value}`
  }
  element.addEventListener('click', () => setCounter())
  setCounter()
}
