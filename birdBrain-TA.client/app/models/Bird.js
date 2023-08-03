export class Bird {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.img = data.img
    this.canFly = data.canFly
    this.size = data.size
    this.birdWatcherId = data.birdWatcherId
    this.createdAt = data.createdAt
    this.spotterCount = data.spotterCount
    this.watcherName = data.birdWatcher.name
    this.birdWatcher = data.birdWatcher
  }

  get CardTemplate() {
    return `
<div class="col-md-3 col-12">
  <div class="bird-card border-3 border-dark rounded m-2">
    <img onclick="app.BirdsController.setActive('${this.id}')" data-bs-toggle="modal" data-bs-target="#modal"
      src="${this.img}"
      alt="" class="bird-img">
    <div>
      <h1>${this.name}</h1>
      <div class="d-flex justify-content-between">
      <button class="fs-1 btn" onclick="app.SpottersController.becomeSpotter('${this.id}')">👀 <span id="spotter-count">${this.spotterCount}</span></button>
        <img
          src="${this.birdWatcher.picture}"
          alt="" class="watcher-img p-2" title="${this.watcherName}">
      </div>
    </div>
  </div>
  </div>
`
  }

  get BirdDetails() {
    return `
    <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">${this.name}</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body container">
     <section class="row">
     <div class="col-md-6 col-12">
      <img class="img-fluid" src="${this.img}" alt="${this.name}"title="${this.name}">
     </div>

     <div class="col-md-6 col-12">
      <h1>${this.name}</h1>
      <div class="d-flex justify-content-around">
      <h3>Size: ${this.size}</h3>
      <h3>Can Fly: ${this.canFly ? '🦅' : '🐧'} </h3>
      </div>
     </div>
     <div class="col-12" id="spotters">

     </div>
     </section>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Done peeping</button>
    </div>
  </div>
    `
  }

  static BirdForm() {
    return `
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalLabel">Create Bird</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form onsubmit="app.BirdsController.createBird()">
          <div class="modal-body">
            <div class="form-floating mb-3">
              <input required type="text" class="form-control" name="name" id="birdName" placeholder="Bird name...">
              <label for="birdName">Bird Name</label>
            </div>
            <div class="form-floating mb-3">
              <input required type="url" class="form-control" name="img" id="birdImg"
                placeholder="Bird imgUrl...">
              <label for="birdImgUrl">Bird ImgUrl</label>
            </div>
            <select name="size" class="form-select mb-3" aria-label="Default select example">
              <option selected>Select Bird Size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="chunko">Chunko</option>
            </select>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" name="canFly" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                Can this bird fly?
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Report Bird <i class="mdi mdi-binoculars"></i></button>
          </div>
        </form>
      </div>
    `
  }
}