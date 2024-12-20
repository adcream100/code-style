![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/reduxjs/redux/test.yaml?branch=master&event=push&style=flat-square)

# @adCream/eslint-plugin

애드크림 스타일 가이드 플러그인 패키지

## Features

- FSD Architecture: 계층적 구조를 기반으로 하는 규칙 설계 (의존성: eslint-plugin-boundaries).

## Installation

```
npm install eslint @adCream/eslint-plugin -D
```

## Overview

```jsonc
// .eslintrc
{
  "plugins": ["@adCream/eslint-plugin"]
}
```

### 규칙

| Name                             | Description                                                         |     |
| :------------------------------- | :------------------------------------------------------------------ | :-- |
| [boundaries](docs/boundaries.md) | FSD 아키텍처를 기반으로 계층적 import를 제한하는 규칙을 제공합니다. |     |
