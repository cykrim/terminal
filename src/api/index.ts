import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.username}/repos`,
  );

  return data;
};

export const getBio = async () => {
  const { data } = await axios.get(config.bioUrl);
  if (typeof data === 'string') {
    return data;
  } else {
    return ''; 
  }
};

export const getWeather = async (city: string) => {
  const { data } = await axios.get(`https://wttr.in/${city}?ATm`);

  return data;
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random?tags=technology,famous-quotes');

  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};

export const getCVE = async () => {
  try {
    const { data: commitData } = await axios.get('https://api.github.com/repos/CVEProject/cvelist/commits/master');
    const addedFiles = commitData.files.filter(file => file.status === 'added');

    const cveList = addedFiles.map(file => {
      const match = file.filename.match(/CVE-\d{4}-\d+/);
      return match ? match[0] : null;
    }).filter(cve => cve !== null);

    return cveList.join(', ');
  } catch (error) {
    return '';
  }
};

