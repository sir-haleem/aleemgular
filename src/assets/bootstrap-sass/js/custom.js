( // Opens Execution Context
    function (jQ) { // Begins a self invoking funtion



    $(document).ready(function() {
        $('.ui.form.signup').form({
            fields: {
                password: {
                    identifier  : 'password',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter your e-mail'
                        },
                        {
                            type   : 'length[6]',
                            prompt : 'Please enter a valid e-mail'
                        }
                ]
            },
            }
        });
     });


        // CODE GOES IN HERE!!!
    jQ('nav.ui.computer-only i.large.announcement.icon').popup({
        on: 'click',
    });

    jQ('.ui.radio.checkbox').checkbox();
    jQ('.ui.checkbox').checkbox();

    jQ('#loadMorePostCards').click(function(evt) {
        evt.preventDefault();
        self = this;
        str = '<div class="ui segment forum-card">' +
            '<div class="ui grid">' +

                '<div class="sixteen wide column row card-post-info">' +
                    '<div class="column">' +
                        '<div class="ui grid">' +

                            '<div class="eleven wide computer only column">' +

                                '<div class="ui breadcrumb section-indicator">' +
                                    '<i class="folder open icon"></i>' +
                                    '<a class="section">Forums</a>' +
                                    '<i class="right arrow icon divider"></i>' +
                                    '<a href="#" class="section">Main Category</a>' +
                                    '<i class="right arrow icon divider"></i>'+
                                    '<div class="active section">Sub Category</div>' +
                                '</div>' +
                            '</div>' +

                            '<div class="five wide mobile only left aligned column">' +
                                '<span class="post-section-mobile">' +
                                    '<a href="">Sub Section</a>' +
                                '</span>' +
                            '</div>' +
                            '<div class="six wide mobile only center aligned column">' +
                                '<span class="post-views">' +
                                    '12 Views' +
                                '</span>' +
                            '</div>' +

                            '<div class="five wide computer only right aligned column">' +
                                '<span class="post-time">' +
                                    '<i class="ui time icon"></i>' +
                                    'Jan 12, 2014' +
                                '</span>' +
                            '</div>' +
                            '<div class="five wide mobile only right aligned column">' +
                                '<span class="post-time">' +
                                    'Jan 12, 2014' +
                                '</span>' +
                            '</div>' +


                        '</div>' +
                        '<h3 class="ui header">' +
                            'This is a sample Post Title. We don\'t know what next to handle afterwards.' +
                            'Lol' +
                        '</h3>' +

                    '</div>' +
                '</div>' +
                '<div class="row">' +
                    '<div class="three wide mobile two wide tablet two wide computer center aligned column">' +
                        '<img src="./assets/img/test.gif" alt="" class="ui circular tiny image">' +
                    '</div>' +
                    '<div style="padding-left: 0; " class="fourteen wide computer only column">' +
                        '<h4 class="ui header name">' +
                            '<a href="./profile.html" class="name">' +
                                'Isiaka Aleem Aremu' +
                            '</a>' +
                            '<span class="computer only">' +
                                '<i class="green small circle icon"></i>' +
                                '<span class="ui green left pointing label" data-username="halmat" id="chatLabel">' +

                                    '<a href="" class="detail">' +
                                        '<i class="chat icon"></i>' +
                                        'Haleem' +
                                    '</a>' +
                                '</span>' +
                            '</span>' +
                        '</h4>' +


                        '<div class="personal quote">' +
                            '<em>My name is haleem</em>' +
                        '</div>' +

                    '</div>' +

                    '<div style="padding-left: 0; " class="thirteen wide mobile fourteen wide tablet tablet only mobile only column">' +
                        '<h4 class="ui header name">' +
                            '<a href="./profile.html" class="name">' +
                                'Isiaka Aleem Aremu' +
                            '</a>' +

                            '<span class="ui green inverted small label">' +
                                '<i class="chat icon"></i><a href="">Haleem</a>' +
                            '</span>' +

                        '</h4>' +


                        '<div class="personal quote">' +
                            '<em>My name is haleem</em>' +
                        '</div>' +

                    '</div>' +
                '</div>' +
                '<div class="row">' +
                    '<div class="sixteen wide column post-content">' +
                        '<p>' +
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur eveniet saepe voluptatem minus perspiciatis fugit commodi dicta deserunt culpa similique!' +
                            '<a href="./viewposts.html">Read More</a>' +
                        '</p>' +
                    '</div>' +
                '</div>' +
                '<div class="two column mobile only row card-post-more-info">' +
                    '<div class="center aligned column">' +
                            '<i class="ui comments icon"></i>' +
                            '<strong>10 Comments</strong>' +
                    '</div>' +

                    '<div class="center aligned column">' +
                            '<i class="ui like icon"></i>' +
                            '<strong>10 Likes</strong>' +

                    '</div>' +
                '</div>' +
                '<div class="three column computer only row card-post-more-info">' +
                    '<div class="center aligned column">' +
                            '<i class="ui comments icon"></i>' +
                            '<strong>10 Comments</strong>' +
                    '</div>' +

                    '<div class="center aligned column">' +
                            '<i class="ui eye icon"></i>' +
                            '<strong>10 Views</strong>' +
                    '</div>' +

                    '<div class="center aligned column">' +
                            '<i class="ui like icon"></i>' +
                            '<strong>10 Likes</strong>' +

                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>'

        jQ(this).attr('class', 'ui loading button btn-color');

        setTimeout(function(){
            console.log('Done');
            jQ(self).parent().before(str);

            jQ(self).attr('class', 'ui button btn-color');
        }, 200);



    });

