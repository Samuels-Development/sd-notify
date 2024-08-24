/**
 * SD Notify: Elevate Your Alerts! 🚀
 * Personalize your notifications with light or dark mode, 
 * custom sound alerts, a wide range of color options, the ability to upload 
 * your own sounds, and the freedom to choose where notifications pop up. 
 * 
 * Configuration
 * ------------------
 * This file contains various configurable options for your server.
 * Modify the values below to customize the behavior of every notification.
 *
 * Instructions:
 * 1. Update the values of the properties as provided.
 * 2. Save the file and restart this resource to test.
 * 3. Any questions or help needed, send us a ticket on our Discord: 
 *    https://discord.gg/samueldev
 *
 * Note: Be cautious while modifying these settings, as incorrect values
 *       may lead to unexpected behavior and/or errors in this resource.
 */

const config = {    
  // General settings
  theme:                'light',        // Choose: 'light' (default) or 'dark'
  posVertical:          'top',             // Choose: 'top', 'center', 'bottom' or leave blank for default
  posHorizontal:        'right',             // Choose: 'left', 'center', 'right' or leave blank for default
  animNotify:           '',             // Choose: 'slideInFromLeft', 'slideInFromRight' (default),
                                        // 'slideInFromTop' or 'slideInFromBottom'
  // Color settings
  colorInfo:            '#4928f3',      // Use a HEX Code, e.g.: #4928f3
  colorSuccess:         '#00b074',      // Use a HEX Code, e.g.: #00b074
  colorWarning:         '#f6a415',      // Use a HEX Code, e.g.: #f6a415
  colorError:           '#cc234f',      // Use a HEX Code, e.g.: #cc234f

  // Audio settings
  /**
   * Important
   * ---------
   * Make sure your audio is in the 'sounds' directory.
   * Any audio file extension can be used, but for optimal use we advice an OGG file. You can 
   * convert your audio using your own software or visit https://convertio.co/ and convert your
   * audio there.
   */
  audioVolume:          1.0,            // Set to 0 if you don't want audio, or set it from 0.1 - 1.0
  audioPrimary:         'click.ogg',    // Leave empty for default 'click' sound
  audioSuccess:         'chime.ogg',    // Leave empty for default 'click' sound
  audioWarning:         'warning.ogg',  // Leave empty for default 'click' sound
  audioError:           'error.ogg',    // Leave empty for default 'click' sound
  
  // Optional settings
  colorGlow:            true,           // Choose: 'true' (default) or 'false'
  boxShadow:            true,           // Choose: 'true' (default) or 'false'

  /**
   * ICON ANIMATION
   * Leave empty if you don't want an animated icon.
   * 
   * Available animations:
   * ---------------------
   *    beat
   *    beat-fade
   *    bounce
   *    fade
   *    flip
   *    shake
   *    spin
   *    spin-reverse
   */
  animationPrimary:     'beat-fade',    // Leave empty for static icon
  animationSuccess:     'spin',         // Leave empty for static icon
  animationWarning:     'bounce',       // Leave empty for static icon
  animationError:       'flip'          // Leave empty for static icon
};