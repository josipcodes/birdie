from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Profile
from .serializers import ProfileSerializer

# views were built based off of DRF_API lessons, but have been modified
class ListProfiles(APIView):
    """
    List all profiles/create profile
    """
    def get (self, request):
        all_profiles = Profile.objects.all()
        serializer = ProfileSerializer(all_profiles, many=True)
        return Response(serializer.data)


class SpecificProfile(APIView):
    def get_object(self, pk):
        """
        Function returns a profile or 404
        """
        try:
            profile = Profile.objects.get(pk=pk)
            return profile
        # signal specific profile does not exist
        except Profile.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        profile = self.get_object(pk)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)