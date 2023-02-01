class Driver {
  static setSW() {
    let path = './sw.js';
    if (!navigator.serviceWorker) return null;
    if(window.location.href.includes('localhost')) path = "./sw.js";

    navigator.serviceWorker.register(path);
  }

  static main() {
    Driver.setSW();
    DrawController.changeState(0);
  }
}

Driver.main();