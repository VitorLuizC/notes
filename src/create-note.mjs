import { getOctokit } from '@actions/github';
import { v4 } from 'uuid';

async function run() {
  const octokit = getOctokit(process.env.GITHUB_TOKEN);

  const owner = process.env.GITHUB_REPOSITORY_OWNER;

  const repository = await octokit.rest.repos.get({
    owner,
    repo: process.env.GITHUB_REPOSITORY.replace(owner + '/', ''),
  });

  const content = await octokit.rest.repos.getContent({
    owner,
    ref: repository.data.default_branch,
    path: 'data.json',
    repo: process.env.GITHUB_REPOSITORY.replace(owner + '/', ''),
  });

  const data = JSON.parse(Buffer.from(content.data.content, 'base64').toString());

  data.push({
    id: v4(),
    note: process.env.NOTE,
    createdAt: new Date().toISOString(),
  });

  await octokit.rest.repos.createOrUpdateFileContents({
    owner,
    sha: content.data.sha,
    repo: process.env.GITHUB_REPOSITORY.replace(owner + '/', ''),
    path: 'data.json',
    branch: repository.data.default_branch,
    author: process.env.GITHUB_ACTOR,
    content: Buffer.from(JSON.stringify(data)).toString('base64'),
    message: '🗃️ update data.json',
  });
}

run()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
