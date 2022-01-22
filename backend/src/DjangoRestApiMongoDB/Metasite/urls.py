from django.conf.urls import url 
from Metasite import views
from Metasite.APIs import posts_api
 
urlpatterns = [ 
    url(r'^api/metasite$', views.tutorial_list),
    url(r'^api/metasite/(?P<pk>[0-9]+)$', views.tutorial_detail),
    url(r'^api/metasite/published$', views.tutorial_list_published),
    url(r'^api/posts$', posts_api.posts_list),
]