export default class CardModel {
    question = '';
    answer = '';

    constructor(param: Partial<CardModel>) {
        const {
            question = '',
            answer = '',
        } = param;
        this.question = question;
        this.answer = answer;
    }

}