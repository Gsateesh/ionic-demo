# POC for MicroBlink

Prerequisites

 > Android studio ( Create Emulator )

 > Install latest node LTS

 > Install Angular latest CLI "npm install -g @angular/cli"

 > Install Ionic CLI "npm i -g @ionic/cli"



1. Run "npm i"

Once packages are installed please commands below to see the app in android emulator.

ionic build
ionic capacitor add android
ionic capacitor copy android
ionic capacitor open android
ionic capacitor run android -l --external ( This will live reload the app but it doesn't work for me, so I went to android studio and clicked on run button  )
