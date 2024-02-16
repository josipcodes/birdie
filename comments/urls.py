from django.urls import path
from .views import CommentList, CommentDetail

urlpatterns = [
    path('posts/', CommentList.as_view()),
    path('posts/<int:pk>', CommentDetail.as_view()),
]
