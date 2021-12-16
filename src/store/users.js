import { makeAutoObservable } from "mobx";

class Users {
  devsList = [
    { id: 1, name: "Jack", sp: 8 },
    { id: 2, name: "Alex", sp: 10 },
    { id: 3, name: "Lena", sp: 5 },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  get totalSum() {
    return this.devsList.reduce((sum, { sp }) => (sum += sp), 0);
  }

  get topPerformer() {
    const maxSp = Math.max(...this.devsList.map(({ sp }) => sp));
    return this.devsList.find(({ sp, name }) => {
      if (maxSp === sp) {
        return name;
      }
    });
  }
}

export default new Users();
