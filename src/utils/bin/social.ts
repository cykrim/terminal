import config from '../../../config.json';

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.username}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.username}/`);

  return 'Opening linkedin...';
};

export const twitter = async (args: string[]): Promise<string> => {
  window.open(`https://twitter.com/${config.social.username}/`);

  return 'Opening X...';
};
