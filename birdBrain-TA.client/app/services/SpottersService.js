import { AppState } from "../AppState.js";
import { Account } from "../models/Account.js";
import { api } from "./AxiosService.js";

class SpottersService {
  async becomeSpotter(birdId) {
    // we can send it up as object like this because it's creating key value pair, using the birdId that comes in from params
    const res = await api.post('api/spotters', { birdId })
    // logger.log('[BECOMING SPOTTER]', res.data)
    const bird = AppState.birds.find(b => b.id == birdId)
    bird.spotterCount++
    AppState.emit('birds')
  }

  async getSpottersForActiveBird() {
    const bird = AppState.activeBird
    const res = await api.get(`api/birds/${bird.id}/spotters`)
    // console.log('[GETTING SPOTTERS]', res.data);
    AppState.spotters = res.data.map(s => new Account(s.watcher))
    console.log('[GETTING SPOTTERS]', AppState.spotters);
  }

}

export const spottersService = new SpottersService();