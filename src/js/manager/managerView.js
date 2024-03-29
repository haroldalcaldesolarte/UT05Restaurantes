class ManagerView {
  constructor(){
    this.main = document.getElementById('principal');
    this.aside = document.getElementById('menu_lateral');
  }

  init(categories) {//en este init debo recoger las categorias y listarlas antes se debe hacer en OnLoad
    this.main.replaceChildren();
    this.aside.replaceChildren();
    let asideContent = '';
    for (const category of categories){
      this.main.insertAdjacentHTML('afterbegin',
      `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${category.getName()}</h5>
          <p class="card-text">${category.getDescription()}</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>`);
      asideContent += `<li><a href="#">${category.getName()}</a></li>`;
    }
    this.aside.innerHTML = `<ul>${asideContent}</ul>`;
  }

  bindInit(handler){
    document.getElementById('inicio').addEventListener('click', (event) => {
      handler();
    });
  }
}

export default ManagerView;