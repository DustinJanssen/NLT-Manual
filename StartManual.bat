@echo off

where python >nul 2>nul
if %errorlevel% neq 0 (
    echo Python is not installed.
    echo Please install Python. https://www.python.org/downloads/
    pause
)

start python -m http.server 8080
timeout /t 2
start "" http://localhost:8080