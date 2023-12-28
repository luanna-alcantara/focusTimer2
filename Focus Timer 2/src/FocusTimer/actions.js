import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"
import * as color from "./colors.js"
import { resetTimer } from './timer.js';

export function toggleRunning() {
    // Alterna a classe 'running' no elemento HTML
    state.isRunning = document.documentElement.classList.toggle('running')

    // Inicia a contagem regressiva do temporizador
    timer.countdown()

    // Reproduz o som de pressionar o botão
    sounds.buttonPressAudio.play()  
}

export function reset() {
  // Reseta o estado e remove a classe 'running'
  state.isRunning = false
  document.documentElement.classList.remove('running')

  // Atualiza a exibição do temporizador
  timer.updateDisplay()
  sounds.buttonPressAudio.play()

  // Zera o temporizador
  resetTimer(0, 0); // Agora, reinicia em 00:00
}

export function add() {
  // Adiciona minutos ao temporizador
  timer.addMinutes()
  sounds.buttonPressAudio.play()
}

export function subtract() {
  // Subtrai minutos do temporizador
  timer.removeMinutes()
  sounds.buttonPressAudio.play()
}

export function toggleMusic(currentSound){
  
  
    if(currentSound === "ph-tree"){
      state.isForestMute = document.documentElement.classList.toggle('forest-music-on')
      document.documentElement.classList.remove('rain-music-on', 'coffeeShop-music-on', 'fire-music-on')
      if(state.isForestMute){
        sounds.rainAudio.pause()
        color.rainRemoveColor()
        sounds.forestAudio.play()
        color.forestAddColor()
        sounds.coffeeShopAudio.pause()
        color.coffeeShopRemoveColor()
        sounds.fireplaceAudio.pause()
        color.fireplaceRemoveColor()
        return
      }
      sounds.forestAudio.pause()
      color.forestRemoveColor()
    }
  
    if(currentSound === "ph-cloud-rain"){
      state.isRainMute = document.documentElement.classList.toggle('rain-music-on')
      document.documentElement.classList.remove('forest-music-on', 'fireplace-music-on', 'coffeeShop-music-on')
      if(state.isRainMute){
        sounds.forestAudio.pause()
        color.forestRemoveColor()
        sounds.rainAudio.play()
        color.rainAddColor()
        sounds.coffeeShopAudio.pause()
        color.coffeeShopRemoveColor()
        sounds.fireplaceAudio.pause()
        color.fireplaceRemoveColor()
        return
      }
      sounds.rainAudio.pause()
      color.rainRemoveColor()
    }
  
    if(currentSound === "ph-storefront"){
      state.isCoffeeShopMute = document.documentElement.classList.toggle('coffeeshop-music-on')
      document.documentElement.classList.remove('forest-music-on', 'rain-music-on', 'fire-music-on')
      if(state.isCoffeeShopMute){
        sounds.forestAudio.pause()
        color.forestRemoveColor()
        sounds.rainAudio.pause()
        color.rainRemoveColor()
        sounds.coffeeShopAudio.play()
        color.coffeeShopAddColor()
        sounds.fireplaceAudio.pause()
        color.fireplaceRemoveColor()
        return
      }
      sounds.coffeeShopAudio.pause()
      color.coffeeShopRemoveColor()
    }
  
    if(currentSound === "ph-fire"){
      state.isFireplaceMute = document.documentElement.classList.toggle('fire-music-on')
      document.documentElement.classList.remove('forest-music-on', 'coffeeshop-music-on', 'rain-music-on')
      if(state.isFireplaceMute){
        sounds.forestAudio.pause()
        color.forestRemoveColor()
        sounds.rainAudio.pause()
        color.rainRemoveColor()
        sounds.fireplaceAudio.play()
        color.fireplaceAddColor()
        sounds.coffeeShopAudio.pause()
        color.coffeeShopRemoveColor()
        
        return
      }
      sounds.fireplaceAudio.pause()
      color.fireplaceRemoveColor()
    }
  } 
