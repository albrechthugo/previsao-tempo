import OAuth from 'oauth';
import keys from '../keys';

const header = {
    'X-Yahoo-App-Id': `${keys.APP_ID}`
};

const request = new OAuth.OAuth(
  null,
  null,
  `${keys.CONSUMER_KEY}`,
  `${keys.CONSUMER_SECRET}`,
  '1.0',
  null,
  'HMAC-SHA1',
  null,
  header
);

export default request;