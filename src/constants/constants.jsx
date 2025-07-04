export const DEFAULT_APP_SETTINGS = {
  skin: "STANDARD",
  actionAfterSolve: "NONE",
  message: undefined,
  keysType: "NUMBERS",
  background: "images/standard/background.png",
  backgroundTV : "images/standard/background_TV.png",
  backgroundRemote : "images/standard/background_remote.png",
  //backgroundDial: "images/standard/dial_classic.png",
  backgroundButton: "images/standard/background_button.png",
  //backgroundKeypad: "images/standard/lock.png",
  //backgroundKey: "images/background_key.png",
  numbers: ["1","2","3","4","5","6","7","8","9","✱","0","#"],
  letters: ["A","B","C","D","E","F","G","H","I","J","K","L"],
  colors : [
    "Red", //#FF0000
    "Green", //#008000
    "Blue", //#0000FF
    "Yellow", //#FFFF00
    "Orange", //#FFA500
    "Pink", //#FF1493
    "Cyan", //#00FFFF
    "Purple", //#800080
    "Brown", //#8B4513
    "Black", //#000000
    "Gray", //#808080
    "White", //#FFFFFF
  ],
 /* coloredBackgroundKeys: [
    "images/background_key_red.png",
    "images/background_key_green.png",
    "images/background_key_blue.png",
    "images/background_key_yellow.png",
    "images/background_key_orange.png",
    "images/background_key_pink.png",
    "images/background_key_cyan.png",
    "images/background_key_purple.png",
    "images/background_key_brown.png",
    "images/background_key.png",
    "images/background_key_gray.png",
    "images/background_key_white.png",
  ],*/
  symbols: [
    "Triangle",
    "Square",
    "Circle",
    "Rhombus",
    "Spades",
    "Hearts",
    "Clubs",
    "Diamonds",
    "Star",
    "Moon",
    "Sun",
    "Puzzle",
  ],
  /*symbolsBackgroundKeys: [
    "images/symbol_triangle.png",
    "images/symbol_square.png",
    "images/symbol_circle.png",
    "images/symbol_rhombus.png",
    "images/symbol_ace_spades.png",
    "images/symbol_ace_hearts.png",
    "images/symbol_ace_clubs.png",
    "images/symbol_ace_diamonds.png",
    "images/symbol_star.png",
    "images/symbol_moon.png",
    "images/symbol_sun.png",
    "images/symbol_puzzle.png",
  ],*/
  backgroundMessage: "images/background_message.png",
  //imageLightOff: "images/standard/light_off.png",
  //imageLightNok: "images/standard/light_nok.png",
  //imageLightOk: "images/standard/light_ok.png",
  soundBeep: "sounds/beep.mp3",
  soundNok: "sounds/solution_nok.mp3",
  soundOk: "sounds/solution_ok.mp3",
  //soundDial: "sounds/spin.wav",

  //dialWidth: 0.7, // Relative size of the dial compared to the box width
  //dialHeight: 0.7, // Relative size of the dial compared to the box height
  //dialTextSize: "9vmin", // Font size for the dial text
  //dialTextColor: "#000000", // Color for the dial text

  buttonFontSize: "5vmin", // Font size for the text in the keypad
  soundIconSize: "5vmin", // Size of the sound icon in the keypad
  buttonTextColor: "#000000", // Color for the text in the keypad

  buttonWidth: 0.09, // Relative width of the buttons in the keypad
  buttonHeight: 0.07, // Relative height of the buttons in the keypad

  //lightBack: "false", // Controls whether to show the image behind the dial frame

  minLength: 4, // Minimum length of the solution

  displayVHS: true,

  blackScreen: true,
  blackScreenWidth: "70%", // Width of the black screen in the TV
  blackScreenHeight: "65%", // Height of the black screen in the TV
  blackScreenLeft: "10%", // Left position of the black screen in the TV
  blackScreenTop: "5%", // Top position of the black screen

  fuzzyScreen: true, // Whether to apply a fuzzy effect to the TV screen

  videoPlayerWidth: 0.9, // Width of the video player
  videoPlayerLeft: "13.5%", // Left position of the video player
  videoPlayerTop: "10%", // Top position of the video player

  channelNumberTop: "15%", // Top position of the channel number in the TV
  channelNumberLeft: "18%", // Left position of the channel number in the TV

  remoteWidth: 0.4,
  showRemote: true, // Whether to show the remote control

  buttonsTop: ["22%", "32%", "42%", "52%", "62%", "72%"], // Top positions for the rows of buttons in the remote
  buttonsLeft: "50%", // Left position for the remote buttons

  volumeIconTop: "0.5vmin", // Top position of the volume icon in the remote
  soundIconColor: "#000000", // Color for the sound icon in the remote
  channelFontSize: "6vmin", // Font size for the channel number in the TV

  fuzzyScreenWidth: "75%", // Width of the fuzzy screen effect
  fuzzyScreenHeight: "65%", // Height of the fuzzy screen effect
  fuzzyScreenLeft: "11%", // Left position of the fuzzy screen effect
  fuzzyScreenTop: "5%", // Top position of the fuzzy screen effect

  volumeTop: "60%",
  volumeLeft: "17%", // Left position of the volume control in the remote
  volumeHeight: "5vmin", // Height of the volume control in the remote
  volumeContainerWidth: 0.45, // Width of the volume control container in the remote
  volumeBarLeft: 0.21,
  volumeFontSize: 0.07,

  volumeBarColor: "rgba(15, 167, 15, 0.76)", // Color of the volume bar
  volumeColor: "rgb(15, 167, 15)", // Color of the volume text


  //
  defaultVideo:{src: "video/WhiteNoise.mp4", type: "video/mp4"},

  channels : [
    { id: 12345, name: "Never Gonna Give you up", src:"https://youtu.be/dQw4w9WgXcQ?si=ReWN7oDLo1kUD1zR&t=42", type: "video/youtube" },
    { id: 54321, name: "Major Tom", src:"https://www.youtube.com/watch?v=iYYRH4apXDo", type: "video/youtube" },
    { id: 21465, name: "Mr Roboto", src:"https://youtu.be/uc6f_2nPSX8?si=0Qeg3ImkfDbcQWcm", type: "video/youtube" },
    { id: 22228, name: "I Ran", src:"https://youtu.be/iIpfWORQWhU?si=2bwXOMzyy0unAD-1", type: "video/youtube" },
    { id: 23545, name: "This Fire", src:"https://www.youtube.com/watch?v=haW_ruZ_Be8", type: "video/youtube" },
    { id: 23985, name: "Running up that hill", src:"https://youtu.be/wp43OdtAAkM?si=uCBahW4wsL6MUpxB", type: "video/youtube" },
    { id: 23845, name: "The Cigarette", src:"https://youtu.be/4TV_128Fz2g?si=OlZpJOoKEaIHSoMB", type: "video/youtube" },
    { id: 23445, name: "Documental Titanic", src:"https://youtu.be/8d_FxY-8D1I?si=yaiPkrPONcrUi6fM", type: "video/youtube" },
    { id: 1792, name: "Documental Rev Francesa", src:"https://youtu.be/hqVdCMpmzfo?si=TR8yfpLxxxrMsKwF", type: "video/youtube" },
    { id: 1111, name: "Twenty one Pilots Ride", src:"https://www.youtube.com/watch?v=Pw-0pbY9JeU", type: "video/youtube" },
  ]
};

