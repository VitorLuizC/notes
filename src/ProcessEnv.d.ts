declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * Always set to `true`.
     */
    CI: true;

    /**
     * The name of the action currently running, or the
     * [`id`](/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid)
     * of a step. For example, for an action,
     * `__repo-owner_name-of-action-repo`.
     *
     * GitHub removes special characters, and uses the name `__run` when the
     * current step runs a script without an `id`. If you use the same script or
     * action more than once in the same job, the name will include a suffix
     * that consists of the sequence number preceded by an underscore. For
     * example, the first script you run will have the name `__run`, and the
     * second script will be named `__run_2`. Similarly, the second invocation
     * of `actions/checkout` will be `actionscheckout2`.
     */
    GITHUB_ACTION: string;

    /**
     * The path where an action is located. This property is only supported in
     * composite actions. You can use this path to access files located in the
     * same repository as the action. For example,
     * `/home/runner/work/_actions/repo-owner/name-of-action-repo/v1`.
     */
    GITHUB_ACTION_PATH: string;

    /**
     * For a step executing an action, this is the owner and repository name of
     * the action. For example, `actions/checkout`.
     */
    GITHUB_ACTION_REPOSITORY: string;

    /**
     * Always set to `true` when GitHub Actions is running the workflow. You can
     * use this variable to differentiate when tests are being run locally or by
     * GitHub Actions.
     */
    GITHUB_ACTIONS: boolean;

    /**
     * The name of the person or app that initiated the workflow. For example,
     * `octocat`.
     */
    GITHUB_ACTOR: string;

    /**
     * Returns the API URL. For example: `https://api.github.com`.
     */
    GITHUB_API_URL: string;

    /**
     * The name of the base ref or target branch of the pull request in a
     * workflow run. This is only set when the event that triggers a workflow
     * run is either `pull_request` or `pull_request_target`. For example,
     * `main`.
     */
    GITHUB_BASE_REF: string;

    /**
     * The path on the runner to the file that sets environment variables from
     * workflow commands. This file is unique to the current step and changes
     * for each step in a job. For example,
     * `/home/runner/work/_temp/_runner_file_commands/set_env_87406d6e-4979-4d42-98e1-3dab1f48b13a`.
     * For more information, see
     * "[Workflow commands for GitHub Actions](/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable)."
     */
    GITHUB_ENV: string;

    /**
     * The name of the event that triggered the workflow. For example,
     * `workflow_dispatch`.
     */
    GITHUB_EVENT_NAME: string;

    /**
     * The path to the file on the runner that contains the full event webhook
     * payload. For example, `/github/workflow/event.json`.
     */
    GITHUB_EVENT_PATH: string;

    /**
     * Returns the GraphQL API URL. For example:
     * `https://api.github.com/graphql`.
     */
    GITHUB_GRAPHQL_URL: string;

    /**
     * The head ref or source branch of the pull request in a workflow run. This
     * property is only set when the event that triggers a workflow run is
     * either `pull_request` or `pull_request_target`. For example,
     * `feature-branch-1`.
     */
    GITHUB_HEAD_REF: string;

    /**
     * The
     * [job\_id](/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_id)
     * of the current job. For example, `greeting_job`.
     */
    GITHUB_JOB: string;

    /**
     * The path on the runner to the file that sets system `PATH` variables from
     * workflow commands. This file is unique to the current step and changes
     * for each step in a job. For example,
     * `/home/runner/work/_temp/_runner_file_commands/add_path_899b9445-ad4a-400c-aa89-249f18632cf5`.
     * For more information, see
     * "[Workflow commands for GitHub Actions](/en/actions/using-workflows/workflow-commands-for-github-actions#adding-a-system-path)."
     */
    GITHUB_PATH: string;

    /**
     * The branch or tag ref that triggered the workflow run. For branches this
     * is the format `refs/heads/<branch_name>`, for tags it is
     * `refs/tags/<tag_name>`, and for pull requests it is
     * `refs/pull/<pr_number>/merge`. This variable is only set if a branch or
     * tag is available for the event type. For example,
     * `refs/heads/feature-branch-1`.
     */
    GITHUB_REF: string;

    /**
     * The branch or tag name that triggered the workflow run. For example,
     * `feature-branch-1`.
     */
    GITHUB_REF_NAME: string;

    /**
     * `true` if branch protections are configured for the ref that triggered
     * the workflow run.
     */
    GITHUB_REF_PROTECTED: boolean;

    /**
     * The type of ref that triggered the workflow run. Valid values are
     * `branch` or `tag`.
     */
    GITHUB_REF_TYPE: 'branch' | 'tag'

    /**
     * The owner and repository name. For example, `octocat/Hello-World`.
     */
    GITHUB_REPOSITORY: string;

    /**
     * The repository owner's name. For example, `octocat`.
     */
    GITHUB_REPOSITORY_OWNER: string;

    /**
     * The number of days that workflow run logs and artifacts are kept. For
     * example, `90`.
     */
    GITHUB_RETENTION_DAYS: number;

    /**
     * A unique number for each attempt of a particular workflow run in a
     * repository. This number begins at 1 for the workflow run's first attempt,
     * and increments with each re-run. For example, `3`.
     */
    GITHUB_RUN_ATTEMPT: number;

    /**
     * A unique number for each workflow run within a repository. This number
     * does not change if you re-run the workflow run. For example,
     * `1658821493`.
     */
    GITHUB_RUN_ID: number;

    /**
     * A unique number for each run of a particular workflow in a repository.
     * This number begins at 1 for the workflow's first run, and increments with
     * each new run. This number does not change if you re-run the workflow run.
     * For example, `3`.
     */
    GITHUB_RUN_NUMBER: number;

    /**
     * The URL of the GitHub server. For example: `https://github.com`.
     */
    GITHUB_SERVER_URL: string;

    /**
     * The commit SHA that triggered the workflow. For example,
     * `ffac537e6cbbf934b08745a378932722df287a53`.
     */
    GITHUB_SHA: string;

    /**
     * The name of the workflow. For example, `My test workflow`. If the
     * workflow file doesn't specify a `name`, the value of this variable is the
     * full path of the workflow file in the repository.
     */
    GITHUB_WORKFLOW: string;

    /**
     * The default working directory on the runner for steps, and the default
     * location of your repository when using the
     * [`checkout`](https://github.com/actions/checkout) action. For example,
     * `/home/runner/work/my-repo-name/my-repo-name`.
     */
    GITHUB_WORKSPACE: string;

    /**
     * The architecture of the runner executing the job. Possible values are
     * `X86`, `X64`, `ARM`, or `ARM64`.
     */
    RUNNER_ARCH: 'X86' | 'X64' | 'ARM' | 'ARM64';

    /**
     * The name of the runner executing the job. For example, `Hosted Agent`
     */
    RUNNER_NAME: string;

    /**
     * The operating system of the runner executing the job. Possible values are
     * `Linux`, `Windows`, or `macOS`. For example, `Windows`
     */
    RUNNER_OS: 'Linux' | 'Windows' | 'macOS';

    /**
     * The path to a temporary directory on the runner. This directory is
     * emptied at the beginning and end of each job. Note that files will not be
     * removed if the runner's user account does not have permission to delete
     * them. For example, `D:\a\_temp`
     */
    RUNNER_TEMP: string;

    /**
     * The path to the directory containing preinstalled tools for GitHub-hosted
     * runners. For more information, see
     * "[About GitHub-hosted runners](/en/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
     * For example, `C:\hostedtoolcache\windows`
     */
    RUNNER_TOOL_CACHE: string;
  }
}
