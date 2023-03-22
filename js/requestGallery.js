$(function () {
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: '.box-sizer',
    percentPosition: true,
  });

  let items = [];
  $.getJSON('../products.json', function (data) {
    //console.log(data);
    $.each(data, function (i, item) {
      //console.log(item);
      let galleryItems = `
        <div class="grid-item"><a href="#"><img src="images/${item.pro_img}" alt=""></a></div>
      `;
      //console.log($(galleryItems));
      items.push($(galleryItems).get(0));
    });
    $('.grid').append(items);
    $('.grid').imagesLoaded(function () {
      $('.grid').masonry('appended', items);
    });
  });
});
