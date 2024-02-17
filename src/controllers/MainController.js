import InputView from '../views/InputView.js';
import OutputView from '../views/outputView.js';
import ProgressController from './ProgressController.js';
import WinnerController from './WinnerController.js';

class MainController {
  async run() {
    const carList = await InputView.readCarNames();
    const trialCount = await InputView.readTrialCount();
    OutputView.print('');
    new ProgressController(carList, trialCount).run();
    new WinnerController(carList).run();
  }
}

export default MainController;
