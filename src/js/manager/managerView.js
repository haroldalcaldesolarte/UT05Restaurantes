class ManagerView {
  constructor(){
    this.main = document.getElementById('principal');
  }

  init(categories) {//en este init debo recoger las categorias y listarlas antes se debe hacer en OnLoad
    this.main.replaceChildren();
    for (const category of categories){
      console.log(category.getName());
      this.main.insertAdjacentHTML('afterbegin',`<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${category.getName()}</h5>
        <p class="card-text">${category.getDescription()}</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>`
    );
    }
  }

  bindInit(handler){
    document.getElementById('inicio').addEventListener('click', (event) => {
      handler();
    });
  }
}

export default ManagerView;