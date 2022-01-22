from django.http.response import JsonResponse
from Metasite.serializers import PostsSerializer
from Metasite.models import Posts

from rest_framework import status
from rest_framework.decorators import api_view

@api_view(['GET', 'POST', 'DELETE'])
def posts_list(request):
    '''
        test post api
    '''
    if request.method == 'GET':
        posts = Posts.objects.filter()
        print(posts)

        print(f'the length of posts is {len(posts)}')
        posts_serializer = PostsSerializer(posts, many=True)
        return JsonResponse(posts_serializer.data, safe=False, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    

    