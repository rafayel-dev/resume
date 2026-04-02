(function ($) {
  "use strict";
  var bostami = {
    m: function (e) {
      bostami.d();
      bostami.methods();
    },

    d: function (e) {
      ((this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html")));
    },
    methods: function (e) {
      bostami.handleTheme();
      bostami.darkToLightMobile();
      bostami.preloader_svg();
      bostami.mobileMenu();
      bostami.istopeActivation();
      bostami.preloader();
      bostami.slickActive();
      bostami.contactForm();
    },

    // mobile view dark to light function

    handleTheme: function () {
      $(window).on("load", function () {
        const themeToggleDarkIcon = document.getElementById(
          "theme-toggle-dark-icon",
        );
        const themeToggleLightIcon = document.getElementById(
          "theme-toggle-light-icon",
        );
        const themeToggleBtn = document.getElementById("theme-toggle");
        const darkButtons = [
          document.getElementById("dark"),
          document.getElementById("dark1"),
        ];
        const lightButtons = [
          document.getElementById("light"),
          document.getElementById("light1"),
        ];

        const updateTheme = (isDark) => {
          if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
            themeToggleLightIcon?.classList.remove("hidden");
            themeToggleDarkIcon?.classList.add("hidden");
          } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
            themeToggleDarkIcon?.classList.remove("hidden");
            themeToggleLightIcon?.classList.add("hidden");
          }
        };

        if (
          localStorage.getItem("color-theme") === "dark" ||
          (!("color-theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
          themeToggleLightIcon?.classList?.remove("hidden");
        } else {
          themeToggleDarkIcon?.classList?.remove("hidden");
        }

        themeToggleBtn?.addEventListener("click", () =>
          updateTheme(!document.documentElement.classList.contains("dark")),
        );
        darkButtons.forEach((btn) =>
          btn?.addEventListener("click", () => updateTheme(true)),
        );
        lightButtons.forEach((btn) =>
          btn?.addEventListener("click", () => updateTheme(false)),
        );
      });
    },

    // preloader  function
    preloader: function () {
      $(window).on("load", function () {
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
          navigator.userAgent,
        )
          ? true
          : false;
        var preloader = $("#preloader");

        if (!isMobile) {
          setTimeout(function () {
            preloader.addClass("preloaded");
          }, 800);
          setTimeout(function () {
            preloader.remove();
          }, 2000);
        } else {
          preloader.remove();
        }
      });
    },

    preloader_svg: function () {
      $(window).on("load", function () {
        jQuery("img.svg").each(function () {
          var jQueryimg = jQuery(this);
          var imgClass = jQueryimg.attr("class");
          var imgURL = jQueryimg.attr("src");

          jQuery.get(
            imgURL,
            function (data) {
              // Get the SVG tag, ignore the rest
              var jQuerysvg = jQuery(data).find("svg");

              // Add replaced image's classes to the new SVG
              if (typeof imgClass !== "undefined") {
                jQuerysvg = jQuerysvg.attr("class", imgClass + " replaced-svg");
              }

              // Remove any invalid XML tags as per http://validator.w3.org
              jQuerysvg = jQuerysvg.removeAttr("xmlns:a");

              // Replace image with new SVG
              jQueryimg.replaceWith(jQuerysvg);
            },
            "xml",
          );
        });
      });
    },

    // moblie method toggle button function

    mobileMenu: function () {
      $(window).on("load", function () {
        // menu toggle button
        const menuOpen = document.getElementById("menu-toggle-open-icon");
        const menuClose = document.getElementById("menu-toggle-close-icon");
        const navbar = document.getElementById("navbar");
        const menuToggleBtnTwo = document.getElementById("menu-toggle-two");
        const menuToggleBtn = document.getElementById("menu-toggle");

        menuToggleBtn?.addEventListener("click", () => {
          navbar?.classList.toggle("hidden");
          menuOpen?.classList.toggle("hidden");
          menuClose?.classList.toggle("hidden");
        });
        menuToggleBtnTwo?.addEventListener("click", () => {
          navbar?.classList.toggle("hidden");
          menuOpen?.classList.toggle("hidden");
          menuClose?.classList.toggle("hidden");
        });
      });
    },

    // set dark theme for home one

    // set light theme for home one

    // set dark theme for home two

    // set light theme for home two

    // dark to light function for mobile devices

    darkToLightMobile: function () {
      $(window).on("load", function () {
        var themeToggleDarkIconMobile = document.getElementById(
          "theme-toggle-dark-icon-mobile",
        );
        var themeToggleLightIconMobile = document.getElementById(
          "theme-toggle-light-icon-mobile",
        );
        var themeToggleBtnMobile = document.getElementById(
          "theme-toggle-mobile",
        );
        // Change the icons inside the button based on previous settings
        if (
          localStorage.getItem("color-theme") === "dark" ||
          (!("color-theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
          themeToggleLightIconMobile?.classList?.remove("hidden");
        } else {
          themeToggleDarkIconMobile?.classList?.remove("hidden");
        }
        themeToggleBtnMobile?.addEventListener("click", function () {
          // toggle icons inside button
          themeToggleDarkIconMobile.classList.toggle("hidden");
          themeToggleLightIconMobile.classList.toggle("hidden");

          // if set via local storage previously
          if (localStorage.getItem("color-theme")) {
            if (localStorage.getItem("color-theme") === "light") {
              document.documentElement.classList.add("dark");
              localStorage.setItem("color-theme", "dark");
            } else {
              document.documentElement.classList.remove("dark");
              localStorage.setItem("color-theme", "light");
            }

            // if NOT set via local storage previously
          } else {
            if (document.documentElement.classList.contains("dark")) {
              document.documentElement.classList.remove("dark");
              localStorage.setItem("color-theme", "light");
            } else {
              document.documentElement.classList.add("dark");
              localStorage.setItem("color-theme", "dark");
            }
          }
        });
      });
    },

    // slick slider active function

    slickActive: function () {
      if ($(".slickOne").length !== 0) {
        $(".slickOne").slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: false,
          arrows: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ],
        });
      }
      if ($(".slickTwo").length !== 0) {
        $(".slickTwo").slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: false,
          arrows: false,

          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ],
        });
      }
    },

    istopeActivation: function () {
      // ----------------------------- isotop gallery

      $(window).on("load", function () {
        if ($("#isotop-gallery-wrapper").length) {
          var $grid = $("#isotop-gallery-wrapper").isotope({
            // options
            itemSelector: ".isotop-item",
            percentPosition: true,
            masonry: {
              // use element for option
              columnWidth: ".grid-sizer",
            },
          });

          // filter items on button click
          $(".isotop-menu-wrapper").on("click", "li", function () {
            var filterValue = $(this).attr("data-filter");
            $grid.isotope({ filter: filterValue });
          });

          // change is-checked class on buttons
          $(".isotop-menu-wrapper").each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on("click", "li", function () {
              $buttonGroup.find(".is-checked").removeClass("is-checked");
              $(this).addClass("is-checked");
            });
          });
        }
      });
    },

    contactForm: function () {
      const form = document.querySelector(
        'form[action^="https://formspree.io/"]',
      );
      if (!form) return;

      form.addEventListener("submit", async function (event) {
        event.preventDefault();
        const status = document.querySelector(".returnmessage");
        const emptyNotice = document.querySelector(".empty_notice");
        const data = new FormData(event.target);

        // Basic validation
        let isValid = true;
        form.querySelectorAll("[required]").forEach((input) => {
          if (!input.value.trim()) isValid = false;
        });

        if (!isValid) {
          emptyNotice.style.display = "block";
          setTimeout(() => {
            emptyNotice.style.display = "none";
          }, 4000);
          return;
        }

        try {
          const response = await fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
              Accept: "application/json",
            },
          });

          if (response.ok) {
            status.innerHTML = status.getAttribute("data-success");
            status.style.display = "block";
            form.reset();
            setTimeout(() => {
              status.style.display = "none";
            }, 6000);
          } else {
            const result = await response.json();
            status.innerHTML = result.errors
              ? result.errors.map((error) => error.message).join(", ")
              : "Oops! There was a problem submitting your form";
            status.style.display = "block";
          }
        } catch (error) {
          status.innerHTML = "Oops! There was a problem submitting your form";
          status.style.display = "block";
        }
      });
    },

    // slick slider active function
  };
  bostami.m();
})(jQuery, window);
