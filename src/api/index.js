import axios from 'axios';

const network = 'mainnet';

const initialURL = () => `https://api.teztracker.com/v2/data/tezos/${network}`;

const getBlocks = (pageNum = '1', limit = '15') => {
  return axios.get(`${initialURL()}/blocks?limit=${limit}&offset=${pageNum}`);
};

// eslint-disable-next-line import/prefer-default-export
export { getBlocks };
