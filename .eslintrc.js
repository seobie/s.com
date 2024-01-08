module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@next/next/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
    "prettier",
  ],
  overrides: [
    {
      files: ["**/*.js", "scripts/**/*.ts"],
      rules: {
        "@typescript-eslint/no-var-requires": "warn",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "prettier",
    "@typescript-eslint",
    "import",
    "react",
    "react-hooks",
    "jsx-a11y",
    "sort-keys-fix",
    "eslint-plugin-simple-import-sort",
    "eslint-plugin-sort-destructure-keys",
    "unused-imports",
  ],
  rules: {
    "@next/next/no-img-element": "off",
    "@next/next/no-page-custom-font": "off",

    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array-simple",
      },
    ],
    "@typescript-eslint/ban-types": "warn",

    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],

    // 대부분의 경우 필요가 없어서
    "@typescript-eslint/explicit-function-return-type": "off",

    "@typescript-eslint/explicit-module-boundary-types": "off",

    "@typescript-eslint/indent": "off",

    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: [
          "public-static-field",
          "private-static-field",
          "public-instance-field",
          "private-instance-field",
          "public-constructor",
          "private-constructor",
          "public-instance-method",
          "private-instance-method",
        ],
      },
    ],

    "@typescript-eslint/naming-convention": [
      "error",
      {
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
        leadingUnderscore: "allow",
        selector: "variable",
      },
      {
        filter: {
          match: false,
          regex: "[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]",
        },
        format: ["camelCase", "PascalCase"],
        selector: "function",
      },
      {
        filter: {
          match: false,
          regex: "[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]",
        },
        format: ["PascalCase"],
        selector: "interface",
      },
      {
        filter: {
          match: false,
          regex: "[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]",
        },
        format: ["PascalCase"],
        selector: "typeAlias",
      },
    ],

    "@typescript-eslint/no-empty-function": "off",

    // 모델 정의 부분에서 class와 interface를 합치기 위해 사용하는 용법도 잡고 있어서
    "@typescript-eslint/no-empty-interface": "off",

    "@typescript-eslint/no-explicit-any": "off",

    "@typescript-eslint/no-inferrable-types": "warn",

    "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",

    // 이미 널리 쓰이고 있어 에러 수가 감당이 되지 않아 잠시 꺼둡니다.
    "@typescript-eslint/no-non-null-assertion": "off",

    // 모델 정의 부분에서 파라미터 프로퍼티를 잘 쓰고 있어서
    "@typescript-eslint/no-parameter-properties": "off",

    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: true,
      },
    ],

    // Hoisting을 전략적으로 사용한 경우가 많아서
    "@typescript-eslint/no-use-before-define": "off",

    "@typescript-eslint/prefer-as-const": "warn",

    curly: ["error", "all"],

    eqeqeq: [
      "error",
      "always",
      {
        null: "ignore",
      },
    ],

    // union type을 받는 함수에서 모든 경우의 수에 대해 return 해도 eslint가 추론하지 못하고 있어서 warn만 하고 있음
    "getter-return": "warn",

    "import/newline-after-import": ["error"],

    "import/no-duplicates": "error",

    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
        groups: [
          "builtin",
          "external",
          "internal",
          ["sibling", "parent", "index"],
          "type",
          "unknown",
        ],
        "newlines-between": "always",
        pathGroups: [
          {
            group: "external",
            pattern: "{react*, react*/**}",
            position: "before",
          },
          {
            group: "unknown",
            pattern: "src/common/**",
          },
        ],
        pathGroupsExcludedImportTypes: ["react", "unknown"],
      },
    ],

    // 아래 3개의 경우, Prettier가 이미 잘 해 주고 있는 부분이기 때문에
    indent: "off",

    // 접근성, 충분히 잡히면 error로 올릴 예정
    "jsx-a11y/alt-text": [
      "warn",
      {
        img: ["Image", "Dialog.Image"],
      },
    ],

    "jsx-a11y/aria-props": "error",

    // 제대로된 aria-* 이름인지 확인
    "jsx-a11y/aria-proptypes": "error",

    // 제대로된 aria-*의 value 인지 검사
    /**
     * 일부 속성은 aria 표준이 아니지만 사용중이기 때문에 warn 처리
     * eg. role="text" 같은 경우 aria 표준은 아니지만 널리 사용되고 있습니다.
     *
     * FIXME: 아래 이슈 해결후 error로 격상 하기
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/792
     */
    "jsx-a11y/aria-role": "warn",

    // 서로 같이 쓰면 안되는 aria-* 가 있는지 확인하는룰
    "jsx-a11y/aria-unsupported-elements": "warn",

    // 해당 element에서 미지원하는 aria가 들어있는지 확인하는 룰
    "jsx-a11y/img-redundant-alt": [
      "warn",
      {
        components: ["Image", "Dialog.Image"],
        words: ["사진", "이미지"],
      },
    ],

    // 표준 role 값인지 확인하는 룰
    "jsx-a11y/role-supports-aria-props": "warn",

    "no-async-promise-executor": "warn",

    "no-console": ["warn", { allow: ["warn", "error", "info"] }],

    // Strict-boolean-expression을 사용할지 아직 결론이 나지 않아서
    "no-extra-boolean-cast": "off",

    "no-implicit-coercion": "error",

    // TypeScript에서 이미 잡고 있는 문제이기 때문에 + location, document 등의 global variable도 잡아서
    "no-undef": "off",

    "no-unused-vars": "error",

    "no-var": "error",

    "object-shorthand": ["error", "always"],

    "prefer-const": "error",

    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],

    // React.memo, React.forwardRef에서 사용하는 경우도 막고 있어서
    "react/display-name": "off",

    "react/jsx-key": "warn",

    // 탭내빙 어택 방지
    "react/jsx-no-target-blank": "error",

    // 불필요한 Fragment 방지
    "react/jsx-no-useless-fragment": "off",

    "react/jsx-uses-react": "off",

    "react/no-unescaped-entities": "off",

    // TypeScript에서 이미 잘 해주고 있어서
    "react/prop-types": "off",

    "react/react-in-jsx-scope": "off",

    "react-hooks/exhaustive-deps": "error",

    "react-hooks/rules-of-hooks": "error",

    semi: "off",

    "simple-import-sort/exports": "error",

    "sort-destructure-keys/sort-destructure-keys": "error",

    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],

    "sort-keys-fix/sort-keys-fix": ["error", "asc", { natural: true }],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
