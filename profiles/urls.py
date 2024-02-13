from django.urls import path
# importing views, renaming them to source
from profiles import views as source

urlpatterns = [
    path('profiles/', source.ListProfiles.as_view()),
    path('profiles/<int:pk>/', source.SpecificProfile.as_view()),
]
