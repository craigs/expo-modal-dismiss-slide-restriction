There are two ways for displaying modals with expo router. The first is with a modal screen, the other is as an inline modal.

There is a difference in behaviour when sliding down to dismiss the inline modal when compared to the routable screen. The inline modal will only scroll down a certain way whereas the routable screen scrolls the full length of the screen.

This repro reproduces this behaviour.

## Demonstration

https://github.com/craigs/expo-modal-dismiss-slide-restriction/assets/229310/e08ada3a-b8a5-4f34-acbf-bf1d69230812

