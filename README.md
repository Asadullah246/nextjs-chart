## Setup

Install the LTS for Node.js and Yarn if you haven't already.

### Install project dependencies

```bash
yarn
```

### Generate types

```bash
yarn generateTypes
```

### (Optional) Fetch Prismic custom types

Create an environment `.env.local` file and add `PRISMIC_API_TOKEN` and `PRISMIC_CUSTOM_TYPES_API_TOKEN` variables to
it:

```bash
echo "PRISMIC_API_TOKEN=xxxx" >> .env.local
echo "PRISMIC_CUSTOM_TYPES_API_TOKEN=xxxx" >> .env.local
```

You will find the `PRISMIC_API_TOKEN` and `PRISMIC_CUSTOM_TYPES_API_TOKEN` tokens in Bitwarden (named "PRISMIC_API_TOKEN" and "PRISMIC_CUSTOM_TYPES_API_TOKEN").

Locally, `PRISMIC_CUSTOM_TYPES_API_TOKEN` is only required by `./scripts/prismicCustomTypes.js` script, but it is still
advised to set it up (as everyone should be able to update prismic custom types automatically).

You can read more about `.env.<file>`
structure [here](https://nextjs.org/docs/basic-features/environment-variables#default-environment-variables).

## Development mode

To start the development server run:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production mode

To run the project in production mode you have to build it first:

```bash
yarn build
```

And then start it:

```bash
yarn start
```

## Formatting & Linting

To run the lint check-step locally:

```bash
yarn lint
```

To run lint fixers (this includes formatting):

```bash
yarn lint:fix
```

## Testing

To run the E2E tests locally:

```bash
yarn cypress
```

To run them headless:

```bash
yarn cypress:headless
```

## Deployment

You will get an immutable deployment of your current branch when you create a pull request on GitHub. Vercel will
automatically add a comment to your pull request with the url of the deployment. This deployment will update whenever
you push a new change to your branch.
**When you merge your pull request a new production deployment is triggered automatically.**

You can also manually deploy your local changes to a unique url. In order for this to work you need to install the
vercel cli:

```bash
yarn global add vercel
```

You also need a vercel account linked to the True Wealth team. Ask an admin to give you an invite link.

When you have the vercel cli installed and the account setup you can simply run `vercel` somewhere in the project path
to deploy your current local changes.

To promote a deployment to production simply add the prod flag, e.g.: `vercel --prod`.

## Managing Actions Secrets (admins only)

Secrets of the repository could be found under Settings/Secrets.

- <strong>PRISMIC_CUSTOM_TYPES_API_TOKEN</strong> - Token required by `checkPrismicCustomTypes.yml` github workflow.
  This token allows workflow to query custom prismic types from their API. New tokens can be generated (or old tokens
  can be invalidated) by [truewealth prismic](https://truewealth.prismic.io/) admin user under Settings/API &
  Security/Custom Types API. When token is updated on the prismic side, please update it also in the repository
  Settings/Secrets/Actions. Developers should also remember to update `PRISMIC_CUSTOM_TYPES_API_TOKEN` in their
  local `.env.local`. <strong>Please do not forget to update Bitwarden token, if a new
  `PRISMIC_CUSTOM_TYPES_API_TOKEN` is generated.</strong>

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
