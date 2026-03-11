
// Ativa scroll suave nativo
document.documentElement.style.scrollBehavior = 'smooth';

// Loading Screen - Aguarda carregamento completo
window.addEventListener('load', function() {
    const loadingOverlay = document.getElementById('loading-overlay');
    
    // Aguarda mínimo de 5.5 segundos para exibir pelo menos um loop completo da animação
    setTimeout(function() {
        // Remove o loading overlay com fade out
        loadingOverlay.classList.add('hidden');
        
        // Inicializa AOS após remover loading
        setTimeout(function() {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: false,
                mirror: false,
                offset: 100,
                anchorPlacement: 'top-bottom',
                disable: false,
            });
            
            // Força refresh do AOS para capturar elementos já visíveis
            AOS.refresh();
        }, 300); // Aguarda transição do loading terminar
    }, 3500); // Tempo mínimo de loading (5.5 segundos = 1 loop completo da animação)
});

// Ajuste automático quando o scroll parar próximo de uma seção
let scrollTimeout;
window.addEventListener('scroll', function() {
    // Limpa o timeout anterior
    clearTimeout(scrollTimeout);
    
    // Define um novo timeout - será executado quando o scroll parar
    scrollTimeout = setTimeout(function() {
        // Quando o scroll parar, verifica se há uma âncora próxima do topo
        const anchors = document.querySelectorAll('span[id]');
        const threshold = 150; // Distância em pixels para ativar o ajuste
        
        anchors.forEach(function(anchor) {
            const rect = anchor.getBoundingClientRect();
            const distanceFromTop = rect.top;
            
            // Se o anchor está próximo do topo (positivo ou negativo)
            if (Math.abs(distanceFromTop) <= threshold && Math.abs(distanceFromTop) > 5) {
                // Ajusta o scroll para a âncora
                anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
            
            // Remove o cursor pointer
            container.css('cursor', 'default');
            
            // Remove o evento de click do container para evitar reiniciar o vídeo
            container.off('click');
        });
    });

    // Smooth scroll para âncoras
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        const target = $(this.hash);
        if (target.length) {
            // Fecha o menu mobile se estiver aberto
            const navbarCollapse = $('.navbar-collapse');
            if (navbarCollapse.hasClass('show')) {
                navbarCollapse.collapse('hide');
            }
            
            // Scroll nativo suave
            target[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
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