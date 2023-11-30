const AD_MODULE_TARGET_CLASS = 'ytp-ad-module';
const SKIP_AD_BUTTON_TARGET_CLASS = 'ytp-ad-skip-button';
const SKIP_AD_BUTTON_MODERN_TARGET_CLASS = 'ytp-ad-skip-button-modern';

const observerConfig = {
  subtree: true,
  childList: true,
  attributes: true,
};

function startObserving() {
  const observerTarget = document.getElementsByClassName(AD_MODULE_TARGET_CLASS)[0];

  observer = new MutationObserver(function(mutations, obs) {
    mutations.forEach(function(mutation) {
      const skipAdButton = document.getElementsByClassName(SKIP_AD_BUTTON_TARGET_CLASS)[0];
      const skipAdButtonModern = document.getElementsByClassName(SKIP_AD_BUTTON_MODERN_TARGET_CLASS)[0];

      if (skipAdButton) {
        skipAdButton.click();
      }

      if (skipAdButtonModern) {
        skipAdButtonModern.click();
      }
    })
  });

  if (observerTarget) {
    observer.observe(observerTarget, observerConfig);
  }
}

startObserving();

