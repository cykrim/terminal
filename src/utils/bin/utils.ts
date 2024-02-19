import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  
  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const email = async (args: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('mailto:cykrim@gmail.com');
  }, 1000);
  return 'Opening mailto:cykrim@gmail.com...';
};

export const sudo = async (args?: string[]): Promise<string> => {
  return `Permission denied: unable to run the command '${args[0]}' as root. Are you kidding?`;
};

export const banner = (args?: string[]): string => {
  return `
░█████╗░██╗░░░██╗██╗░░██╗██████╗░██╗███╗░░░███╗
██╔══██╗╚██╗░██╔╝██║░██╔╝██╔══██╗██║████╗░████║
██║░░╚═╝░╚████╔╝░█████═╝░██████╔╝██║██╔████╔██║
██║░░██╗░░╚██╔╝░░██╔═██╗░██╔══██╗██║██║╚██╔╝██║
╚█████╔╝░░░██║░░░██║░╚██╗██║░░██║██║██║░╚═╝░██║
░╚════╝░░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝╚═╝░░░░░╚═╝

Type 'help' to see list of available commands.
The project is open-source 🎉 type 'neofetch' to check out the repository.
`;
};
