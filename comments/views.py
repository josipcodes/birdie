from rest_framework import generics, permissions
from birdie_api.permissions import isOwnerOrReadOnly
from .models import Comment
from .serializers import CommentSerializer, CommentDetailSerializer

# views copied from drf_api lessons
class CommentList(generics.ListCreateAPIView):
    serializer_class = CommentSerializer
    # permission set globally
    queryset = Comment.objects.all()


    def perform_create(self, serializer):
        """
        Comment creation
        """
        serializer.save(owner=self.request.user)


class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a comment, update or delete it by id if you own it.
    """
    permission_classes = [isOwnerOrReadOnly]
    serializer_class = CommentDetailSerializer
    queryset = Comment.objects.all()
