# Webex-beep-removal
My first and best attempt of creating a filter to filter annoying beeps, whenever someone joins or leaves a Cisco Webex meeting, on-the-fly!

## Usage
1. Join a meeting from your browser (tested in Firefox and Chrome)
2. Open _DevTools_ (`F12` on your keyboard)
3. Switch to the _Console_ tab of DevTools
4. Copy the code from https://raw.githubusercontent.com/zznidar/Webex-beep-removal/main/code.js
5. Paste it into the Console, apply with `Enter`
6. Migrainelessly enjoy the meeting with beeps greatly reduced!

## FAQ
### Why are the beeps not completely removed?
Fortunately for everyone who would not like to miss anyone joining or leaving a meeting, Cisco have decided to use some wide-frequency chirp instead of a nice sinusoidal tone. Unfortunately for us, this means that the frequency of the beep cannot be easily removed as the beep is spread across the whole audio spectrum. 
You can play around with it by changing, adding or removing _frequencies_ at the top of the code before applying the filter. Changing the _kju_ (Q-value) will yield different results as well.

### The audio is too quiet, can I make it louder?
Yes! As the filter may remove some speech frequencies as well, that means the output sounds quieter. Fear not though! To make up for it, a gain node is added at the end. Should you want to increase the volume even more, increase the _gaining_ at the top of the code before applying the filter.

### I have messed up! Can I remove the filter without refreshing the page?
It is possible. Copy code from https://raw.githubusercontent.com/zznidar/Webex-beep-removal/main/remove.js and paste it into the Console, apply with `Enter`. (Re-applying the filter will require you to refresh the page or play around with the code, though.)
