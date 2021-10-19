// // YOU WILL NEED TO ADD YOUR OWN API KEY IN QUOTES ON LINE 5, EVEN FOR THE PREVIEW TO WORK.
// // 
// // GET YOUR API HERE https://console.developers.google.com/apis/api


// // https://developers.google.com/youtube/v3/docs/playlistItems/list

// // https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=webtut-195115&duration=PT1H

// // <iframe width="560" height="315" src="https://www.youtube.com/embed/qxWrnhZEuRU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

// // https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg
var search = window.location.search.split('course=')[1];
var playListIDs = {
    ds: 'PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi',
    cn:'PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_',
    os:'PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p',
    dbms:'PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y',
    fullStack:'PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg',
    java:'PLX9Zi6XTqOKQ7TdRz0QynGIKuMV9Q2H8E'
}

$(document).ready(function () {

    var key = ['AIzaSyAfnjIoG2Qdg7LKWCoW8a4eJzeEeVnLyhQ'];
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';


    var options = {
        part: 'snippet',
        key: 'AIzaSyAfnjIoG2Qdg7LKWCoW8a4eJzeEeVnLyhQ',
        maxResults: 150,
        playlistId: playListIDs[search]
    }
    console.log(playListIDs[search])
    loadVids();

    function loadVids() {
        $.getJSON(URL, options, function (data) {
            var id = data.items[0].snippet.resourceId.videoId;
            mainVid(id);
            resultsLoop(data);
        });
    }

    function mainVid(id) {
        $('#video').html(`
					<iframe width="80%" height="310px" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				`);
    }

		
    function resultsLoop(data) {

        $.each(data.items, function (i, item) {

            var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(0, 100);
            var vid = item.snippet.resourceId.videoId;


            $('main').append(`
							<article class="item" data-key="${vid}">

								<img src="${thumb}" alt="" class="thumb">
								<div class="details">
									<h4>${title}</h4>
									<p>${desc}</p>
								</div>

							</article>
						`);
        });
    }

		// CLICK EVENT
    $('main').on('click', 'article', function () {
        var id = $(this).attr('data-key');
        mainVid(id);
    });


});

