const { default: axios } = require('axios');

const network = 'mainnet';

const initialURL = () => `https://api.teztracker.com/v2/data/tezos/${network}`;

const DivideBy = (number, denominator) => {
  return number / denominator;
};

const getBlocks = (blocks) => {
  return blocks.map((block) => {
    const newDate = new Date(block.timestamp * 1000);
    const year = newDate.getFullYear();
    const month = newDate.getMonth();
    const day = newDate.getDate();
    const hours = `0${newDate.getHours()}`.slice(-2);
    const minutes = `0${newDate.getMinutes()}`.slice(-2);
    const seconds = `0${newDate.getSeconds()}`.slice(-2);

    const date = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;

    return {
      level: block.level.toString(),
      baker: block.bakerName,
      timestamp: date,
      numOfOperations: block.number_of_operations.toString(),
      volume: DivideBy(block.volume, 1000000).toString(),
      fees: DivideBy(block.fees, 1000000).toString(),
      endorsements: block.endorsements.toString(),
    };
  });
};

const fetchBlocks = (pageNum = '1', limit = '15') => {
  return axios
    .get(`${initialURL()}/blocks?limit=${limit}&offset=${pageNum}`)
    .then((response) => getBlocks(response.data));
};

export default fetchBlocks;
