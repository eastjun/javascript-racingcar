import { DELAY_AFTER_END, DELAY_PER_ROUND, DOM, ERROR_MESSAGE } from '../../src/lib/constants.js';

describe('구현 결과가 요구사항과 일치해야 한다.', () => {
  const baseUrl = '../../index.html';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('게임을 완료하고 우승자를 확인할 수 있어야 한다.', () => {
    //given
    const nameInput = 'bling,juunz';
    const countInput = 1;

    //when
    cy.carNameInput(nameInput);
    cy.countInput(countInput);

    //then
    cy.get(DOM.WINNER_NAME.toID()).should('be.visible');
  });

  it('잘못된 자동차 이름을 입력하면 에러 메지지를 보게된다.', () => {
    //given
    const invalidInput = 'juunzzi';
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    // when - then
    cy.isStubCalled(cy.carNameInput(invalidInput), alertStub, ERROR_MESSAGE.CAR_NAME_LENGTH_OVER);
  });

  it('횟수 입력란에 1 미만의 값이 주어지면 에러 메세지를 보게된다.', () => {
    //given
    const nameInput = 'bling,juunz';
    const invalidInput = -1;
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    //when
    cy.carNameInput(nameInput);

    // when - then
    cy.isStubCalled(cy.countInput(invalidInput), alertStub, ERROR_MESSAGE.INVALID_COUNT);
  });

  it('재시작 버튼을 누르면 시작 화면을 보게된다.', () => {
    //given
    const nameInput = 'bling,juunz';
    const countInput = 2;

    //when
    cy.carNameInput(nameInput);
    cy.countInput(countInput);
    cy.get(DOM.RESTART_BTN.toID()).click();

    //then
    cy.isInitialStatus();
  });

  it('자동차를 정상적으로 입력하고, 카운트를 정상적으로 입력하면 자동차 텍스트들을 확인할 수 있다.', () => {
    //given
    const nameInput = 'bling,jun,zzi';
    const countInput = 2;

    //when
    cy.carNameInput(nameInput);
    cy.countInput(countInput);

    //then
    const result = nameInput.split(',').reduce((prev, current) => `${prev}${current}`, '');
    cy.get(DOM.CAR_NAME.toCLASS()).should('have.text', result);
  });

  it('로딩 아이콘은 1초간 보인다.', () => {
    cy.clock();

    const nameInput = 'bling,jun,zzi';
    const countInput = 2;

    cy.carNameInput(nameInput);
    cy.countInput(countInput);

    cy.tick(800).then(() => {
      cy.get(DOM.LOADING_ICON.toCLASS()).should('have.class', 'show');
    });
  });

  // cy.clock 을 이용한 코드로 변경하고 싶은데 아직 이해도가 부족하여 wait으로 작성하였습니다.
  it('승자가 나온 이후 2초가 지나면 축하메세지가 노출된다.', () => {
    const nameInput = 'bling,jun,zzi';
    const countInput = 2;
    const delayPerRound = DELAY_PER_ROUND;
    const delayAfterEnd = DELAY_AFTER_END;
    const totalDelay = delayPerRound * countInput + delayAfterEnd;
    const alertStub = cy.stub();

    cy.on('window:alert', alertStub);

    cy.carNameInput(nameInput);
    cy.countInput(countInput);

    cy.wait(totalDelay).then(() => {
      expect(alertStub).to.be.called;
    });
  });
});
