import { makeAutoObservable, observable } from "mobx";

class Users {
  devsList = [
    { id: 1, name: "Jack", sp: 8 },
    { id: 2, name: "Alex", sp: 10 },
    { id: 3, name: "Lena", sp: 5 },
    { id: 4, name: "Ivan", sp: 12 },
  ];

  @observable
  filter: "";

  constructor() {
    makeAutoObservable(this);
  }

  get filteredDevelopers() {
    const matchesFilter = new RegExp(this.filter, "i");
    return this.devsList.filter(
      ({ name }) => !this.filter || matchesFilter.test(name)
    );
  }

  get totalSum() {
    return this.filteredDevelopers.reduce((sum, { sp }) => (sum += sp), 0);
  }

  get topPerformer() {
    const maxSp = Math.max(...this.filteredDevelopers.map(({ sp }) => sp));
    return this.filteredDevelopers.find(({ sp, name }) => {
      if (maxSp === sp) {
        return name;
      }
    });
  }

  updateFilter(value) {
    this.filter = value;
  }

  clearList() {
    this.devsList = [];
  }

  addDeveloper(dev) {
    this.devsList.push({
      id: this.devsList.length + 1,
      name: dev.name,
      sp: +dev.sp,
    });
  }
}

export default new Users();
