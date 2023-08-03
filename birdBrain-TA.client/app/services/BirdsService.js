import { AppState } from "../AppState.js";
import { Bird } from "../models/Bird.js";
import { api } from "./AxiosService.js";

class BirdsService {
  async getBirds() {
    // console.log('getting birds from service');
    const res = await api.get('api/birds')
    console.log('[GETTING ALL BIRDS]', res.data);
    // Don't forget to map here since we have a model, log the appstate to see those bird objects
    AppState.birds = res.data.map(b => new Bird(b))
    console.log('[HERE ARE MY BIRDS IN THE APPSTATE]', AppState.birds);
  }

  setActive(birdId) {
    // console.log('setting active');
    const bird = AppState.birds.find(b => b.id == birdId)
    // console.log('[SETTING ACTIVE]', bird);
    // @ts-ignore
    AppState.activeBird = bird
    console.log('[ACTIVE BIRD]', bird);
  }

  async createBird(formData) {

    const res = await api.post('api/birds', formData)
    console.log('[CREATING BIRD]', res.data);
    AppState.birds.unshift(new Bird(res.data))
    AppState.emit('birds')
  }
}

export const birdsService = new BirdsService();