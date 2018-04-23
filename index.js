#! /usr/bin/env node
const request = require('request');
const chalk = require('chalk');
const Table = require('cli-table');
const requestUrl = 'https://coooins.com/api/subreddits';

request(requestUrl, function (error, response, body) {
  const data = JSON.parse(body);
  const totalMessage = `Total Subreddits: ` + data.total_subreddits + `    Total Subscribers: ` + data.total_subscribers  + `    Total Online: ` + data.total_online;
  console.log(chalk.blue(totalMessage));
  const table = new Table({ head: [
    chalk.blue('Name'),
    chalk.blue('Subreddit'),
    chalk.blue('URL'),
    chalk.blue('Subscribers'),
    chalk.blue('Online'),
    chalk.blue('Last Updated'),
  ] });
  data.subreddits.forEach(function (value, key) {
    table.push([
      chalk.blue(value.name),
      chalk.green(value.subreddit),
      chalk.green(value.subreddit_url),
			chalk.green(Number(value.subscribers).toLocaleString('en')),
      chalk.green(Number(value.online).toLocaleString('en')),
      chalk.green(value.last_updated),
    ]);
  });
  console.log('\n'+table.toString());
  console.log(chalk.blue(totalMessage));
});
