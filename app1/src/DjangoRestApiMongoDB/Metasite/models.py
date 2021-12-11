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

class LabelsField(models.Field)
    def __init__(self, labels=[], *args, **kwargs):
        self.labels = labels
        super().__init__(*args, **kwargs)

class ProfileField(models.Field)
    def __init__(self, name='', self_intro='', avatar_id=0,  age=0, gender='male', region='', *args, **kwargs):
        self.name = name
        self.self_intro = self_intro
        self.avatar_id = avatar_id
        self.age = age
        self.gender = gender
        self.region = region
        super().__init__(*args, **kwargs)

class LoginCredentialField(models.Field)
    def __init__(self, username_email, password, *args, **kwargs):
        self.username_email = username_email
        self.password = password
        super().__init__(*args, **kwargs)

class HistoryField(models.Field)
    def __init__(self, history=[], *args, **kwargs):
        self.history = history
        super().__init__(*args, **kwargs)  

class Posts(models.Model):
    title = models.CharField(max_length=50, blank=False, default='')
    author = AuthorField()
    like_count = models.IntegerField(default=0)
    save_count = models.IntegerField(default=0)
    create_date = models.DateField(default=date.today)
    last_update_time = models.DateField(default=date.today)
    body = models.CharField(max_length=800, blank=False, default='')
    comments = CommentsField()
    table_of_contents = models.CharField(max_length=100, blank=False, default='')
    labels =  LabelsField()

class Comments(models.Model):
    content = models.CharField(max_length=150,  blank=False,  default='')
    author = AuthorField()
    like_count = models.IntegerField(default=0)
    dislike_count = models.IntegerField(default=0)
    report_count = models.IntegerField(default=0)
    create_date = models.DateField(default=date.today)
    comments = CommentsField()

class Users(models.Model):
    profile = ProfileField()
    login_credential= LoginCredentialField()
    level = models.IntegerField(default=0)
    ban_status = models.DateField(default=date.today)
    like_history = HistoryField()
    collection = HistoryField()
    history = HistoryField()
    posts = HistoryField()
    reporteds = models.IntegerField(default=0)

