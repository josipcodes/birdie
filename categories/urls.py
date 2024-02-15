from django.urls import path
# importing views, renaming them to source
from .views import CategoryList, CategoryDetail

urlpatterns = [
    path('categories/', CategoryList.as_view()),
    path('categories/<int:pk>/', CategoryDetail.as_view()),
]
