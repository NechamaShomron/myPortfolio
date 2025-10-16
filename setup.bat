@echo off
echo 🚀 Setting up Portfolio Website...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

echo ✅ Node.js detected
echo.

REM Install dependencies
echo 📦 Installing dependencies...
npm install

if %errorlevel% equ 0 (
    echo ✅ Dependencies installed successfully
    echo.
    echo 🎉 Setup complete! You can now run:
    echo    npm run dev
    echo.
    echo 📝 Don't forget to customize the content in the components folder with your personal information!
) else (
    echo ❌ Failed to install dependencies
)

pause
