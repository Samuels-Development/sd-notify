function Notify(options) {
    var notification = $(".notification.template").clone();
    
    // Set notification type and theme
    notification.removeClass("template");
    notification.addClass(options.type ? options.type : "primary");
    notification.addClass(config.theme ? config.theme : "light");
    
    var title = options.title ? options.title : options.type;
    var animationClass = options.anim ? options.anim : "";
    
    // Determine the icon and animation based on the type
    switch (options.type) {
        case "primary":
            animationClass = "fa-" + config.animationPrimary;
            if (!options.icon) {
                options.icon = "fas fa-info-circle";
            }
            break;
        case "success":
            animationClass = "fa-" + config.animationSuccess;
            if (!options.icon) {
                options.icon = "fa-solid fa-circle-check";
            }
            break;
        case "warning":
            animationClass = "fa-" + config.animationWarning;
            if (!options.icon) {
                options.icon = "fa-solid fa-triangle-exclamation";
            }
            break;
        case "error":
            animationClass = "fa-" + config.animationError;
            if (!options.icon) {
                options.icon = "fa-solid fa-circle-exclamation";
            }
            break;
    }
    
    // Build the notification HTML
    notification.html(`
        <div class="content">
            <div class="icon-wrapper">
                <i class="icon ${options.icon} ${animationClass}"></i>
            </div>
            <div>
                <span class="title">
                    ${title}
                </span>
                <span class="text">
                    ${options.text}
                </span>
            </div>
        </div>
        <div class="progress-bar"></div>
    `);
    
    // Add additional classes
    notification.find(".content i").addClass(options.type ? `icon-${options.type}` : "icon-primary");
    var iconWrapper = notification.find(".icon-wrapper");
    
    if (config.colorGlow === false) {
        iconWrapper.addClass("hide-glow");
    }
    
    if (config.boxShadow === false) {
        notification.addClass("noshadow");
    }
    
    var sound = null;
    if (options.sound !== undefined) {
        sound = "./sounds/" + options.sound;
    } else {
        switch (options.type) {
            case "primary":
                sound = "./sounds/" + config.audioPrimary;
                break;
            case "success":
                sound = "./sounds/" + config.audioSuccess;
                break;
            case "warning":
                sound = "./sounds/" + config.audioWarning;
                break;
            case "error":
                sound = "./sounds/" + config.audioError;
                break;
        }
    }
    
    // Play notification sound
    if (sound) {
        var soundEffect = new Howl({ src: [sound] });
        soundEffect.volume(config.audioVolume);
        soundEffect.play();
    }
    
    // Append and animate the notification
    notification.css({ opacity: 0 });
    $(".notifycontainer").append(notification);
    
    var progressBar = notification.find(".progress-bar");
    progressBar.addClass(`progress-${options.type}`);
    progressBar.animate({ width: "3%" }, {
        duration: options.length,
        complete: function() {
            progressBar.animate({ opacity: 0 });
            progressBar.remove();
        }
    });
    
    setTimeout(function() {
        notification.animate({ opacity: 0 }, 300, function() {
            notification.remove();
        });
    }, options.length);
    
    var notifyAnimation = config.animNotify ? config.animNotify : "slideInFromRight";
    notification.animate({ opacity: 1 })
        .addClass("active")
        .addClass(notifyAnimation);
}

// Event listener for messages to trigger notifications
window.addEventListener("message", function(event) {
    Notify(event.data);
});

// Set notification container position based on config
var position = config.posVertical + "-" + config.posHorizontal;
var $notifyWrapper = $("body").find(".notifywrapper");
var $notifyContainer = $(".notifywrapper").find(".notifycontainer");

if (config.posVertical || config.posHorizontal) {
    $notifyWrapper.addClass("notifywrapper-" + position);
    $notifyContainer.addClass(position);
} else {
    $notifyWrapper.addClass("notifywrapper-default");
    $notifyContainer.addClass("default");
}

// Custom theme based on config
var customTheme = `
    .primary .title { color: ${config.colorInfo}; }
    .progress-primary, .primary::before, .primary .icon-wrapper, .primary .icon-wrapper::before { background-color: ${config.colorInfo}; }
    
    .success .title { color: ${config.colorSuccess}; }
    .progress-success, .success::before, .success .icon-wrapper, .success .icon-wrapper::before { background-color: ${config.colorSuccess}; }
    
    .warning .title { color: ${config.colorWarning}; }
    .progress-warning, .warning::before, .warning .icon-wrapper, .warning .icon-wrapper::before { background-color: ${config.colorWarning}; }
    
    .error .title { color: ${config.colorError}; }
    .progress-error, .error::before, .error .icon-wrapper, .error .icon-wrapper::before { background-color: ${config.colorError}; }
`;

// Inject custom theme styles
var styleElement = document.createElement("style");
styleElement.innerHTML = customTheme;
document.head.appendChild(styleElement);