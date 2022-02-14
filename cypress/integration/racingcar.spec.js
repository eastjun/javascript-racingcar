import {baseUrl} from '../support/constants.js';
describe('구현 결과가 요구사항과 일치해야 한다.', () => {

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  /* 우승자 확인 */
  it("게임을 완료하고 우승자를 확인할 수 있어야 한다.", () => {
    cy.carNamePositiveInputEvent("tt,sally");
    cy.raceCountPositiveInputEvent(1);
    
    cy.get('.result-text').should((result) => {
      const text = result.text();
      expect(text).to.include('최종 우승자')
    });
  });

  /* 차 이름 */
  it("5글자 초과 자동차 이름을 입력한 경우 alert이 호출되어야 한다.", () => {
    cy.showCarNameAlert("abcdef");
  });

  /* 시도 횟수 */
  it("1이상 20이하의 자연수가 아닌 경우 alert이 호출되어야 한다.", () => {
    cy.showRaceCountAlert('1,2,3,4,5', "-2");
  });

  it("숫자가 아닌 경우 alert이 호출되어야 한다.", () => {
    cy.showRaceCountAlert('1,2,3,4,5','aae');
  });

  /* 다시 시작 */
  it("다시 시작하기 버튼을 눌렀을 때에 race-count-input-container 요소가 display none이어야 한다", () => {
    cy.carNamePositiveInputEvent("tt,sally");
    cy.raceCountPositiveInputEvent(1);

    cy.get('.restart-button').contains('다시 시작하기').click();

    cy.get('.race-count-input-container').should('have.css', 'display', 'none');
  });
});
