from rest_framework import serializers 
from Metasite.models import Tutorial
from Metasite.models import Posts
 
 
class TutorialSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Tutorial
        fields = '__all__'


 
class PostsSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Posts
        fields = '__all__'