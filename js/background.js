$(document).ready(function() {
	$('#order-history .description').append('<button id="hesapla" class="ys-btn ys-btn-default hesapla-buton">Yemek Sepeti için ne kadar harcadığımı hesapla</button>');

	$('#hesapla').click(function() {

		$('header, .highlight, .ys-main, footer, #ys-ls-app-wrapper').addClass('hesapla-blur');
		$('body').append('<div class="hesapla-bg"><div class="hesapla-modal"><p class="title">Bu güne kadar Yemek Sepeti üzerinden ne kadar sipariş verdiğini tahmin edebiliyorsundur. Peki ya Yemek Sepeti için ne kadar para harcadığını hiç merak ettin mi?</p><img class="loading" src="https://fakatiyiyedik.yemeksepeti.com/img/loading.gif"><p class="loading-text">Senin için hemen bir hesaplama yapalım. Fazla uzaklaşma, çok uzun sürmeyecek.</p><p class="total" style="display: none">Bugüne kadar toplam <span></span> harcamışsın!</p><button id="hesapla-kapat" class="ys-btn ys-btn-default hesapla-buton" style="display: none">Kapat</button></div></div>');

		$('html, body').animate({
			scrollTop: 99999999999
		});
		$(window).scroll(function() {
			if($(window).scrollTop() + window.innerHeight == $(document).height()) {
				$('html, body').animate({
					scrollTop: 99999999999
				});
			}
		});

		setTimeout(function() {
			var toplam = 0;
			$('.order-items').find('.order-item').each(function() {
				var fiyat = $(this).find('.amount-info').find('strong').text().slice(0, -3).replace(',', '.');
				toplam = toplam + Number(fiyat);
			});
			$('.hesapla-modal .loading, .hesapla-modal .loading-text').hide();
			var duzenle = toplam.toFixed(2);
			$('.hesapla-modal .total span').text(duzenle + '₺');
			$('.hesapla-modal .total, .hesapla-modal #hesapla-kapat').show();
		}, 6000);

		$('#hesapla-kapat').click(function() {
			$('.hesapla-bg').hide();
			$('header, .highlight, .ys-main, footer, #ys-ls-app-wrapper').removeClass('hesapla-blur');
		});
	});
});
