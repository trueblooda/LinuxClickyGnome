f/*
Notes from Mark:
This is your coding assignment. It's due tonight at midnight :)

1. I cleaned up the old extension code and took out all the code relating to the touchpad.
2. The extension in its current state should correctly handle toggling the button. Toggling the button ON will call `_toggle_clicking` (this function is already done for you). `_toggle_clicking` will then call `_enable_clicking` or `_disable_clicking`, depending on what needs to happen.
3. Your job is to implement 3 functions:
   1. `_enable_clicking`, which enables the clicking.
   2. `_disable_clicking`. You can figure out what this one does :)
   3. `_is_enabled`, which checks if the clicking script is already enabled.
   
Once you implement those 3 functions, the extension should work perfectly.

Hints:
1. To enable the clicking script, you should use `_cmdstdout`. `_cmdstdout` is a function written by the old extension's author. This function lets you run any command. You should probably use it like this: `_cmdstdout("bash -c 'python <wherever the script is>'");
2. To figure  out if the script is currently running: google that shit. It's on stackoverflow somewhere. Search "how to figure out if a python script is running linux"
3. Disabling it: also google that. "how to kill processes from the terminal". You'll need to figure out the process ID of the python script 

*/

const St = imports.gi.St;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Main = imports.ui.main;
const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;

/**
 * Stores the button element and the icon for the button.
 */
let button, icon;

/**
 * Runs a command in the terminal.
 */
function _cmdstdout(cmd) {
    let stdout = "";
    let [res, pid, in_fd, out_fd, err_fd] = GLib.spawn_async_with_pipes(
        null, cmd, null, GLib.SpawnFlags.SEARCH_PATH, null);
    let out_reader = new Gio.DataInputStream(
        {base_stream: new Gio.UnixInputStream({fd: out_fd})});
    while (true) {
        let [out, size] = out_reader.read_line(null);
        if (size > 1) {
            stdout += out.toString() + "\n";
        } else {
            break;
        }
    }
    return stdout;
}

/**
 * Figure out if the script is enabled.
 */
function _is_enabled() {
    // TODO: figure it out bruh
	// Old code, might be helpful:
	/*
    let enabled = false;
    let out = _cmdstdout(["xinput", "list-props", touchpad_id.toString()]);
    out.split("\n").forEach(function(line) {
        if (line.search(/^\s*Device Enabled \(\d+\):\s+[01]$/) != -1) {
            enabled = line.match(
                /^\s*Device Enabled \(\d+\):\s+([01])$/)[1] == '1';
        }
    });
    return enabled;
    */
}

/**
 * Disable the clicking script.
 */
function _disable_clicking(touchpad_id) {
    // TODO: Disable the clicking script.
    // Old code, might be helpful: _cmdstdout(["xinput", "disable", touchpad_id.toString()]);
}


/**
 * Disable the clicking script.
 */
function _enable_clicking(touchpad_id) {
	// TODO: Enable the clicking script.
    // Old code, might be helpful: _cmdstdout(["xinput", "enable", touchpad_id.toString()]);
}


/**
 * Toggles the clicking script.
 */
function _toggle_clicking() {
    if (_is_enabled()) {
        _disable_clicking();
        return false;
    } else {
        _enable_touchpad();
        return true;
    }
}


function init() {
    button = new St.Bin(
        {
            style_class: 'panel-button',
            reactive: true,
            can_focus: true,
            x_fill: true,
            y_fill: false,
            track_hover: true});
    if (_is_enabled()) {
        icon = new St.Icon({style_class: "touchpad-icon"});
    } else {
        icon = new St.Icon({style_class: "touchpad-icon-disabled"});
    }
    button.set_child(icon);
    button.connect('button-press-event', function(){
        if (_toggle_clicking()) {
            icon = new St.Icon({style_class: "touchpad-icon"});
        } else {
            icon = new St.Icon({style_class: "touchpad-icon-disabled"});
        }
        button.set_child(icon);
    });
}

function enable() {
    Main.panel._rightBox.insert_child_at_index(button, 0);
}

function disable() {
    Main.panel._rightBox.remove_child(button);
}
