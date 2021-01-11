$(window).on('load', function () { /* barcha rasmlar yuklanganda ichki funktsiyalar yonadi */

    function parallax() {
        $('.parallax__image').each(function () { /* .parallax__image bilan har bir blok ichida */
            const img = $(this).find('img') /* rasmni img yorlig'i bilan topamiz */
            const windowTop = $(window).scrollTop() /* sahifaning yuqori qismidan qancha aylanayotganini hisoblaymiz */
            const windowHeight = $(window).height() /* brauzer oynasining balandligini hisoblaymiz */
            const windowBottom = $(window).scrollTop() + windowHeight /* brauzer oynasining pastki qismini hisoblaymiz */
            const imageTop = $(this).offset().top /* rasm bilan sahifaning yuqori qismidan blokning yuqori qismigacha bo'lgan masofani hisoblaymiz  */
            const imageHeight = $(this).height() /* blokning balandligini rasm bilan hisoblaymiz */
            const imageBottom = $(this).offset().top + imageHeight /* rasm blokining pastki qismini hisoblaymiz */

            if (!(imageTop > windowBottom || imageBottom < windowTop)) { /* rasm bilan blok brauzer oynasining ko'rinadigan qismida joylashganligini tekshiramiz */
                const sub = imageTop - windowTop /* blok bilan rasm va brauzer oynasining yuqori qismi orasidagi farqni hisoblaymiz */
                if (sub >= 0) { /* agar rasmning yuqori qismi brauzer oynasining yuqori qismida joylashgan bo'lsa */
                    img.css({ /* tasvirga dinamik ichki xususiyatlarni tayinlaymiz */
                        transform: `scaleX(${(sub / 2000) + 1})` /* pastki qismga qarab siljish paytida rasm kichrayadi (scaleX) */
                    })
                } else { /* aks holda rasmning yuqori qismi brauzer oynasining yuqori qismidan yuqori bo'lsa */
                    img.css({
                        transform: `scaleX(1) translateY(${(-sub / 2)}px)` /* scaleX-ni 1 ga o'rnatamiz va pastki qismga qarab rasmni pastga siljitamiz */
                    })
                }
            }
        })
    }
    parallax() /* funktsiyani sahifani yuklashda ishlatamiz */
    $(window).scroll(function () {
        parallax() /* sahifani siljitish paytida funktsiyani ishga tushiramiz */
    })
    $(window).resize(function () {
        parallax() /* brauzer oynasi o'lchamlari o'zgartirilganda funktsiyani ishga tushiramiz */
    })
})
