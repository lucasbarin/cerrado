
// Inicializa Locomotive Scroll para smooth scroll elegante
const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true,
    multiplier: 0.8,
    lerp: 0.08,
    smartphone: {
        smooth: false
    },
    tablet: {
        smooth: false
    }
});

// Ajuste automático de sessão quando o scroll parar
let scrollTimeout;
scroll.on('scroll', (args) => {
    clearTimeout(scrollTimeout);
    
    scrollTimeout = setTimeout(() => {
        // Quando o scroll parar, verifica se há uma âncora próxima do topo
        const anchors = document.querySelectorAll('span[id]');
        const threshold = 150; // Distância em pixels para ativar o ajuste
        
        anchors.forEach(anchor => {
            const rect = anchor.getBoundingClientRect();
            const distanceFromTop = rect.top;
            
            // Se o anchor está próximo do topo (positivo ou negativo)
            if (Math.abs(distanceFromTop) <= threshold && Math.abs(distanceFromTop) > 5) {
                scroll.scrollTo(anchor, {
                    offset: 0,
                    duration: 600,
                    easing: [0.25, 0.00, 0.35, 1.00]
                });
            }
        });
    }, 150); // Aguarda 150ms após o último evento de scroll
});

/* trigger when page is ready */
$(document).ready(function (){

    // Video player - trocar placeholder por vídeo ao clicar
    $('#videoContainer').on('click', function() {
        const container = $(this);
        const placeholder = $('#videoPlaceholder');
        const playButton = $('#playButton');
        
        // Remove placeholder e play button
        placeholder.fadeOut(300);
        playButton.fadeOut(300, function() {
            // Cria e insere o elemento de vídeo
            const video = $('<video>', {
                controls: true,
                autoplay: true,
                css: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }
            });
            
            const source = $('<source>', {
                src: 'assets/video/video.mp4',
                type: 'video/mp4'
            });
            
            video.append(source);
            container.append(video);
            
            // Remove o cursor pointer e a área clicável
            container.css({
                'cursor': 'default',
                'pointer-events': 'none'
            });
            
            // Remove o evento de click para evitar reiniciar o vídeo
            container.off('click');
            
            // Atualiza o Locomotive Scroll
            setTimeout(() => scroll.update(), 350);
        });
    });

    // Smooth scroll para âncoras usando Locomotive Scroll
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        const target = $(this.hash);
        if (target.length) {
            // Fecha o menu mobile se estiver aberto
            const navbarCollapse = $('.navbar-collapse');
            if (navbarCollapse.hasClass('show')) {
                navbarCollapse.collapse('hide');
            }
            
            scroll.scrollTo(target[0], {
                offset: 0,
                duration: 1000,
                easing: [0.25, 0.00, 0.35, 1.00]
            });
        }
    });

    // FAQ Accordion
    $('.faq-toggle').on('click', function(e) {
        e.stopPropagation();
        const item = $(this).closest('.faq-item');
        const wasActive = item.hasClass('active');
        
        // Fecha todos os itens
        $('.faq-item').removeClass('active');
        
        // Se não estava ativo, ativa este
        if (!wasActive) {
            item.addClass('active');
        }
        
        // Atualiza Locomotive Scroll após animação
        setTimeout(() => scroll.update(), 350);
    });

    // Também permite clicar na pergunta inteira
    $('.faq-question').on('click', function() {
        $(this).find('.faq-toggle').trigger('click');
    });

    $("a[rel=external]").click(function(){
        window.open(this.href);
        return false;
    });
    
    
  /*
  OWN CAROUSEL
  var owl = $('.owl-carousel');
    owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout: 3000,
    autoplayHoverPause:true,
    nav: true,
    dots: true,
    navText: ["<img src='assets/images/prev@2x.png'>","<img src='assets/images/next@2x.png'>"],
     responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
}); 

*/
    
    
/*
SCROLL REVIEW
var slideUp1 = {
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    viewFactor: 0.5,
    delay: 0
};    
var slideUp2 = {
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    viewFactor: 0.5,
    delay: 100
};    
var slideUp3 = {
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    viewFactor: 0.5,
    delay: 220
};    
var slideUp4 = {
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    viewFactor: 0.5,
    delay: 300
};


ScrollReveal().reveal('.anima1',slideUp1);
ScrollReveal().reveal('.anima2', slideUp2);
ScrollReveal().reveal('.anima3', slideUp3);
ScrollReveal().reveal('.anima4', slideUp4);
*/

/*
SMOOTH SCROLL (scroll to)
var scroll = new SmoothScroll('a[href*="#"]');
*/  
  
/* submenu hover  
function toggleDropdown (e) {
  const _d = $(e.target).closest('.dropdown'),
    _m = $('.dropdown-menu', _d);
  setTimeout(function(){
    const shouldOpen = e.type !== 'click' && _d.is(':hover');
    _m.toggleClass('show', shouldOpen);
    _d.toggleClass('show', shouldOpen);
    $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
  }, e.type === 'mouseleave' ? 300 : 0);
}

$('body')
  .on('mouseenter mouseleave','.dropdown',toggleDropdown)
  .on('click', '.dropdown-menu a', toggleDropdown);
 submenu hover fim */   
    
    

});



	
	/* optional triggers
	
	$(window).load(function() {
		
	});
	
	$(window).resize(function() {
		
	});
	
	*/