var app = {
    forumCard: '<div class="ui segment forum-card">' +
        '<div class="ui grid">' +

            '<div class="sixteen wide column row card-post-info">' +
                '<div class="column">' +
                    '<div class="ui grid">' +

                        '<div class="eleven wide computer only column">' +

                            '<div class="ui breadcrumb section-indicator">' +
                                '<i class="folder open icon"></i>' +
                                '<a class="section">Forums</a>' +
                                '<i class="right arrow icon divider"></i>' +
                                '<a href="#" class="section">Main Category</a>' +
                                '<i class="right arrow icon divider"></i>'+
                                '<div class="active section">Sub Category</div>' +
                            '</div>' +
                        '</div>' +

                        '<div class="five wide mobile only left aligned column">' +
                            '<span class="post-section-mobile">' +
                                '<a href="">Sub Section</a>' +
                            '</span>' +
                        '</div>' +
                        '<div class="six wide mobile only center aligned column">' +
                            '<span class="post-views">' +
                                '12 Views' +
                            '</span>' +
                        '</div>' +

                        '<div class="five wide computer only right aligned column">' +
                            '<span class="post-time">' +
                                '<i class="ui time icon"></i>' +
                                'Jan 12, 2014' +
                            '</span>' +
                        '</div>' +
                        '<div class="five wide mobile only right aligned column">' +
                            '<span class="post-time">' +
                                'Jan 12, 2014' +
                            '</span>' +
                        '</div>' +


                    '</div>' +
                    '<h3 class="ui header">' +
                        'This is a sample Post Title. We don\'t know what next to handle afterwards.' +
                        'Lol' +
                    '</h3>' +

                '</div>' +
            '</div>' +
            '<div class="row">' +
                '<div class="three wide mobile two wide tablet two wide computer center aligned column">' +
                    '<img src="./assets/img/test.gif" alt="" class="ui circular tiny image">' +
                '</div>' +
                '<div style="padding-left: 0; " class="fourteen wide computer only column">' +
                    '<h4 class="ui header name">' +
                        '<a href="./profile.html" class="name">' +
                            'Isiaka Aleem Aremu' +
                        '</a>' +
                        '<span class="computer only">' +
                            '<i class="green small circle icon"></i>' +
                            '<span class="ui green left pointing label" data-username="halmat" id="chatLabel">' +

                                '<a href="" class="detail">' +
                                    '<i class="chat icon"></i>' +
                                    'Haleem' +
                                '</a>' +
                            '</span>' +
                        '</span>' +
                    '</h4>' +


                    '<div class="personal quote">' +
                        '<em>My name is haleem</em>' +
                    '</div>' +

                '</div>' +

                '<div style="padding-left: 0; " class="thirteen wide mobile fourteen wide tablet tablet only mobile only column">' +
                    '<h4 class="ui header name">' +
                        '<a href="./profile.html" class="name">' +
                            'Isiaka Aleem Aremu' +
                        '</a>' +

                        '<span class="ui green inverted small label">' +
                            '<i class="chat icon"></i><a href="">Haleem</a>' +
                        '</span>' +

                    '</h4>' +


                    '<div class="personal quote">' +
                        '<em>My name is haleem</em>' +
                    '</div>' +

                '</div>' +
            '</div>' +
            '<div class="row">' +
                '<div class="sixteen wide column post-content">' +
                    '<p>' +
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur eveniet saepe voluptatem minus perspiciatis fugit commodi dicta deserunt culpa similique!' +
                        '<a href="./viewposts.html">Read More</a>' +
                    '</p>' +
                '</div>' +
            '</div>' +
            '<div class="two column mobile only row card-post-more-info">' +
                '<div class="center aligned column">' +
                        '<i class="ui comments icon"></i>' +
                        '<strong>10 Comments</strong>' +
                '</div>' +

                '<div class="center aligned column">' +
                        '<i class="ui like icon"></i>' +
                        '<strong>10 Likes</strong>' +

                '</div>' +
            '</div>' +
            '<div class="three column computer only row card-post-more-info">' +
                '<div class="center aligned column">' +
                        '<i class="ui comments icon"></i>' +
                        '<strong>10 Comments</strong>' +
                '</div>' +

                '<div class="center aligned column">' +
                        '<i class="ui eye icon"></i>' +
                        '<strong>10 Views</strong>' +
                '</div>' +

                '<div class="center aligned column">' +
                        '<i class="ui like icon"></i>' +
                        '<strong>10 Likes</strong>' +

                '</div>' +
            '</div>' +
        '</div>' +
    '</div>',

    forumPostComment: '<div class="ui comment" data-id="2">' +
            '<div class="avatar">' +
                '<img src="./assets/img/test.gif" alt="avatar">' +
            '</div>' +
            '<div class="content">' +
                '<a class="author">Haleem</a>' +
                '<div class="metadata">' +
                    '<i class="ui time icon"></i>' +
                    'Yesterday' +
                '</div>' +
                '<div class="text">' +
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque voluptatem numquam quae blanditiis facere culpa.' +
                '</div>' +
                '<div class="actions">' +
                    '<a href="">' +
                        '<i class="ui reply icon"></i>' +
                        'Reply' +
                    '</a>' +
                    '<a href="" id="likeComment" data-id="2">' +
                        '<i class="ui like icon"></i>' +
                        'Like' +
                    '</a>' +

                    '<span class="like-count" data-total="2">' +
                        '2 Likes' +
                    '</span>' +


                '</div>' +
            '</div>'
    ,

    helper: {
        formatCount: function (string, value) {
            if (value < 1) {
                return string;
            }

            return string + 's';
        },

        formatComment: function (id, likeCount, imgName, author, time, text) {
            return '<div class="ui comment" data-id="'+ id +'">' +
                    '<div class="avatar">' +
                        '<img src="./assets/img/' + imgName +'" alt="avatar">' +
                    '</div>' +
                    '<div class="content">' +
                        '<a class="author">' + author +'</a>' +
                        '<div class="metadata">' +
                            '<i class="ui time icon"></i>' +
                            time +
                        '</div>' +
                        '<div class="text">' +
                            text +
                        '</div>' +
                        '<div class="actions">' +
                            '<a href="">' +
                                '<i class="ui reply icon"></i>' +
                                'Reply' +
                            '</a>' +
                            '<a href="" id="likeComment" data-id="'+ id +'">' +
                                '<i class="ui like icon"></i>' +
                                'Like' +
                            '</a>' +

                            '<span class="like-count" data-total="'+ likeCount +'">' +
                                this.formatCount('Like', likeCount) +
                            '</span>' +
                        '</div>' +
                    '</div>'
        },

        formatReply: function (id, likeCount, imgName, author, time, text) {
            return '<div class="ui comment" data-id="'+ id +'">' +
                    '<div class="avatar">' +
                        '<img src="./assets/img/' + imgName +'" alt="avatar">' +
                    '</div>' +
                    '<div class="content">' +
                        '<a class="author">' + author +'</a>' +
                        '<div class="metadata">' +
                            '<i class="ui time icon"></i>' +
                            time +
                        '</div>' +
                        '<div class="text">' +
                            text +
                        '</div>' +
                        '<div class="actions">' +
                            '<a href="" id="likeComment" data-id="'+ id +'">' +
                                '<i class="ui like icon"></i>' +
                                'Like' +
                            '</a>' +

                            '<span class="like-count" data-total="'+ likeCount +'">' +
                                this.helper.formatCount('Like', likeCount) +
                            '</span>' +
                        '</div>' +
                    '</div>'
        }
    },

    likeComment: function(self) {
        var id = self.data('id');

        var liked = self.hasClass('liked');
        console.log(liked);
        if(liked) {
            self.removeClass('liked').html("<i class='ui like icon'></i> Like");
            jQ('.ui.comment[data-id="'+ id +'"] a[data-id="'+ id+'"] i').removeClass('liked');

            var likeCount = jQ('.ui.comment[data-id="'+ id +'"] span.like-count');
            count = parseInt(likeCount.data('total'));
            count--;
            likeCount.data('total', count).text(count + ' ' + this.helper.formatCount('Like', count));
            console.log(likeCount.data('total'));

        } else if(!liked) {
            self.addClass('liked').html("<i class='ui like icon'></i> Liked");
            jQ('.ui.comment[data-id="'+ id +'"] a[data-id="'+ id+'"] i').addClass('liked');
            var likeCount = jQ('.ui.comment[data-id="'+ id +'"] span.like-count');
            count = parseInt(likeCount.data('total'));
            count++;
            likeCount.data('total', count).text(count + ' ' + this.helper.formatCount('Like', count));

            console.log(likeCount.data('total'));
        }
    },

    likePost: function(self) {
        var id = self.data('id');

        var liked = self.hasClass('liked');
        if(liked) {
            self.removeClass('liked');

            jQ('.row.card-post-more-info > .column > a[data-id="'+ id+'"] > i').removeClass('liked');

            var likeCount = jQ('.row.card-post-more-info > .column > a[data-id="'+ id+'"] span.like-count');
            count = parseInt(likeCount.data('total'));
            count--;
            likeCount.data('total', count).text(count + ' ' + this.helper.formatCount('Like', count)).removeClass('liked');

        } else if(!liked) {
            self.addClass('liked');
            jQ('#likePost[data-id="'+ id+'"] i').addClass('liked');
            var likeCount = jQ('.row.card-post-more-info > .column > a[data-id="'+ id+'"] span.like-count');
            count = parseInt(likeCount.data('total'));
            count++;
            likeCount.data('total', count).text(count + ' ' + this.helper.formatCount('Like', count)).addClass('liked');

        }
    }
}
    jQ('#likeComment').click(function(evt) {
        evt.preventDefault();
        self = jQ(this);

        app.likeComment(self);

        return false;
    });

    jQ('#likePost').click(function(evt) {
        evt.preventDefault();
        self = jQ(this);
        app.likePost(self);
    });

    jQ('#commentForm').submit(function (evt) {

        evt.preventDefault();
        var self = jQ(this);
        console.log(self.serializeArray()[0].value);
        var commentsBox = jQ('#commentSection .ui.comments[data-type="main"]');

        if (commentsBox.get().length > 0) {
            self.before(app.helper.formatComment(12, 22, 'test.gif', 'halmat', 'Just Now', self.serializeArray()[0].value));
        }

        return false;

    })





    }(jQuery) // ends and also passes jQuery Object as parameter to a self invoking function
); // Ends Created Execution Conte



$('.ui.form')
  .form({
    fields: {
      name     : 'empty',
      gender   : 'empty',
      username : 'empty',
      password : ['minLength[6]', 'empty'],
      skills   : ['minCount[2]', 'empty'],
      terms    : 'checked',
      lastname: 'empty',
      firstname: 'empty',
      username: ['minLength[6]', 'empty'],
    }
  })
;
