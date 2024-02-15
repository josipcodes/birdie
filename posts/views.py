from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Post
from .serializers import PostSerializer


class PostList(APIView):
    """
    View all posts
    """
    def get(self, request):
        all_posts = Post.objects.all()
        serializer = PostSerializer(
            all_posts,
            many=True,
            context={'request': request}
        )
        return Response(serializer.data)