# Outlook for Linux
An unofficial Linux desktop wrapper for Microsoft Outlook built with Tauri.

<p align="center">
  <img src="client/src-tauri/icons/Square310x310Logo.png" alt="Threema Chat Analyzer Logo" width="200"/>
</p>

<p align="center">
  <!-- GitHub Actions Badge -->
  <a href="https://github.com/maxiking445/outlook-for-linux/actions/workflows/CI.yml">
    <img src="https://github.com/maxiking445/outlook-for-linux/actions/workflows/CI.yml/badge.svg" alt="Tauri CI Build">
  </a>

  <!-- License + Latest Release Badges -->
  <br>
  <img src="https://img.shields.io/github/license/maxiking445/outlook-for-linux" alt="License">
  <img src="https://img.shields.io/github/v/release/maxiking445/outlook-for-linux" alt="Latest Release">
</p>

## Why Tauri?
This project wraps the existing Outlook web app in a lightweight Linux desktop client.
I choosed it because unlike Electron, Tauri keeps the app very small with less deps and is also easy to build.

## Features
- **Borderless Window**: Streamlined interface without the native title bar for maximum screen space
- **Custom Drag Region**: Move the window by dragging Outlook's header bar
- **Native Notifications**: Desktop notifications for new emails
- **Offline Support**: Graceful handling when internet connection is unavailable
- **Download Management**: Save email attachments with a native file picker

## How to use

You can download the Linux version that matches your system from the **Releases** page. Available formats include:

- **.deb** → for Debian, Ubuntu, and derivatives  
- **.rpm** → for Fedora, openSUSE, and other RPM-based distributions  
- **AppImage** → a portable version that works on most Linux distributions



## Install
Rust
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
cargo install tauri-cli
``` 
Node
```bash
sudo apt install nodejs npm
``` 
## Start

```bash
cd client
npm install
npm run build
npm run tauri:dev
```

## Build
To create a production build with the borderless window:

```bash
cd client
npm install
npm run tauri:build
```

The build will create packages in `client/src-tauri/target/release/bundle/` including:
- `.deb` for Debian/Ubuntu
- `.rpm` for Fedora/openSUSE
- `.AppImage` for portable use

## Window Behavior
- **No Title Bar**: The window has no native OS title bar for a cleaner look
- **Drag to Move**: Click and drag anywhere on Outlook's top navigation bar to move the window
- **Resize**: Drag from window edges to resize (works normally)
- **Close/Minimize**: Use Outlook's interface or system shortcuts (Alt+F4, etc.)

### generate logo
```bash
npx tauri icon Logo_outlook.png
```

## Notes
Under Linux you probably need these additional libs to run it properly.
```bash
sudo apt install libayatana-appindicator3-dev libgtk-3-dev
``` 
