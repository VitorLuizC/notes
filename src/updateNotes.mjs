import { getOctokit } from '@actions/github';
import { v4 } from 'uuid';
import { fromBase64, toBase64 } from './base64.mjs';

const FILE_PATH = 'data.json';

/**
 * @typedef {Object} Note
 * @property {string} id - An UUID.
 * @property {string} content
 * @property {string} createdAt - Date in ISO 8601.
 * @property {string} [updatedAt] - Date in ISO 8601.
 */

/**
 * @param {string} message
 * @param {(notes: Note[]) => Note[]} update
 */
async function updateNotes(message, update) {
  const octokit = getOctokit(process.env.GITHUB_TOKEN);

  const owner = process.env.GITHUB_REPOSITORY_OWNER;

  const repo = process.env.GITHUB_REPOSITORY.replace(owner + '/', '');

  const repository = await octokit.rest.repos.get({ repo, owner });

  const branch = repository.data.default_branch;

  const content = await octokit.rest.repos.getContent({
    repo,
    owner,
    ref: branch,
    path: FILE_PATH,
  });

  await octokit.rest.repos.createOrUpdateFileContents({
    repo,
    owner,
    branch,
    message,
    sha: content.data.sha,
    path: FILE_PATH,
    content: toBase64(update(fromBase64(content.data.content))),
  });
}

export default updateNotes;
