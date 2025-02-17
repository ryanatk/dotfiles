import axios from 'axios';

import { ENV, VALID } from 'common/const';
import { getBaseUrl, log } from 'common/utils';
import { getItem } from 'data/utils';

import mock from './getEventPackages.mock';

const baseUrl = getBaseUrl(2);

/**
 * Get packages for an event
 * @param eventId - id for event
 * @param ooId - online ordering id
 * @returns package data
 */
const getEventPackages = async ({ eventId, ooId }) => {
  await VALID.checkAll(
    ['eventId', eventId, VALID.EVENT_ID],
    ['ooId', ooId, VALID.OO_SUMMARY_ID],
  );

  try {
    const response = ENV.IS_MOCK
      ? mock()
      : await axios.get(`${baseUrl}orders2/event_packages/${eventId}/${ooId}`);

    const data = response?.data?.packageData.reduce((obj, item) => {
      const categoryName = item.categoryGroup;
      const category = obj[categoryName] ?? [];

      return {
        ...obj,
        [categoryName]: [...category, getItem(item)],
      };
    }, {});

    return {
      description: 'Power Packages',
      categories: Object.entries(data).map(([description, items]) => ({
        description,
        items,
      })),
    };
  } catch (error) {
    log('getEventPackages', {
      data: { eventId, ooId },
      error,
      throw: true,
      type: 'request',
    });
  }
};

export default getEventPackages;
