import state from './state.js'
import * as el from './elements.js'
import { reset } from './actions.js'
import { kitchenTimer } from './sounds.js'

export function countdown() {
    clearTimeout(state.countdownId)

    if(!state.isRunning) {
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if(seconds < 0) {
        seconds = 59
        minutes--
    }

    if(minutes < 0) {
        reset()
        kitchenTimer.play()
        return
    }

    updateDisplay(minutes, seconds)

    state.countdownId = setTimeout(() => countdown(), 1000);
}

export function addMinutes() {
    let minutes = Number(el.minutes.textContent)
    el.minutes.textContent = String(Math.max(minutes + 5, 0)).padStart(2, '0')
}

export function removeMinutes(){
    let minutes = Number(el.minutes.textContent)
    el.minutes.textContent = String(Math.max(minutes - 5, 0)).padStart(2, '0')
}
  
export function resetTimer(minutes = 0, seconds = 0) {
    clearTimeout(state.countdownId);
    state.countdownId = null;
    updateDisplay(minutes, seconds);
}

export function updateDisplay(minutes, seconds) {
    minutes = Math.max(minutes, 0);
    seconds = Math.max(seconds, 0);

    if (!isNaN(minutes) && !isNaN(seconds)) {
    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")
}
}
