import { makeAutoObservable, configure } from "mobx";
configure({ enforceActions: "observed" });

class Common {
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(value) {
    this.loading = value;
  }
}

export default new Common();
