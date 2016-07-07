function shuffle(array) {
    var curr_index = array.length,
        temp_val, rand_index;

    while (0 != curr_index) {
        rand_index = Math.floor(Math.random() * curr_index);
        curr_index -= 1;
        temp_val = array[curr_index];
        array[curr_index] = array[rand_index];
        array[rand_index] = temp_val;
    }

    return array;
}


var quotes = ["Just a quick note to thank everyone I met at your office. I came in for a 2nd opinion and left with the commitment to be a long term patient. Dr. Oppenheim was great in his candid honest assessment of my dential situation. And I sincerely appreciate the manner he operates. Is there a way I can request the assistant that helped Dr. Oppenheim during my intial visit? I found her to be professional and comforting. I know I would enjoy working with her. I feel that I have finally found an office that offers options of treatment and provides information to help a patient make an educated decision. I came to your office through an unsolicited referral, I come into contact with a huge amount of people and will further express my satisfaction with your office to anyone willing to listen. Thank you!",
    "This dental practice is top notch. My son and I have been patients for over 10 years and have utilized not only their general dental services, but have also both benefited from the invisalign and traditional braces that they offer.  I went through the painful process of having braces as a child and was reluctant to correct my smile once again, but the doctors and staff at this office gave me the confidence I needed to try the invisalign. To this day I am so thankful each time I look in the mirror and have the confidence to smile!  My son also thinks the world of them as he started the orthodontic process at an early age. Now he enters his teenage years with a perfect smile while others are just beginning the journey.  This dental practice is made up of highly qualified doctors that care, and a staff that truly believes that their patients come first!",
    'My family and I have been patients in this office for many years. Two years ago I was in an automobile accident and after spending the night in the Emergency room, I came right over to the office to have my mouth looked at due to the large amount of facial trama. I was seen immediately by Dr. Oppenheim and his staff in which I had to have what was left of my five front teeth extracted. They also prepared the extraction site with bone grafting and I left the office with a temporary flipper while the permanent one was being made. I was very thankful that I did not have to go one day without my front teeth. The office also was very accommodating and understanding to this delicate and personal matter. The business office also was very accommodating dealing with my multiple insurance claims. I am now in the process of dental implants, and very happy with the "smile" this office put back on my face.',
    "I have been a patient for many years, and think your practice is top notch a 10. My family is also all in agreement your practice is great.",
    "The office is friendly, eager to accomodate and very concerned with comfort. Although I only come 2x/year, I almost feel like I'm family.",
    "The best dentists in the Lehigh Valley. Excellent office & dental assitant staff. And I never have to bring a book to read while waiting for my appointment."
];

var quote_int = 0;

$(document).ready(function() {
    quotes = shuffle(quotes);
    $("#testimonial").text(quotes[quote_int]);

    setInterval(function() {
        if (quote_int == 5)
            quote_int = 0;
        else
            quote_int += 1;
        $("#testimonial").animate({
            opacity: '0',
            filter: 'Alpha(opacity=0)'
        }, 400, function(){
            $("#testimonial").text(quotes[quote_int]);
            $("#testimonial").animate({
                opacity: '1',
                filter: 'Alpha(opacity=100)'
            }, 400);
        });
    }, 15000);
});

$("#test-left").click(function() {
    if (quote_int == 0)
        quote_int = 5;
    else
        quote_int -= 1;

    $("#testimonial").animate({
        opacity: '0',
        filter: 'Alpha(opacity=0)'
    }, 400, function() {
        $("#testimonial").text(quotes[quote_int]);
        $("#testimonial").animate({
            opacity: '1',
            filter: 'Alpha(opacity=100)'
        }, 400);
    });
});

$("#test-right").click(function() {
    if (quote_int == 5)
        quote_int = 0;
    else
        quote_int += 1;

    $("#testimonial").animate({
        opacity: '0',
        filter: 'Alpha(opacity=0)'
    }, 400, function() {
        $("#testimonial").text(quotes[quote_int]);
        $("#testimonial").animate({
            opacity: '1',
            filter: 'Alpha(opacity=100)'
        }, 400);
    });
});
