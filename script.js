gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 1,
      delay: 3,
    }
  );
  
  gsap.fromTo(
    ".logo-name",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.5,
    }
  );
  function changeLanguage(language) {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach((element) => {
            const key = element.getAttribute('data-lang');
            element.innerHTML = language[key] || element.innerHTML;
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        const languageSelect = document.getElementById('languageSelect');

        languageSelect.addEventListener('change', function () {
            const selectedLanguage = languageSelect.value;

            if (selectedLanguage === 'en') {
                changeLanguage(englishLanguage);
            } else if (selectedLanguage === 'fr') {
                changeLanguage(frenchLanguage);
            }
        });
    });

    