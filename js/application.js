// on load functions
window.onload = function() {
    $('body').removeClass("loading").addClass("loaded");
    // reveal qr code
    $('a[href="getQRcode"]').on('click', function(e){
        e.preventDefault();
        var self = $(this);
        self.next('img').fadeIn(3000);//.removeClass('hidden');
        self.remove();
    });
    // set up contact info
    
    $('footer').on('click', 'a', function(e){
        e.preventDefault();
        var self = $(this),contactLabel,spanElement,text,username = "dondmcg";
        targetElement = self.next('.contact-target');
        contactLabel = self.find('.contact-label').html();
        switch(contactLabel) {
            case 'email':
                text = ' <a href="mailto:Don@mcgrathdesigns.com?Subject=From%20the%20Website%20of%20Donald%20McGrath" target="new">Don@mcgrathdesigns.com</a>';
                break;
            case 'cell phone':
                text = ' (text enabled) (646) 734-8448';
                break;
            case 'mailing address':
                text = ' Cutchogue N.Y. 11935';
                break;
            case 'google plus':
                text = ' add me using dondmcg@gmail';
                break;
            case 'aim':
                text = ' username: ' + username;
                break;
            case 'skype':
                text = ' username: ' + username;
                break;
            case 'screenhero':
                text = ' username: ' + username;
                break;
            default:
                text = 'This element has not been assigned a value';
        };
        targetElement.html(targetElement.html() === text ? '' : text )
    });
};
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').on('click', function(e) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        e.preventDefault();
    });
});