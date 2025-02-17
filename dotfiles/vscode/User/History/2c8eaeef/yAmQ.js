import { merge } from 'lodash';

import { BOOTH_SETUP } from 'common/const';

/**
 * Merges questions from an Assessment List
 * with answers from an Incomplete Order
 * and filters by the optional `show` config
 * @param {array} questions
 * @param {array} answers
 */
const answerQuestions = (questions, answers) => {
  const list = questions.map((item) => {
    const responseData = answers.find(
      ({ assessmentQ_ID }) => assessmentQ_ID === item.assessmentQ_ID,
    );

    const config = Object.values(BOOTH_SETUP).find(
      ({ templateId }) => templateId === item.templateId,
    );

    const mergedData = merge({}, item, responseData, config);

    return mergedData;
  });

  const filteredQuestions = list.filter((step) => {
    return typeof step.show === 'function' ? step.show(step) : true;
  });

  return filteredQuestions;
};

export default answerQuestions;
