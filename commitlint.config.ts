const pkg = require('./package.json');

interface CommitMessageContext {
  raw: string;
}

// Check if the user has configured the package to use conventional commits.
const isConventional = pkg.config ? pkg.config['cz-emoji']?.conventional : false;

// Regex for default and conventional commits.
const RE_DEFAULT_COMMIT =
  /^(?::.*:|(?:\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]))\s(?<emoji>\((?<scope>.*)\)\s)?.*$/gm;
const RE_CONVENTIONAL_COMMIT =
  /^^(?<type>\w+)(?:\((?<scope>\w+)\))?\s(?<emoji>:.*:|(?:\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]))\s.*$/gm;

module.exports = {
  rules: {
    'cz-emoji': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'cz-emoji': ({ raw }: CommitMessageContext) => {
          const isValid = isConventional ? RE_CONVENTIONAL_COMMIT.test(raw) : RE_DEFAULT_COMMIT.test(raw);

          const message = isConventional
            ? `Your commit message should follow conventional commit format.`
            : `Your commit message should be: <emoji> (<scope>)?: <subject>`;

          return [isValid, message];
        },
      },
    },
  ],
};
