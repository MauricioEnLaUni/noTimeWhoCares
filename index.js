class Driver {
  static setSW() {
    let path = 'sw.js';
    if (!navigator.serviceWorker) return null;

    navigator.serviceWorker.register(path);
  }

  static main() {
    Driver.setSW();
    DrawController.changeState(0);
  }
}

Driver.main();