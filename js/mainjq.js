      // 
      //    nav Menu-toggle button
      //

      $(document).ready(function () {
          $(".menu-icon").on("click", function () {
              $("nav ul").toggleClass("showing");
          });
      });





      //
      //    SMOOTH SCROLL LINK
      //

      $(document).ready(function () {
          // Add smooth scrolling to all links
          $("a").on('click', function (event) {

              // Make sure this.hash has a value before overriding default behavior
              if (this.hash !== "") {
                  // Prevent default anchor click behavior
                  event.preventDefault();

                  // Store hash
                  var hash = this.hash;

                  // Using jQuery's animate() method to add smooth page scroll
                  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                  $('html, body').animate({
                      scrollTop: $(hash).offset().top
                  }, 300, function () {

                      // Add hash (#) to URL when done scrolling (default click behavior)
                      window.location.hash = hash;
                  });
              } // End if
          });
      });





      //
      //    SCROLL TO TOP OF PAGE
      //

      $(window).scroll(function () {
          if ($(this).scrollTop() > 150) {
              $('#scrl-top:hidden').stop(true, true).fadeIn();
          } else {
              $('#scrl-top').stop(true, true).fadeOut();
          }
      });




      
    //
    // Terms of use checkmark on download pages
    //

    $(document).ready(function () {
        var the_terms = $("#the-terms");

        the_terms.click(function () {
            if ($(this).is(":checked")) {
                $("#downloadBtn").removeAttr("disabled");
            } else {
                $("#downloadBtn").attr("disabled", "disabled");
            }
        });
    });





      //
      //    IMAGE COMPARISON SLIDER
      //

      jQuery(document).ready(function ($) {
          var dragging = false,
              scrolling = false,
              resizing = false;
          //cache jQuery objects
          var imageComparisonContainers = $('.cd-image-container');
          //check if the .cd-image-container is in the viewport 
          //if yes, animate it
          checkPosition(imageComparisonContainers);
          $(window).on('scroll', function () {
              if (!scrolling) {
                  scrolling = true;
                  (!window.requestAnimationFrame) ?
                  setTimeout(function () {
                      checkPosition(imageComparisonContainers);
                  }, 100): requestAnimationFrame(function () {
                      checkPosition(imageComparisonContainers);
                  });
              }
          });

          //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
          imageComparisonContainers.each(function () {
              var actual = $(this);
              drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
          });

          //upadate images label visibility
          $(window).on('resize', function () {
              if (!resizing) {
                  resizing = true;
                  (!window.requestAnimationFrame) ?
                  setTimeout(function () {
                      checkLabel(imageComparisonContainers);
                  }, 100): requestAnimationFrame(function () {
                      checkLabel(imageComparisonContainers);
                  });
              }
          });

          function checkPosition(container) {
              container.each(function () {
                  var actualContainer = $(this);
                  if ($(window).scrollTop() + $(window).height() * 0.5 > actualContainer.offset().top) {
                      actualContainer.addClass('is-visible');
                  }
              });

              scrolling = false;
          }

          function checkLabel(container) {
              container.each(function () {
                  var actual = $(this);
                  updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
                  updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
              });

              resizing = false;
          }

          //draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
          function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
              dragElement.on("mousedown vmousedown", function (e) {
                  dragElement.addClass('draggable');
                  resizeElement.addClass('resizable');

                  var dragWidth = dragElement.outerWidth(),
                      xPosition = dragElement.offset().left + dragWidth - e.pageX,
                      containerOffset = container.offset().left,
                      containerWidth = container.outerWidth(),
                      minLeft = containerOffset + 10,
                      maxLeft = containerOffset + containerWidth - dragWidth - 10;

                  dragElement.parents().on("mousemove vmousemove", function (e) {
                      if (!dragging) {
                          dragging = true;
                          (!window.requestAnimationFrame) ?
                          setTimeout(function () {
                              animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);
                          }, 100): requestAnimationFrame(function () {
                              animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);
                          });
                      }
                  }).on("mouseup vmouseup", function (e) {
                      dragElement.removeClass('draggable');
                      resizeElement.removeClass('resizable');
                  });
                  e.preventDefault();
              }).on("mouseup vmouseup", function (e) {
                  dragElement.removeClass('draggable');
                  resizeElement.removeClass('resizable');
              });
          }

          function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement) {
              var leftValue = e.pageX + xPosition - dragWidth;
              //constrain the draggable element to move inside his container
              if (leftValue < minLeft) {
                  leftValue = minLeft;
              } else if (leftValue > maxLeft) {
                  leftValue = maxLeft;
              }

              var widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';

              $('.draggable').css('left', widthValue).on("mouseup vmouseup", function () {
                  $(this).removeClass('draggable');
                  resizeElement.removeClass('resizable');
              });

              $('.resizable').css('width', widthValue);

              updateLabel(labelResizeElement, resizeElement, 'left');
              updateLabel(labelContainer, resizeElement, 'right');
              dragging = false;
          }

          function updateLabel(label, resizeElement, position) {
              if (position == 'left') {
                  (label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth()) ? label.removeClass('is-hidden'): label.addClass('is-hidden');
              } else {
                  (label.offset().left > resizeElement.offset().left + resizeElement.outerWidth()) ? label.removeClass('is-hidden'): label.addClass('is-hidden');
              }
          }
      });