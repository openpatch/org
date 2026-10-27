---
name: SQL-IDE
index: 7
description: A strictly typed SQL development environment in the browser, built on SQLite with a strict-typing compiler.
keywords: ["tool", "ide"]
url: https://www.sql-ide.de
---

# SQL-IDE

-![SQL-IDE logo](/images/logos/sql-ide.png){width=120}

The SQL-IDE is a development environment for SQL that runs in the browser. It
combines an SQLite database with an editor based on Monaco from Visual Studio
Code. Statements are not passed to SQLite directly — an own compiler checks and
partially rewrites them first.

This is a fork of
[martin-pabst/SQL-IDE](https://github.com/martin-pabst/SQL-IDE), which we
maintain and extend.

## Highlights

- Strictly typed SQL — the compiler enforces the strict typing of the SQL
  standard, which SQLite itself only weakly supports.
- Understandable errors — the compiler reports clear error messages directly
  while typing, at the exact position of the mistake.
- Comfortable editor — syntax highlighting, code completion, context-sensitive
  help and the database schema as a tree, based on Monaco.
- Embeddable — the embedded version can be integrated into any website, the
  full development environment is available at
  [www.sql-ide.de](https://www.sql-ide.de).

## Links

- Website: [www.sql-ide.de](https://www.sql-ide.de)
- Documentation: [www.learn-sql.de](https://www.learn-sql.de)
- Source: [github.com/openpatch/sql-ide](https://github.com/openpatch/sql-ide)
- Upstream: [martin-pabst/SQL-IDE](https://github.com/martin-pabst/SQL-IDE)
