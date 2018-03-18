/**Transparent and Sticky Header**/

;(function( $ ) {
	var $window = $(window),
		$header = jQuery( '#header' ),
		$headerInnerWrap = jQuery( '#header-inner-wrap' ),
		$headerWrap = jQuery( '#header-wrap' ),
		$main = jQuery( '#main' ),
		$body = jQuery( 'body' ),
		update_transparent,
		didScroll = false;
    $.fn.Transparent = function() {
		var $this = $(this),
			
		update_transparent = function() {
			var $border_length = 2;
			if( $body.hasClass( 'be-themes-layout-layout-border-header-top' ) ) {
				$border_length = 1;
			}
            if( $main.hasClass( 'layout-border-header-top' ) ) {
            	var $header_inner_height = $headerInnerWrap.innerHeight();
            	$header.height($header_inner_height);
				$headerInnerWrap.addClass('no-transparent').removeClass('transparent');
				jQuery('.style2-header-search-widget').css('padding-top', $header_inner_height+jQuery('#wpadminbar').height());
				jQuery('.overlay-menu-close, .header-search-form-close').css('top', $header_inner_height);
			}else if( ( $body.hasClass( 'transparent-sticky' ) || $body.hasClass( 'sticky-header' ) ) && !$body.hasClass( 'perspectiveview' ) && !$body.hasClass( 'page-stack-top-opened' ) ) {
				var animatePosition = window.innerHeight;
				if( animatePosition <= $window.scrollTop() ) {
					if( $body.hasClass( 'sticky-header' ) ) {
						$header.height( Number( $headerWrap.attr( 'data-default-height' ) ) + Number( jQuery( '#header-top-bar-wrap' ).innerHeight() ) + Number( jQuery( '#header-bottom-bar' ).innerHeight() ) );
					}
					$headerInnerWrap.addClass( 'no-transparent' ).removeClass( 'transparent' );
					setTimeout( function() {

						$headerInnerWrap.addClass( 'top-animate' );
						$body.addClass( 'be-sticky-active' );

					}, 10 );
				}else{
					$headerInnerWrap.removeClass( 'no-transparent' ).removeClass( 'top-animate' );
					if( $body.hasClass( 'sticky-header' ) ) {
						$header.height( 'auto' );
					}else{
						$headerInnerWrap.addClass( 'transparent' );
					}
					$body.removeClass( 'be-sticky-active' );

				}
            	// if(jQuery('body').hasClass('header-transparent')) {
				// 	var $animate_position =  ( jQuery('.header-hero-section').length > 0 ) ? ( (Number( jQuery('.header-hero-section').offset().top ) + Number( jQuery('.header-hero-section').height() ) ) - ( Number( jQuery('#wpadminbar').innerHeight() ) + Number( jQuery('#header-wrap').attr('data-default-height') ) + jQuery('#header-bottom-bar').innerHeight() + Number( jQuery('#header-top-bar-wrap').innerHeight() ) ) ) : 0;
				// 	if($animate_position <= 0) {
				// 		$animate_position = jQuery('#header-inner-wrap').height();
				// 	}
				// 	if ( jQuery('#header-inner-wrap').hasClass( 'no-transparent' ) && ( jQuery( 'body' ).hasClass( 'perspectiveview' ) || jQuery( 'body' ).hasClass( 'page-stack-top-opened' ) ) ){
				// 		//Do Nothing. Let the classes stay as they are.
				// 	} else if($animate_position <= jQuery(window).scrollTop() && jQuery('body').hasClass('transparent-sticky')) {
				// 		jQuery('#header-inner-wrap').addClass('no-transparent').removeClass('transparent');
				// 		setTimeout(function() {
				// 			jQuery('#header-inner-wrap').addClass('top-animate');
				// 		}, 10);
				// 	} else {
				// 		jQuery('#header-inner-wrap').removeClass('no-transparent').addClass('transparent').delay(20000).removeClass('top-animate');
				// 	}
				// }
				// if (jQuery('body').hasClass('sticky-header')) {
	            //    	var $animate_position = ((Number(jQuery('#header').offset().top)+Number(jQuery('#header-wrap').attr('data-default-height'))+Number(jQuery('#header-top-bar-wrap').innerHeight())+Number(jQuery('#header-bottom-bar').innerHeight()))-(jQuery('#wpadminbar').height()+jQuery('.layout-box-bottom').innerHeight()));
				// 	if($animate_position <= 0) {
				// 		$animate_position = (Number(jQuery('#header-wrap').attr('data-default-height'))+Number(jQuery('#header-top-bar-wrap').innerHeight())+Number(jQuery('#header-bottom-bar').innerHeight()));
				// 	}
				// 	if ( ( jQuery( 'body' ).hasClass( 'perspectiveview' ) || jQuery( 'body' ).hasClass( 'page-stack-top-opened' ) ) ){
				// 		//Do Nothing. Let the classes stay as they are.
				// 	} else if($animate_position <= jQuery(window).scrollTop() && jQuery('body').hasClass('sticky-header')) {
				// 		jQuery('#header').height(Number(jQuery('#header-wrap').attr('data-default-height'))+Number(jQuery('#header-top-bar-wrap').innerHeight())+Number(jQuery('#header-bottom-bar').innerHeight()));
				// 		jQuery('#header-inner-wrap').addClass('no-transparent').removeClass('transparent');
	            //         setTimeout(function () {
	            //             jQuery('#header-inner-wrap').addClass('top-animate');
	            //         }, 10);
				// 	} else {
				// 		jQuery('#header-inner-wrap').removeClass('no-transparent').delay(20000).removeClass('top-animate');
				// 		jQuery('#header').height('auto');
				// 		// setTimeout( function() { 
				// 		// 	jQuery( '#header' ).css( { height : '142px', transition : 'height 300ms ease' } );
				// 		// }, 20000);
				// 	}
	            // }
            }
		}
		$window.on('scroll', function(){
			didScroll = true;
		});

		setInterval(function(){
			if( didScroll ){
				didScroll = false;
				update_transparent();
			}
		},250);
		
		$window.on('resize', update_transparent);
		update_transparent();
    };
}( jQuery ));