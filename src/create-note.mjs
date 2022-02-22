import { getOctokit } from '@actions/github';

async function run() {
  const octokit = getOctokit(process.env.GITHUB_TOKEN);

  const owner = process.env.GITHUB_REPOSITORY_OWNER;

  const content = await octokit.rest.repos.getContent({
    owner,
    ref: process.env.GITHUB_BASE_REF,
    path: 'data.json',
    repo: process.env.GITHUB_REPOSITORY.replace(owner + '/', ''),
  });

  console.log(content.data.content);
}

run()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
