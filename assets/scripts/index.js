import headerData from './database/mongo/Header.json';
import { BuildDirector } from './utils';
class Main {
    static main() {
        let singleton = BuildDirector.getInstance();
        singleton.buildPage(headerData);
    }
}
Main.main();
//# sourceMappingURL=index.js.map