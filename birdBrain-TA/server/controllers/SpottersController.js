import { spottersService } from "../services/SpottersService.js";
import BaseController from "../utils/BaseController.js";
import { Auth0Provider } from "@bcwdev/auth0provider";

export class SpottersController extends BaseController {
  constructor() {
    super('api/spotters')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.becomeSpotter)
  }
  async becomeSpotter(req, res, next) {
    try {
      const spotterData = req.body
      req.body.watcherId = req.userInfo.id
      const spotter = await spottersService.becomeSpotter(spotterData)
      return res.send(spotter)
    } catch (error) {
      next(error)
    }
  }
}