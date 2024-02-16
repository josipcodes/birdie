from django.db import IntegrityError
from rest_framework import serializers
from .models import Like

# serializer copied from drf_api with minor modification
class LikeSerializer(serializers.ModelSerializer):
    """
    SerializerMethodField is read only. It gets its value by calling the method with a name get_fieldname.
    Serializer for the Like model.
    The create method handles the unique constraint on 'owner' and 'post'
    """
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Like
        fields = [
            'id',
            'owner',
            'post',
            'created',
        ]
    
    def create(self, validated_data):
        """
        Like validation
        """
        try:
            # create method is on the ModelSerializer, that's why we call super()
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError({
                'detail': 'most likely a duplicate'
            })

