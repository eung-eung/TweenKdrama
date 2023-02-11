import { gsap } from "gsap/all";
import $ from 'jquery';
$(document).ready(function () {
    var fields = $('.navigation-item'),
        detailItem = $('.detail-item'),
        backgroundHolder = $('.background-holder'),
        container = $('#container'),
        width = container.width(),
        height = container.height(),
        radius = width / 2.5,
        angle = 0, step = (2 * Math.PI) / fields.length;
    // set active for first each element
    // $('.navigation-item:first-child').addClass("active")
    gsap.to($('.navigation-item:first-child'), 0, {
        autoAlpha: 0
    })
    $('.detail-item:first-child').addClass("active")


    // set right position that circle container
    fields.each(function (index) {
        console.log(index)
        var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2)
        var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2)
        // console.log(x)
        $(this).css({
            left: x + 'px',
            top: y + 'px'
        });

        angle += step
    })

    function doTween(target) {
        var type = "_short"
        // var timeline = new TimelineMax();
        fields.each(function () {
            $(this).removeClass('active');
            if ($(this).index() === $(target).index()) {
                $(this).addClass('active');
            }
        });
        detailItem.each(function () {
            $(this).removeClass('active');
            if ($(this).index() === $(target).index()) {
                $(this).addClass('active');
            }
        });
        console.log(-(target.index() * 360 / fields.length))
        gsap
            // set rotation when click
            .to(container, 0.6, {
                rotation: -(target.index() * 360 / fields.length) + type,
                transformOrigin: "50% " + container.width() / 2 + "px",
            })

        gsap
            .to(backgroundHolder, 0.7, {
                rotation: (target.index() * 360 / fields.length) + type,
            })
        gsap.to($('.navigation-item:first-child'), 0, {
            autoAlpha: 1
        })
    }

    fields.on('click', function () { doTween($(this)); })

})
