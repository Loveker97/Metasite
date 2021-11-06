from django.db import models


class Tutorial(models.Model):
    title = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200,blank=False, default='')
    published = models.BooleanField(default=False)

class AuthorField(models.Field):
    def __init__(self, user_id, *args, **kwargs):
        self.user_id = user_id
        super().__init__(*args, **kwargs)

class CommentsField(models.Field)
    def __init__(self, comments=[], *args, **kwargs):
        self.comments = comments
        super().__init__(*args, **kwargs)

class Posts(model.Model):
    title = models.CharField(max_length=50, blank=False, default='')
    author = AuthorField()
    like_count = 
    save_count = 
    create_date = 
    last_update_time = 
    body = models.CharField(max_length=800, blank=False, default='')
    comments = CommentsField()
    table_of_contents = models.CharField(max_length=100, blank=False, default='')
    labels = 