import { birdsService } from "../services/BirdsService.js";
import { spottersService } from "../services/SpottersService.js";
import BaseController from "../utils/BaseController.js";
import { Auth0Provider } from "@bcwdev/auth0provider";

export class BirdsController extends BaseController {
  constructor() {
    super('api/birds')
    this.router
      .get('', this.getAllBirds)
      .get('/:birdId', this.getBirdById)
      .get('/:birdId/spotters', this.getSpottersByBirdId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createBird)
      .delete('/:birdId', this.deleteBird)
  }
  async getAllBirds(req, res, next) {
    try {
      const query = req.query
      const birds = await birdsService.getAllBirds(query)
      return res.send(birds)
    } catch (error) {
      next(error)
    }
  }

  async getBirdById(req, res, next) {
    try {
      const birdId = req.params.birdId
      const bird = await birdsService.getBirdById(birdId)
      return res.send(bird)
    } catch (error) {
      next(error)
    }
  }

  async getSpottersByBirdId(req, res, next) {
    try {
      const birdId = req.params.birdId
      const spotters = await spottersService.getSpottersByBirdId(birdId)
      return res.send(spotters)
    } catch (error) {
      next(error)
    }
  }

  async createBird(req, res, next) {
    try {
      const birdData = req.body
      req.body.birdWatcherId = req.userInfo.id
      const newBird = await birdsService.createBird(birdData)
      return res.send(newBird)
    } catch (error) {
      next(error)
    }
  }

  async deleteBird(req, res, next) {
    try {
      const birdId = req.params.birdId
      const userId = req.userInfo.id
      await birdsService.deleteBird(birdId, userId)
      return res.send('This bird has been deleted.')
    } catch (error) {
      next(error)
    }
  }
}