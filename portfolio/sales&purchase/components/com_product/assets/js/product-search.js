jQuery(function($){var searchProductPreviousValue,liveProductSearchTimer
$('.input-product-search').on('keyup',function(event){var $parent=$(this).closest('.product-search-form');event.preventDefault();if(event.keyCode==27){$('.product-search-results').fadeOut(400);return;}
if($(this).val()!=''){$parent.find('.clear-search').show();}else{$parent.find('.clear-search').hide();}
if($(this).val()!=searchProductPreviousValue){var query=$(this).val().trim();var re=/[`~!@#$%^&*_|+\=?;:'",.<>\{\}\[\]\\\/]/gi;var isSpecialChar=re.test(query);if(isSpecialChar){var query=query.replace(/[`~!@#$%^&*_|+\=?;:'",.<>\{\}\[\]\\\/]/gi,'');$(this).val(query);}
if(liveProductSearchTimer){clearTimeout(liveProductSearchTimer);}
query=query.trim();if(query!=''&&!isSpecialChar){liveSearchTimer=setTimeout(function(){$.ajax({type:'POST',url:product_url+'index.htm?option=com_product&task=products.search&limit=10',data:{search:query},success:function(response){var data=$.parseJSON(response);if(data.status){$parent.next('.product-search-results').show();}else{$parent.next('.product-search-results').hide();}
$parent.next('.product-search-results').html(data.content);}});},300);}
searchProductPreviousValue=$(this).val()}
if($(this).val()==''){$parent.next('.product-search-results').hide();}
return false;});$('.input-product-search').on('focusout',function(event){$('.product-search-results').fadeOut(400);event.preventDefault();});$('.clear-search').on('click',function(event){event.preventDefault()
$(this).closest('.product-search-form').find('.input-product-search').val('').focus().keyup()});});