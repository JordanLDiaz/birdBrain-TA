import { AppState } from "../AppState.js";
import { Bird } from "../models/Bird.js";
import { birdsService } from "../services/BirdsService.js";
import { spottersService } from "../services/SpottersService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawBirds() {
  let birds = AppState.birds
  let template = ''
  birds.forEach(b => template += b.CardTemplate)
  setHTML('birds', template)
}

function _drawActiveBird() {
  let bird = AppState.activeBird
  setHTML('modal-guts', bird.BirdDetails)
}

export class BirdsController {
  constructor() {
    console.log('hello from birds controller');
    this.getBirds()
    AppState.on('birds', _drawBirds)
    AppState.on('activeBird', _drawActiveBird)
    AppState.on('activeBird', this.getSpottersForActiveBird)
  }

  async getBirds() {
    try {
      await birdsService.getBirds()
    } catch (error) {
      Pop.error(error)
    }
  }

  async setActive(birdId) {
    try {
      await birdsService.setActive(birdId)
    } catch (error) {
      Pop.error(error.message)
    }
  }

  getBirdForm() {
    setHTML('modal-guts', Bird.BirdForm)
  }

  async createBird() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      const formData = getFormData(form)
      // @ts-ignore
      if (formData.canFly == 'on') {
        // @ts-ignore
        formData.canFly = true
      }
      await birdsService.createBird(formData)
      // @ts-ignore
      form.reset()
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance('#modal').hide()
    } catch (error) {
      Pop.error(error)
    }
  }

  async getSpottersForActiveBird() {
    try {
      await spottersService.getSpottersForActiveBird()
    } catch (error) {
      Pop.error(error)
    }
  }
}