# Running PHP in Standalone Mode (Built-in Web Server)

This guide outlines the steps to run PHP using its built-in web server, which is suitable for development and testing environments.

---

## Prerequisites

- **PHP version 5.4 or higher** (recommended: the latest stable version)
- **A terminal** (Command Prompt or PowerShell on Windows)

---

## Step 1: Download and Extract PHP

Navigate to the official PHP for Windows downloads page:  
https://windows.php.net/download

Download the latest **Thread Safe ZIP** version appropriate for your system architecture (e.g., x64).

Extract the contents to a directory, e.g.:

```plaintext
C:\php\
```

## Step 2: Add PHP to the System Path (Optional but Recommended)

Open the Environment Variables settings:

- Search for "Environment Variables" in the Start menu.
- Under "System Properties", click "Environment Variables".

In the "System variables" section:

- Select the `Path` variable and click "Edit".
- Click "New" and add:
  ```plaintext
  C:\php\
  ```
- Click "OK" to save and exit all dialogs.

This step allows you to run the `php` command globally from any terminal.

## Step 3: Verify the Installation

Open a terminal window and run:

```bash
php -v
```

You should see PHP version details, indicating that PHP is correctly installed.

## Step 4: Create a Project Directory and PHP File

Create a project directory, for example:

```plaintext
C:\php-sites\myapp\
```

Inside that folder, create a PHP file, e.g., `test.php`, with the following content:

```php
<?php
echo "Hello, PHP standalone server!";
```

## Step 5: Start the Built-in PHP Server

Open a terminal, navigate to your project directory, and run:

```bash
cd C:\php-sites\myapp
php -S localhost:8000
```

This command starts a local web server listening on port 8000.

## Step 6: Access via Browser

Open a web browser and navigate to:

```bash
http://localhost:8000/test.php
```

You should see the output:

```plaintext
Hello, PHP standalone server!
```

---

## Notes

- The built-in server will only serve files that physically exist in the directory.
- `index.php` is not required unless you intend for it to serve as the default page when accessing `/`.
- To stop the server, press `Ctrl + C` in the terminal.
