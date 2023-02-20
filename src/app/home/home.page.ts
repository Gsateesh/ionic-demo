import { Component } from '@angular/core';
import * as BlinkID from '@microblink/blinkid-capacitor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  async scan() {

    const plugin = new BlinkID.BlinkIDPlugin();

    const blinkIdCombinedRecognizer = new BlinkID.BlinkIdCombinedRecognizer();
    blinkIdCombinedRecognizer.returnFullDocumentImage = true;
    blinkIdCombinedRecognizer.returnFaceImage = true;

    // com.microblink.sample
    const licenseKeys: BlinkID.License = {
      ios: 'sRwAAAENd2Vic2NhbmlkLWlvc9kGskizMGhxOOdXIFCpz6u6QBZ4HrOJNtsoElNwZN1O4/yul/jfPYU73Ls2ZrIARf+NDwQIYFXcBSYtygWMHCGmsJAfq6BmSQsYjKIxVLJB7gTSTBit4HbJkf5cxkk7mYc4/HLJuYZF5YTJWcXb3iErcoi9iEusY+oyyzMwgn63ilC0PwZAqDYLIBdEqQROFZS/q2r9U4Z6RfUL92vcdc4oTrR7U78DiRk=',
      android: 'sRwAAAAQd2Vic2NhbmlkQW5kcm9pZJTtoOtUtoa8vCtSc2AP5DZVYz1n8hbrlzekITWQE9HcGg0Mlt7yUqFaNNCerNyDUn474AqhYNA3kSVIvqJt9gYifN/yILDDWD+nlgE8FCu0Oxe+G0xANIrtmjBhL6ZRqIuiqdv6cK/Hx+cI4pfixfSQw8BeuTMDKRATr1qOvqY9oBwNKOj0M7Rh9RsaLFaRmGystpWZoL0rdnUksZ2FxN7A0yOZ2U+63S0=',
      showTrialLicenseWarning: true
    };

    const scanningResults = await plugin.scanWithCamera(
      new BlinkID.BlinkIdOverlaySettings(),
      new BlinkID.RecognizerCollection([blinkIdCombinedRecognizer]),
      licenseKeys
    );

    if (scanningResults.length === 0) {
      return;
    }

    for (const result of scanningResults) {
      console.log("******************************")
      if (result instanceof BlinkID.BlinkIdCombinedRecognizerResult) {
        console.log(result)
      } else if (result instanceof BlinkID.MrtdCombinedRecognizerResult) {
        console.log(result)
      }
    }
  }

}
