'use strict';

let swRegistration = null;

function showNotificatiion() {
  console.log('try Show');
  Notification.requestPermission().then(function(result) {
    if (result === 'granted') {
      console.log('Permission granted');
      swRegistration.showNotification('Test message', {
        body: 'Test body', 
        actions: [{
          action: 'yes-action',
          title: 'yes',
        }, {
          action: 'no-action',
          title: 'no',
        }]
      }).then(() => {
        console.log('Shown');
      }, (e) => {
        console.log('Exception', e);
      });
    }
  });
}

if ('serviceWorker' in navigator) {
  console.log('Service Worker is supported');
  navigator.serviceWorker.register('sw.js').then(function(swReg) {
    console.log('Service Worker is registered', swReg);
    swRegistration = swReg;
  }, function(error) {
    console.error('Service Worker Error', error);
  });
}
