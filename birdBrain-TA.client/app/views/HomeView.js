export const HomeView = /*html*/`
<div class="container-fluid">
  <div class="row justify-content-center">
    <div class="col-2">
    <button onclick="app.BirdsController.getBirdForm()" class="btn fs-1" data-bs-toggle="modal" data-bs-target="#modal" >🦅</button>
    </div>
  </div>
<div class="row p-2" id="birds">
  <!-- <div class="col-md-3 col-12">
<div class="bird-card border-3 border-dark rounded">
  <img
    src="https://images.unsplash.com/photo-1553736277-055142d018f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJpcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
    alt="" class="bird-img img-fluid">
  <div>
    <h1>Bird Name</h1>
    <div class="d-flex justify-content-between">
      <p>👀</p>
      <img
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
        alt="" class="watcher-img img-fluid">
    </div>
  </div>
</div>
</div> -->
</div>
</div>


<!-- Modal -->
<div class="modal fade modal-lg" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog"id="modal-guts">

  </div>
</div>
`