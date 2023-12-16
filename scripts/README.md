## Node scripts

This directory contains `node` scripts. Scripts should be run from the <strong>root repository directory</strong>.
To execute these scripts, please run:

```bash
node scripts/<SCRIPT_NAME>.js
```

Scripts are written on `node` version `16.13.0`.


### prismicCustomTypes.js
This script has two modes:
- Default mode (absence of CHECK_TYPES env variable), that fetches all current custom prismic types from
prismic and saves them in `lib/prismic/customTypes` (this mode applies changes to the code base).

- Check types mode, that checks if current custom types that are in the code base match the types that are in the
prismic repository.

Environment variables:

- <strong>REQUIRED</strong> `PRISMIC_CUSTOM_TYPES_API_TOKEN` - bearer token that is needed to fetch custom prismic 
  types. This script will not work if this env variable is not set.
  
- <strong>OPTIONAL</strong> `CHECK_TYPES` - this env variable is optional. By default, it is unset. GitHub 
  workflow checkPrismicCustomTypes passes this variable to this script.
  
- <strong>OPTIONAL</strong> `AUTHOR` - this env variable is optional. It only adds logic for dependabot pull requests, 
  where we instantly exit the script with 0 (success). The reason we do this, is that we do not want to expose 
  our SECRETS to the dependabot, which makes this script not functional in such case.

Usage examples:
```bash
node ./scripts/prismicCustomTypes.js
CHECK_TYPES=true node ./scripts/prismicCustomTypes.js
```
