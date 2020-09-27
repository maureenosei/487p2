// JQUERY BURNING WORDS

$(document).ready(function () {
  $(".burning").burn(); // Burning for the title
  $(".burning2").burn(); // Customized CSS for the drop cap on the first paragraph
});

// SLIT SLIDER JS

$(function () {
  var Page = (function () {
    var $navArrows = $("#nav-arrows"),
      $nav = $("#nav-dots > span"),
      slitslider = $("#slider").slitslider({
        onBeforeChange: function (slide, pos) {
          $nav.removeClass("nav-dot-current");
          $nav.eq(pos).addClass("nav-dot-current");
        },
      }),
      init = function () {
        initEvents();
      },
      initEvents = function () {
        // add navigation events
        $navArrows.children(":last").on("click", function () {
          slitslider.next();
          return false;
        });

        $navArrows.children(":first").on("click", function () {
          slitslider.previous();
          return false;
        });

        $nav.each(function (i) {
          $(this).on("click", function (event) {
            var $dot = $(this);

            if (!slitslider.isActive()) {
              $nav.removeClass("nav-dot-current");
              $dot.addClass("nav-dot-current");
            }

            slitslider.jump(i + 1);
            return false;
          });
        });
      };

    return { init: init };
  })();

  Page.init();
});

// MARKER ANIMATION JQUERY

$(function () {
  $(".marker-animation").markerAnimation({
    color: "rgba(255, 68, 0, 0.444)", //Background Color

    padding_bottom: ".8em", // Highlight Position

    thickness: ".6em", //Highlight Thickness

    font_weight: "bold", //Font Weight

    // Enable Stripes?
    stripe: false,
    stripe_thickness: 2,

    delay: ".8s", //Highlight Delay

    duration: "3s", //Highlight Duration

    repeat: true, //Repeat Animation?
  });
});

// JQUERY JS

$("#quiz").quiz({
  counterFormat: "Question %current of %total",
  questions: [
    {
      q: "What element is NOT a key element in the fire triangle?",
      options: ["CO2", "Fuel", "Oxegen", "A Heat Source"],
      correctIndex: 0,
      correctResponse:
        "Correct! Carbon dioxide does not make up the fire triangle.",
      incorrectResponse:
        "Wrong. This is one of the key elements that make up the fire triangle...",
    },
    {
      q:
        "Which control method could also be referred to as 'fighting fire with fire'?",
      options: ["Air Tankers", "Backfiring", "Flame Throwing"],
      correctIndex: 1,
      correctResponse: "Right! You're on fire!",
      incorrectResponse:
        "Wrong. Air Tankers use water and/or fire retardant to fight the flames. Hopefully you didn't choose flame throwing...",
    },
    {
      q: "Most wildfires are a result of _______________?",
      options: ["Lightning", "Animals", "Human causes", "None of the above"],
      correctIndex: 2,
      correctResponse:
        "Yes. 85 to 90 percent result from human causes, including arson, campfires, and discarded cigarettes.",
      incorrectResponse:
        "No. 85 to 90 percent result from human causes, including arson, campfires, and discarded cigarettes.",
    },
    {
      q: "How many crew members are in a Hotshot?",
      options: ["20 - 22", "5 - 10"],
      correctIndex: 0,
      correctResponse:
        "Correct! A lot of people are needed to fight massive wildfires!",
      incorrectResponse: "Wrong. This is not nearly enough people.",
    },
  ],
});
