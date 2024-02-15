from rest_framework import serializers
from .models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    # read-only field, gets value from get_is_owner
    is_owner = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return obj.owner = request.user

    class Meta:
        model = Profile
        fields = [
            'id',
            'owner',
            'bio',
            'name',
            'created',
            'modified',
            'avatar'
        ]