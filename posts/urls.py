from django.urls import path
# importing views, renaming them to source
from .views import PostList, PostDetail

urlpatterns = [
    path('posts/', PostList.as_view()),
    path('posts/<int:pk>/', PostDetail.as_view()),
]
