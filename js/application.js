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
        var self = $(this),contactLabel,spanElement,text,username = "dondmcg",myemail = "don@mcgrathdesigns.com",mailhref,telhref;
        targetElement = self.next('.contact-target');
        contactLabel = self.find('.contact-label').html();
        switch(contactLabel) {
            case 'email':
                text = ' <a id="myemaillink" href="#" target="new"">Don@mcgrathdesigns.com</a>';
                break;
            case 'cell phone':
                text = ' (text enabled) <a id="myphonelink" href="#">646-734-8448</a>';
                break;
            case 'mailing address':
                text = ' Cutchogue N.Y. 11935';
                break;
            case 'google hangout':
                text = ' add me using dondmcg@gmail';
                break;
            case 'sms/imessage':
                text = ' contact me using email: ' + myemail;
                break;
            case 'skype':
                text = ' username: ' + username;
                break;
            case 'screenhero':
                text = ' username: ' + myemail;
                break;
            default:
                text = 'This element has not been assigned a value';
        };
        targetElement.html(targetElement.html() === text ? '' : text )
    });
    $(document).on("click", "#myemaillink", function(e){ 
        e.preventDefault();
        window.location='mailto:Don@mcgrathdesigns.com?Subject=From%20the%20Website%20of%20Donald%20McGrath';
        return false;
    });
    $(document).on("click", "#myphonelink", function(e){ 
        e.preventDefault();
        window.location='tel:646-734-8448';
        return false;
    });
    $(document).on("click", "#mychatlink", function(e){ 
        e.preventDefault();
        var usr;
        usr = navigator.platform.match(/(Mac)/i)?'imessage':'sms';
        window.location= usr + ':16467348448';
        return false;
    });
    $(document).on("click", "#myskypelink", function(e){ 
        e.preventDefault();
        window.location='skype:dondmcg?call';
        return false;
    });
    // open external html demo modal
    $('#demomodal').on("show.bs.modal", function(e){ 
        var link = $(e.relatedTarget), self=$(this), description;
        description = link.attr('data-description');
        self.find(".modal-body").load(link.attr("href"));
        self.find(".modal-title").html(link.attr("data-title"));
        if(description){
            self.find(".modal-title").after("<h3 class='modal-description'>" + description + "</h3>");
        }
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