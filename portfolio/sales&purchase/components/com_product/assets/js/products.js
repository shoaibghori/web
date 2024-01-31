jQuery(function($){var filter_items=$('#products-sort li');$(document).on('click','#products-sort li:not(.has-child) a',function(event){event.preventDefault();var $this=$(this);if($this.parent().hasClass('active')){return;}
filter_items.removeClass('active');$this.closest('.has-child').addClass('active');$this.parent().addClass('active');$('#items-list').addClass('loading');var extra_params='';var url_params='';if(getParameterByName('sort',$(this).attr('href'))){extra_params+='&sort='+ getParameterByName('sort',$(this).attr('href'));if(getParameterByName('sort',$(this).attr('href'))!='newest'){url_params+='&sort='+ getParameterByName('sort',$(this).attr('href'));}}
if(getParameterByName('search')){extra_params+='&search='+ getParameterByName('search');url_params+='&search='+ getParameterByName('search');}
if($('#items-list').attr('data-catid')){extra_params+='&catid='+ $('#items-list').attr('data-catid');}
if(getCurrentURL()==product_url+'free-templates'){window.history.replaceState("","",product_url+'items');}
if(getCurrentURL()==product_url+'popular'){window.history.replaceState("","",product_url+'items');}
if(url_params){window.history.replaceState("","",getCurrentURL()+'?'+ url_params.substring(1,url_params.length));}else{window.history.replaceState("","",getCurrentURL());}
$.ajax({type:'POST',url:product_url+'index.htm?option=com_product&task=products.getAllProducts'+ extra_params,success:function(response){var data=$.parseJSON(response);$('#items-list > .row').html(data.content);$('#items-list').removeClass('loading');$('.pagination-wrapper').remove();if(data.pagination){$('#items-list').after(data.pagination);}
$('figure img').unveil();}});});$(document).on('change','.category-filter select',function(event){event.preventDefault();$('#items-list').addClass('loading');var extra_params='';var url_params='';if(getParameterByName('sort')){extra_params+='&sort='+ getParameterByName('sort');url_params+='&sort='+ getParameterByName('sort');}
if(getCurrentURL()==product_url+'popular'){url_params+='&sort=popular';}
if(getParameterByName('search')){extra_params+='&search='+ getParameterByName('search');url_params+='&search='+ getParameterByName('search');}
if($(this).find('option:selected').data('catid')!=undefined){extra_params+='&catid='+ $(this).find('option:selected').data('catid');$('#items-list').attr('data-catid',$(this).find('option:selected').data('catid'));}else{$('#items-list').removeAttr('data-catid');}
if(getCurrentURL()==product_url+'popular'){window.history.replaceState("","",product_url+'items');}
if(getCurrentURL()==product_url+'free-templates'){window.history.replaceState("","",product_url+'items');}
if(url_params){window.history.replaceState("","",$(this).val()+'?'+ url_params.substring(1,url_params.length));}else{window.history.replaceState("","",$(this).val());}
$.ajax({type:'POST',url:product_url+'index.htm?option=com_product&task=products.getAllProducts'+ extra_params,success:function(response){var data=$.parseJSON(response);$('#items-list > .row').html(data.content);$('#items-list').removeClass('loading');$('.pagination-wrapper').remove();$('.breadcrumb').html(data.pathway);$('.sp-page-title h2').text(data.page_title);document.title=data.browser_title;if(data.pagination){$('#items-list').after(data.pagination);}
$('figure img').unveil();}});});$(document).on('click','.pagination>li:not(.disabled)>a',function(event){event.preventDefault();var start=$(this).data('base');if(start==undefined)return;var extra_params='';var url_params='';if($('#items-list').attr('data-catid')){extra_params+='&catid='+ $('#items-list').attr('data-catid');}
if(getParameterByName('sort')){extra_params+='&sort='+ getParameterByName('sort');url_params+='&sort='+ getParameterByName('sort');}
if(getCurrentURL()==product_url+'popular'){url_params+='&sort=popular';}
if(getCurrentURL()==product_url+'free-templates'){extra_params+='&sort=free.popular';}
if(getParameterByName('search')){extra_params+='&search='+ getParameterByName('search');url_params+='&search='+ getParameterByName('search');}
if(start){url_params+='&start='+ start;}
if(getCurrentURL()==product_url+'popular'){window.history.replaceState("","",product_url+'items');}
if(url_params){window.history.replaceState("","",getCurrentURL()+'?'+ url_params.substring(1,url_params.length));}else{window.history.replaceState("","",getCurrentURL());}
$('#items-list').addClass('loading');$('html, body').animate({scrollTop:$('body').offset().top},300);$.ajax({type:'POST',url:product_url+'index.htm?option=com_product&task=products.getAllProducts&limitstart='+ start+ extra_params,success:function(response){var data=$.parseJSON(response);$('#items-list > .row').html(data.content);$('#items-list').removeClass('loading');$('.pagination-wrapper').remove();if(data.pagination){$('#items-list').after(data.pagination);}
$('figure img').unveil();}});});function getParameterByName(name,url){if(!url)url=window.location.href;name=name.replace(/[\[\]]/g,"\\$&");var regex=new RegExp("[?&]"+ name+"(=([^&#]*)|&|#|$)"),results=regex.exec(url);if(!results)return null;if(!results[2])return'';return decodeURIComponent(results[2].replace(/\+/g," "));}
function getCurrentURL(){var oldURL=window.location.href;var urlIndex=0;var newURL=oldURL;urlIndex=oldURL.indexOf('?');if(urlIndex==-1){urlIndex=oldURL.indexOf('#');}
if(urlIndex!=-1){newURL=oldURL.substring(0,urlIndex);}
return newURL;}});