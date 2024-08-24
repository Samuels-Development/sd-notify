# sd-notify

`sd-notify` is a clean and modern notification script for FiveM, supporting various notification types, durations, and even custom sounds.

## 🔔 Contact
Author: Samuel#0008  
Discord: [Join the Discord](https://discord.gg/samueldev)

Store: [Click Me](https://fivem.samueldev.shop)

## 💾 Installation
1. Download the latest release from the [GitHub repository](https://github.com/Samuels-Development/sd-notify/releases).
2. Extract the downloaded file and rename the folder to `sd-notify`.
3. Place the `sd-notify` folder into your server's `resources` directory.
4. Add `ensure sd-notify` to your `server.cfg` to ensure the resource starts with your server.

## 📖 Usage

### Displaying a Notification

#### Client-Side Example
```lua
exports['sd-notify']:Notify('Title', 'This is a notification text', 'success', 3000, 'fa-solid fa-check-circle', 'notification_sound.ogg')
```

#### Server-Side Example
```lua
TriggerClientEvent('sd-notify:Notify', source, 'Title', 'This is a notification text', 'error', 5000, 'fa-solid fa-exclamation-circle', 'error_sound.ogg')
```

### Parameters
- **title** (optional): The title of the notification. If left empty, a default title will be used based on the notification type. Example of no title:
  ```lua
  exports['sd-notify']:Notify('', 'You Failed!', 'error', 2000)
  ```
- **text**: The main content of the notification.
- **type**: The type of notification. Options include:
  - `success` (green)
  - `primary` (blue)
  - `warning` (yellow)
  - `error` (red)
- **length** (optional): The duration the notification will be displayed, in milliseconds (e.g., `2000` for 2 seconds). If not specified, it defaults to the value set in `config.js`.
- **icon** (optional): The FontAwesome icon class to display. If not specified, it defaults to the value set in `config.js`.
- **sound** (optional): The sound to play with the notification. If not specified, it defaults to the value set in `config.js`.

### Using a Custom Sound
To use a custom sound:
1. Create a short sound snippet and save it as a `.ogg`, `.wav`, or `.mp3` file in the `sounds` directory.
2. Use the filename (with extension) when calling the `Notify` function.

#### Example:
```lua
exports['sd-notify']:Notify('ERROR', 'Something went wrong!', 'error', 5000, 'fa-solid fa-bomb', 'custom_error_sound.ogg')
```

## 📁 Examples & Integration

### Client-Side Integration Example
```lua
local function PlaceBomb(success)
    if success then
        bombplant()
    else
        exports['sd-notify']:Notify('ERROR', 'You Failed!', 'error', 5000)
    end
end
```

### Server-Side Integration Example
```lua
local function DoSomething()
    local hasMoney = GetPlayerAccountFunds(src, 'money', Config.RunCost)
    if hasMoney < Config.RunCost then
        TriggerClientEvent('sd-notify:Notify', source, 'ERROR', "You don't have enough cash!", 'error', 5000)
        return
    end

    TriggerEvent('sd-oxyrun:server:startrun')
end
```

### Quick QBCore Integration
For QBCore, replace the default `QBCore.Functions.Notify` function with the following:

```lua
function QBCore.Functions.Notify(text, texttype, length)
    exports['sd-notify']:Notify('', text, texttype, length)
end
```

This integration will ensure that all notifications triggered by `QBCore.Functions.Notify` are handled by `sd-notify`.
