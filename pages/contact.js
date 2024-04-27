$(".form")
    .find("input, textarea")
    .on("keyup blur focus", function(e) {
        var $this = $(this),
            label = $this.prev("label");

        if (e.type === "keyup") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.addClass("active highlight");
            }
        } else if (e.type === "blur") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.removeClass("highlight");
            }
        } else if (e.type === "focus") {
            if ($this.val() === "") {
                label.removeClass("highlight");
            } else if ($this.val() !== "") {
                label.addClass("highlight");
            }
        }
    });

$(".tab a").on("click", function(e) {
    e.preventDefault();

    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");

    target = $(this).attr("href");

    $(".tab-content > div").not(target).hide();

    $(target).fadeIn(600);
});

//Form

const scriptURL = 'https://script.google.com/macros/s/AKfycbyFtaeAeCOi04pvu_eJ1qYr4RsHLvkN2p18kDuraKVLI7TOaXzBrud2QA7lQtU5pA/exec'

const form = document.forms['form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert('Thank you! Your form is submitted successfully.'))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})