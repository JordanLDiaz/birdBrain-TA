import { AppState } from "../AppState.js";
import { spottersService } from "../services/SpottersService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawSpotters() {
  let spotters = AppState.spotters
  let template = ''
  spotters.forEach(s => template += `
  <img src="${s.picture}" class="watcher-img" alt="" title="${s.name}">
  `)
  setHTML('spotters', template)
}

export class SpottersController {
  constructor() {
    console.log('hello from spotters controller');
    AppState.on('spotters', _drawSpotters)
  }

  async becomeSpotter(birdId) {
    try {
      await spottersService.becomeSpotter(birdId)
    } catch (error) {
      Pop.error(error)
    }
  }
}