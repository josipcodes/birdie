from django.urls import path
# importing views, renaming them to source
from .views import PostList

urlpatterns = [
    path('posts/', ListPosts.as_view()),
]
