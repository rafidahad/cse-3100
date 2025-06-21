# CSE-3100 PHP Code Examples

This repository contains PHP code examples and notes for learning and experimenting with PHP, including usage of the PHP built-in web server in standalone mode.

---

## Folder Structure

```
standalone-mode/
  ├── index.php
  ├── test.php
  └── readme.md
code-examples/
  ├── 1-basics.php
  ├── 2-variables.php
  ├── 3-variables-scope.php
  ├── 4-objects.php
  ├── 5-common-functions.php
  ├── 6-conditional-statements.php
  ├── 7-loops.php
  ├── 8-scopes.php
  └── 9-arrays.php
```

---

## Getting Started

### Requirements

- PHP 5.4 or higher (latest recommended)
- Terminal (Command Prompt, PowerShell, or similar)

---

## Running the Examples

### 1. Using the PHP Built-in Server

You can run the examples in the `standalone-mode` folder using PHP's built-in server:

1. Open a terminal and navigate to the `standalone-mode` directory:

   ```bash
   cd standalone-mode
   ```

2. Start the server:

   ```bash
   php -S localhost:8000
   ```

3. Open your browser and visit:

   - [http://localhost:8000/](http://localhost:8000/) for `index.php`
   - [http://localhost:8000/test.php](http://localhost:8000/test.php) for `test.php`

### 2. Running Code Examples

You can run any file in the `code-examples` folder by starting the PHP server in that folder or by running the files directly in the terminal.
To run a specific example, you can use the following command:

```bash
php code-examples/1-basics.php
```

You can replace `1-basics.php` with any other file name to run different examples.
