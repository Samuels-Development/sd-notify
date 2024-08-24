local function Notify(title, text, type, length, icon, sound)
    type = type or 'primary'
    length = length or 5000
    SendNUIMessage({
        title = title,
        text = text,
        type = type,
        length = length,
        icon = icon,
        sound = sound
    })
end

exports('Notify', Notify)

RegisterNetEvent('sd-notify:Notify', function(title, text, type, length, icon, sound)
    Notify(title, text, type, length, icon, sound)
end)

RegisterCommand('testnotify', function()
    Notify('Test', 'This is a test notification', 'success', 5000)
    Notify('Test', 'This is a test notification', 'error', 5000)
    Notify('Test', 'This is a test notification', 'warning', 5000)
    Notify('Test', 'This is a test notification', 'primary', 5000, 'fas fa-bell', 'primary')
end)