export const SKIN_SETTINGS_RETRO = {
  background: "images/retro/background.png",
  backgroundTV : "images/retro/background_TV.png",
  backgroundButton: "images/retro/background_button.png",
  showRemote: false,
  //backgroundKeypad: "images/background_keypad_retro.png",
  //backgroundKey: "images/background_key_retro.png",
  
  //backgroundLock : "images/retro/background_lock_retro.png",
  //backgroundDial: "images/retro/dial_retro.png",
  /*coloredBackgroundKeys: [
    "images/background_key_retro_red.png",
    "images/background_key_retro_green.png",
    "images/background_key_retro_blue.png",
    "images/background_key_retro_yellow.png",
    "images/background_key_retro_orange.png",
    "images/background_key_retro_pink.png",
    "images/background_key_retro_cyan.png",
    "images/background_key_retro_purple.png",
    "images/background_key_retro_brown.png",
    "images/background_key_retro_black.png",
    "images/background_key_retro_gray.png",
    "images/background_key_retro_white.png",
  ],*/
  backgroundMessage: "images/background_message_retro.png",
  //imageLightOff: "images/retro/light_off_retro.png",
  //imageLightNok: "images/retro/light_nok_retro.png",
  //imageLightOk: "images/retro/light_ok_retro.png",
  //soundBeep: "sounds/beep_retro.wav",
  //soundNok: "sounds/solution_nok_retro.wav",
  //soundOk: "sounds/solution_ok_retro.wav",

  //dialTextSize: "9vmin", // Font size for the dial text
  //dialTextColor: "#FFFFFF", // Color for the dial text
  //lightBack: "false",

  buttonWidth: 0.06, // Relative width of the buttons in the keypad
  buttonHeight: 0.05, // Relative height of the buttons in the keypad

  buttonFontSize: "3.5vmin", // Font size for the text in the keypad
  soundIconSize: "3.5vmin", // Size of the sound icon in the keypad
  volumeIconTop: "0vmin", // Top position of the volume icon in the remote
  buttonTextColor: "#FFFFFF", // Color for the text in the keypad

  buttonsTop: ["42%", "47%", "52%", "57%", "62%", "0%"], // Top positions for the rows of buttons in the remote
  buttonsLeft: "94%", // Left position for the remote buttons
  
  blackScreen: true,
  blackScreenWidth: "70%", // Width of the black screen in the TV
  blackScreenHeight: "60%", // Height of the black screen in the TV
  blackScreenLeft: "5%", // Left position of the black screen in the TV
  blackScreenTop: "25%", // Top position of the black screen

  fuzzyScreenWidth: "70%", // Width of the fuzzy screen effect
  fuzzyScreenHeight: "60%", // Height of the fuzzy screen effect
  fuzzyScreenLeft: "5%", // Left position of the fuzzy screen effect
  fuzzyScreenTop: "25%", // Top position of the fuzzy screen effect

  videoPlayerWidth: 0.7, // Width of the video player
  videoPlayerLeft: "8.5%", // Left position of the video player
  videoPlayerTop: "30%", // Top position of the video player

  channelNumberTop: "32%", // Top position of the channel number in the TV
  channelNumberLeft: "10%", // Left position of the channel number in the TV

  volumeTop: "70%",
  volumeLeft: "10%", // Left position of the volume control in the remote
  volumeHeight: "4.5vmin", // Height of the volume control in the remote
  volumeContainerWidth: 0.35, // Width of the volume control container in the remote
  volumeBarLeft: 0.21,
  volumeFontSize: 0.07, // Font size for the volume control text in the remote

};

