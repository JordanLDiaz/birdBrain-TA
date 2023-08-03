import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";

class BirdsService {
  async getAllBirds(query) {
    const birds = await dbContext.Birds.find(query)
      .populate('birdWatcher', 'name picture')
      .populate('spotterCount')
      .sort('spotterCount')
    return birds
  }

  async getBirdById(birdId) {
    const bird = await dbContext.Birds.findById(birdId)
      .populate('birdWatcher', 'name picture')
      .populate('spotterCount')
    if (!bird) {
      throw new BadRequest('This bird does not exist!')
    }
    return bird
  }

  async createBird(birdData) {
    const newBird = await dbContext.Birds.create(birdData)
    // NOTE what we populate here needs to match the banana word we put in the schema on the first virtual line
    await newBird.populate('birdWatcher spotterCount', 'name picture')
    return newBird
  }

  async deleteBird(birdId, userId) {
    const bird = await dbContext.Birds.findById(birdId)
    if (!bird) {
      throw new BadRequest('This bird does not exist!')
    }
    if (bird.birdWatcherId != userId) {
      throw new Forbidden('You do not have permission to delete this bird.')
    }
    await bird.delete()
    return
  }
}

export const birdsService = new BirdsService();