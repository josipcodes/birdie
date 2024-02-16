from django.contrib.humanize.templatetags.humanize import naturaltime
from rest_framework import serializers
from .models import Comment

# drf_api serializer code used, with some modifications
class CommentSerializer(serializers.ModelSerializer):
    """
    Comment model serializer.
    Adds three extra fields when returning a list of Comment instances 
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    profile_avatar = serializers.ReadOnlyField(source='owner.profile.avatar.url')
    created = serializers.SerializerMethodField()
    modified = serializers.SerializerMethodField()

    def get_created(self, obj):
        """
        Returns a string representing time since creation
        """
        return naturaltime(obj.created)

    def get_modified(self, obj):
        """
        Returns a string representing time since modifying
        """
        return naturaltime(obj.modified)

    def get_is_owner(self, obj):
        """
        owner check
        """
        request = self.context['request']
        return obj.owner == request.user

    class Meta:
        model = Comment
        fields = [
            'id',
            'owner',
            'post',
            'created',
            'modified',
            'content',
            'is_owner',
            'profile_id',
            'profile_avatar'
        ]

class CommentDetailSerializer(CommentSerializer):
    """
    Serializer for the Comment model used in Detail view
    Post is a read only field so that we dont have to set it on each update
    """
    post = serializers.ReadOnlyField(source='post.id')