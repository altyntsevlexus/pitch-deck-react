import axios from 'axios';

const initialURL = (network) =>
  `https://api.teztracker.com/v2/data/tezos/${network}`;

const getBlocks = (network = 'mainnet', offset = '0', limit = '15') => {
  return axios.get(
    `${initialURL(network)}/blocks?limit=${limit}&offset=${offset}`,
  );
};

// eslint-disable-next-line import/prefer-default-export
export { getBlocks };
