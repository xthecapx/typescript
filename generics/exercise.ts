class MyMap <T extends number | string> {
  private map: { [key: string]: T } = {};

  setItem(key: string, item: T) {
    this.map[key] = item;
  }

  getItem(key: string) {
    return this.map[key];
  }

  clear() {
    this.map = {};
  }

  printMap() {
    for (let key in this.map) {
      if (this.map.hasOwnProperty(key)) {
        console.log(key, this.map[key]);
      }
    }
  }
}

const numberMap = new MyMap <number> ();
numberMap.setItem("apples", 5);
numberMap.setItem("bananas", 10);
numberMap.printMap();

const stringMap = new MyMap <string> ();
stringMap.setItem("name", "max");
stringMap.setItem("age", "27");
stringMap.printMap();
