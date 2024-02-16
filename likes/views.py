from rest_framework import generics, permissions
from birdie_api.permissions import isOwnerOrReadOnly
from .models import Like
from .serializers import LikeSerializer

# views copied from drf_api lessons with minor adjustments
class LikeList(generics.ListCreateAPIView):
    # permissions set globally
    serializer_class = LikeSerializer
    queryset = Like.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class LikeDetail(generics.RetrieveDestroyAPIView):
    permission_classes = [isOwnerOrReadOnly]
    serializer_class = LikeSerializer
    queryset = Like.objects.all()
