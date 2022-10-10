import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter, setupSum } from './counter'
import { computed, signal } from './signals'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter1" type="button"></button>
    </div>
    <div class="card">
      <button id="counter2" type="button"></button>
    </div>
    <div class="card">
      <button id="sum" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

const counter1 = signal(0);
const counter2 = signal(0);
const sum = computed(() => {
  console.log('computed')
  return counter1.value + counter2.value
})

setupCounter(document.querySelector<HTMLButtonElement>('#counter1')!, counter1)
setupCounter(document.querySelector<HTMLButtonElement>('#counter2')!, counter2)
setupSum(document.querySelector<HTMLButtonElement>('#sum')!, sum)