interface Site {
  name: string;
  url: string;
  descr: string;
}

const bestSite: Site[] = [
  {
    name: 'PayloadsAllTheThings',
    url: 'https://github.com/swisskyrepo/PayloadsAllTheThings',
    descr: 'A list of useful payloads and bypass for Web Application Security and Pentest/CTF.',
  },
  {
    name: 'cheatsheetseries',
    url: 'https://cheatsheetseries.owasp.org/',
    descr: 'The OWASP Cheat Sheet Series was created to provide a concise collection of high value information on specific application security topics.',
  },
  {
    name: 'Awesome-Hacking',
    url: 'https://github.com/Hack-with-Github/Awesome-Hacking',
    descr: 'A collection of various awesome lists for hackers, pentesters and security researchers.',
  },
  {
    name: 'ired.team',
    url: 'https://github.com/mantvydasb/RedTeaming-Tactics-and-Techniques',
    descr: 'Red Teaming Tactics and Techniques',
  },
  {
    name: 'ired.team',
    url: 'https://github.com/mantvydasb/RedTeaming-Tactics-and-Techniques',
    descr: 'Red Teaming Tactics and Techniques',
  },
  {
    name: 'h4cker',
    url: 'https://github.com/The-Art-of-Hacking/h4cker',
    descr: 'This repository includes thousands of resources related to ethical hacking, bug bounties, digital forensics and incident response (DFIR), artificial intelligence security, vulnerability research, exploit development, reverse engineering, and more. ',
  },
  {
    name: 'cyberChef',
    url: 'https://gchq.github.io/CyberChef/',
    descr: 'The Cyber Swiss Army Knife - a web app for encryption, encoding, compression and data analysis.',
  },
];

const goSite = (name:string) : string => {
  let o = bestSite.find(site => site.name === name);
  if (o == null){
    return `The site ${name} is not present.`
  }else{
    window.open(o.url);
    return `Opening ${o.name}...`;
  }
};

const getDescr = (name:string) : string => {
  let o = bestSite.find(site => site.name === name);
  if (o == null){
    return `The site ${name} is not present.`
  }else{
    return o.descr
  }
};

export const topsites = async (
  args: string[]
): Promise<string> => {
  if (args.length === 0) {
    return `Usage: tools [arg]
  Args:
    - ls: list all sites
    - go: go to a site
    - inspect: return the description
  Example: 
    tools go cyberChef # run cyberChef in a new windows`;
  }
  let nosite: string = "No site name specified."
  switch (args[0]) {
    case 'ls':
      return bestSite.map(
        (site) =>
          `${site.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${site.url}" target="_blank">${site.url}</a>`,
      )
      .join('\n');
    case 'go':
      return (args[1] == null) ? nosite : goSite(args[1])     
    case 'inspect':
      return (args[1] == null) ? nosite : getDescr(args[1])
    default:
      return "Unknown command.";
  }
};