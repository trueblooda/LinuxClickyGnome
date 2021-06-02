# Gnome Shell extension to toggle touchpad
![](http://i.imgur.com/px3NfjZ.png)

## How to install

Go to https://extensions.gnome.org/extension/935/toggle-touchpad/ and install from there.

Make sure you have `xinput` installed (`sudo apt-get install xinput`).

### How to install manually

Download latest release (https://github.com/mkopta/toggle-touchpad/releases/download/v1.6/toggle-touchpad-v1.6.zip) and unpack it to this directory `~/.local/share/gnome-shell/extensions/toggle-touchpad@martin.kopta.eu`. Restart the gnome shell by ALT+F2, type `r` and enter.

Commands to install
```
rm -rf ~/.local/share/gnome-shell/extensions/toggle-touchpad@martin.kopta.eu
mkdir -p ~/.local/share/gnome-shell/extensions/toggle-touchpad@martin.kopta.eu
cd ~/.local/share/gnome-shell/extensions/toggle-touchpad@martin.kopta.eu
curl -LO https://github.com/mkopta/toggle-touchpad/releases/download/v1.6/toggle-touchpad-v1.6.zip
unzip toggle-touchpad-v1.6.zip
rm toggle-touchpad-v1.6.zip
```

Now ALT+F2, type `r` and enter.

Make sure you have `xinput` installed (`sudo apt-get install xinput`).

### In case of trouble

Use gnome tweak tool to see whether the extension is really there and enabled.

Use looking glass to see more details (ALT+F2 lg)


(icons taken from https://github.com/orangeshirt/gnome-shell-extension-touchpad-indicator)
