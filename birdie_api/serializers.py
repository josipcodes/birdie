from dj_rest_auth.serializers import UserDetailsSerializer
from rest_framework import serializers

# copied from drf_api with minor adjustments
class CurrentUserSerializer(UserDetailsSerializer):
    profile_id = serializers.ReadOnlyField(source='profile.id')
    profile_avatar = serializers.ReadOnlyField(source='profile.avatar.url')


    class Meta(UserDetailsSerializer.Meta):
        fields = UserDetailsSerializer.Meta.fields + (
            'profile_id', 'profile_avatar'
        )