export const SKIN_SETTINGS_FUTURISTIC = {
  background: "images/futuristic/background3.png",
  //backgroundKeypad: "images/background_keypad_futuristic.png",
  //backgroundKey: "images/background_key_futuristic.png",
  backgroundTV : "images/futuristic/background_TV.png",
  backgroundRemote : "images/futuristic/background_remote.png",
  //backgroundDial: "images/standard/dial_classic.png",
  backgroundButton: "images/futuristic/background_button.png",
  //backgroundLock : "images/futuristic/background_lock_futuristic.png",
  //backgroundDial: "images/futuristic/dial_futuristic.png",

  backgroundMessage: "images/background_message_futuristic.png",




  displayVHS: false,
  fuzzyScreen: false,

  videoPlayerWidth: 0.82, // Width of the video player
  videoPlayerLeft: "4%", // Left position of the video player
  videoPlayerTop: "18%", // Top position of the video player

  channelNumberTop: "20%", // Top position of the channel number in the TV
  channelNumberLeft: "10%", // Left position of the channel number in the TV

  blackScreen: false,

  buttonFontSize: "5vmin", // Font size for the text in the keypad
  soundIconSize: "5vmin", // Size of the sound icon in the keypad
  buttonTextColor: "#FFFFFF", // Color for the text in the keypad

  volumeIconTop: "1vmin", // Top position of the volume icon in the remote

  buttonWidth: 0.08, // Relative width of the buttons in the keypad
  buttonHeight: 0.08, // Relative height of the buttons in the keypad
  buttonsTop: ["25%", "35%", "45%", "55%", "65%", "75%"], // Top positions for the rows of buttons in the remote
  buttonsLeft: "50%", // Left position for the remote buttons
  soundIconColor: "#FFFFFF", // Color for the sound icon in the remote

  volumeTop: "62%",
  volumeLeft: "8%", // Left position of the volume control in the remote


  volumeHeight: "5vmin", // Height of the volume control in the remote
  volumeContainerWidth: 0.6, // Width of the volume control container in the remote
  volumeBarLeft: 0.25,
  volumeFontSize: 0.08,
};

export const ESCAPP_CLIENT_SETTINGS = {
  imagesPath:"./images/",
};

export const MAIN_SCREEN = "MAIN_SCREEN";
export const MESSAGE_SCREEN = "MESSAGE_SCREEN";