import { dbContext } from "../db/DbContext.js";

class SpottersService {
  async becomeSpotter(spotterData) {
    const spotter = await dbContext.Spotters.create(spotterData)
    await spotter.populate('watcher', 'name picture')
    return spotter
  }

  async getSpottersByBirdId(birdId) {
    const spotters = await dbContext.Spotters.find({ birdId }).populate('watcher', 'name picture')
    return spotters
  }
}

export const spottersService = new SpottersService();