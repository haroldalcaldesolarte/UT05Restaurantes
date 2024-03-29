const MODEL = Symbol('ManagerModel');
const VIEW = Symbol('ManagerView');

class ManagerController{
  constructor(modelManager, viewManager){
    this[MODEL] = modelManager;
    this[VIEW] = viewManager;

    this[VIEW].bindInit(this.handleInit); //dar funcionalidad a un elemento HTML
  }

  onInit = () => {
    console.log('onInit');
    this[VIEW].init(this[MODEL].getCategories());
  };

  handleInit = () => {
    this.onInit();
  }

  onLoad = (categories, allergens, dishes, menus, restaurants) => {
    console.log('onLoad');
    //Añadir todos los elementos
    for(const category of categories){
      this[MODEL].addCategory(category);
    }
    for (const allergen of allergens){
      this[MODEL].addAllergen(allergen);
    }

    for(const dish of dishes){
      this[MODEL].addDish(dish);
    }

    for (const menu of menus){
      this[MODEL].addMenu(menu);
    }

    for (const restaurant of restaurants){
      this[MODEL].addRestaurant(restaurant);
    }
    //Asignaciones de elementos
    this[MODEL].assignCategoryToDish(dishes[0], categories[0], categories[1], categories[2]);
    this[MODEL].assignCategoryToDish(dishes[1], categories[0], categories[1], categories[2], categories[3], categories[4]);
    this[MODEL].assignCategoryToDish(dishes[2], categories[0], categories[3], categories[4]);
    this[MODEL].assignCategoryToDish(dishes[3], categories[0], categories[1], categories[2]);
    this[MODEL].assignCategoryToDish(dishes[4], categories[1], categories[3], categories[2]);

    this[MODEL].assignAllergenToDish(dishes[0], allergens[1],allergens[2],allergens[3]);
    this[MODEL].assignAllergenToDish(dishes[1], allergens[2],allergens[3],allergens[4]);
    this[MODEL].assignAllergenToDish(dishes[2], allergens[0],allergens[2],allergens[4]);
    this[MODEL].assignAllergenToDish(dishes[3], allergens[0],allergens[1],allergens[4]);
    this[MODEL].assignAllergenToDish(dishes[4], allergens[3],allergens[4]);

    this[MODEL].assignDishToMenu(menus[0], dishes[0], dishes [1], dishes[2]);
    this[MODEL].assignDishToMenu(menus[1], dishes[2], dishes [3], dishes[4]);
    this[MODEL].assignDishToMenu(menus[2], dishes[1], dishes [2], dishes[4]);
    this[MODEL].assignDishToMenu(menus[3], dishes[0], dishes [1], dishes[4]);
    this[MODEL].assignDishToMenu(menus[4], dishes[0], dishes [2], dishes[3]);
    //Cargar vista
    this.onInit();//Genera HTML
  }
}

export default ManagerController;